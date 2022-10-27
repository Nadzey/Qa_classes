//////////////////////////////////последовательность натуральных чисел

//let n = 17;
// for (let i = 2; i <= n; i++){
// let flag = true;
// for (let k = 2; k < i; k++){
//     if (i % k == 0){
//         flag = false;
//     }
// }
// if (flag == true){
// console.log(i)
// }
// }
// nextPrime: // создали метку
// for (let i = 2; i <= n; i++){
//     for (let k = 2; k < i; k++){
//     if (i % k == 0){
// continue nextPrime;
//     }
// }
// console.log(i);
// }
// ? замена условия if else
// let num = 5;
// if (num == 3){
//     console.log('Three')
// }
// else if (num == 5){
//     console.log('Five')
// }
// else {
//     'Somting else'
// }

// // нужно заменить сроки 26 -31 используя ? - означает что делать при  истинном значении (тенарный оператор)
// console.log(num == 3 ? 'Three' : num == 5 ? 'Five' : 'Somting else')
// сложение двух одинаковых массивов
// let arr = [1, 3, 5, 7, 9, 11, 90, 13];
// let arr1 = [3, 4, 6, -1, 3, -10, 87, 17];
//let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i] + arr1[i];
// }
// console.log(sum)
/////////////////////////////////////////////// сложение двух массивов разной длинны
// let arr2 = [1, 2, 10, -5, 7, 25, 100, 98, 15];
// let arr3 = [25, 56, 1, 25, 7, 78, 98];
// let sum1 = 0;
// for (let i = 0; i < arr2.length + arr3.lenght; i++) {
//     if (i < arr2.length) {
//     sum1 += arr2[i];
//     console.log(sum1, ' ', arr2[i]);
//     } else {
//     sum1 += arr3[i - arr2.length];
//     console.log(sum1, ' ', arr1[i - arr2.length]);
//     }
// }
// console.log(sum1);

// деление на 0 else if (operation === "/") { result = (num2 === 0 ? null : num1 / num2); }
// простой калькулятор
let num1 = 0;
let operation = "/"; 
let num2 = 10;
let result = null;
    if (operation === "+"){
    result = num1 + num2
    }
    else if (operation === "-"){
    result = num1 - num2
    }
      else if (operation === "/") {
    result = (num2 === 0 ? null : num1 / num2);
    }
      else if (operation === "*"){
    result = num1 * num2
    }
      console.log(result)
    
