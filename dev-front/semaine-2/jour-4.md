# Day 4

## Table of Content

- Comparisons

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
