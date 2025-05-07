"use strict"

// Tasks js.info 4.1

/*
    Task 1:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
*/

let user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

/*
    Task 2:

    Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

/*
    Task 3

    Object storing team salaries:
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    Write code to sum all slaraies and store in sum variable. Total should be 390
    If salaries is empty, then result = 0
*/

let sum = 0;

for(let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

/* 
    Task 4

    Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

    For instance:

    // before the call
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };

    multiplyNumeric(menu);

    // after the call
    menu = {
      width: 400,
      height: 600,
      title: "My menu"
    };

    Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

    P.S. Use typeof to check for a number here.
*/

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
};