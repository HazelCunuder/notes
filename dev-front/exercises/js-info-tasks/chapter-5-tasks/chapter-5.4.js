"use strict"

// Tasks js.info 5.4 - Arrays

// Task 1: Is array copied ?

/// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4

// Task 2: Array Operations

/*
Let’s try 5 array operations.

    Create an array styles with items “Jazz” and “Blues”.
    Append “Rock-n-Roll” to the end.
    Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    Strip off the first value of the array and show it.
    Prepend Rap and Reggae to the array.
*/

let styles = ["Jazz", "Blues"]; 
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1)/2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap","Reggae");

// Task 3: Calling array context.

// What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // a,b , function () {...};

/*
The call arr[2]() is syntactically the good old obj[method](), in the role of obj we have arr, and in the role of method we have 2.

So we have a call of the function arr[2] as an object method. Naturally, it receives this referencing the object arr and outputs the array:
*/

// Task 4: Sum input numbers

/*
Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Enter a number", 0);

        if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
    }

    let sum = 0
    for (let number of numbers) {
        sum += number;
    }
    return sum
}

console.log(sumInput())