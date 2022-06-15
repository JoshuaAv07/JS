'use-strict'

//switch

var age = 25;
var printS = "";

switch(age){
    case 18:
        printS = "You are barely above age";
    break;
    case 25:
        printS = "You are an adult";
    break;
    case 40:
        printS = "40s Crisis";
    break;
    case 75:
        printS = "Geezer";
    break;
    default:
        printS = "Neutral age";
    break;
}

console.log(printS);