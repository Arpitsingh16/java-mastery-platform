var e=`# LinkedList in Java\r
\r
LinkedList is a doubly linked list implementation in Java.\r
\r
Each element stores:\r
\r
- data\r
- reference to next node\r
- reference to previous node\r
\r
---\r
\r
# Importing LinkedList\r
\r
\`\`\`java\r
import java.util.LinkedList;\r
\`\`\`\r
\r
---\r
\r
# Creating LinkedList\r
\r
\`\`\`java\r
LinkedList<String> cities =\r
    new LinkedList<>();\r
\`\`\`\r
\r
---\r
\r
# Adding Elements\r
\r
\`\`\`java\r
cities.add("Delhi");\r
\r
cities.add("Mumbai");\r
\r
cities.addFirst("Pune");\r
\r
cities.addLast("Bangalore");\r
\`\`\`\r
\r
---\r
\r
# Accessing Elements\r
\r
\`\`\`java\r
System.out.println(cities.get(0));\r
\`\`\`\r
\r
---\r
\r
# Removing Elements\r
\r
\`\`\`java\r
cities.removeFirst();\r
\r
cities.removeLast();\r
\`\`\`\r
\r
---\r
\r
# Iterating LinkedList\r
\r
\`\`\`java\r
for (String city : cities) {\r
\r
    System.out.println(city);\r
}\r
\`\`\`\r
\r
---\r
\r
# LinkedList as Queue\r
\r
\`\`\`java\r
cities.offer("Hyderabad");\r
\r
cities.poll();\r
\`\`\`\r
\r
---\r
\r
# Advantages\r
\r
- Fast insertion/deletion\r
- Dynamic size\r
- Good for queue structures\r
\r
---\r
\r
# Disadvantages\r
\r
- Slower random access\r
- More memory usage\r
\r
---\r
\r
# ArrayList vs LinkedList\r
\r
| ArrayList | LinkedList |\r
|---|---|\r
| Fast access | Slow access |\r
| Slow insertion | Fast insertion |\r
| Uses array | Uses nodes |\r
\r
---\r
\r
# Internal Structure\r
\r
\`\`\`txt\r
Node <-> Node <-> Node\r
\`\`\`\r
\r
Each node points both directions.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- LinkedList basics\r
- Node structure\r
- Insertion/deletion\r
- Queue operations\r
- ArrayList comparison`;export{e as default};