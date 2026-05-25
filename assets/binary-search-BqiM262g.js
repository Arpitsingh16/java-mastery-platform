var e=`# Binary Search Trees in Java\r
\r
Binary Search Tree (BST) is a hierarchical data structure.\r
\r
---\r
\r
# BST Rules\r
\r
- left child smaller\r
- right child larger\r
\r
---\r
\r
# Example Structure\r
\r
\`\`\`txt\r
        50\r
       /  \\\r
     30    70\r
\`\`\`\r
\r
---\r
\r
# Node Class\r
\r
\`\`\`java\r
class Node {\r
\r
    int data;\r
\r
    Node left;\r
    Node right;\r
\r
    Node(int data) {\r
\r
        this.data = data;\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Insertion Logic\r
\r
\`\`\`java\r
if (value < node.data) {\r
\r
    node.left = insert(node.left, value);\r
\r
} else {\r
\r
    node.right = insert(node.right, value);\r
}\r
\`\`\`\r
\r
---\r
\r
# Searching in BST\r
\r
\`\`\`java\r
if (node.data == target) {\r
\r
    return true;\r
}\r
\`\`\`\r
\r
---\r
\r
# Traversals\r
\r
| Traversal | Order |\r
|---|---|\r
| Inorder | Left Root Right |\r
| Preorder | Root Left Right |\r
| Postorder | Left Right Root |\r
\r
---\r
\r
# Inorder Traversal Example\r
\r
\`\`\`java\r
void inorder(Node node) {\r
\r
    if (node != null) {\r
\r
        inorder(node.left);\r
\r
        System.out.println(node.data);\r
\r
        inorder(node.right);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Complexity\r
\r
| Operation | Average |\r
|---|---|\r
| Insert | O(log n) |\r
| Search | O(log n) |\r
| Delete | O(log n) |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- BST structure\r
- insertion\r
- traversal\r
- searching\r
- complexity`;export{e as default};