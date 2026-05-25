# Multi-Dimensional Arrays in Java

A multi-dimensional array stores arrays inside another array.

Most common:

- 2D arrays
- Matrix structures

---

# Declaring a 2D Array

```java
int[][] matrix;
```

---

# Creating a 2D Array

```java
int[][] matrix = new int[3][3];
```

Creates:

- 3 rows
- 3 columns

---

# Initializing a 2D Array

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

---

# Accessing Elements

```java
System.out.println(matrix[0][1]);
```

Output:

```txt
2
```

---

# Iterating Through 2D Arrays

```java
for (int i = 0; i < matrix.length; i++) {

    for (int j = 0; j < matrix[i].length; j++) {

        System.out.print(matrix[i][j] + " ");
    }

    System.out.println();
}
```

---

# Enhanced For Loop

```java
for (int[] row : matrix) {

    for (int value : row) {

        System.out.print(value + " ");
    }

    System.out.println();
}
```

---

# Jagged Arrays

Rows can have different lengths.

```java
int[][] jagged = {
    {1, 2},
    {3, 4, 5},
    {6}
};
```

---

# Real World Uses

- Game boards
- Matrices
- Seating systems
- Tables
- Graph algorithms

---

# Matrix Addition Example

```java
int[][] a = {
    {1, 2},
    {3, 4}
};

int[][] b = {
    {5, 6},
    {7, 8}
};

int[][] result = new int[2][2];

for (int i = 0; i < 2; i++) {

    for (int j = 0; j < 2; j++) {

        result[i][j] = a[i][j] + b[i][j];
    }
}
```

---

# Common Mistakes

- Wrong index access
- Forgetting nested loops
- Incorrect dimensions

---

# Summary

You learned:

- 2D arrays
- Matrix structures
- Nested loops
- Jagged arrays
- Matrix operations