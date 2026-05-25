var e=`# Linked Lists in Java\r
\r
Linked Lists store data using nodes.\r
\r
Each node contains:\r
\r
- data\r
- reference to next node\r
\r
---\r
\r
# Node Structure\r
\r
\`\`\`txt\r
[data | next]\r
\`\`\`\r
\r
---\r
\r
# Types of Linked Lists\r
\r
- Singly Linked List\r
- Doubly Linked List\r
- Circular Linked List\r
\r
---\r
\r
# Singly Linked List Example\r
\r
\`\`\`java\r
class Node {\r
\r
    int data;\r
\r
    Node next;\r
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
# Creating Nodes\r
\r
\`\`\`java\r
Node first = new Node(10);\r
\r
Node second = new Node(20);\r
\r
first.next = second;\r
\`\`\`\r
\r
---\r
\r
# Traversing List\r
\r
\`\`\`java\r
Node temp = first;\r
\r
while (temp != null) {\r
\r
    System.out.println(temp.data);\r
\r
    temp = temp.next;\r
}\r
\`\`\`\r
\r
---\r
\r
# Advantages\r
\r
- dynamic size\r
- efficient insertion/deletion\r
\r
---\r
\r
# Disadvantages\r
\r
- slower access\r
- extra memory usage\r
\r
---\r
\r
# Array vs Linked List\r
\r
| Array | Linked List |\r
|---|---|\r
| Fixed size | Dynamic |\r
| Fast access | Slow access |\r
| Contiguous memory | Node-based |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- node structure\r
- linked traversal\r
- singly linked lists\r
- advantages/disadvantages`;export{e as default};