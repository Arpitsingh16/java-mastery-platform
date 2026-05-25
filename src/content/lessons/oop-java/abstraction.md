# Abstraction in Java

Abstraction hides implementation details and shows essential functionality.

---

# Why Abstraction?

Benefits:

- reduced complexity
- cleaner code
- better maintainability

---

# Abstract Class

```java
abstract class Animal {

    abstract void sound();
}
```

---

# Subclass Implementation

```java
class Dog extends Animal {

    void sound() {

        System.out.println(
            "Dog barks"
        );
    }
}
```

---

# Example

```java
Animal a =
    new Dog();

a.sound();
```

---

# Output

```txt
Dog barks
```

---

# Important Rules

- abstract class cannot create objects
- abstract methods have no body

---

# Concrete Methods Allowed

```java
void sleep() {

    System.out.println("Sleeping");
}
```

---

# Abstract Class vs Interface

| Abstract Class | Interface |
|---|---|
| partial abstraction | full abstraction |

---

# Summary

You learned:

- abstraction
- abstract classes
- abstract methods
- implementation hiding
- abstraction benefits