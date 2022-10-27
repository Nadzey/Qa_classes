let num1 = Number(prompt ("Please enter first number : "));
let num2 = Number(prompt ("Please enter second number : "));
let operator = prompt ("Please enter one of the available operators:\n'+'\n'-'\n '*'\n'/'");
            
switch(true) {
  case (operator == "+"):
     document.write(`the ${operator} result for numbers ${num1} and ${num2} is` + " " + (num1 + num2));
    break;
  case (operator == "-"):
     document.write(`the ${operator} result for numbers ${num1} and ${num2} is` + " " + (num1 - num2));
    break;
  case (operator == "*"):
     document.write(`the ${operator} result for numbers ${num1} and ${num2} is` + " " + (num1 * num2));
    break;
  case (operator == "/" && num2 == 0):
    document.write("sorry, you can't divide by 0, try different number");
    break;
  case (operator == "/"):
  document.write(`the ${operator} result for numbers ${num1} and ${num2} is` + " " + (num1 / num2));
    break;
  default:
  document.write("One of the entered numbers/operators is not supported. Please try a different combination.");
}