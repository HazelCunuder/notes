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
