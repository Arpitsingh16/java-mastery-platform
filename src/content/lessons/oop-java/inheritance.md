# Inheritance in Java

Inheritance allows one class to acquire properties of another class.

---

# Why Inheritance?

Benefits:

- code reuse
- cleaner design
- hierarchical relationships

---

# Syntax

```java
class Child extends Parent {

}
```

---

# Example

```java
class Animal {

    void sound() {

        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

}
```

---

# Using Inherited Method

```java
Dog d = new Dog();

d.sound();
```

---

# Output

```txt
Animal sound
```

---

# Types of Inheritance

| Type | Supported |
|---|---|
| Single | Yes |
| Multilevel | Yes |
| Multiple | No via classes |

---

# Multilevel Example

```java
class A {}

class B extends A {}

class C extends B {}
```

---

# super Keyword

Used to access parent members.

```java
super.sound();
```

---

# Advantages

- reduces duplication
- improves maintainability
- supports polymorphism

---

# Summary

You learned:

- inheritance
- extends keyword
- parent-child classes
- super keyword
- inheritance types