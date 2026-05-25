# Iterator in Java

Iterator is used to traverse collections safely.

---

# Importing Iterator

```java
import java.util.Iterator;
```

---

# Creating Iterator

```java
ArrayList<String> names =
    new ArrayList<>();

Iterator<String> iterator =
    names.iterator();
```

---

# Traversing Elements

```java
while (iterator.hasNext()) {

    System.out.println(
        iterator.next()
    );
}
```

---

# hasNext()

Checks if more elements exist.

---

# next()

Returns next element.

---

# Removing Elements Safely

```java
while (iterator.hasNext()) {

    String name = iterator.next();

    if (name.equals("Bob")) {

        iterator.remove();
    }
}
```

---

# Why Iterator?

Using normal loops while removing data causes:

```txt
ConcurrentModificationException
```

Iterator prevents this.

---

# Enhanced For Loop vs Iterator

| Enhanced Loop | Iterator |
|---|---|
| Cleaner | More control |
| Cannot safely remove | Safe removal |

---

# ListIterator

Advanced iterator for lists.

Supports:

- backward traversal
- update operations

---

# Summary

You learned:

- Traversing collections
- hasNext()
- next()
- remove()
- Safe iteration