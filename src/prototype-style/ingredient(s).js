// CLASS OF INGREDIENT

function Ingredient(ingredientName, quantity) {
    this.name = ingredientName;
    this.quantity = quantity;
}


//CLASS OF INGREDIENTS

function Ingredients(ingredients) {
    this.ingredients = Array.from(arguments);
}

Ingredients.prototype.getIngredients = function () {
    var ingredientsObj = {};

    this.ingredients.forEach(function (value) {
        ingredientsObj[value.name] = value.quantity;

        return ingredientsObj;
    });

    return ingredientsObj;
};

Ingredients.prototype.addIngredient = function (ingredientToAdd) {
    if (!(ingredientToAdd instanceof Ingredient)) {
        throw new Error('The method accepts objects of Ingredient class or inherited from it');
    }

    if (this.ingredients.find(function (value) {
            return value.name === ingredientToAdd.name;
        })) {
        throw new Error('Ingredients already contain the ingredient with such name');
    }

    this.ingredients.push(ingredientToAdd);
};

Ingredients.prototype.deleteIngredient = function (ingredientToDelete) {
    if (ingredientToDelete instanceof Ingredient) {
        this.ingredients = this.ingredients.filter(function (value) {
            return value.name !== ingredientToDelete.name;
        });
    } else {
        throw new Error('The method accepts objects of Ingredient class or inherited from it');
    }
};

Ingredients.prototype.toString = function () {
    var message = 'Ingredients: ' + this.ingredients.map(function (value) {
        return value.name;
    }).join(', ');

    return message;
};