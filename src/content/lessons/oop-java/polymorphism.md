# Polymorphism in Java

Polymorphism means:

```txt
many forms
```

Same method behaves differently.

---

# Types of Polymorphism

| Type | Method |
|---|---|
| Compile-time | Overloading |
| Runtime | Overriding |

---

# Method Overloading Example

```java
class MathUtil {

    int add(int a, int b) {

        return a + b;
    }

    double add(double a, double b) {

        return a + b;
    }
}
```

---

# Method Overriding Example

```java
class Animal {

    void sound() {

        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    void sound() {

        System.out.println("Dog barks");
    }
}
```

---

# Runtime Polymorphism

```java
Animal a = new Dog();

a.sound();
```

---

# Output

```txt
Dog barks
```

---

# Advantages

- flexibility
- extensibility
- reusable code

---

# Dynamic Method Dispatch

Method call resolved during runtime.

---

# Summary

You learned:

- polymorphism
- overloading
- overriding
- runtime polymorphism
- dynamic dispatch