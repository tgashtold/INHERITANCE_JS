function PizzaFactory() {
    this._squarePizzaConstructor = SquarePizza;
    this._roundPizzaConstructor = RoundPizza;
}

PizzaFactory.prototype.getNewPizza = function (pizzaShape, pizzaName, ingredients) {
    if (/round/i.test(pizzaShape)) {
        return new this._roundPizzaConstructor(pizzaName, ingredients);
    } else if (/square/i.test(pizzaShape)) {
        return new this._squarePizzaConstructor(pizzaName, ingredients);
    } else {
        throw new Error('First parameter must refer to pizza shape: round or square');
    }
};

//OPTION 2 FOR FACTORY

// function PizzaFactory(pizzaConstructor) {
//   this._pizzaConstructor = pizzaConstructor;
// }
//
// PizzaFactory.prototype.getNewPizza = function (pizzaName, ingredients) {
//   return new this._pizzaConstructor(pizzaName, ingredients);
// };
