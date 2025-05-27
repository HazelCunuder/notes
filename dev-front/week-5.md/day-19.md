# Day 19

## Inheritance

- Allows a new class (then called subclass or child class), to inherit methods and attributes from existing class.

### What is it for?

1. Reuse Code: Can create a parent class and reuse it with Child Classes
2. Establish a hierarchy: Organize classes into logical hierarchy
3. Extensibility: Extend functionability of a class, without modifying og code.

### How to write it?

- In JS, we use the `extend` keyword to create inheritance.

### When to use it?

- When there is a "(child) is, a (parent)" relationship between the classes.

> If you can phrase it as "X is a child of Y", then inheritance is often a good candidate.

### Parent -> Child, Child -> Parent relationships

- Parent - Child: Provides General characteristics and behavior. Child inheritsthese, and adds more characteristics, or overides inherited behaviours. Child is dependant on Parent.
- Child - Parent: Child is specialized version of parent. Gets all public and protected members of parent. When child instance is created, we call the parent constructor with `super()`.
