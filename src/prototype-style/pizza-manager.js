function PizzaManager() {
    this._doughСostPerSqСm = config.doughСostPerSqСm;
    this._pizza;
    this._margin = config.defaultMargin;
}

PizzaManager.prototype._calculateDoughCosts = function () {
    return this._pizza.calculatePizzaArea(this._pizza.pizzaSize()) * this._doughСostPerSqСm;
};

PizzaManager.prototype._calculateIndredientsTotalCosts = function () {
    var ingrTotalCosts = 0;
    var ingredientsList = this._pizza.ingredients.getIngredients();

    for (var key in ingredientsList) {
        ingrTotalCosts += ingredientsList[key];
    }

    return ingrTotalCosts;
};

PizzaManager.prototype._calculateIngrCostsPerPizza = function () {
    return (this._calculateIndredientsTotalCosts() / this._pizza.calculatePizzaArea(this._pizza.pizzaMaxSize())) * this._pizza.calculatePizzaArea(this._pizza.pizzaSize());
};

PizzaManager.prototype.calculatePizzaPrice = function (pizza, margin) {
    this._pizza = pizza;

    var isFiniteNumber = typeof margin == 'number' && !Number.isNaN(margin) && isFinite(margin);

    this._margin = isFiniteNumber ? margin : this._margin;

    var pizzaPrice = (this._calculateIngrCostsPerPizza() + this._calculateDoughCosts()) * (1 + this._margin / 100);

    return +pizzaPrice.toFixed(2);
};
