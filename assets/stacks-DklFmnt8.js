var e=`# Stack Data Structure in Java\r
\r
Stack follows:\r
\r
\`\`\`txt\r
LIFO\r
\`\`\`\r
\r
Last In First Out.\r
\r
---\r
\r
# Real World Example\r
\r
- browser history\r
- undo operations\r
- recursion stack\r
\r
---\r
\r
# Stack Operations\r
\r
| Operation | Description |\r
|---|---|\r
| push() | Add item |\r
| pop() | Remove top |\r
| peek() | View top |\r
| isEmpty() | Check empty |\r
\r
---\r
\r
# Using Stack Class\r
\r
\`\`\`java\r
import java.util.Stack;\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
Stack<Integer> stack =\r
    new Stack<>();\r
\r
stack.push(10);\r
\r
stack.push(20);\r
\r
System.out.println(stack.pop());\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
20\r
\`\`\`\r
\r
---\r
\r
# Peek Example\r
\r
\`\`\`java\r
System.out.println(stack.peek());\r
\`\`\`\r
\r
---\r
\r
# Underflow\r
\r
Removing from empty stack causes error.\r
\r
---\r
\r
# Complexity\r
\r
| Operation | Complexity |\r
|---|---|\r
| push | O(1) |\r
| pop | O(1) |\r
| peek | O(1) |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- stack basics\r
- push/pop\r
- LIFO principle\r
- stack applications`;export{e as default};