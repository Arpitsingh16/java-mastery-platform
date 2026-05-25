# Interfaces in Java

Interfaces define contracts that classes must implement.

---

# Why Interfaces?

Interfaces provide:

- abstraction
- loose coupling
- multiple inheritance support

---

# Interface Syntax

```java
interface Animal {

    void sound();
}
```

---

# Implementing Interface

```java
class Dog implements Animal {

    public void sound() {

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

- interface methods are public abstract
- variables are public static final

---

# Multiple Interfaces

```java
class Test
implements A, B {

}
```

---

# Default Methods

```java
default void display() {

}
```

Allowed from Java 8.

---

# Interface vs Abstract Class

| Interface | Abstract Class |
|---|---|
| full abstraction | partial abstraction |
| multiple inheritance | single inheritance |

---

# Summary

You learned:

- interfaces
- implements keyword
- abstraction
- multiple inheritance
- default methods