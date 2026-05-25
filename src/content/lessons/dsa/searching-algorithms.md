# Searching Algorithms in Java

Searching algorithms locate elements inside data structures.

---

# Linear Search

Checks elements one-by-one.

---

# Example

```java
int[] arr = {10, 20, 30};

int target = 20;

for (int i = 0; i < arr.length; i++) {

    if (arr[i] == target) {

        System.out.println("Found");
    }
}
```

---

# Complexity

```txt
O(n)
```

---

# Binary Search

Works only on sorted arrays.

---

# Binary Search Example

```java
int[] arr = {1, 2, 3, 4, 5};

int left = 0;
int right = arr.length - 1;

while (left <= right) {

    int mid = (left + right) / 2;

    if (arr[mid] == 3) {

        System.out.println("Found");
        break;
    }

    if (arr[mid] < 3) {

        left = mid + 1;

    } else {

        right = mid - 1;
    }
}
```

---

# Complexity

```txt
O(log n)
```

---

# Linear vs Binary Search

| Linear | Binary |
|---|---|
| Slow | Fast |
| Unsorted works | Sorted only |
| O(n) | O(log n) |

---

# Summary

You learned:

- linear search
- binary search
- complexity comparison
- sorted array requirement