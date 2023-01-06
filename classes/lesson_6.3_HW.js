/////////////////////function privetstvie

// function greet(name) {
//     return 'Hello, How are you? ' + name + ', have a good day'
// }
// console.log(greet('Nadia'))

// ////////////////////calculation
// function calculator(a, b, operator) {
//     if(operator == '+'){
//         return a + b;
//     }
//     else if (operator == '-'){
//         return a - b;
//     }
//     else if (operator == '*'){
//         return a * b;
//     }
//     else if (operator == '/') {
//         return b === 0 ? null : a / b;
//     }
// }
// console.log(calculator(10, 2, '*'))

////////////////////////////////////new

//// massive with number and prime number//////////////zadacha 2 chasti

function isPrime(number) {
    if (number > 1){
        for (let i = 2; i < number; i++){ ////////////proveriaem prime number
            if(number % i == 0){
                return false
        }
    }
                return true
    }
                return false
}
// console.log(isPrime(-1))
// console.log(isPrime(7))
// console.log(isPrime(4))
// console.log(isPrime(11))

function howManyPrimes(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if (isPrime(arr[i])){
            count++
        }
    }
    return count;
}
let arr = [1, 5, 11, 13, 6, 17, 8, 0, 1]
console.log(howManyPrimes(arr))
