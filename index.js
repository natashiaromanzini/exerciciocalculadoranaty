const {sum, sub, div, mul} = require('./calculadora');
const readLine = require('readline-sync');

console.log("calculadora");
const num1 = readLine.questionInt("enter a number: ");
const operation = readLine.question("enter a operation: (+,-,/,*): ");
const num2 = readLine.questionInt("enter a number: ");

if (operation === "+") {
   sum(num1,num2)
}
else if (operation === "-"){
   sub(num1,num2)
}
else if (operation === "/"){
   div(num1,num2)
}
else if (operation === "*"){
    mul(num1,num2)
}
else {
    console.log("operação não encontrada")
}