'use-strict'
// EXERCISE #7
/* Hacer un programa con las tabla(s) de multiplicar
1.- Para el Numero Introducido ( Ventana Promt)
2.- PLUS: Para todas las tablas de Multiplicar del 1 hasta el Numero Introducido */

var num = parseInt(prompt("Enter a number: "));
console.log("--------- Exercise 7 ---------");
for (let i = 1; i <= num; i++){
    tt = i*num;
    console.log(i + " X " + num + " = " + tt);
}