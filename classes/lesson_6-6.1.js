///////////////////////////////////function declaration

// function print(a, b){
// return a * b
// }
// console.log(print(1, 7))

// //////////////////////////////////function expression

// let hello = function(name) {
//     console.log("Hi, " + name) 
// }
// hello("Nadia")
// ///////////////////////////////////////////////////arrow function
// let sum = (a, b) => a + b;
// console.log(sum(3, 9))

// ////////////////////////////////////////////преобразуем в строку с переменными
// let sum1 = (a, b) => `Your numbers are: ${a}, ${b} and sum ` + (a + b);
// console.log(sum1(3, 9))

/////////////////////////////////////////sten 6.1

// console.log("1")
// console.log("2")
// console.log("3")
// printSpace()

// function print() {
//     console.log("Hello World!")
// }

// const print = function() {
//  console.log("Hello World!")
// }

// 
//function printSpace() {
    //     console.log("______________")
    // }
    // function checkEven(num) {
    //     //console.log(num % 2 ? false : true) ///// 0 это false всегда
    //     //////////////// 2 вариант console.log(num % 2 == 0 ? true : false)
    // return num % 2 ? false : true
    
    // }
    // let arr = [2, 7, 34, 2, 5, 8]

    // for (let i = 0; i < arr.length; i++){
    //     console.log(`${arr[i]} - ${checkEven(arr[i])}`)
    // }
let name = 'Huan'
console.log(name)
console.log(printMessage());

    function printMessage() {
        let name = 'Nadia'
        return name = 'Hello, ' + name
    }


   