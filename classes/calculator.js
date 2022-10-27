///////////////// деление на 0 else if (operation === "/") { result = (num2 === 0 ? null : num1 / num2); }
////////////////////////////////// простой калькулятор
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

      /////////////////////////////////////////calculator with while
// let num1 = 2;
// let num2 = 3;
// let num3;
// let result;
// let operator = '/';
// if(operator == '+'){
//   result = num1 + num2;
  
//   document.write('Your sum:' + ' ' + result)
// }
// else if(operator == '-'){
//   result = num1 - num2;
  
//   document.write('Your difference:' + ' ' + result)
// }
// else if(operator == '/'){
  
// if (num2 == 0){
//   document.write('Please, enter another number, 0 is not ellowed')
// }
//   else {result = num1 / num2;
//   document.write('Your devision:' + ' ' + result)
// }
// }
// else if(operator == '*'){
//   result = num1 * num2;
  
//   document.write('Your multyplication:' + ' ' + result)
// }
// else {
//   document.write('Please, enter another operator!')
// }

      /////////////////////////////////////////calculator with prompt


//   let num1 = Number(prompt('Number1:'));
// let num2 = Number(prompt('Number2:'));
// let oper = prompt('1. Sum\n2. Substract\n3. Multiply\n4. Divide\n');
// switch(oper){
//   case '1': 
//     document.write(`${num1} + ${num2} =` + (num1 + num2));
//     break;
//   case '2': 
//     document.write(`${num1} - ${num2} =` + (num1 - num2));
//     break;
//   case '3': 
//     document.write(`${num1} * ${num2} =` + (num1 * num2));
//     break;
//   case '4': 
//     document.write(`${num1} / ${num2} =` + (num1) / (num2));
//     break;
//   default:
//     document.write('Wrong operation. Please try again!');
// }       
