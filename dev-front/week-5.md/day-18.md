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

### Abstract Classes

- Cannot be used to create an object
- Act as as a base class for other classes

Defined with the `abstract` keyword.

### Constructor method

- Method of a class used for creating and initializing objects instances of that class.

- Assign^$ù memory to the correct object

### Attributes

- Represent the What of an object.
- Variables
- Each instance as its own attributes.
- Can be different types
- Accessed through methods.

### Methods

- Functions inside class or object.
- Define behaviors or actions an object can perform.

### Differences between Method and Function

- **Function**
  - Standalone block of code.
  - Can be called independently
  - Doesn't belong to a class or an object

- **Method***
  - Associated with an object
  - Operates on data of the object.
  - Always used in the context of an object or class.

### Utility

- Encapsulate behavior: Keep related data together within the object.
- Provide an interface: Define how you interact with the object.
- Reusability: Once methode is defined, all instances can use that method.

### Getters - Setters

Getters and Setters are special types of methods used to control access to an object's properties. They are an example of encapsulation (which we'll cover next).

- Getter (Accessor Method): A getter is a method used to retrieve (get) the value of a property. It often provides a read-only view of a property or performs some calculation before returning a value. It's like asking the house for its address.

- Setter (Mutator Method): A setter is a method used to modify (set) the value of a property. Setters often include logic to validate the new value before assigning it, ensuring data integrity. It's like telling the house to repaint(newColor).

## Objects

- Self contained unit of data.
- Almost every data type in JS can be used as an object, from numbers to to functions.

See notes from day 6.

## Encapsulation

- Fundamntal principle of OOP.
  - Bundles data and methods within a single object.
  - Restrict direct access to its components.

### What is it for?

- Protect data integrity by hiding it to external code.
- Increase Modularity
- Flexibility and Maintainability
- Improve code organization

### Different keywords

- `public` - accessible from anywhere
- `private` - acessible only from within the class
- `protected` - Acessible from within class, and its subclasses.

In JS, we can use the hash sign (#) to make private class field that can only be accessed within the class.


