# Primitive Data Types in Java

Primitive data types store simple values directly in memory.

Java provides 8 primitive data types.

---

# List of Primitive Types

| Data Type | Size | Example |
|---|---|---|
| byte | 1 byte | 100 |
| short | 2 bytes | 2000 |
| int | 4 bytes | 50000 |
| long | 8 bytes | 100000L |
| float | 4 bytes | 5.5f |
| double | 8 bytes | 99.99 |
| char | 2 bytes | 'A' |
| boolean | 1 bit | true |

---

# Integer Types

```java
int age = 20;
long population = 8000000L;
```

---

# Decimal Types

```java
float price = 99.5f;
double salary = 55000.75;
```

---

# Character Type

```java
char grade = 'A';
```

Characters use single quotes.

---

# Boolean Type

```java
boolean isJavaFun = true;
```

Boolean stores:

- true
- false

---

# Example Program

```java
public class Main {

    public static void main(String[] args) {

        int age = 21;

        double cgpa = 8.5;

        char grade = 'A';

        boolean passed = true;

        System.out.println(age);
        System.out.println(cgpa);
        System.out.println(grade);
        System.out.println(passed);
    }
}
```

---

# Why Data Types Matter

They control:

- memory usage
- performance
- allowed operations

---

# Beginner Mistakes

## 1. Forgetting f in float

Wrong:

```java
float num = 5.5;
```

Correct:

```java
float num = 5.5f;
```

---

## 2. Using Double Quotes for char

Wrong:

```java
char grade = "A";
```

Correct:

```java
char grade = 'A';
```

---

# Practice Exercises

1. Create variables of all primitive types
2. Store student information
3. Print employee salary
4. Store product price

---

# Mini Challenge

Create a program storing:

- name initial
- age
- height
- marks
- pass status