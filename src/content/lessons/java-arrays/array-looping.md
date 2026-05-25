# Looping Through Arrays in Java

Looping allows us to access every element inside an array.

---

# Using a For Loop

```java
int[] numbers = {10, 20, 30, 40};

for (int i = 0; i < numbers.length; i++) {

    System.out.println(numbers[i]);
}
```

---

# Output

```txt
10
20
30
40
```

---

# Enhanced For Loop

Also called:

- For-each loop

Cleaner syntax.

```java
int[] numbers = {10, 20, 30};

for (int num : numbers) {

    System.out.println(num);
}
```

---

# Difference Between Loops

| For Loop | Enhanced For Loop |
|---|---|
| Uses index | No index |
| More control | Cleaner syntax |
| Better for modifications | Better for reading |

---

# Reverse Iteration

```java
for (int i = numbers.length - 1; i >= 0; i--) {

    System.out.println(numbers[i]);
}
```

---

# Calculating Sum

```java
int sum = 0;

for (int num : numbers) {

    sum += num;
}

System.out.println(sum);
```

---

# Finding Maximum Element

```java
int max = numbers[0];

for (int num : numbers) {

    if (num > max) {

        max = num;
    }
}
```

---

# Common Mistake

## Array Index Out Of Bounds

```java
numbers[5]
```

Invalid if size smaller than 6.

Causes:

```txt
ArrayIndexOutOfBoundsException
```

---

# Nested Loop Example

```java
int[][] matrix = {
    {1, 2},
    {3, 4}
};

for (int i = 0; i < matrix.length; i++) {

    for (int j = 0; j < matrix[i].length; j++) {

        System.out.print(matrix[i][j] + " ");
    }

    System.out.println();
}
```

---

# Summary

You learned:

- Standard for loop
- Enhanced for loop
- Reverse iteration
- Array calculations
- Common iteration mistakes