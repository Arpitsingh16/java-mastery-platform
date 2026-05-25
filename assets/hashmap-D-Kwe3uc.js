var e=`# HashMap in Java\r
\r
HashMap stores data as key-value pairs.\r
\r
Example:\r
\r
\`\`\`txt\r
101 -> Alice\r
102 -> Bob\r
\`\`\`\r
\r
---\r
\r
# Importing HashMap\r
\r
\`\`\`java\r
import java.util.HashMap;\r
\`\`\`\r
\r
---\r
\r
# Creating HashMap\r
\r
\`\`\`java\r
HashMap<Integer, String> students =\r
    new HashMap<>();\r
\`\`\`\r
\r
---\r
\r
# Adding Data\r
\r
\`\`\`java\r
students.put(101, "Alice");\r
\r
students.put(102, "Bob");\r
\`\`\`\r
\r
---\r
\r
# Accessing Values\r
\r
\`\`\`java\r
System.out.println(\r
    students.get(101)\r
);\r
\`\`\`\r
\r
---\r
\r
# Removing Data\r
\r
\`\`\`java\r
students.remove(102);\r
\`\`\`\r
\r
---\r
\r
# Checking Keys\r
\r
\`\`\`java\r
students.containsKey(101);\r
\`\`\`\r
\r
---\r
\r
# Iterating HashMap\r
\r
\`\`\`java\r
for (Integer key : students.keySet()) {\r
\r
    System.out.println(\r
        key + " : " + students.get(key)\r
    );\r
}\r
\`\`\`\r
\r
---\r
\r
# Important Features\r
\r
- Fast lookup\r
- No duplicate keys\r
- Allows one null key\r
- Unordered storage\r
\r
---\r
\r
# Internal Working\r
\r
HashMap uses:\r
\r
- Hashing\r
- Buckets\r
- Hash codes\r
\r
---\r
\r
# Time Complexity\r
\r
| Operation | Complexity |\r
|---|---|\r
| put() | O(1) |\r
| get() | O(1) |\r
| remove() | O(1) |\r
\r
---\r
\r
# Common Methods\r
\r
| Method | Description |\r
|---|---|\r
| put() | Add data |\r
| get() | Access value |\r
| remove() | Delete value |\r
| containsKey() | Check key |\r
| keySet() | Get all keys |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- Key-value storage\r
- HashMap operations\r
- Iteration\r
- Internal hashing\r
- Complexity analysis`;export{e as default};