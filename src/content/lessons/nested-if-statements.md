# Nested If Statements in Java

A nested `if` statement means placing an `if` statement inside another `if` block.

This helps handle multiple conditions.

---

# Syntax

```java
if(condition1) {

    if(condition2) {
        // code
    }

}
```

---

# Example

```java
public class Main {

    public static void main(String[] args) {

        int age = 25;
        boolean hasLicense = true;

        if(age >= 18) {

            if(hasLicense) {
                System.out.println("You can drive.");
            }

        }
    }
}
```

---

# How It Works

1. Outer condition executes first
2. Inner condition executes only if outer condition is true

---

# Real-World Use Cases

- Banking systems
- Login verification
- Eligibility systems
- Multi-step validation

---

# Example — Student Scholarship

```java
int marks = 90;
boolean sportsQuota = true;

if(marks >= 85) {

    if(sportsQuota) {
        System.out.println("Scholarship Approved");
    }

}
```

---

# Beginner Mistakes

## 1. Excessive Nesting

Too much nesting makes code difficult to read.

Bad practice:

```java
if(a) {
    if(b) {
        if(c) {
```

---

## 2. Forgetting Braces

Always use braces for clarity.

---

# Practice Exercises

1. Check employee bonus eligibility
2. Verify ATM withdrawal conditions
3. Validate username and password

---

# Mini Challenge

Create a Java program that checks:

- age >= 18
- citizen == true

Then print voting eligibility.