'use-strict'

// Conditional
// If A is equal to B then do something

var age = 21;
var age2 = 12
var name = "Joshua";

/*
// Relational Operators
    Major: >
    Minor: <
    Major or equal; >=
    Minor or equal: <=
    Equal: ==
    Distinct: !=    
*/
if (age > age2){

    console.log("Age 1 is greater than age 2");
    if (age <= 33){
        console.log("Still Millenial");
    } else{
        console.log("You are a geeXer");
    }
} else {
    console.log(name + " is " + age + " years old");
}

if (age >= 18){
    // Above age
    console.log(name + " is " + age + " years old | Above age");
} else {
    // Under age
    console.log(name + " is " + age + " years old | Under age");
}

var year = 2018;

// Negation

if (year != 2021){
    console.log("Year is not 2021");
}

// AND
if (year >= 2000 && year <= 2022 && year !=2018){
    console.log("We are at the current era");
} else {
    console.log("We are at the postmodern era");
}

// OR
if (year == 2008 || (year >= 2018 && year == 2028)){
    console.log("Year ends in 8");
} else {
    console.log("NOT REGISTERED");
}