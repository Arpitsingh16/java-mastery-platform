# Queue Data Structure in Java

Queue follows:

```txt
FIFO
```

First In First Out.

---

# Real World Examples

- ticket systems
- printer queue
- task scheduling

---

# Queue Operations

| Operation | Description |
|---|---|
| offer() | Insert |
| poll() | Remove |
| peek() | View front |

---

# Using Queue Interface

```java
import java.util.Queue;

import java.util.LinkedList;
```

---

# Example

```java
Queue<Integer> queue =
    new LinkedList<>();

queue.offer(10);

queue.offer(20);

System.out.println(queue.poll());
```

---

# Output

```txt
10
```

---

# Peek Example

```java
System.out.println(queue.peek());
```

---

# Queue Complexity

| Operation | Complexity |
|---|---|
| offer | O(1) |
| poll | O(1) |
| peek | O(1) |

---

# Queue Applications

- scheduling
- buffering
- BFS traversal

---

# Summary

You learned:

- queue basics
- FIFO structure
- queue operations
- real-world applications