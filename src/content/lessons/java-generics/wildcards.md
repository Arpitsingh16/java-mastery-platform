# Wildcards in Java Generics

Wildcards provide flexibility in generic programming.

Symbol used:

```java
?
```

---

# Why Wildcards?

Sometimes exact type is unknown.

Wildcards allow generic flexibility.

---

# Unbounded Wildcard

```java
List<?>
```

Accepts any type.

---

# Example

```java
List<?> items =
    new ArrayList<String>();
```

---

# Upper Bounded Wildcard

```java
<? extends Number>
```

Accepts subclasses of Number.

---

# Example

```java
void printNumbers(
    List<? extends Number> list
) {

    for (Number n : list) {

        System.out.println(n);
    }
}
```

---

# Lower Bounded Wildcard

```java
<? super Integer>
```

Accepts Integer or parent classes.

---

# Example

```java
List<? super Integer> list =
    new ArrayList<Number>();
```

---

# PECS Principle

```txt
Producer Extends
Consumer Super
```

---

# Wildcard Comparison

| Wildcard | Purpose |
|---|---|
| <?> | Any type |
| <? extends T> | Read-only flexibility |
| <? super T> | Insert flexibility |

---

# Important Restriction

Cannot safely add elements into:

```java
List<?>
```

---

# Summary

You learned:

- wildcard basics
- upper bounds
- lower bounds
- PECS principle
- flexible generics