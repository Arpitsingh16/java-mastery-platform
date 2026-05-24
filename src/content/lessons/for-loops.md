# For Loops in Java

A `for` loop is used when the number of iterations is known.

---

# Syntax

```java
for(initialization; condition; update) {

    // code
}
```

---

# Example

```java
public class Main {

    public static void main(String[] args) {

        for(int i = 1; i <= 5; i++) {

            System.out.println(i);
        }
    }
}
```

---

# How It Works

| Part | Purpose |
|---|---|
| initialization | starting point |
| condition | loop runs while true |
| update | changes loop variable |

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

- Printing tables
- Processing arrays
- Repeating tasks
- Data iteration

---

# Nested Loops Example

```java
for(int i = 1; i <= 3; i++) {

    for(int j = 1; j <= 2; j++) {

        System.out.println(i + " " + j);
    }
}
```

---

# Beginner Mistakes

## 1. Infinite Loops

Wrong:

```java
for(int i = 1; i <= 5; ) {
```

No update expression.

---

## 2. Wrong Conditions

```java
i >= 5
```

may stop loop immediately.

---

# Practice Exercises

1. Print numbers 1–100
2. Print multiplication table
3. Print factorial
4. Print star patterns

---

# Mini Challenge

Create a program that prints all even numbers from 1 to 50.