///////////////////////////////////for (начало, условия, шаг)

/*for (let i = 0; i < 3; i++){
    console.log(i)
}*/

/*let str = 'Hello';
let newStr = ' ';
for(let i = 1; i <= 7; i++){
   newStr = str + newStr;
    
}
console.log(str + newStr)  */
/*let sum = 0;
for (let i = 1; i <= 10; i++) {
sum = sum + i;
console.log(sum);
}*/
/*let num = 5;
let result = 1;
for(let i = 1; i <= 3; i++){
    result = result * num;
    console.log(result)
}*/
// array - массив
//let arr = [1, 2, 3, 4, 5, 6, 7, 'assa'];
// index     0, 1, 2, 3, 4, 5
//or                -3  -2 -1
//console.log(arr.length) // всего элементов
//console.log(arr[7])// вывод элемента по индексы
//console.log(arr[arr.length -2]) // вывод последнего элемента
//console.log(arr.at (-1)) // метод at тоже что и вывод последнего элемента через lenght
// 
// let str = 'JavaScript';
// // for (let i = 0; i < str.length; i++){
// //     console.log(str[i])
// // }
// let news = '';
// let a = 0;
// for (let i = 0; i < str.length; i++){
//     news = news + str[i] + ' ';
//     if (str[i] == 'a'){
         
//         a++
        
//     }
// }
// if (a > 0){
//     console.log('a is in array');  
// }
// else{
//     console.log('a is not in array');   
// }
// console.log(a);
// console.log(news);
// let x = 'Palindrome';
// let str2 = '';
// for (let i = x.length - 1; i >= 0; i--){
//     str2 = str2 + x[i];
//     console.log(str2);  
// }
// console.log(typeof str2); 
// let number = [1, 2, 3, 4, 5];
// let tex = '';
// // for (let x in number){   //сам делает инкремент вместо i++ for in
// //     tex += number[x] + ',';
// //     console.log(tex);
// // }
// ////////////////////////////////// цикл while
// let arr1 = [9, 2, 3, null, "string"];
// // let newNum = 0;
// // console.log(arr1[arr1.length -1]);
// // while (newNum <= arr1.length-1) { //можно оставить только меньше, тогда нужно убрать -1. length -1 это обращение у последнему элементу

// //     console.log(newNum, ' ', arr1[newNum]);
// //     newNum++;
// // }
// // console.log(newNum);
// // console.log('End');
// // циклы do while
// let index =0
// // do {
// //     console.log(i);
// //     i++;
// // }
// // while(i < 10)
// //////////////////////////цикл for, разница с while
// while (index < arr1.length)
// {
//     console.log(arr1[index]);
//     index++;
// }
// console.log('*********');
// for (let i = 0; i < arr1.length; i++){
//     console.log(arr1[i]);
// }
////////////////////////////////// находим сумму в массиве
let arr2 = [1, -4, 101, -12, 102, 0, -122, 109, 330, 35, 45, 0];
let sum = 0;
// for (let i = 0; i < arr2.length; i++){
//     sum += arr2[i];   
// }
// console.log(sum);
///////////////////////// находим сумму четных чисел в массиве
// for (let i = 0; i < arr2.length; i++){
//     if (arr2[i] % 2 == 0) { //проверяем четное ли число
//     sum += arr2[i];
//     }   
// }
// console.log(sum); 

// // проверка на отрицательные в массиве

// for (let i = 0; i < arr2.length; i++){
//     if (arr2[i] < 0) { 
//         console.log('Это отрицательное число', arr2[i]);  
//     }  
//     else {
// console.log('Это положительное число', arr2[i])
//     } 
// }
// // проверка на четные - отрицательные или ноль в массиве

// for (let i = 0; i < arr2.length; i++){
//     if (arr2[i] % 2 == 0) {
//         if (arr2[i] < 0) { 
//             console.log('Это отрицательное число', arr2[i]);  
//     }  
//         else if (arr2[i] > 0)
//         {
//              console.log('Это положительное число', arr2[i])
//     } 
//     else {
//         console.log('Это ', arr2[i])
//     }
// }
// } 
// проверка на максимальное число в массиве
// 
// let max = arr2[0];
// for (let i = 0; i < arr2.length; i++){
//     if (arr2[i] > max) {
//     max = arr2[i]   
//     }
// }
// console.log('Это максимальноечисло', max)

// проверка на минимальное число
// let min = arr2[0];
// for (let i = 0; i < arr2.length; i++){
//     if (arr2[i] < min) {
//     min = arr2[i]   
//     }
// }
// console.log('Это минимальное число', min)
//////////////////////////рaбота со строками, проверка на количество одинаковых букв
let str = 'Hello world!';
//let letter = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'l') {
//      letter++   
//     }
// }
// console.log(letter)
///////////////////////////////////циклы for in and for of
let letterSumm = 0;

for (let letter of str) {
    if (letter == '!') {
     letter++   
    }
}
console.log(letterSumm)

let fruits = ['apple', 'plum', 'orange'];
for (let fruit of fruits) {
    if (fruit == 'plum') {
        console.log('exist') 
    }
}
