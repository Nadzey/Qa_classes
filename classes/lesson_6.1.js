// let num = 10;

// function count() {
//     num++;
//     console.log(num)
//}

// function sum(num1, num2, operator) {
//     switch(operator) {
//         case '+': 
//            return num1 + num2;
         
//         case '-':
//             return num1 - num2;
            
//     }
    
// }
// console.log(sum(10, 20, '-'))
//////////////////////////////////////////
function sum1() {
let sum1 = 0;
for (let i = 0; i < arguments.length; i++) {
    sum1 += arguments[i];
}
    return sum1;   
}
console.log(sum1(10, 1, 1, 12, 12, 4))
////////////////////////////////////rabotaet kak s massivom////////
let arr = [1, 2, 23, 4, 5, 6]
let result = sum1(...arr) //////////////////////spred operrator, pervodit massive v posledovatelnost chisel
console.log(result)

////////////////////////////////////strelochnaia function

const newSum = (num1, num2) => num1 + num2;

console.log(newSum(10, 29))

function getPow (num) {
    return num ** 2; ///////////////vozveli vo vtoruu stepen

}
const newGetPow = num => num ** 2;

console.log(getPow(10));
console.log(newGetPow(10))