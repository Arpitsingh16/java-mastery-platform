# Binary Search Trees in Java

Binary Search Tree (BST) is a hierarchical data structure.

---

# BST Rules

- left child smaller
- right child larger

---

# Example Structure

```txt
        50
       /  \
     30    70
```

---

# Node Class

```java
class Node {

    int data;

    Node left;
    Node right;

    Node(int data) {

        this.data = data;
    }
}
```

---

# Insertion Logic

```java
if (value < node.data) {

    node.left = insert(node.left, value);

} else {

    node.right = insert(node.right, value);
}
```

---

# Searching in BST

```java
if (node.data == target) {

    return true;
}
```

---

# Traversals

| Traversal | Order |
|---|---|
| Inorder | Left Root Right |
| Preorder | Root Left Right |
| Postorder | Left Right Root |

---

# Inorder Traversal Example

```java
void inorder(Node node) {

    if (node != null) {

        inorder(node.left);

        System.out.println(node.data);

        inorder(node.right);
    }
}
```

---

# Complexity

| Operation | Average |
|---|---|
| Insert | O(log n) |
| Search | O(log n) |
| Delete | O(log n) |

---

# Summary

You learned:

- BST structure
- insertion
- traversal
- searching
- complexity