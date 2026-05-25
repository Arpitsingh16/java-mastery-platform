# LinkedList in Java

LinkedList is a doubly linked list implementation in Java.

Each element stores:

- data
- reference to next node
- reference to previous node

---

# Importing LinkedList

```java
import java.util.LinkedList;
```

---

# Creating LinkedList

```java
LinkedList<String> cities =
    new LinkedList<>();
```

---

# Adding Elements

```java
cities.add("Delhi");

cities.add("Mumbai");

cities.addFirst("Pune");

cities.addLast("Bangalore");
```

---

# Accessing Elements

```java
System.out.println(cities.get(0));
```

---

# Removing Elements

```java
cities.removeFirst();

cities.removeLast();
```

---

# Iterating LinkedList

```java
for (String city : cities) {

    System.out.println(city);
}
```

---

# LinkedList as Queue

```java
cities.offer("Hyderabad");

cities.poll();
```

---

# Advantages

- Fast insertion/deletion
- Dynamic size
- Good for queue structures

---

# Disadvantages

- Slower random access
- More memory usage

---

# ArrayList vs LinkedList

| ArrayList | LinkedList |
|---|---|
| Fast access | Slow access |
| Slow insertion | Fast insertion |
| Uses array | Uses nodes |

---

# Internal Structure

```txt
Node <-> Node <-> Node
```

Each node points both directions.

---

# Summary

You learned:

- LinkedList basics
- Node structure
- Insertion/deletion
- Queue operations
- ArrayList comparison