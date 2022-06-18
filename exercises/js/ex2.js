'use-strict'
// EXERCISE #2
/* Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
    hasta introducir un numero negativo y ahi mostrar el resultado*/

do {
    var num = parseInt(prompt("Enter a number: "));
    
    var add = num++;
} while (num < 0)

console.log("--------- Exercise 2 ---------");
console.log("Addition: " + add);
var avg = num / num;
    console.log("Average: " + avg);