# Do While Loop in Java

A `do-while` loop executes at least once before checking the condition.

---

# Syntax

```java
do {

    // code

} while(condition);
```

---

# Example

```java
public class Main {

    public static void main(String[] args) {

        int i = 1;

        do {

            System.out.println(i);

            i++;

        } while(i <= 5);
    }
}
```

---

# Key Difference

| Loop | Condition Checked |
|---|---|
| while | before execution |
| do-while | after execution |

---

# Real-World Use Cases

- Menu systems
- Retry systems
- User interaction loops

---

# Beginner Mistakes

## 1. Missing Semicolon

Wrong:

```java
while(i <= 5)
```

Correct:

```java
while(i <= 5);
```

---

# Practice Exercises

1. Repeat menu program
2. Password retry system
3. Continue-until-exit application

---

# Mini Challenge

Create a simple menu-driven calculator using do-while.