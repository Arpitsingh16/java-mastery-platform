var e=`# HashSet in Java\r
\r
HashSet stores unique elements.\r
\r
Duplicate values are automatically removed.\r
\r
---\r
\r
# Importing HashSet\r
\r
\`\`\`java\r
import java.util.HashSet;\r
\`\`\`\r
\r
---\r
\r
# Creating HashSet\r
\r
\`\`\`java\r
HashSet<String> fruits =\r
    new HashSet<>();\r
\`\`\`\r
\r
---\r
\r
# Adding Elements\r
\r
\`\`\`java\r
fruits.add("Apple");\r
\r
fruits.add("Banana");\r
\r
fruits.add("Apple");\r
\`\`\`\r
\r
Duplicate Apple is ignored.\r
\r
---\r
\r
# Iterating HashSet\r
\r
\`\`\`java\r
for (String fruit : fruits) {\r
\r
    System.out.println(fruit);\r
}\r
\`\`\`\r
\r
---\r
\r
# Removing Elements\r
\r
\`\`\`java\r
fruits.remove("Banana");\r
\`\`\`\r
\r
---\r
\r
# Checking Elements\r
\r
\`\`\`java\r
fruits.contains("Apple");\r
\`\`\`\r
\r
---\r
\r
# Important Features\r
\r
- Unique elements only\r
- No guaranteed order\r
- Fast operations\r
\r
---\r
\r
# Internal Working\r
\r
HashSet internally uses:\r
\r
\`\`\`txt\r
HashMap\r
\`\`\`\r
\r
Each value becomes a key internally.\r
\r
---\r
\r
# Time Complexity\r
\r
| Operation | Complexity |\r
|---|---|\r
| add() | O(1) |\r
| remove() | O(1) |\r
| contains() | O(1) |\r
\r
---\r
\r
# Common Use Cases\r
\r
- Removing duplicates\r
- Fast lookups\r
- Membership testing\r
\r
---\r
\r
# HashSet vs ArrayList\r
\r
| HashSet | ArrayList |\r
|---|---|\r
| Unique values | Duplicates allowed |\r
| Unordered | Ordered |\r
| Faster search | Slower search |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- HashSet basics\r
- Unique storage\r
- Internal hashing\r
- Fast lookups\r
- Common operations`;export{e as default};