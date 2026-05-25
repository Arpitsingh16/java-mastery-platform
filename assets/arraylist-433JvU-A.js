var e=`# ArrayList in Java\r
\r
ArrayList is a dynamic array provided by the Java Collections Framework.\r
\r
Unlike normal arrays, ArrayList can grow and shrink automatically.\r
\r
---\r
\r
# Importing ArrayList\r
\r
\`\`\`java\r
import java.util.ArrayList;\r
\`\`\`\r
\r
---\r
\r
# Creating an ArrayList\r
\r
\`\`\`java\r
ArrayList<String> names = new ArrayList<>();\r
\`\`\`\r
\r
---\r
\r
# Adding Elements\r
\r
\`\`\`java\r
names.add("Alice");\r
names.add("Bob");\r
names.add("Charlie");\r
\`\`\`\r
\r
---\r
\r
# Accessing Elements\r
\r
\`\`\`java\r
System.out.println(names.get(0));\r
\`\`\`\r
\r
Output:\r
\r
\`\`\`txt\r
Alice\r
\`\`\`\r
\r
---\r
\r
# Updating Elements\r
\r
\`\`\`java\r
names.set(1, "David");\r
\`\`\`\r
\r
---\r
\r
# Removing Elements\r
\r
\`\`\`java\r
names.remove("Alice");\r
\r
names.remove(0);\r
\`\`\`\r
\r
---\r
\r
# ArrayList Size\r
\r
\`\`\`java\r
System.out.println(names.size());\r
\`\`\`\r
\r
---\r
\r
# Iterating ArrayList\r
\r
\`\`\`java\r
for (String name : names) {\r
\r
    System.out.println(name);\r
}\r
\`\`\`\r
\r
---\r
\r
# Important Methods\r
\r
| Method | Description |\r
|---|---|\r
| add() | Add element |\r
| get() | Access element |\r
| set() | Update element |\r
| remove() | Remove element |\r
| size() | Total elements |\r
| contains() | Check existence |\r
| clear() | Remove all |\r
\r
---\r
\r
# Internal Working\r
\r
ArrayList internally uses arrays.\r
\r
When capacity becomes full:\r
\r
- Java creates a larger array\r
- Copies old elements\r
- Stores new elements\r
\r
---\r
\r
# Advantages\r
\r
- Dynamic size\r
- Fast random access\r
- Easy to use\r
\r
---\r
\r
# Limitations\r
\r
- Slower insertion in middle\r
- Memory overhead during resizing\r
\r
---\r
\r
# Array vs ArrayList\r
\r
| Array | ArrayList |\r
|---|---|\r
| Fixed size | Dynamic size |\r
| Faster | Slight overhead |\r
| Primitive support | Objects only |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- Creating ArrayList\r
- Adding/removing elements\r
- Iterating collections\r
- Internal resizing\r
- ArrayList advantages`;export{e as default};