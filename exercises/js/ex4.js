'use-strict'
// EXERCISE #4
/* Mostrar todos los numeros IMPARES Que esten entre dos numeros introducidos por el usuario */

var num1 = parseInt(prompt("Enter number 1: "));
var num2 = parseInt(prompt("Enter a number 2: "));

console.log("--------- Exercise 4 ---------");
for (let i = num1; i <= num2; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}