console.log('--------- PROTOTYPE STYLE ----------');

var consolePrinter = new ConsolePrinter();
var domPrinter = new DomPrinter();

var mozzarella = new Ingredient('mozzarella', 0.2);

console.log('***** ingredients testing');

var ingredientsForCaprichosa = new Ingredients(mozzarella, new Ingredient('ham', 0.3), new Ingredient('mushrooms', 0.25), new Ingredient('tomato sauce', 0.05), new Ingredient('tomatoes', 0.15));
var ingredientsForPepperoni = new Ingredients(new Ingredient('mozzarella', 0.3), new Ingredient('pepperoni', 0.35), new Ingredient('tomato sauce', 0.1));

consolePrinter.print(ingredientsForCaprichosa);

console.log('***** delete mozzarella');
ingredientsForCaprichosa.deleteIngredient(mozzarella);
consolePrinter.print(ingredientsForCaprichosa);

console.log('***** add mozzarella');
ingredientsForCaprichosa.addIngredient(mozzarella);
consolePrinter.print(ingredientsForCaprichosa);

console.log('***** add mozzarella again - Error');
// ingredientsForCaprichosa.addIngredient(mozzarella);

console.log('***** pizza factory and pizza manager testing');

var pizzaFactory = new PizzaFactory();
var pizzaManager = new PizzaManager();

var caprichosaSquare = pizzaFactory.getNewPizza('square', 'Caprichosa Square', ingredientsForCaprichosa);
var caprichosaRound = pizzaFactory.getNewPizza('ROUND', 'Caprichosa Round', ingredientsForCaprichosa);

var pepperoniSquare = pizzaFactory.getNewPizza('Square', 'Pepperoni Square', ingredientsForPepperoni);
var pepperoniRound = pizzaFactory.getNewPizza('roUnd', 'Pepperoni Round', ingredientsForPepperoni);


consolePrinter.print(caprichosaSquare);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(caprichosaSquare));
consolePrinter.print(caprichosaRound);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(caprichosaRound));
consolePrinter.print(pepperoniSquare);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(pepperoniSquare));
consolePrinter.print(pepperoniRound);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(pepperoniRound));

console.log('***** delete ingredient + change size');
ingredientsForPepperoni.deleteIngredient(mozzarella);
pepperoniRound.pizzaSize(45);
consolePrinter.print(pepperoniRound);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(caprichosaRound));

console.log('***** + change margin to 50%');
console.log('Price: ' + pizzaManager.calculatePizzaPrice(caprichosaRound, 50));

console.log('***** set unacceptable pizza size - error');
// pepperoniRound.pizzaSize(80);

domPrinter.print(caprichosaSquare);
domPrinter.print(caprichosaRound);
domPrinter.print(pepperoniSquare);
domPrinter.print(pepperoniRound);
