# Break and Continue in Java

`break` and `continue` control loop execution.

---

# Break Statement

`break` immediately exits the loop.

---

# Example

```java
for(int i = 1; i <= 10; i++) {

    if(i == 5) {
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

`continue` skips the current iteration.

---

# Example

```java
for(int i = 1; i <= 5; i++) {

    if(i == 3) {
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

# Real-World Use Cases

- Search systems
- Input validation
- Filtering logic

---

# Beginner Mistakes

## 1. Infinite Loops with continue

Always ensure loop variable updates correctly.

---

# Practice Exercises

1. Skip even numbers
2. Stop loop at specific value
3. Search value in array

---

# Mini Challenge

Create a loop that skips multiples of 3.