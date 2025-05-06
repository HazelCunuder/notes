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

## Switch statement

`switch` statements can replace multiple `if` checks.

It's a better way to compare values with multiple variants than multiple `else if` statements one after another.

### Syntax

A `switch` statement is built with one or more `case` blocks with an optional default one.

    ```javascript
        switch(x) {
          case 'value1':  // if (x === 'value1')
            ...
            [break]

          case 'value2':  // if (x === 'value2')
            ...
            [break]

          default:
            ...
            [break]
        }
    ```

A `case` statement checks for a strict equality for the value.

If the equality is found, `switch` starts to execute the code starting from the matching `case` until either the nearest `break` or the end of the `switch`.

If there is no match, then `default` is executed (if a default had been set).

> If there is no `break` then the code keep executing itself until the end of the `switch` without checking any following `case`.

### Grouping of "case"

`case` that share the same code can be grouped.

The abilityu to group `case` is a byproduct of the above mentionned quirk with the lack of `break`.

### Type Matters

**Important**: The equality check is ***always strict***. The values ***have*** to be the same type to match

Example:

    ```javascript
        let example = prompt("Enter a number")

        switch (example) {
            case '0':
            case '1':
                alert ('One or Zero');
                break;

            case '2':
                alert ('Two');
                break;

            case 3:
                alert ("Three"); // However, this never executes since we asked for a string, which isn't the same type as a number
                break;
                
            default:
                alert ("Unknown number");
        }
    ```

## Functions

We often need to perform the same action in many places in a script.

Functions are the main building blocks of the program. They can be used to call the same code without having to repeat it.

`alert`, `prompt` and `confirm` are examples of built-in functions, but we can create our own.

### Function Declaration

Create function --> use func declaration

A function declaration is written like so:

    ```javascript
        function nameOfFunction(parameter1, parameter2, ..., parameterN) {
            //body
        }
    ```

Just need to change the function to modify all of its instances.

### Local and Outer Variables

**Local variables**: Variable declared inside a function, only usable within said function

**Outer variables**: Variable declared outside of a function, can be used within any function. It can also be modified by the function.

Outer Variable is only used if there's no local one.

Local Variable > Outer Variable.

### Parameters

Parameter = Variable inside the parentheses in the function declaration

Argument = Value passedd to the function when it's called.

### Default values

If argument not provided --> value = `undefined`

We can set-up default values by using the assignement operator in the function declaration.

Default value can be any data ty pe, or even another function.

#### Alternatives default parameters

You can assign default values later in the function.

There are multiple ways to do it:

- Compare with `undefined`
- use the `OR` operator
- Use nullish operator --> better if "falsy" values like 0 need to be accepted

### Returning a value

function: can call value back into it

`return` can be placed anywhere in the function.

When function reach `return` --> Function stop --> value returns to calling code.

Can be multiple `return` in a single function. Can be `return` without value --> function exits.

### Naming convention

Function = action --> Action = verb

Common agreed function prefix:

- show... --> Show something
- get... --> Get a value
- calc... --> Calculate something
- create... --> Creates something
- check... --> Checks something (returns true or false)

Convention makes reading easier and code more understandable

> One function = **ONE ACTION**

### Function == Comments

If big function --> break it down into smaller functions

Smaller functions --> Easier to test and debug --> Also acts as comment

## Function Expression

Function --> Special value

Func Expression --> syntax --> create a new function in an expression

in function expression --> you can forget name.

### Function is a value

In Javascript function = value

We can copy it too by using the asignment operator to asign it to another variable.

### Callback functions

Functions created to be re-used later.

### Func Expression vs Func Declaration

| Feature | Function Declaration | Function Expression |
| --- | :---: | :---: |
| **Syntax** | `function sum(a, b) { ... }` | `let sum = function(a, b) { ... };` |
| **Creation Timing** | Created at script loading (before code execution) | Created at runtime when execution reaches the expression |
| **Hoisting** | Yes — can be called before it's defined in code | No — cannot be used before it's defined |
| **Scope in Blocks (Strict Mode)** | Visible throughout the block where it's defined | Visible only after the line where it's defined |
| **Usage in Conditional Blocks** | Not available outside the block in which it's declared | Can be assigned conditionally and used outside the block |
| **Readability & Style** | More prominent and easier to spot in code | Less visually distinct; can be inline or anonymous |
| **Typical Use Case** | When defining reusable functions with global/block visibility | When defining functions conditionally or inline |
