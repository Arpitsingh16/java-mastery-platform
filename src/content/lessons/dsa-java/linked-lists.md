# Linked Lists in Java

Linked Lists store data using nodes.

Each node contains:

- data
- reference to next node

---

# Node Structure

```txt
[data | next]
```

---

# Types of Linked Lists

- Singly Linked List
- Doubly Linked List
- Circular Linked List

---

# Singly Linked List Example

```java
class Node {

    int data;

    Node next;

    Node(int data) {

        this.data = data;
    }
}
```

---

# Creating Nodes

```java
Node first = new Node(10);

Node second = new Node(20);

first.next = second;
```

---

# Traversing List

```java
Node temp = first;

while (temp != null) {

    System.out.println(temp.data);

    temp = temp.next;
}
```

---

# Advantages

- dynamic size
- efficient insertion/deletion

---

# Disadvantages

- slower access
- extra memory usage

---

# Array vs Linked List

| Array | Linked List |
|---|---|
| Fixed size | Dynamic |
| Fast access | Slow access |
| Contiguous memory | Node-based |

---

# Summary

You learned:

- node structure
- linked traversal
- singly linked lists
- advantages/disadvantages