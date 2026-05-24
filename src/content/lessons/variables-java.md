# Variables in Java

Variables store data in memory.

A variable has:

- data type
- name
- value

---

# Syntax

```java
dataType variableName = value;
```

---

# Example

```java
int age = 20;
```

| Part | Meaning |
|---|---|
| int | data type |
| age | variable name |
| 20 | value |

---

# More Examples

```java
String name = "Abhi";

double salary = 55000.50;

char grade = 'A';
```

---

# Rules for Variable Names

Valid:

```java
age
studentName
_marks
```

Invalid:

```java
1age
student-name
class
```

---

# Variable Declaration

```java
int number;
```

---

# Variable Initialization

```java
number = 50;
```

---

# Combined Example

```java
int number = 50;
```

---

# Example Program

```java
public class Main {

    public static void main(String[] args) {

        String name = "Rahul";

        int age = 21;

        double cgpa = 8.7;

        System.out.println(name);

        System.out.println(age);

        System.out.println(cgpa);
    }
}
```

---

# Why Variables Matter

Variables allow programs to:

- store user data
- perform calculations
- manage application state

---

# Beginner Mistakes

## 1. Using Reserved Keywords

Wrong:

```java
int class = 10;
```

---

## 2. Forgetting Initialization

```java
int number;

System.out.println(number);
```

causes error.

---

## 3. Wrong Data Type

```java
int salary = 50000.75;
```

Incorrect because decimal values need:

```java
double
```

---

# Practice Exercises

1. Store student details
2. Store bank balance
3. Create employee profile
4. Print product details

---

# Mini Challenge

Create a program that stores and prints:

- name
- age
- city
- CGPA