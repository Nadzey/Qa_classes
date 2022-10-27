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
///////////////////////////////////////////while
let i = 1000;
while (i > 1) {
    console.log(i)
    i /= 2;
}
/////////////////////////////////////do while
// do {
// console.log('Hello world!');
// i++
// }
// while (i < 25) {
    
// }

/////////////////////////////////////////////////////////////////factorial
let n = 5;
function factorial(n){
    
if (n < 0) 
    console.log(-1);
    
  else if (n == 0) 
    console.log(1);
   
    else {
    console.log(n * factorial(n - 1))            
    }
}
factorial(5);

/////////////////////////////////////////////////////вариант с for factorial
if (n === 0 || n === 1)
console.log(1);
for (let i = n - 1; i >= 1; i--) {
n *= i;
}
console.log(n);

