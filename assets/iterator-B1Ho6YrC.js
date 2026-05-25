var e=`# Iterator in Java\r
\r
Iterator is used to traverse collections safely.\r
\r
---\r
\r
# Importing Iterator\r
\r
\`\`\`java\r
import java.util.Iterator;\r
\`\`\`\r
\r
---\r
\r
# Creating Iterator\r
\r
\`\`\`java\r
ArrayList<String> names =\r
    new ArrayList<>();\r
\r
Iterator<String> iterator =\r
    names.iterator();\r
\`\`\`\r
\r
---\r
\r
# Traversing Elements\r
\r
\`\`\`java\r
while (iterator.hasNext()) {\r
\r
    System.out.println(\r
        iterator.next()\r
    );\r
}\r
\`\`\`\r
\r
---\r
\r
# hasNext()\r
\r
Checks if more elements exist.\r
\r
---\r
\r
# next()\r
\r
Returns next element.\r
\r
---\r
\r
# Removing Elements Safely\r
\r
\`\`\`java\r
while (iterator.hasNext()) {\r
\r
    String name = iterator.next();\r
\r
    if (name.equals("Bob")) {\r
\r
        iterator.remove();\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Why Iterator?\r
\r
Using normal loops while removing data causes:\r
\r
\`\`\`txt\r
ConcurrentModificationException\r
\`\`\`\r
\r
Iterator prevents this.\r
\r
---\r
\r
# Enhanced For Loop vs Iterator\r
\r
| Enhanced Loop | Iterator |\r
|---|---|\r
| Cleaner | More control |\r
| Cannot safely remove | Safe removal |\r
\r
---\r
\r
# ListIterator\r
\r
Advanced iterator for lists.\r
\r
Supports:\r
\r
- backward traversal\r
- update operations\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- Traversing collections\r
- hasNext()\r
- next()\r
- remove()\r
- Safe iteration`;export{e as default};