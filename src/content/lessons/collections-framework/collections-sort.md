# Sorting Collections in Java

Java provides built-in utilities for sorting collections.

---

# Import Collections

```java
import java.util.Collections;
```

---

# Sorting ArrayList

```java
ArrayList<Integer> numbers =
    new ArrayList<>();

numbers.add(30);
numbers.add(10);
numbers.add(20);

Collections.sort(numbers);

System.out.println(numbers);
```

---

# Output

```txt
[10, 20, 30]
```

---

# Sorting Strings

```java
ArrayList<String> names =
    new ArrayList<>();

Collections.sort(names);
```

---

# Reverse Sorting

```java
Collections.sort(
    numbers,
    Collections.reverseOrder()
);
```

---

# Sorting Custom Objects

Use Comparable interface.

```java
class Student
implements Comparable<Student> {

    int marks;

    @Override
    public int compareTo(Student s) {

        return this.marks - s.marks;
    }
}
```

---

# Comparator Interface

Used for custom sorting logic.

```java
Collections.sort(
    students,
    (a, b) -> a.name.compareTo(b.name)
);
```

---

# Comparable vs Comparator

| Comparable | Comparator |
|---|---|
| Natural ordering | Custom ordering |
| compareTo() | compare() |
| Inside class | Outside class |

---

# Time Complexity

Java uses optimized sorting algorithms.

Typical complexity:

```txt
O(n log n)
```

---

# Summary

You learned:

- Sorting collections
- Reverse sorting
- Comparable
- Comparator
- Custom object sorting