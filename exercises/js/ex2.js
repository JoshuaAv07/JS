'use-strict'
// EXERCISE #2
/* Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
    hasta introducir un numero negativo y ahi mostrar el resultado*/

var nums = 0;
var num = 0;
var add = 0;
    
while (num >= 0){
    num = parseInt(prompt("Enter a number: "));
    console.log(num);
    nums++;
    add += num;
    //console.log(add);
}

console.log("--------- Exercise 2 ---------");
console.log("Addition: " + add);
var avg = (add - num) / (nums-1);
console.log("Average: " + avg);