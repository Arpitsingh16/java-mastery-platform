# Method Overriding in Java

Method overriding occurs when subclass provides its own implementation of parent method.

---

# Rules

- same method name
- same parameters
- inheritance required

---

# Example

```java
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
        );
    }
}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Dog barks"
        );
    }
}
```

---

# Using Overridden Method

```java
Dog d = new Dog();

d.sound();
```

---

# Output

```txt
Dog barks
```

---

# @Override Annotation

Helps compiler verify overriding correctness.

---

# Runtime Polymorphism

```java
Animal a =
    new Dog();

a.sound();
```

Method resolved during runtime.

---

# super Keyword

Call parent method.

```java
super.sound();
```

---

# Overloading vs Overriding

| Overloading | Overriding |
|---|---|
| same class | inheritance |
| different params | same params |

---

# Summary

You learned:

- method overriding
- inheritance
- runtime polymorphism
- @Override annotation
- super keyword