# Day 18

## Table of Content

## Is JS an OOL ?

- Javascript is a prototype-based programming language, so it is not Object Oriented. However, over the year and the updates to the language, JS started to implement functionalities that make it more Object Oriented, such as class syntax.

## Abstraction

- Reduce complexity, and allow for efficient design and implementation.
- Hides technical complexity of systems.

### Advantages

- Helps user avoid writing low level code
- Avoid code duplication
- Change internal implementation of a class without affecting user
- Increase security of API or Program -> only provide imporatnt details for user.
- Reuse code easily

### How to use it

- Function
- Objects and methods
- Classes and Encapsulation

## Instances

An instance is an object, that was created from a class or a constructor function. In other words, it's like an unique copy of a blueprint for a house.

## Class

In JS, a class is a type of function.

### Syntax

```javascript
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

You can then use `new MyClass()` to create new Object with the listed methods.

`constructor ()` called automatically by `new`.

> NO COMMA BETWEEN CLASS METHODS!

### Concrete Class

- Can't be extended by another class
- Has all its methods defined already.
- Can be used to implement interfaces and extend abstract classes.

Once written, it's very difficult to change it.

- You can create objects from it.
