// CLASS OF INGREDIENT

function Ingredient(ingredientName, quantityForMaxSizePizza) {
    this.name = ingredientName;
    this.quantity = quantityForMaxSizePizza;
    this.price = this._getPrice();
}

Ingredient.prototype._getPrice = function () {
    var ingredientPrice = config.ingredientsPrice[this.name];

    if (!ingredientPrice) {
        throw Error('Please use ingredient name that is used in database or add the price of the ingredient in the database');
    }

    return ingredientPrice;
};

Ingredient.prototype.getCost = function () {
    var ingredientCost = this.quantity * this.price;

    return ingredientCost;
};


//CLASS OF INGREDIENTS

function Ingredients(ingredients) {
    this.ingredients = Array.from(arguments);
}

Ingredients.prototype.getIngredients = function () {
    var ingredientsObj = {};

    this.ingredients.forEach(function (value) {
        ingredientsObj[value.name] = value.getCost();

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
