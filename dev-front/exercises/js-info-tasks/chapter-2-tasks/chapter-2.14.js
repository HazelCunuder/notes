"use strict"

// Tasks js.info 2.14

// Task 1 - Rewrite switch into if

let browser = prompt("Which browser are you using?", "")

if (browser == "Edge") {
    alert("You have the Edge!");
} else if (browser == "Chrome" 
          || browser == "Firefox" 
          || browser == "Safari" 
          || browser == "Opera") {
    alert("Okay, we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}

// Task 2 - Rewrite if into switch

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(O);
        break;

    case 1:
        alert (1);
        break;
    
    case 2:
    case 3:
        alert ("2,3");
        break;
}