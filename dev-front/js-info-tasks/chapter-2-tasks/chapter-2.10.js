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