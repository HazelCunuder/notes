"use strict"

// Tasks js.info 4.4

// Task 1: Using this in object literal

/* 
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
*/

// Task 2: Create a calculator

/*
Create a calculator object with three methods:
- read() prompts for two values and saves them as object properties.
- sum() returns the sum of saved values.
- mul() returns the multiplication product of saved values.
*/

let calculator = {
  sum(){
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );