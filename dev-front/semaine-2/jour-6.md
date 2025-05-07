# Day 6

## Table of content

-

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
