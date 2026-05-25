# Break and Continue in Java

Break and continue control loop execution.

---

# Break Statement

Break exits the loop immediately.

---

# Example

```java
for (int i = 1; i <= 10; i++) {

    if (i == 5) {

        break;
    }

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
```

---

# Continue Statement

Continue skips current iteration.

---

# Example

```java
for (int i = 1; i <= 5; i++) {

    if (i == 3) {

        continue;
    }

    System.out.println(i);
}
```

---

# Output

```txt
1
2
4
5
```

---

# Break in Switch

```java
switch (day) {

    case 1:
        break;
}
```

Prevents fall-through.

---

# Nested Loop Break

Break exits only inner loop.

---

# Summary

You learned:

- break statement
- continue statement
- loop control
- switch break usage