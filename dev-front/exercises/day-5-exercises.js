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

// Exercise 4 - Ask user to prompt circle radius + show it

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

