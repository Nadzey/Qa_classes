const printMessage = function (param){
    console.log(`You just entered ${param}`);
}

const newMessage = printMessage;
console.log(typeof newMessage);

printMessage('hello');
newMessage('Hello');


/////////////////////////////peredaem function v druguu function
function sum (num1, num2){
    return function(){
        return num1 + num2
    }   
}
const newSum = sum(12, 12)
console.log(newSum())

//////////////////////////////calculator
// const calculator = function (num1, num2, operator) {
//     if (operator.toLowerCase() == 'add') {
//         return num1 + num2;
//     }
//     if (operator.toLowerCase() == 'sub') {  /////////////////privedenie k strochnym

//         return num1 - num2;
//     }
// }
// console.log(calculator(1, 5, 'Sub'));

/////////////////operator: add, sub
//////////////////////////////////vtoroj variant s vlozennymi function
const calculator = function(num1, num2, callback) {
    return callback(num1, num2)
}

const add = function (num1, num2) {
    return num1 + num2
}

const sub = function (num1, num2) {
    return num1 - num2
}
console.log(calculator(2, 6, sub))


//////////////////////////tretj variant

console.log(calculator(2, 6, function (num1, num2) {
    return num1 + num2
}))

///////////////////4 variant
const {calculator} = require("../src/calculator");
const expect = require('chai').expect;

describe('Evaluare calculator', () => {
    it('calculator(2, 3, '+') should return 5', ()=> {
    expect(calculator(2, 3, '+')).to.equal(5);  
})
it('calculator(2, 3, '-') should return -1', ()=> {
    expect(calculator(2, 3, '-')).to.equal(-1)
})
})