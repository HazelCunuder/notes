# Jour 2

## Table of Content

## ECMAScript vs JavaScript

Javascript = ECMAScript + Environment

ECMAScript is the standard that defines Javascript's punctuation.

## Code Structure

### Blocks of code

1. **Statements**

Statements are the structure that perform actions.

We can have as much statements as we want within our code.

#### *Example*

    ```javascript
    alert("Hello World");
    alert("This is a statement");
    ```

2. **Semicolons**

Semicolons are used to separate statements, however, in many situations, Javascript understand a line break as a semicolon.

***HOWEVER***, there are multiple instances where this isn't the case.

In the case of an incomplete expression, like a mathematical operation, Javascript understands that you shouldn't put semicolons at th line breaks.

There are cases where JS fails to assume a semicolon where there really should be.

Unfortunately, those errors are quite hard to fix. Fortunately, they don't occur that often.

    > It is recommended to put semicolons at the end of each sentence regardless as it is much safer.

3. **Comments**

Comments are used to describe what the code does and why it does it.

They can be put anywhere within the code.

    ```javascript
    // They can be put in lines of their own
    alert("Hi"); // Or after a statement

    /* They can even
    span multiple lines
    */
    alert("bye")
    ```

    > You can use `Ctrl + Shift + /` on AZERTY keyboards to add a single comment line.

## Javascript Ecosystem

### "use strict"

Was introduced in June 2015, after the switch from ES5 to ES6

Tells your browser to use the modern, stricter version of Javascript.

> It ***HAS*** to be put at the very top of your .js file, otherwise it will not work

### TC39

TC39 (Technical Comitee N°39) is the entity that governs over ECMAScript's evolution.

### ECMA-262

ECMA-262 is a document that defines ECMAScript. It specifies the language syntax and the semantics of the core application programming interface, such as Array, Function, and globalThis.

### Current Version

As of writing this document, the latest version of ECMAScript is ECMAScript 2024.
