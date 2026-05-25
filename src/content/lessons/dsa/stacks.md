# Stack Data Structure in Java

Stack follows:

```txt
LIFO
```

Last In First Out.

---

# Real World Example

- browser history
- undo operations
- recursion stack

---

# Stack Operations

| Operation | Description |
|---|---|
| push() | Add item |
| pop() | Remove top |
| peek() | View top |
| isEmpty() | Check empty |

---

# Using Stack Class

```java
import java.util.Stack;
```

---

# Example

```java
Stack<Integer> stack =
    new Stack<>();

stack.push(10);

stack.push(20);

System.out.println(stack.pop());
```

---

# Output

```txt
20
```

---

# Peek Example

```java
System.out.println(stack.peek());
```

---

# Underflow

Removing from empty stack causes error.

---

# Complexity

| Operation | Complexity |
|---|---|
| push | O(1) |
| pop | O(1) |
| peek | O(1) |

---

# Summary

You learned:

- stack basics
- push/pop
- LIFO principle
- stack applications