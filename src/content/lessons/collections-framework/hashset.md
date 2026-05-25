# HashSet in Java

HashSet stores unique elements.

Duplicate values are automatically removed.

---

# Importing HashSet

```java
import java.util.HashSet;
```

---

# Creating HashSet

```java
HashSet<String> fruits =
    new HashSet<>();
```

---

# Adding Elements

```java
fruits.add("Apple");

fruits.add("Banana");

fruits.add("Apple");
```

Duplicate Apple is ignored.

---

# Iterating HashSet

```java
for (String fruit : fruits) {

    System.out.println(fruit);
}
```

---

# Removing Elements

```java
fruits.remove("Banana");
```

---

# Checking Elements

```java
fruits.contains("Apple");
```

---

# Important Features

- Unique elements only
- No guaranteed order
- Fast operations

---

# Internal Working

HashSet internally uses:

```txt
HashMap
```

Each value becomes a key internally.

---

# Time Complexity

| Operation | Complexity |
|---|---|
| add() | O(1) |
| remove() | O(1) |
| contains() | O(1) |

---

# Common Use Cases

- Removing duplicates
- Fast lookups
- Membership testing

---

# HashSet vs ArrayList

| HashSet | ArrayList |
|---|---|
| Unique values | Duplicates allowed |
| Unordered | Ordered |
| Faster search | Slower search |

---

# Summary

You learned:

- HashSet basics
- Unique storage
- Internal hashing
- Fast lookups
- Common operations