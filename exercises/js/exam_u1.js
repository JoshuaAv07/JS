'use strict'
var cont = 0;

for (let i = 1; i <= 100; i++){
    var n = i.toString();

    if (n.includes(9)){
        cont += 1; 
        console.log("Nine was found at: " + i);
        document.write(cont + "- Nine was found at: " + i + "<br>");
    }
}
alert("Number Nine was found " + cont + " times between 1 and 100");
