# For Loops in Java

For loops are used when the number of iterations is known.

---

# Syntax

```java
for (initialization; condition; update) {

    // code
}
```

---

# Example

```java
for (int i = 1; i <= 5; i++) {

    System.out.println(i);
}
```

---

# Output

```txt
1
2
3
4
5
```

---

# Loop Components

| Part | Purpose |
|---|---|
| initialization | starting value |
| condition | loop continuation |
| update | increment/decrement |

---

# Reverse Loop

```java
for (int i = 5; i >= 1; i--) {

    System.out.println(i);
}
```

---

# Infinite Loop

```java
for (;;) {

}
```

Avoid accidentally creating these.

---

# Sum Example

```java
int sum = 0;

for (int i = 1; i <= 10; i++) {

    sum += i;
}
```

---

# Nested Loops

```java
for (int i = 1; i <= 3; i++) {

    for (int j = 1; j <= 3; j++) {

        System.out.print("* ");
    }

    System.out.println();
}
```

---

# Summary

You learned:

- for loop syntax
- iteration
- reverse loops
- nested loops
- infinite loops