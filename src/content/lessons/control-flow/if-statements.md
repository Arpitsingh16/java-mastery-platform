# If Statements in Java

The `if` statement is used for decision making in Java.

It executes code only when a condition is true.

---

# Basic Syntax

```java
if (condition) {

    // code
}
```

---

# Example

```java
int age = 18;

if (age >= 18) {

    System.out.println("Eligible to vote");
}
```

---

# Output

```txt
Eligible to vote
```

---

# Boolean Conditions

Conditions always return:

- true
- false

Example:

```java
10 > 5
```

Returns:

```txt
true
```

---

# Comparison Operators

| Operator | Meaning |
|---|---|
| == | Equal |
| != | Not equal |
| > | Greater than |
| < | Less than |
| >= | Greater or equal |
| <= | Less or equal |

---

# Using Logical Operators

```java
int age = 20;

if (age >= 18 && age <= 60) {

    System.out.println("Valid age");
}
```

---

# Common Mistake

Incorrect:

```java
if (age = 18)
```

Correct:

```java
if (age == 18)
```

---

# Multiple Conditions

```java
int number = 10;

if (number > 0) {

    System.out.println("Positive");
}
```

---

# Summary

You learned:

- if statement syntax
- conditional execution
- comparison operators
- logical operators
- common mistakes