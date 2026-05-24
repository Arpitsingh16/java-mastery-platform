# Switch Statements in Java

A `switch` statement is used when multiple conditions depend on a single variable.

It improves readability compared to many `if-else` blocks.

---

# Syntax

```java
switch(variable) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
```

---

# Example

```java
public class Main {

    public static void main(String[] args) {

        int day = 3;

        switch(day) {

            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            case 3:
                System.out.println("Wednesday");
                break;

            default:
                System.out.println("Invalid Day");
        }
    }
}
```

---

# Why `break` Matters

Without `break`, execution continues into the next case.

This is called:

```txt
fall-through
```

---

# Real-World Use Cases

- Calculator menus
- ATM systems
- Game menus
- CLI applications

---

# Beginner Mistakes

## 1. Forgetting break

```java
case 1:
    System.out.println("A");
```

may continue to next case unintentionally.

---

## 2. Overusing switch

Use `if-else` when conditions are complex.

---

# Practice Exercises

1. Day of week program
2. Calculator using switch
3. Menu-driven food ordering system

---

# Mini Challenge

Create a program that prints month names using switch.