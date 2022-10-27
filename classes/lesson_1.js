/* 1.1 Объявите две переменные: firstName и lastName.
 1.2 Запишите строку “John”в переменную firstName и строку “Adams”  в переменную lastName.
  1.3 Выведите на экран значение firstName и lastName (должно показать John Adams).
  1.4 Используйте те же переменные firstName и lastName для того, чтобы вывести новое значение (Anna Karenina).
В итоге на экране должно быть две строки:
John Adams
Anna Karenina

let firstName = 'John';
let lastName = 'Adams';
console.log(firstName + ' ' + lastName);
document.write(firstName + ' ' + lastName + '<br>');
firstName = 'Anna';
lastName = 'Karenina'
console.log(firstName + ' ' + lastName);
document.write(firstName + ' ' + lastName)

Data: cup, coffee, sugar, boiling water, spoon
Make a cup of cofee
1. put one teaspoon of coffee into a cup;
2. put boiling woter into a cup;
3. put sugar into a cup;
4. stir coffee in a cup with a spoon

const cupOfCoffee = '<br> <br> Make a cup of cofee'
let a = 1;
let b = 2;
let volume = 100;
let firstStep = `<br> 1. put ${a} teaspoon of coffee into a cup;`
let secondStep = `<br> 2. put ${volume} ml boiling water into a cup;`
let thirdStep = `<br> 3. put ${b} teaspoon of sugar into a cup;`
let forthStep = '<br> 4. stir coffee and sugar in a cup with a spoon;'
document.write(cupOfCoffee, firstStep, secondStep, thirdStep, forthStep) */