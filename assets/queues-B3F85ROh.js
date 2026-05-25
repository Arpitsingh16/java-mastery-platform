var e=`# Queue Data Structure in Java\r
\r
Queue follows:\r
\r
\`\`\`txt\r
FIFO\r
\`\`\`\r
\r
First In First Out.\r
\r
---\r
\r
# Real World Examples\r
\r
- ticket systems\r
- printer queue\r
- task scheduling\r
\r
---\r
\r
# Queue Operations\r
\r
| Operation | Description |\r
|---|---|\r
| offer() | Insert |\r
| poll() | Remove |\r
| peek() | View front |\r
\r
---\r
\r
# Using Queue Interface\r
\r
\`\`\`java\r
import java.util.Queue;\r
\r
import java.util.LinkedList;\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
Queue<Integer> queue =\r
    new LinkedList<>();\r
\r
queue.offer(10);\r
\r
queue.offer(20);\r
\r
System.out.println(queue.poll());\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
10\r
\`\`\`\r
\r
---\r
\r
# Peek Example\r
\r
\`\`\`java\r
System.out.println(queue.peek());\r
\`\`\`\r
\r
---\r
\r
# Queue Complexity\r
\r
| Operation | Complexity |\r
|---|---|\r
| offer | O(1) |\r
| poll | O(1) |\r
| peek | O(1) |\r
\r
---\r
\r
# Queue Applications\r
\r
- scheduling\r
- buffering\r
- BFS traversal\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- queue basics\r
- FIFO structure\r
- queue operations\r
- real-world applications`;export{e as default};