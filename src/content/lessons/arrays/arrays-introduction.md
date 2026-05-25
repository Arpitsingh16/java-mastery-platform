# Introduction to Arrays in Java

Arrays are one of the most fundamental data structures in Java.

An array allows you to store multiple values of the same type inside a single variable.

---

# Why Arrays?

Without arrays:

```java
int marks1 = 90;
int marks2 = 85;
int marks3 = 78;
```

With arrays:

```java
int[] marks = {90, 85, 78};
```

Arrays make code cleaner, scalable, and easier to manage.

---

# Declaring an Array

```java
int[] numbers;
```

This only declares the array reference.

---

# Creating an Array

```java
int[] numbers = new int[5];
```

This creates an array capable of storing 5 integers.

Default values:

| Data Type | Default Value |
|---|---|
| int | 0 |
| double | 0.0 |
| boolean | false |
| String | null |

---

# Initializing Arrays

```java
int[] numbers = {10, 20, 30, 40};
```

---

# Accessing Array Elements

Arrays use indexing.

Index starts from 0.

```java
System.out.println(numbers[0]);
```

Output:

```txt
10
```

---

# Modifying Elements

```java
numbers[1] = 100;
```

---

# Array Length

```java
System.out.println(numbers.length);
```

---

# Complete Example

```java
public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30};

        System.out.println(numbers[0]);

        numbers[1] = 50;

        System.out.println(numbers[1]);

        System.out.println(numbers.length);
    }
}
```

---

# Important Notes

- Arrays store fixed-size data
- All elements must be same datatype
- Index starts from 0
- Arrays are stored in Heap memory

---

# Advantages of Arrays

- Fast access using index
- Easy iteration
- Memory efficient
- Useful for algorithms

---

# Limitations of Arrays

- Fixed size
- Cannot directly add/remove dynamically
- Same datatype only

---

# Interview Question

## Difference between Array and ArrayList?

| Array | ArrayList |
|---|---|
| Fixed size | Dynamic size |
| Faster | Slightly slower |
| Primitive support | Objects only |
| Core language feature | Part of Collections Framework |

---

# Summary

In this lesson you learned:

- What arrays are
- How to declare arrays
- How to initialize arrays
- How indexing works
- Advantages and limitations of arrays