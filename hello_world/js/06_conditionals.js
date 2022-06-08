'use-strict'

// Conditional
// If A is equal to B then do something

var age = 18;
var name = "Joshua Aviles";

/*
// Relational Operators
    Major: >
    Minor: <
    Major or equal; >=
    Minor or equal: <=
    Equal: ==
    Distinct: !=    
*/

if (age >= 18){
    // Es mayor de edad
    console.log(name + " is " + age + " years old");
    if (age <= 33){
        console.log("Still Millenial");
    } else if (age >= 70){
        console.log("You are a geezer");
    } else {
        console.log("Not millenial Anymore")
    }

} else {
    // Es mayor de edad
    console.log(name + " is " + age + " years old");
}