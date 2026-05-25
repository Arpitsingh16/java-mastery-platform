# While Loops in Java

While loops repeat code while a condition remains true.

---

# Syntax

```java
while (condition) {

    // code
}
```

---

# Example

```java
int i = 1;

while (i <= 5) {

    System.out.println(i);

    i++;
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

# Important Point

Condition is checked BEFORE execution.

---

# Infinite Loop Example

```java
while (true) {

}
```

---

# User Input Example

```java
Scanner sc = new Scanner(System.in);

int number = 0;

while (number != -1) {

    number = sc.nextInt();
}
```

---

# While vs For Loop

| While | For |
|---|---|
| Unknown iterations | Known iterations |
| Flexible | Compact |

---

# Common Mistake

Forgetting increment:

```java
i++;
```

causes infinite loop.

---

# Summary

You learned:

- while loop syntax
- condition checking
- infinite loops
- input-driven loops