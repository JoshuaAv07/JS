'use-strict'
// EXERCISE #3
/* Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario */

var num1 = parseInt(prompt("Enter number 1: "));
var num2 = parseInt(prompt("Enter a number 2: "));

console.log("--------- Exercise 3 ---------");
console.log("Numbers between " + num1 + " and " + num2);
for (let i = num1; i <= num2; i++){
    console.log(i);
}