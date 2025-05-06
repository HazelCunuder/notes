"use strict"

// Task js.info 2.8

let a = 1, b = 1;

let c = ++a;
let d = b++;

/*
    Final values of a, b, c, and d:

    a = 2  --> a has been incremented once so a = 1 + 1 = 2
    b = 2  --> b has been incremented once so b = 1 + 1 = 2
    c = 2  --> increments a once then shows a so c = 1 + a = 1 + 1 = 2
    d = 1  --> shows b then increments once so d = b = 1 then b + 1
*/