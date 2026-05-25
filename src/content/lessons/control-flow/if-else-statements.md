# If Else Statements in Java

`if-else` allows Java programs to choose between two paths.

---

# Syntax

```java
if (condition) {

    // true block

} else {

    // false block
}
```

---

# Example

```java
int age = 16;

if (age >= 18) {

    System.out.println("Adult");

} else {

    System.out.println("Minor");
}
```

---

# Output

```txt
Minor
```

---

# Even or Odd Program

```java
int number = 7;

if (number % 2 == 0) {

    System.out.println("Even");

} else {

    System.out.println("Odd");
}
```

---

# Positive or Negative

```java
int num = -5;

if (num > 0) {

    System.out.println("Positive");

} else {

    System.out.println("Negative");
}
```

---

# Using Multiple Conditions

```java
int marks = 75;

if (marks >= 40) {

    System.out.println("Pass");

} else {

    System.out.println("Fail");
}
```

---

# Important Notes

- Only one block executes
- else block is optional
- Curly braces improve readability

---

# Summary

You learned:

- if-else syntax
- true/false branching
- condition evaluation
- practical examples