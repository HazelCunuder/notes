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
- Square brackets: `object["property"]`. Allows taking key from the variable.

Other operators :

- `del object.property` --> Delete property
- `"key" in object` --> check if property with that key exists
- `for (let key in object)` loops --> iterate over object

Many types of objects:

- Arrays
- Date
- Error
- Etc...
