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
