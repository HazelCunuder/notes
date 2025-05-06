"use script"

// Task js.info 2.10

// Task 1

if ("0") {
    alert( 'Hello' );
  }

// alert will be shown, since non-empty strings are considered true in boolean

// Task 2

let officialName = prompt('What is the "official" name of Javascript?', "")

if(officialName == "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? ECMAScript?!");
}

// Task 3

let value = prompt("Write a number", "")

if(value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0)
}

// Task 4

// Rewrite the following script by replacing if with ?

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

// Rewrite

let result = (a + b < 4) ? "Below" : "Over";

// Task 5

let message;

let message = (login == "Employee") ? "Hello" :
              (login == "Director") ? "Greetings" :
              (login == "") ? "No login" :
              "";
            