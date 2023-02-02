///////////////////////////opredelenie massive
//function code (arr){
//return arr ? arr.length : 'No array'
//1//return arr == null ? -1 : arr.length
     
//2//return !arr ? -1 : arr.length
    //________true__if___else false
//3//return Array.isArray(arr)
 //4// toze cherez if and else  

// if (arr == null){
//     return -1;
// }
// else {
//     return arr.length
// }
// }
// console.log(code([-1, 'y', null]))
//1. arr == null
//2. !arr
//3. Array.isArray(arr) /////boolevaia logic true or false

////////////////////////////////////sorting masive ot minim
//let arr1 = [10, 2, 4, 67, 97, 139, 3, 90, -1, 2]
//           10, 2
//             2, 10
//              2, 4 ........
//           [2, 10, 4......]
//              10, 4
//               4, 10
//               [2, 4, 10........]
//// 2 is minimum sravnivaem vsie s 2 buble sorting
// for(let i = 0; i < arr1.length - 1; i++){     //////////////////
// for(let j = i + 1; j < arr1.length; j++){
//     if(arr1[i] > arr1[j]){  /////////esli hotim pomeniat ot menshego k bolshemu pomeniaj na <
//         let temp = arr1[i];
//         arr1[i] = arr1[j];
//         arr1[j] = temp;
//     }
// }
// }
// console.log(arr1)

// ////////////////////////////////////////////////nahodim 2 max znachenia
// console.log(arr1.length)
// console.log(arr1[arr1.length - 1]) /////////// vyvodim posledniu 
// console.log(arr1[arr1.length - 2]) /////////// vyvodim pred poslednuu 
// console.log(arr1[0])////////////////////////// vyvodim 1 chislo

// const arr = [1, 2, 3, 4, 5, 6, 9];
// //console.log(arr[arr.length-2])
// //console.log(arr.at(-2)) //////////////////////// тоже самое что и в строке 2, обращаемся с конца
// let newArr = [];
// let index = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//      newArr[index++] = arr[i]   
//     }
//     if (arr[i] == 9){
//         break;
//     }
// }
// console.log(newArr); 

//////////////////////////////////////////// massive
// const fruits = ['apple', 'pears', 'plums', 'grape']
// let index = 0;
// while (index < fruits.length){
//     console.log(fruits[index])
//     index++
// }

////////////////////////////////////////kak dostat element iz vlozennogo massive
// let arr = [1, ['a', 'b', [5, 7]], 3, 'Hello_world']
// ////////// 0  _____1____________   2    3
// //////////       0    1  ___2___       01234 
// //////////                0   1 
// console.log(arr[3][5]) ////// dobiraemsia do nuznogo element
// console.log(typeof arr[3])
// ////////////////////////////////proverka na pustoi massive
// let arr2 = [];
// if (arr2.length == 0){
//     console.log("it's empty")
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
///////////////////////////new test