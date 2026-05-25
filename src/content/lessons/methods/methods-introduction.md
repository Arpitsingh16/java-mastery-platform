# Introduction to Methods in Java

Methods are reusable blocks of code.

They help:

- reduce repetition
- improve readability
- organize logic

---

# Basic Syntax

```java
returnType methodName() {

    // code
}
```

---

# Example

```java
public class Main {

    static void greet() {

        System.out.println(
            "Welcome to Java"
        );
    }

    public static void main(String[] args) {

        greet();
    }
}
```

---

# Output

```txt
Welcome to Java
```

---

# Method Components

| Part | Purpose |
|---|---|
| return type | returned value |
| method name | identifier |
| parameters | input values |
| body | logic |

---

# Void Methods

Methods that return nothing.

```java
void display() {

}
```

---

# Calling Methods

```java
greet();
```

Method executes when called.

---

# Why Methods Matter

Without methods:

- repeated code increases
- debugging becomes difficult

---

# Advantages

- code reuse
- modular programming
- easier maintenance

---

# Summary

You learned:

- method basics
- syntax
- method calls
- void methods
- reusable code