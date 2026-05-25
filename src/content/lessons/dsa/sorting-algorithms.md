# Sorting Algorithms in Java

Sorting arranges elements in a specific order.

Usually:

- Ascending
- Descending

---

# Why Sorting Matters

Sorting improves:

- searching speed
- organization
- algorithm efficiency

---

# Bubble Sort

Repeatedly swaps adjacent elements.

---

# Bubble Sort Example

```java
int[] arr = {5, 3, 1, 4};

for (int i = 0; i < arr.length - 1; i++) {

    for (int j = 0; j < arr.length - i - 1; j++) {

        if (arr[j] > arr[j + 1]) {

            int temp = arr[j];

            arr[j] = arr[j + 1];

            arr[j + 1] = temp;
        }
    }
}
```

---

# Selection Sort

Finds minimum element repeatedly.

---

# Insertion Sort

Builds sorted array gradually.

---

# Merge Sort

Uses divide-and-conquer strategy.

Complexity:

```txt
O(n log n)
```

---

# Quick Sort

Very fast practical sorting algorithm.

Uses pivot partitioning.

---

# Time Complexity Table

| Algorithm | Best | Worst |
|---|---|---|
| Bubble Sort | O(n) | O(n²) |
| Selection Sort | O(n²) | O(n²) |
| Insertion Sort | O(n) | O(n²) |
| Merge Sort | O(n log n) | O(n log n) |
| Quick Sort | O(n log n) | O(n²) |

---

# Java Built-in Sorting

```java
Arrays.sort(arr);
```

---

# Summary

You learned:

- sorting basics
- bubble sort
- merge sort
- quick sort
- complexity analysis