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

## Interface

- Contract that defines set methods that a class has to implement.
- Defines *what* a class should do, not *how*
- Not native to JS

### Interest of Interfaces

- Enforcing Contracts: Guarantee that any class using the interface will provide the specific functionalities.
- Achieve Polymorphism: Objects of unrelated classes will be treated uniformly.
- Decoupling Code: Wirte code that depends on interface, rather than a specific class.
- Enable Multiple Inheritance of Behavior: A class can have multiple interfaces, so it can inherit behavior from various sources.

### Differences with abstract Class

| Feature | Abstract Class | Interface |
| :------------------ | :--------------------------------------------- | :-------------------------------------------- |
| **Instantiation** | Cannot be instantiated directly. | Cannot be instantiated directly. |
| **Implementation** | Can have both abstract (unimplemented) and concrete (implemented) methods. Can also have attributes. | Only declares methods (and sometimes properties); no implementation allowed. No attributes. |
| **Inheritance** | A class can only inherit from **one** abstract class. | A class can implement **multiple** interfaces. |
| **Purpose** | Provides a common base for related classes, offering partial implementation and forcing subclasses to complete it. Represents an "**is-a**" relationship in a hierarchy. | Defines a contract for behavior that unrelated classes can agree to fulfill. Represents a "**can-do**" or "**has-a-capability**" relationship. |
| **Usage** | Used when you want to share code *and* define common behavior for a family of objects. | Used when you want to define a set of behaviors that diverse, possibly unrelated, classes should adhere to. |
