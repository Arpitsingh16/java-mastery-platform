# Throw and Throws in Java

Java provides:

- throw
- throws

for exception handling.

---

# throw Keyword

Used to manually create exceptions.

---

# Example

```java
int age = 15;

if (age < 18) {

    throw new ArithmeticException(
        "Not eligible"
    );
}
```

---

# Output

```txt
Exception in thread "main"
```

---

# throws Keyword

Used in method declaration.

---

# Example

```java
void readFile()
throws IOException {

}
```

---

# Difference Between Throw and Throws

| throw | throws |
|---|---|
| creates exception | declares exception |
| used inside method | used in signature |

---

# Custom Validation Example

```java
void validate(int marks) {

    if (marks < 0) {

        throw new IllegalArgumentException(
            "Marks cannot be negative"
        );
    }
}
```

---

# Multiple Exceptions

```java
void process()
throws IOException, SQLException {

}
```

---

# Checked vs Unchecked Exceptions

| Checked | Unchecked |
|---|---|
| compile-time | runtime |
| must handle | optional |

---

# Summary

You learned:

- throw keyword
- throws keyword
- manual exceptions
- method exception declaration
- checked vs unchecked exceptions