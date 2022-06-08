"use_strict"

// Let and Var

// Var
var number = 40
console.log(number) // Value = 40

if (true){
    var number = 50
    console.log(number) // Value = 50
}

console.log(number) // Value = 50

// Let
var text = "lorem"
console.log(text) // Value = lorem

if (true){
    let text = "JS";
    console.log(text) // Value = JS
}

console.log(text) // Value = lorem