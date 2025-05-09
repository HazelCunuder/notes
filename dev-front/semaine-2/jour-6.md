# Day 6

## Table of content

- [Algorithms in Javascript](#algorithms-in-javascript)
- [Objects](#objects)
  - [Object references and copying](#object-references-and-copying)
    - [Comparison by reference](#comparison-by-reference)
    - [Cloning and merging](#cloning-and-merging)
      - [Nested cloning](#nested-cloning)
        - [Structured Cloning](#structured-cloning)
  - [Garbage Collection](#garbage-collection)
    - [Reachability](#reachability)
    - [Internal Algorithm](#internal-algorithm)
  - [Object Method, "this"](#object-method-this)
    - [Examples Method](#examples-method)
    - [Method shorthand](#method-shorthand)
    - ["this" in methods](#this-in-methods)
    - ["this" is not bound](#this-is-not-bound)
    - [Arrow functions have no `this`](#arrow-functions-have-no-this)
- [Arrays](#arrays)
  - [Creating Arrays](#creating-arrays)
  - [Access elements](#access-elements)
  - [Length](#length)
  - [Common methods](#common-methods)
  - [Iteration through arrays](#iteration-through-arrays)
  - [Multidimensional Arrays](#multidimensional-arrays)
  - [Compare Arrays](#compare-arrays)
  - [Array Methods](#array-methods)
    - [For each](#for-each)
    - [Searching in an array](#searching-in-an-array)
    - [Transform array](#transform-array)
  - [Array.isArray](#arrayisarray)

## Algorithms in Javascript

--> Conceive logical and efficient solutions to problems

--> Order of operation needed to do the task

## Objects

Special type of data --> stores multiple datas and complex entities.

Creation: With curly braces `{}` + optional list of properties

Property = "key: value" --> key = `"string"` (property name) --> value = any type of data

Empty object can be created using 2 different syntaxes:

- ```javascript
    let user = new Object(); // "object constructor" syntax
  ```

- ```javascript
    let user = {}; // "object literal" syntax
  ```

Curly braces are the most common way to do it.

To access a property we can:

- use the dot notation: `object.property`
- Square brackets: `object["property"]` + Allows taking key from the variable --> `object[key]`

Other operators :

- `delete object.property` --> Delete property
- `"key" in object` --> check if property with that key exists
- `for (let key in object)` loops --> iterate over object

Many types of objects:

- Arrays
- Date
- Error
- Etc...

## Object references and copying

Object: Stored and copied "by reference"
Other data types: copied "as whole value"

Variable assigned to object --> stores adress in memory aka "reference"

When object variable is copied, copies reference but not the object.

Example:

```javascript
    let user = { name: "John" };
    let admin = user; // copy the reference

    admin.name = "Peter";

    alert(user.name); // output Peter too
```

### Comparison by reference

Objects equals if the objects are the same.

For instance, here a and b reference the same object, thus they are equal:

```javascript
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
```

And here two independent objects are not equal, even though they look alike (both are empty):

```javascript
let a = {};
let b = {}; // two independent objects

alert( a == b ); // false
```

> Const objects can be modified

### Cloning and merging

To duplicate an object, we can use `Object.assign`

Syntax: `Object.assign(destination, ...sources)`

destination = target object
arguments aster comma = source

Copies properties of all source objects into the destination then return result.

Can be used to copy into empty objects.

### Nested cloning

Properties can reference other objects

To do it, we need "structured cloning".

#### Structured Cloning

`structuredClone(object)` clones object with all nested properties.

Can clone most data types and supports circular references.

> If object has function property then `structuredClone(object)` does not work.

## Garbage Collection

Clean memory

Low priority process

### Reachability

Main concept of memory management in js.

"Reachable" values = accessible or usable --> guaranteed to be stored

Default reachable values (called *roots*):

- Current executing function + its variables and parameters
- Functions in nested calls
- Global variables
- Internal ones

Any other value is reachable if accessible from root by reference.

> Only incoming references make an object reachable

### Internal Algorithm

It's algorithm is "Mark and Sweep":

- Takes roots and remembers them
- Visits and remembers all references from roots
- Visits marked objects and marks their references
- Continue until all reachable from roots references are visited
- Delete unvisited objects.

## Object Method, "this"

Object = entities of the real world.

In real world: entities can act.

Action in js = function in object properties

### Examples Method

Teach user to say hello:

```javascript
    let user = {
        name: "John",
        age: 30
    };

    user.sayHi = function() {
      alert("Hello!");
    };

    user.sayHi(); // Hello!
```

Here: func expression --> Create function and assign it to property `User.sayHi`

Then call function.

> Object-oriented programming = using object to represent entities

#### Method shorthand

You can omit `function` just write the function directly when using object literal.

### "this" in methods

Object method --> need access to info stored in object

`this` can be used to access the object. (value is object "before dot")

Can use outer variable but unreliable if outer variable changes.

### "this" is not bound

Unlike in most languages, "this" in javascript can be used in any function, even if not a method of object;

Value of `this` --> evaluated at run-time, depending on context.

> Calling `this` without object == undefined

### Arrow functions have no `this`

Arrow function have no `this`.

If we try to use `this` in an arrow function, it's taken from the outer "normal" function.

## Arrays

Arrays == Ordered list of items --> Can be any types of data

### Creating Arrays

- Using array literals (Most common way):

```javascript
  let mixed = [1, "hello", true, null, {key: value}];
```

- using the Array constructor (rarer)

```javascript
let mixed = new Array(value1, value2, .. valueN);
```

### Access elements

We can use `at` to access a specific element in the Array.

Syntax: `arr.att(i)`

If i >= 0 then go to corresponding index element
if i < 0 then go to corresponding element in reverse order

### Length

`length` --> writtable, if increase, nothing happen, but if decrease, delete values in array, then if increase again, values won't reappear.

### Common methods

- `push()`: Adds one or more element to the end of the array and returns new length.

```javascript
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "orange"]
```

- `pop()`: Remove last ellement from array and return it

```javascript
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits);     // Output: ["apple", "banana"]
console.log(lastFruit); // Output: orange
```

- `shift`: Remove first element from array and return it

```javascript
let fruits = ["apple", "banana"];
let firstFruit = fruits.shift();
console.log(fruits);      // Output: ["banana"]
console.log(firstFruit);  // Output: apple
```

- `unshift()`: Add one or more elements to the start of the array, and return new length

```javascript
let fruits = ["banana"];
fruits.unshift("apple");
console.log(fruits); // Output: ["apple", "banana"]
```

`push` and `unshift` can add multiple elements at once.

### Iteration through arrays

We can loop through arrays in multiple ways:

- For loops - Oldest way

```javascript
let numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Output: 10, 20, 30
}
```

- for of - more modern, and used for simple iterations

```javascript
let colors = ["red", "green", "blue"];
for (let color of colors) { // gives access to value, not number of element.
    console.log(color);
}
```

### Multidimensional Arrays

Arrays --> Can contain other arrays

It looks like this:

```javascript
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix [0][1]); // 2, value 1 of array 0
```

### Compare Arrays

DON'T USE `==`!

Since Arrays are treated as any other object `==`, Javascript doesn't handle comparisons well.

Better to not use any operators at all and use loops or iteration methods

## Array Methods

- `slice()`: Returns a new array containing a portion of the original array. It takes a start and an optional end index.

```javascript
let numbers = [1, 2, 3, 4, 5];
let subArray = numbers.slice(1, 4); // Elements from index 1 up to (but not including) 4
console.log(subArray); // Output: [2, 3, 4]
```

- `splice()`: Changes array's content. Can add, remove, replace elements

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "kiwi"); // Start at index 1, remove 1 element, add "kiwi"
console.log(fruits);       // Output: ["apple", "kiwi", "orange"]
```

### For each

Functional approach --> allows to run a function for each element of the array.

```javascript
let numbers = [1, 2, 3];
numbers.forEach(function(number) {
    console.log(number * 2);
});

// With arrow function (more concise):
numbers.forEach(number => console.log(number * 2));
```

### Searching in an array

- `indexOf()` --> Returns first index where given element can be found. Outputs -1 if element not present.

- `lastIndexOf()` --> Like previous, but shows last index instead of first.

- `includes()` --> looks for item by its index, returns true if found.

- `find(fn)` --> Find an object with a condition

- `findIndex()` && `findIndexOf()` --> Similar to indexOf and lastIndexOf but return index of element, rather than the element.

- `filter()` --> returns array of matching elements

### Transform array

- `map()` --> Calls function for each element --> Returns result (Most useful and most used)

- `sort(fn)` --> Sorts array *in place* --> changes the element order, and return the sorted array

> Items are sorted as string by default.

- `reverse()` --> reverses order of array

- `split/join` --> convert string to array, and vice versa

- `reduce/reduceRight(function, initial)` --> Calc value over the array

### Array.isArray

`typeof()` doesn't differenciate Arrays from objects.

`Array.isArray()` exists to check if the value is indeed an array or not.
