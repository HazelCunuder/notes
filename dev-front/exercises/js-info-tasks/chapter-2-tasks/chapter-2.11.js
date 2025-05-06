"use script"

// Tasks js.info 2.11

// Task 1

alert( null || 2 || undefined ); // 2, since 2 is the only "true" value

// Task 2

alert( alert(1) || 2 || alert(3) ); // 1 then  2, alert executes and gives 1, then alert returns undefined, so OR goes to the next value, so shows 2

// Task 3

alert( 1 && null && 2 ); // null, since null is the first "false" value

// Task 4

alert( alert(1) && alert(2) ); // 1 and undefined, since alert executes and gives 1 then alert returns undefined so "false" value

// Task 5

alert( null || 2 && 3 || 4 ); // 3, since && > ||, 2 && 3 executes first so it returns 3, which becomes null || 3 || 4, which gives us 3 as the first "true" value.

// Task 6

if(age >= 14 && age <= 90);

// Task 7 - Check Range outside

// 1st variant

if(!(age >= 14 && age <= 90));

// 2nd variant

if(age < 14 || age > 90);

// Task 8 - Which alert will execute?

if (-1 || 0) alert( 'first' ); // runs, -1 is a valid number so it's the first "true" value
if (-1 && 0) alert( 'second' ); // fails, 0 is considered a "false" value by js
if (null || -1 && 1) alert( 'third' ); // runs, -1 && 1 are both true values so it returns 1, and null || 1 returns 1

// task 9 - Check Login

let login = prompt("Who's there?", "");

if(login === "Admin") {
    let password = prompt("Password?", "");
    
    if(password === "TheMaster") {
        alert("welcome!");
    } else if(password === null || password === "") {
        alert("Cancelled");
    } else {
        alert("Wrong Password");
    }
} else if(password === null || password === "") {
    alert("Cancelled");
} else {
    alert("I don't know you");
}