# ArrayList in Java

ArrayList is a dynamic array provided by the Java Collections Framework.

Unlike normal arrays, ArrayList can grow and shrink automatically.

---

# Importing ArrayList

```java
import java.util.ArrayList;
```

---

# Creating an ArrayList

```java
ArrayList<String> names = new ArrayList<>();
```

---

# Adding Elements

```java
names.add("Alice");
names.add("Bob");
names.add("Charlie");
```

---

# Accessing Elements

```java
System.out.println(names.get(0));
```

Output:

```txt
Alice
```

---

# Updating Elements

```java
names.set(1, "David");
```

---

# Removing Elements

```java
names.remove("Alice");

names.remove(0);
```

---

# ArrayList Size

```java
System.out.println(names.size());
```

---

# Iterating ArrayList

```java
for (String name : names) {

    System.out.println(name);
}
```

---

# Important Methods

| Method | Description |
|---|---|
| add() | Add element |
| get() | Access element |
| set() | Update element |
| remove() | Remove element |
| size() | Total elements |
| contains() | Check existence |
| clear() | Remove all |

---

# Internal Working

ArrayList internally uses arrays.

When capacity becomes full:

- Java creates a larger array
- Copies old elements
- Stores new elements

---

# Advantages

- Dynamic size
- Fast random access
- Easy to use

---

# Limitations

- Slower insertion in middle
- Memory overhead during resizing

---

# Array vs ArrayList

| Array | ArrayList |
|---|---|
| Fixed size | Dynamic size |
| Faster | Slight overhead |
| Primitive support | Objects only |

---

# Summary

You learned:

- Creating ArrayList
- Adding/removing elements
- Iterating collections
- Internal resizing
- ArrayList advantages