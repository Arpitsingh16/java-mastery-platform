# HashMap in Java

HashMap stores data as key-value pairs.

Example:

```txt
101 -> Alice
102 -> Bob
```

---

# Importing HashMap

```java
import java.util.HashMap;
```

---

# Creating HashMap

```java
HashMap<Integer, String> students =
    new HashMap<>();
```

---

# Adding Data

```java
students.put(101, "Alice");

students.put(102, "Bob");
```

---

# Accessing Values

```java
System.out.println(
    students.get(101)
);
```

---

# Removing Data

```java
students.remove(102);
```

---

# Checking Keys

```java
students.containsKey(101);
```

---

# Iterating HashMap

```java
for (Integer key : students.keySet()) {

    System.out.println(
        key + " : " + students.get(key)
    );
}
```

---

# Important Features

- Fast lookup
- No duplicate keys
- Allows one null key
- Unordered storage

---

# Internal Working

HashMap uses:

- Hashing
- Buckets
- Hash codes

---

# Time Complexity

| Operation | Complexity |
|---|---|
| put() | O(1) |
| get() | O(1) |
| remove() | O(1) |

---

# Common Methods

| Method | Description |
|---|---|
| put() | Add data |
| get() | Access value |
| remove() | Delete value |
| containsKey() | Check key |
| keySet() | Get all keys |

---

# Summary

You learned:

- Key-value storage
- HashMap operations
- Iteration
- Internal hashing
- Complexity analysis