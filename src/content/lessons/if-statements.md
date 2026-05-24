# If Statements in Java

An `if` statement allows a program to make decisions based on conditions.

## Syntax

```java
if(condition) {
    // code executes if condition is true
}
```

---

## Example

```java
public class Main {

    public static void main(String[] args) {

        int age = 20;

        if(age >= 18) {
            System.out.println("You are eligible to vote.");
        }
    }
}
```

---

## How It Works

The condition inside the parentheses is evaluated.

- If the condition is `true`
  → block executes

- If the condition is `false`
  → block is skipped

---

## Comparison Operators

| Operator | Meaning |
|---|---|
| `==` | Equal to |
| `!=` | Not equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

---

## Real-World Example

```java
double balance = 5000;

if(balance > 1000) {
    System.out.println("Minimum balance maintained");
}
```

---

# Beginner Mistakes

## 1. Using `=` Instead of `==`

Wrong:

```java
if(age = 18)
```

Correct:

```java
if(age == 18)
```

---

## 2. Forgetting Curly Braces

Bad practice:

```java
if(age > 18)
    System.out.println("Adult");
```

Better:

```java
if(age > 18) {
    System.out.println("Adult");
}
```

---

# Practice Exercises

1. Check if a number is positive
2. Check if a student passed
3. Check voting eligibility
4. Check if temperature is above 30

---

# Mini Challenge

Write a Java program that checks whether a number is even or odd.