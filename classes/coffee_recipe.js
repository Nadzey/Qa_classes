
// Data: cup, coffee, sugar, boiling water, spoon
// Make a cup of cofee
// 1. put one teaspoon of coffee into a cup;
// 2. put boiling woter into a cup;
// 3. put sugar into a cup;
// 4. stir coffee in a cup with a spoon;


 let almondMilk = 'almond milk'
 let coconatMilk = 'coconat milk'
 let cinamon = 'cinamon'
 let sweetner = 'sugar'
 let volumeOfsweetner = 1
 let volumeOfCoffee = 2
 let volumeOfWater = 100
 let coffeeWithAlmondMilk = 'Cappuchino with almond milk'
 let coffeeWithCoconatMilk = 'Mocachino with coconat milk'
 let coffeeWithCinamon = 'Black coffee'
 let topping
 let coffee
 let price = 10
 let isReady = true;
 let ask = prompt('Would you like to order?')
 while(ask != 'yes'){
  ask = prompt('Would you like to order?')
 }
 let askTopping = prompt('Choose from bellow toopings: almond milk - 1, coconat milk - 2, cinamon - 3')
 
 if (askTopping == 1) {
  topping = almondMilk
  coffee = coffeeWithAlmondMilk
 }
 else if (askTopping == 2) {
  topping = coconatMilk
  coffee = coffeeWithCoconatMilk
 }
 else if (askTopping == 3) {
  topping = cinamon
  coffee = coffeeWithCinamon
 }
 else {
  ask = prompt('Please, enter a valid answer again\n')
 }
//  if (isReady == true){

//  if (topping == coconatMilk){
//   coffee = coffeeWithCoconatMilk
//  }
//  else if (topping == almondMilk){
//   coffee = coffeeWithAlmondMilk
//  }
// else {coffee = coffeeWithCinamon
//       }


let recipe = `Recipe a cup of ${coffee} <br> <br>`

let st1 = `1. put ${volumeOfCoffee} teaspoon of coffee into a cup <br>`
let st2 = `2. put ${volumeOfWater} ml boiling water into a cup <br>`
let st3 = `3. put ${volumeOfsweetner} teaspoon of ${sweetner} into a cup <br>`
let st4 = '4. stir coffee and sugar in a cup with a spoon <br>'
let st5 = `5. add ${topping} into a cup <br> <br>`
let result = 'Your coffee is ready! <br>'

document.write(recipe + "<br>" + st1 + "<br>" + st2 + "<br>" + st3 + "<br>" + st4 + "<br>" + st5 + "<br>" + result)
//   if (topping == coconatMilk){
//     price *=1.5
//   }
//   else if (topping == almondMilk){
//     price *=2
//   }
//   else (price)
// let priceSee = `Price ${price} $ Thank you!`
//   document.write(recipe, st1, st2, st3, st4, st5, result, priceSee)
// }
// else if (isReady == false){
//   document.write('Please waite 5 more minutes')
// }
// else {
//   document.write('I do not know what going on there')
//  }

if (topping == almondMilk) {document.write('Order price is: $' + price * 1.5)}
else if (topping == coconatMilk) {document.write ('Order price is: $' + price * 1.2)}
else {document.write ('Order price is: $' + price)}
