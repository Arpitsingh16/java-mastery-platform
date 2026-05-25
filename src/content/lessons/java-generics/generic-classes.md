# Generic Classes in Java

Generic classes allow code to work with different data types safely.

They improve:

- reusability
- type safety
- readability

---

# Why Generics?

Without generics:

```java
Object data;
```

requires type casting.

Generics remove unnecessary casting.

---

# Basic Syntax

```java
class Box<T> {

    T value;
}
```

`T` represents a type parameter.

---

# Example

```java
class Box<T> {

    T value;

    void setValue(T value) {

        this.value = value;
    }

    T getValue() {

        return value;
    }
}
```

---

# Using Generic Class

```java
Box<Integer> box =
    new Box<>();

box.setValue(100);

System.out.println(
    box.getValue()
);
```

---

# Output

```txt
100
```

---

# Multiple Type Parameters

```java
class Pair<K, V> {

    K key;

    V value;
}
```

---

# Example

```java
Pair<String, Integer> student =
    new Pair<>();
```

---

# Advantages

- compile-time checking
- reusable code
- avoids ClassCastException

---

# Common Generic Types

| Symbol | Meaning |
|---|---|
| T | Type |
| E | Element |
| K | Key |
| V | Value |

---

# Summary

You learned:

- generic classes
- type parameters
- type safety
- reusable code
- multiple generics