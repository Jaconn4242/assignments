

const readline = require("readline-sync")
let num1 = readline.questionInt("Please enter your first number  ");
let num2 = readline.questionInt("Please enter your second number  ");
let operation = readline.question("Please enter an operation to perform (add, sub, mul, div)  ");
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
    
switch (operation) {
    case "add":
        console.log("The sum is equal to = " + add);
        break
    case "sub":
        console.log("The remainder is equal to = " + sub);
        break
    case "mul":
        console.log("The product is equal to = " + mul);
        break
    case "div":
        console.log("The quotient is equal to = " + div);
        break
    default:
        console.log("operation not recognized")
}
