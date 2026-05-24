# While Loops in Java

A `while` loop runs while a condition remains true.

It is useful when the number of iterations is unknown.

---

# Syntax

```java
while(condition) {

    // code
}
```

---

# Example

```java
public class Main {

    public static void main(String[] args) {

        int i = 1;

        while(i <= 5) {

            System.out.println(i);

            i++;
        }
    }
}
```

---

# Output

```txt
1
2
3
4
5
```

---

# Real-World Use Cases

- Login systems
- Input validation
- Game loops
- ATM systems

---

# Beginner Mistakes

## 1. Infinite Loops

Wrong:

```java
while(i <= 5) {
    System.out.println(i);
}
```

No increment.

---

## 2. Incorrect Conditions

Always verify loop termination condition.

---

# Practice Exercises

1. Print numbers 1–50
2. Sum first 10 numbers
3. Reverse counting
4. Password retry system

---

# Mini Challenge

Create a number guessing loop.