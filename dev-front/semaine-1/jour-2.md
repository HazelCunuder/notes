# Jour 2

## Table of Content

- [ECMAScript vs JavaScript](#ecmascript-vs-javascript)
- [Code Structure](#code-structure)
  - [Blocks of code](#blocks-of-code)
- [Javascript Ecosystem](#javascript-ecosystem)
  - ["use strict"](#use-strict)
  - [TC39](#tc39)
  - [ECMA-262](#ecma-262)
  - [Current Version](#current-version)

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

## Variables

Names stored data

### 3 types of variables

- `let` - the modern variable, commonly used today
- `var` - the old variable, still common in older scripts, not used anymore
- `const` - unchanging variable

You put data into your variable with the `=` operator. Example `let message = "Hello"`

You can now reuse that variable in our code.

For readability's sake, only write one variable per lin.

### Naming variables

Only 2 major rules:

- Only letters, digits, or `$` and `_`

- First character CANNOT be a digit

### Additionnal rules

- If your variable is multiple words long, use a `camelCase`. Example: `let thisIsALongVariable = "hello"`
- There is a list of reserved words that you cannot use to define variables: [Reserved Words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
- Human-readable names only
- No abbreviations or short names, unless sure of what they are
- Names must be concise and descriptive
- Keep terms consistent between yourself and others (User or Visitor for example)

### Constants special rules

Constants are a special type of variable, as stated before, they are unchanging. Which means that you cannot reassign them, trying to do so will result in an error.

Their naming convention is also slightly different, if the constant is known before the page is loaded, constants are named in fully uppercase letters and with words separated by underscores, like this: `const KNOWN_CONSTANT`.

However, if the constant is unknown before load, then conventional naming is applied.

## Data Types

There are 8 data types in Javascript, and Javascript values are able to switch between each at a moment's notice without errors.

### Number

Represents both integers and floating point numbers.

Operations compatible: multiplication `*`, division `/`, addition ` +`, subtraction ` -`, remainder `%`, exponentials `**`, etc...

Special values:

- `Infinity`
- `NaN` - NotANumber, result of an incorrect or undefined math operation.

### BigInt

Represents numbers too big for JS to process.

### String

Strings in JS must be surrounded by quotes, we can use 3 different types:

- "Hello"
- 'Hello'
- \`Hello`

The first two act the same, but Backticks are special. They allow us to embed variables and expressions into a string by wrapping them in `${...}`.

### Boolean

Only 2 values: `true` or `false`

Used for logical operations.

### null & undefined

`null` is a value that doesn't belong in any of the types cited before.

Unlike other languages, `null` in Javascript represents *nothing*, not a non-existing object.

`undefined` is a value that has not been assigned.

Those two while similar are not used for the same purpose at all.

`null` is for an empty value, undefined is a default value for `unassigned` things.

## Type Conversion

### String Conversion

Happens when we need the string form of a value.

`String(value)` is the function used to convert a value to a string.

### Numeric Conversion

`Number(value)` is the function used to convert a value to a number.

Note that this conversion only works with string containing numbers, null, and boolean. If the string isn't a valid number, or undefined, the conversion will give us `NaN`.

### Boolean Conversion

Boolean conversion is the simplest of the conversions.

The function is `Boolean(value)`.

- If a value is virtually empty, so a number 0, empty string, `null`, `undefined`, and `Nan` then it becomes `false`

- Every other value becomes `true`

## Basic Operations

### Vocabulary

- **Operand**: What operators are applied to. Sometimes called "arguments" instead.

- **Unary**: Only a single operand.

    ```javascript
    let x = 1;

    x = -x;
    alert( x ); // -1, unary negation was applied
    ```

- **Binary**: 2 operands.

### Maths

6 types:

- Addition
- Substraction
- Multiplication
- Division
- Remainder
- Exponentiation
