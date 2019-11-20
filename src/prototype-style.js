// ----- PROTOTYPE OOP -----

function RoundPizza(pizzaName, doughСostPerSqСm, ingredientsCosts, margin) {
  this._name = pizzaName;
  this._doughСostPerSqСm = doughСostPerSqСm;
  this._ingredientsCosts = ingredientsCosts;
  this._marginPersant = margin;
  this._pizzaMaxSize = 70;
  this._pizzaMinSize = 15;
  this._pizzaSize = this._pizzaMinSize;
}

RoundPizza.prototype.pizzaMaxSize = function (size) {
  if (!arguments.length) {
    return this._pizzaMaxSize + ' cm';
  }
  if (size > 70 || size < this._pizzaMinSize) {
    console.log('Unacceptable max size. The size should be between ' + this._pizzaMinSize + ' and 70 cm');
  } else {
    this._pizzaMaxSize = size;
  }
};

RoundPizza.prototype.pizzaMinSize = function (size) {
  if (!arguments.length) {
    return this._pizzaMinSize + ' cm';
  }

  if (size > this._pizzaMaxSize || size < 15) {
    console.log('Unacceptable max size. The size should be between 15 and ' + this._pizzaMaxSize + ' cm');
  } else {
    this._pizzaMinSize = size;
  }
};

RoundPizza.prototype.pizzaSize = function (size) {
  if (!arguments.length) {
    return this._pizzaSize + ' cm';
  }

  if (size > this._pizzaMaxSize || size < this._pizzaMinSize) {
    console.log('Pizza has unacceptable size. The size should be between ' + this._pizzaMinSize + ' and ' + this._pizzaMaxSize + ' cm');
  } else {
    this._pizzaSize = size;
  }
};

RoundPizza.prototype._calculateDoughArea = function (size) {
  return Math.pow((size / 2), 2) * Math.PI;
};

RoundPizza.prototype._calculateDoughCosts = function () {
  return this._calculateDoughArea(this._pizzaSize) * this._doughСostPerSqСm;
};

RoundPizza.prototype._calculateIndredientsTotalCosts = function () {
  var ingrTotalCosts = 0;

  for (var key in this._ingredientsCosts) {
    ingrTotalCosts += this._ingredientsCosts[key];
  }

  return ingrTotalCosts;
}

RoundPizza.prototype._calculateIngrCostsPerPizza = function () {
  return (this._calculateIndredientsTotalCosts() / this._calculateDoughArea(this._pizzaMaxSize)) * this._calculateDoughArea(this._pizzaSize);
};

RoundPizza.prototype.calculatePizzaPrice = function () {
  return (this._calculateDoughCosts() + this._calculateIngrCostsPerPizza()) * (1 + this._marginPersant / 100);
};

RoundPizza.prototype.showPizzaInfo = function () {
  var message = 'Pizza name: ' + this._name + '\n' +
    'Size: ' + this._pizzaSize + ' cm' + '\n' +
    'Price: ' + this.calculatePizzaPrice().toFixed(2) + ' BYN';

  console.log(message);
};


//CHILD CLASS

function SquarePizza(pizzaName, doughСostPerSqСm, ingredientsCosts, margin) {
  RoundPizza.apply(this, arguments);
}

SquarePizza.prototype = Object.create(RoundPizza.prototype);
SquarePizza.prototype.constructor = SquarePizza;


// ---------- AS OPTION 1
// SquarePizza.prototype = new RoundPizza();

// ---------- AS OPTION 2
// function inherit(Child, Parent) {
//   var F = function () {};
//   F.prototype = Parent.prototype;
//   Child.prototype = new F();
//   Child.uber = Parent.prototype;
//   Child.prototype.constructor = Child;
// }

// inherit(SquarePizza, RoundPizza);

//REDEFINING THE METHOD

SquarePizza.prototype._calculateDoughArea = function (size) {
  return Math.pow(size, 2);
};


//SAMPLES

var ingredientsForMargarita = {
  sause: 2,
  mozzarella: 4,
  garlicOil: 1,
  spice: 1,
};


var ingredientsForPepperoni = {
  sause: 2,
  mozzarella: 4,
  peperoni: 6,
  chiliPepper: 0.2,
  ham: 6,
  pepperoniPepper: 0.2,
  spice: 0.2,
};

console.log('------------- PROTOTYPE OOP -----------------');

console.log('ROUND PIZZA');

var margaritaRound = new RoundPizza('Margarita Round', 0.01, ingredientsForMargarita, 30),
  pepperoniRound = new RoundPizza('Pepperoni Round', 0.01, ingredientsForPepperoni, 20);

margaritaRound.pizzaSize(10);
margaritaRound.pizzaSize(80);

margaritaRound.pizzaSize(45);
console.log(margaritaRound.pizzaSize());
margaritaRound.showPizzaInfo();

margaritaRound.pizzaSize(20);
console.log(margaritaRound.pizzaSize());
margaritaRound.showPizzaInfo();

pepperoniRound.pizzaSize(45);
console.log(pepperoniRound.pizzaSize());
pepperoniRound.showPizzaInfo();

pepperoniRound.pizzaSize(20);
console.log(pepperoniRound.pizzaSize());
pepperoniRound.showPizzaInfo();


console.log('SQUARE PIZZA');

var margaritaSquare = new SquarePizza('Margarita Square', 0.01, ingredientsForMargarita, 30),
  pepperoniSquare = new SquarePizza('Pepperoni Square', 0.01, ingredientsForPepperoni, 20);

margaritaSquare.pizzaSize(45);
console.log(margaritaSquare.pizzaSize());
margaritaSquare.showPizzaInfo();

margaritaSquare.pizzaSize(20);
console.log(margaritaSquare.pizzaSize());
margaritaSquare.showPizzaInfo();

pepperoniSquare.pizzaSize(45);
console.log(pepperoniSquare.pizzaSize());
pepperoniSquare.showPizzaInfo();

pepperoniSquare.pizzaSize(20);
console.log(pepperoniSquare.pizzaSize());
pepperoniSquare.showPizzaInfo();