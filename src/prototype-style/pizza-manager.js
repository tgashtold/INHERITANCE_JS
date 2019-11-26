function PizzaManager() {
    this._priceDigitsNumberAfterComma = 2;
}

PizzaManager.prototype._calculateDoughCosts = function (pizza) {
    var currentPizza = pizza;

    return currentPizza.calculatePizzaArea(currentPizza.pizzaSize()) * config.doughСostPerSqСm;
};

PizzaManager.prototype._calculateIndredientsTotalCosts = function (pizza) {
    var ingrTotalCosts = 0;
    var currentPizza = pizza;
    var ingredientsList = currentPizza.ingredients.getIngredients();

    for (var key in ingredientsList) {
        var ingredientPrice = config.ingredientsPrice[key];

        if (ingredientPrice) {
            ingrTotalCosts += ingredientsList[key] * ingredientPrice;
        } else {
            throw Error('Please use ingredient name that presents in database or add the price of the ingredient in the database');
        }
    }

    return ingrTotalCosts;
};

PizzaManager.prototype._calculateMarginCoef = function (margin) {
    var marginCoef = 1 + margin / 100;

    return marginCoef;
};

PizzaManager.prototype.calculatePizzaPrice = function (pizza, margin) {
    var currentPizza;

    if (pizza instanceof Pizza) {
        currentPizza = pizza;
    } else {
        throw Error('The method accepts objects of Pizza class or inherited from it');
    }

    var isFiniteNumber = typeof margin == 'number' && !Number.isNaN(margin) && isFinite(margin);
    var pizzaMargin = isFiniteNumber 
        ? margin  
        : config.defaultMargin;
    var pizzaPrice = (this._calculateIndredientsTotalCosts(currentPizza) + this._calculateDoughCosts(currentPizza)) * this._calculateMarginCoef(pizzaMargin);

    return +pizzaPrice.toFixed(this._priceDigitsNumberAfterComma);
};