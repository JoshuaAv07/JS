'use-strict'
// EXERCISE #8
/* Programar una Calculadora:
-Que pida dos numeros por pantalla
-Si se captura un numero mal ( algo no numerico ), que lo vuelva a pedir
- el resultado de Sumar, Restar, multiplicar y dividir esas dos cifras
- se debe mostrar en el cuerpo de la pagina , en una alerta y en la consola */

var num1 = parseInt(prompt("Enter number 1: "));
var num2 = parseInt(prompt("Enter number 2: "));

while (isNaN(num1)){
    num1 = parseInt(prompt("Enter number 1: "));
}
while (isNaN(num2)){
    num2 = parseInt(prompt("Enter number 2: "));
}

var add = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;

console.log("--------- Exercise 2 ---------");
console.log(num1 + " + " + num2 + " = " + add);
console.log(num1 + " - " + num2 + " = " + sub);
console.log(num1 + " x " + num2 + " = " + mul);
console.log(num1 + " / " + num2 + " = " + div);

alert(num1 + " + " + num2 + " = " + add + " | " + num1 + " - " + num2 + " = " + sub + " | "
        + num1 + " x " + num2 + " = " + mul + " | " + num1 + " / " + num2 + " = " + div);

document.write(num1 + " + " + num2 + " = " + add + " | " + num1 + " - " + num2 + " = " + sub + " | "
+ num1 + " x " + num2 + " = " + mul + " | " + num1 + " / " + num2 + " = " + div);

function addition(){
    document.write(num1 + " + " + num2 + " = " + add);
}
function substraction(){
    document.write(num1 + " - " + num2 + " = " + sub);
}
function multiplication(){
    document.write(num1 + " x " + num2 + " = " + mul);
}
function division(){
    document.write(num1 + " / " + num2 + " = " + div);
}
