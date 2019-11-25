//CLASS OF PIZZA

function Pizza(pizzaName, ingredientsObj) {
    this._name = pizzaName;
    this.ingredients = ingredientsObj;
    this._pizzaSize = config.defaultPizzaMinSize;
}

Pizza.prototype.pizzaSize = function (size) {
    if (!arguments.length) {
        return this._pizzaSize;
    }

    if (size > config.defaultPizzaMaxSize || size < config.defaultPizzaMinSize) {
        throw new Error('Pizza has unacceptable size. The size should be between ' + config.defaultPizzaMinSize + ' and ' + config.defaultPizzaMaxSize + ' cm');
    } else {
        this._pizzaSize = size;
    }
};

Pizza.prototype.toString = function () {
    var message = 'Pizza name: ' + this._name + '\n' +
        'Size: ' + this._pizzaSize + ' cm' + '\n' +
        this.ingredients.toString();

    return message;
};


// CLASS OF SQUARE PIZZA

function SquarePizza(pizzaName, ingredientsObj) {
    Pizza.apply(this, arguments);
}

SquarePizza.prototype = Object.create(Pizza.prototype);
SquarePizza.prototype.constructor = SquarePizza;

//---------- AS OPTION 2
// SquarePizza.prototype = new Pizza();

// ---------- AS OPTION 3
// function inherit(Child, Parent) {
//   var F = function () {};
//   F.prototype = Parent.prototype;
//   Child.prototype = new F();
//   Child.uber = Parent.prototype;
//   Child.prototype.constructor = Child;
// }
//
// inherit(SquarePizza, Pizza);

SquarePizza.prototype.calculatePizzaArea = function (size) {
    var size = size || this._pizzaSize;

    return Math.pow(size, 2);
};


// CLASS OF ROUND PIZZA

function RoundPizza(pizzaName, ingredientsObj) {
    Pizza.apply(this, arguments);
}

RoundPizza.prototype = Object.create(Pizza.prototype);
RoundPizza.prototype.constructor = RoundPizza;

RoundPizza.prototype.calculatePizzaArea = function (size) {
    var size = size || this._pizzaSize;

    return Math.pow((size / 2), 2) * Math.PI;
};