# If Else Statements in Java

`if-else` statements allow programs to choose between two paths.

## Syntax

```java
if(condition) {
    // executes if true
}
else {
    // executes if false
}
```

---

## Example

```java
public class Main {

    public static void main(String[] args) {

        int marks = 45;

        if(marks >= 40) {
            System.out.println("Pass");
        }
        else {
            System.out.println("Fail");
        }
    }
}
```

---

# Flow Explanation

- Condition checked
- If true → `if` block executes
- Otherwise → `else` block executes

---

# Real-World Use Cases

- Login systems
- ATM withdrawal checks
- Eligibility systems
- Result evaluation

---

# Example — ATM Balance Check

```java
double balance = 2000;
double withdraw = 5000;

if(balance >= withdraw) {
    System.out.println("Withdrawal successful");
}
else {
    System.out.println("Insufficient balance");
}
```

---

# Beginner Mistakes

## 1. Missing Braces

Always use braces for readability.

## 2. Wrong Conditions

Avoid impossible conditions:

```java
if(age < 0)
```

unless intentionally validating input.

---

# Practice Exercises

1. Largest of two numbers
2. Check odd/even
3. Pass/fail system
4. Compare temperatures

---

# Mini Challenge

Create a simple login checker using username/password conditions.