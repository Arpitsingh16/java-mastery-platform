# Nested If Statements in Java

A nested if statement means placing one if statement inside another.

---

# Syntax

```java
if (condition1) {

    if (condition2) {

        // code
    }
}
```

---

# Example

```java
int age = 25;
boolean hasLicense = true;

if (age >= 18) {

    if (hasLicense) {

        System.out.println("Can drive");
    }
}
```

---

# Output

```txt
Can drive
```

---

# Why Use Nested If?

Nested if statements help when:

- one condition depends on another
- complex validation is needed

---

# Student Example

```java
int marks = 85;

if (marks >= 40) {

    if (marks >= 75) {

        System.out.println("Distinction");
    }
}
```

---

# Deep Nesting Problem

Too much nesting creates unreadable code.

Bad:

```java
if () {
    if () {
        if () {
        }
    }
}
```

---

# Better Alternative

Use logical operators.

```java
if (age >= 18 && hasLicense) {

    System.out.println("Can drive");
}
```

---

# Summary

You learned:

- nested conditions
- dependent validation
- readability concerns
- logical operator optimization