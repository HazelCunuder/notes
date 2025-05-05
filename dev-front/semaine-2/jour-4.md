# Day 4

## Table of Content

- [Comparisons](#comparisons)
  - [String comparison](#string-comparison)
  - [Comparison of different types](#comparison-of-different-types)
  - [Strict Equality](#strict-equality)
  - [Null and undefined](#null-and-undefined)
- [Conditional branching: If and "?"](#conditional-branching-if-and-)
  - [If statement](#if-statement)
    - [Boolean conversion](#boolean-conversion)
    - [Else, Else if](#else-else-if)
  - [Conditional Operator `?`](#conditional-operator-)
    - [Multiple `?`](#multiple-)
- [Logical Operators](#logical-operators)
  - [Or `||`](#or-)
  - [AND `&&`](#and-)
  - [NOT ` !`](#not)

## Comparisons

In Javascript, every comparison operator returns a boolean value (see [jour-2.md](../semaine-1/jour-2.md) if you forgot what a boolean is).

### String comparison

To see if `"string 1" > (greater than), < (lesser than), >= <= (greater/lesser or equal), == (equals), != (not equal) "string 2"` Javascript uses a peculiar system:

1. It compares the first character of both strings
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

> **Warning**: Since Javascript uses Unicode in its internal incoding table, Capital Letters have a different value than their lowercase counterparts.

### Comparison of different types

When comparing different types of values, Javascript converts them all to numbers.

Example:

    ```javascript
        alert( '2' > 1 ); // true, string '2' becomes a number 2
        alert( '01' == 1 ); // true, string '01' becomes a number 1
    ```

For Boolean values, `true` becomes 1 and `false` becomes 0.

### Strict Equality

Regular equality checks `==` cannot tell `0` and `false` apart.

Same goes for an empty string. The reason, is that since type comparison turns everything into numbers, all of the above examples return 0, hence, they are all equal in Javascript's eyes.

However, there is a way for Javascript to differentiate them.

`===` is a *strict* equality operator, meaning, it checks the equality without converting the types.

> It also exists as a non-equality format ` !==`

With the strict equality operator, different types of string will always returrn `false`.

### Null and undefined

They are both equal to one another, but not to any other value, no matter their type.

> To avoid problems, do not use comparison with a value that may be `null` or `undefined`, unless you are 100% sure of chat you are doing.

## Conditional branching: If and "?"

### If statement

Executes a block of code if the statement in `if(...)` is `true`

Example:

    ```javascript
    let whiteHouse = prompt('Where is the white house located?');

    if(whiteHouse = "Washington DC") alert("Correct!") ;
    ```

To execute more than one statement, use `{}` to wrap the code.

> It's better to always use curly braces for readability, even with a single statement.

#### Boolean conversion

the if statement transforms every result into a boolean data type.

#### Else, Else if

An if statement can contain an `else` block that activate if the result of the original statement is `false`.

`else if` is used to test multiple variants of a condition

### Conditional Operator `?`

The `?` operator allows us to assign multiple variables to a condition. It's also the only *ternary* operator in all of Javascript.

Syntax:

    ```javascript
    let result = condition ? value1 : value2;
    ```

#### Multiple `?`

Using multiple `?` operators can be used to return a value that depends on multiple conditions.

Example:

    ```javascript
        let age = prompt('age?', 18);

        let message = (age < 3) ? 'Hi, baby!' :
            (age < 18) ? 'Hello!' :
            (age < 100) ? 'Greetings!' :
            'What an unusual age!';
        
        alert( message );
    ```

## Logical Operators

Can be used with any type of values, and output any type too.

### Or `||`

Or is represented with 2 vertical lines `||`.

Example: ```result = a || b```

While it can be used with any value type, any operand will be converted into a boolean for the evaluation.

OR is mostly used within `if` statements to check if any condition is true.

Example:

    ```javascript
        let hour = 12;
        let isWeekend = true;

        if (hour < 10 || hour > 18 || isWeekend) {
          alert( 'The office is closed.' ); // it is the weekend
        }
    ```

**How it works:**

- Evaluates operands from left to right
- Converts operands into boolean, if result is true then stop and return the og value of the operand
- If all values are false then return the last operand.

### AND `&&`

It is represented by 2 ampersands ``&&`

It returns true only if all values are true

As with OR, every value can be used as an operand for AND.

**How it works:**

- Evaluates operands from left to right
- Converts operands into boolean, if result is false then stop and return the og value of the operand
- If all values are true then return the last operand.

### NOT ` !`

NOT is represented with an exclamation mark ` !`

Accepts only a single argument

**How it works:**

- Converts the operand to boolean type
- Returns the inverse value

## Nullish Coalescing operator `??`

Written as 2 question marks `??`

Treats `null` and `undefined` similarly.

`??` returns the first argument if it's not `null/undefined`. Otherwise, the 2nd one.

`result = a ?? b` is just a nicer way of writing `result = (a !== null && a !== undefined) ? a : b;`, but they do the exact same thing.

`??` is used to set default values.

It can also be used to select the first defined value in a list.

Example:

    ```javascript
        let firstName = null;
        let lastName = null;
        let nickName = "Supercoder";

        // shows the first defined value:
        alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
    ```

### Comparison with `||`

Both can be used in the same way, however there is a key difference:

- `||` returns the first `true` value
- `??` returns the first `defined` value

It means that `||` doesn't make a difference between, 0, null/undefined, false or an empty string. For that operator, those are all the same, hence they will only get the first `true` argument.

However, for default values, wee only want them if the value is `null` or `undefined` so `??` is more suited for assigining default values.

### Using `??` with `&&` or `||`

Javascript doesn't allow using `??` with `&&` and `||`, due to safety reasons.

The only exception is if the precedence is used explicitly with parentheses.
