"use strict"

// Exercices from Cyril

// Use of variables 

// Exercise 1 - show Hello World

alert("Hello World");

// Exercise 2 - Create Age variable + show it

let age = 22;

alert(age);

// Exercise 3 - Ask user to prompt their age + show it

let age = prompt("How old are you?", "");

alert(age);

// Exercise 4 - Ask user to prompt circle radius + show perimeter

let circleRadius = prompt("What's the radius of the circle?","");

let circlePerimeter = 2 * Math.PI * parseFloat(circleRadius); 

alert(circlePerimeter);

// Corrected with Gemini was:

/*
    let circleRadius = prompt("What's the radius of the circle?","");

    alert(circleRadius);
*/

// Exercise 5 - Set 2 prompted values in 2 variables + reverse said variables

let a = prompt("value a", ""), b = prompt("value b");

let c = a, a = b, b = c;

// Corrected with Gemini, was:

/*
    let a = prompt("value a", ""), b = prompt("value b");

    let a = b, b = a
*/

// Using conditional branching 

// Exercise 1 - Ask user their age + show if adult or minor

let age = prompt("How old are you?", "");

if (age >= 18) {
    alert("You're an adult");
} else {
    alert("You're a minor");
}

// Exercise 2 - Ask user for number + show if odd or even

let n = prompt("give me a number", 0);
n = parseInt(n);

if (n % 2 == 0) {
    alert("Even");
} else {
    alert("Odd");
}

// Exercise 3 - Ask for a grade + show result depending on grade

let grade = prompt("Enter a Grade between 0-20", 0);
grade = parseInt(grade);

if (grade >= 0 && grade <= 9) {
    alert("Fail");
} else if (grade >= 10 && grade <=13) {
    alert("Barely made it");
} else if (grade >= 14 && grade <= 16) {
    alert("Good!");
} else if (grade >= 17 && grade <=20) {
    alert("Excellent!");
} else {
    alert("Invalid grade");
}

// Exercise 4 - Prompt a year + Show if leap year or not

let leapYear = prompt("Insert a year", 0);
leapYear = parseInt(leapYear);

if (leapYear % 4 == 0 && (!(leapYear % 100 == 0) || leapYear % 400 == 0)) {
    alert("Leap Year");
} else {
    alert("Non-leap Year");
}

// Use loops

// Exercise 1 - Show number from 1 to 10 with: while, do while and for loops

let n = 1;

while (n <= 10) {
    alert(n);
    n++;
}

let n = 1

do {
    alert(n);
    n++;
} while (n <= 10);

for (let n = 1; n <= 10; n++) {
    alert(n);
}

// Exercise 2 - Prompt user for a number + show even numbers from 0 to prompted number

let i = prompt("Pick a number","");
i = parseInt(i);

for (x = 0; x <= i; x++) {

    if (!(x % 2 == 0)) continue;

    alert(x);
}

// Exercise 3 - Prompt user for a number + show times table of number

let number = prompt("Enter a number to see its multiplication table:", "");
number = parseInt(number);

if (!isNaN(number)) {
    alert(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        alert(`${number} x ${i} = ${result}`);
    }
} else {
    alert("Invalid input. Please enter a valid number.");
}

// Exercise 4 - Take exercise 2 and put it into a function

function showEvenNumbers(limit) {
    for (let x = 0; x <= limit; x++) {

        if (!(x % 2 == 0)) continue;
        alert(x);
    }
}

showEvenNumbers(50)