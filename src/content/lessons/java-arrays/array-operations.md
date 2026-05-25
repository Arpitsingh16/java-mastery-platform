# Common Array Operations in Java

Arrays support many common operations used in programming and algorithms.

---

# Traversing Arrays

```java
int[] numbers = {10, 20, 30};

for (int num : numbers) {

    System.out.println(num);
}
```

---

# Searching Elements

## Linear Search

```java
int target = 20;

for (int num : numbers) {

    if (num == target) {

        System.out.println("Found");
    }
}
```

---

# Sorting Arrays

Using Arrays utility class.

```java
import java.util.Arrays;

int[] numbers = {4, 2, 1, 3};

Arrays.sort(numbers);

System.out.println(Arrays.toString(numbers));
```

---

# Copying Arrays

```java
int[] copy = Arrays.copyOf(numbers, numbers.length);
```

---

# Comparing Arrays

```java
Arrays.equals(arr1, arr2);
```

---

# Filling Arrays

```java
Arrays.fill(numbers, 0);
```

---

# Binary Search

Array must be sorted first.

```java
Arrays.binarySearch(numbers, 3);
```

---

# Reversing Arrays

```java
for (int i = 0; i < numbers.length / 2; i++) {

    int temp = numbers[i];

    numbers[i] =
        numbers[numbers.length - 1 - i];

    numbers[numbers.length - 1 - i] = temp;
}
```

---

# Finding Maximum Value

```java
int max = numbers[0];

for (int num : numbers) {

    if (num > max) {

        max = num;
    }
}
```

---

# Arrays Utility Class

Located in:

```java
java.util.Arrays
```

Provides useful helper methods.

---

# Time Complexity

| Operation | Complexity |
|---|---|
| Access | O(1) |
| Linear Search | O(n) |
| Binary Search | O(log n) |
| Sorting | O(n log n) |

---

# Interview Question

## Why is array access O(1)?

Because arrays use contiguous memory allocation.

Address calculation is direct.

---

# Summary

You learned:

- Searching arrays
- Sorting arrays
- Copying arrays
- Comparing arrays
- Utility methods
- Complexity analysis