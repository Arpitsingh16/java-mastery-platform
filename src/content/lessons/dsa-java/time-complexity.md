# Time Complexity in Java

Time complexity measures algorithm efficiency.

---

# Why Complexity Matters

Efficient programs:

- run faster
- use fewer resources
- scale better

---

# Big O Notation

Big O describes worst-case performance.

---

# Common Complexities

| Complexity | Meaning |
|---|---|
| O(1) | Constant |
| O(log n) | Logarithmic |
| O(n) | Linear |
| O(n log n) | Efficient sorting |
| O(n²) | Nested loops |

---

# O(1) Example

```java
int value = arr[0];
```

---

# O(n) Example

```java
for (int num : arr) {

    System.out.println(num);
}
```

---

# O(n²) Example

```java
for (int i = 0; i < n; i++) {

    for (int j = 0; j < n; j++) {

    }
}
```

---

# Space Complexity

Measures memory usage.

---

# Important Rules

Ignore:

- constants
- lower-order terms

Example:

```txt
O(2n) -> O(n)
```

---

# Complexity Comparison

| Complexity | Speed |
|---|---|
| O(1) | Fastest |
| O(log n) | Very fast |
| O(n) | Acceptable |
| O(n²) | Slow |

---

# Interview Importance

Complexity analysis is heavily asked in:

- coding interviews
- DSA rounds
- system optimization

---

# Summary

You learned:

- Big O notation
- time complexity
- space complexity
- efficiency analysis
```