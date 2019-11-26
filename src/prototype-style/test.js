console.log('--------- PROTOTYPE STYLE ----------');

var consolePrinter = new ConsolePrinter();
var domPrinter = new DomPrinter();

var mozzarella = new Ingredient('mozzarella', 0.2);

console.log('***** ingredients testing');

var ingredientsForCaprichosa20Cm = new Ingredients(mozzarella, new Ingredient('ham', 0.3), new Ingredient('mushrooms', 0.25), new Ingredient('tomatoSauce', 0.05),
  new Ingredient('tomatoes', 0.15));
var ingredientsForPepperoni45Cm = new Ingredients(new Ingredient('mozzarella', 0.3), new Ingredient('pepperoni', 0.25), new Ingredient('tomatoSauce', 0.15));
var ingredientsForPepperoni32Cm = new Ingredients(new Ingredient('mozzarella', 0.26), new Ingredient('pepperoni', 0.21), new Ingredient('tomatoSauce', 0.12));

consolePrinter.print(ingredientsForCaprichosa20Cm);

console.log('***** delete mozzarella');
ingredientsForCaprichosa20Cm.deleteIngredient(mozzarella);
consolePrinter.print(ingredientsForCaprichosa20Cm);

console.log('***** add mozzarella');
ingredientsForCaprichosa20Cm.addIngredient(mozzarella);
consolePrinter.print(ingredientsForCaprichosa20Cm);

console.log('***** add mozzarella again - Error');
// ingredientsForCaprichosa20Cm.addIngredient(mozzarella);

console.log('***** pizza factory and pizza manager testing');

var pizzaFactory = new PizzaFactory();
var pizzaManager = new PizzaManager();

var caprichosa20CmSquare = pizzaFactory.getNewPizza('square', 'Caprichosa Square 20', ingredientsForCaprichosa20Cm);
caprichosa20CmSquare.pizzaSize(20);
var caprichosa20CmRound = pizzaFactory.getNewPizza('ROUND', 'Caprichosa Round 20', ingredientsForCaprichosa20Cm);
caprichosa20CmRound.pizzaSize(20);
var pepperoni45CmSquare = pizzaFactory.getNewPizza('Square', 'Pepperoni Square 45', ingredientsForPepperoni45Cm);
pepperoni45CmSquare.pizzaSize(45);
var pepperoni45CmRound = pizzaFactory.getNewPizza('roUnd', 'Pepperoni Round 45', ingredientsForPepperoni45Cm);
pepperoni45CmRound.pizzaSize(45);
var pepperoni32CmRound = pizzaFactory.getNewPizza('roUnd', 'Pepperoni Round 32', ingredientsForPepperoni32Cm);
pepperoni32CmRound.pizzaSize(32);

consolePrinter.print(caprichosa20CmSquare);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(caprichosa20CmSquare));
consolePrinter.print(caprichosa20CmRound);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(caprichosa20CmRound));
consolePrinter.print(pepperoni45CmSquare);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(pepperoni45CmSquare));
consolePrinter.print(pepperoni45CmRound);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(pepperoni45CmRound));
consolePrinter.print(pepperoni32CmRound);
console.log('Price: ' + pizzaManager.calculatePizzaPrice(pepperoni32CmRound));

console.log('***** change margin to 50% for Pepperoni Round 32 cm');
console.log('Price: ' + pizzaManager.calculatePizzaPrice(pepperoni32CmRound, 50));

console.log('***** set unacceptable pizza size - error');
// pepperoni45CmRound.pizzaSize(80);

domPrinter.print(caprichosa20CmSquare);
domPrinter.print(caprichosa20CmRound);
domPrinter.print(pepperoni45CmSquare);
domPrinter.print(pepperoni45CmRound);
domPrinter.print(pepperoni32CmRound);

