const readline = require("readline-sync")

num1 = readline.questionInt("what is your first number ")
num2 = readline.questionInt("what is your second number ")

function add(x,y) {
    return x + y;
}
function sub(x,y) {
    return x - y;
}
function mul(x,y) {
    return x * y;
}
function div(x,y) {
    return x / y;
}

let operator = ["add", "sub", "mul", "div"]

let index = readline.keyInSelect(operator, "what operation would you like to perform")


function choice(){
    if(operator[index] === "add"){
        console.log("the sum is " + add(num1, num2));
    } if(operator[index] === "sub"){
        console.log("the remainder is " + sub(num1, num2));
    } if(operator[index] === "mul"){
        console.log("the product is " + mul(num1, num2));
    } if(operator[index] === "div"){
        console.log("the quotient is " +div(num1, num2));
    }
}
choice()
