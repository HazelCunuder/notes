# Day 5

## Table of Content

## Loops: while and for

Loops are a way to repeat the same code multiple times.

### `while` loops

While loops repeat the code while the `condition` is `true`.

It is written like this:

    ```javascript
        while (condition) {
            // loop body
        }
    ```

An execution of a loop body is called an iteration.

Any expression or variable can be a loop expression the condition is converted into a boolean type by `while (...)`

### `do while` loops

The condition check can be put below the loop body with `do while`.

> Only to be used when the body of the loop has to be executed at least once, no matter the status of the condition.  `while(...) {}` is still the preffered form.

### `for` loops

Syntax:

    ```javascript
        for (begin; condition; step) {
        // ... loop body ...
        }
    ```

Let's break it down together:

- begin: Executes the loop body once upon entering the loop
- condition: Checks if condition is met, if condition = `false` then stop the loop.
- step: Executes after the body on each iteration
- body: Runs as long as condition is `true`

While a bit more complex, `for` loops are the most common type of loops.

### Skipping parts

Any part of `for` can be omitted without errors.

However, even if you don't put anything for the begin, condition, step and body, we need to keep the semicolons within the parentheses. Otherwise there will be a syntax error.

### Breaking the loop

Usually a loop exits when the condition becomes `false`.

**But**, we can force the exit at any time using the `break` directive.

`break` is useful when the condition has to be checked *in* the body.

### Continue

`continue` acts like a softer version of break. Instead of stopping the loop entirely, it stops the current iteration and tries to start a new one.

It can be useful to skip some unwanted iterations, like only displaying odd numbers.

Like this:

    ```javascript
        for (let i = O; i < 10; i++) {

            // if true, skip the body
            if (i % 2 == 0) continue;

        alert(i);
        }
    ```
> `break` and `continue` aren't compatible with the ternary operator `?`

### Labels

A label is an id with a colon ***before*** the loop: `labelName: for (...) {}`

When using ither `break` or `continue` followed by a label, it looks upwards for the corresponding label and either breaks out of the loop or ro the next iteration of the labelled loop.
