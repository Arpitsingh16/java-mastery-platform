var e=`# Sorting Collections in Java\r
\r
Java provides built-in utilities for sorting collections.\r
\r
---\r
\r
# Import Collections\r
\r
\`\`\`java\r
import java.util.Collections;\r
\`\`\`\r
\r
---\r
\r
# Sorting ArrayList\r
\r
\`\`\`java\r
ArrayList<Integer> numbers =\r
    new ArrayList<>();\r
\r
numbers.add(30);\r
numbers.add(10);\r
numbers.add(20);\r
\r
Collections.sort(numbers);\r
\r
System.out.println(numbers);\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
[10, 20, 30]\r
\`\`\`\r
\r
---\r
\r
# Sorting Strings\r
\r
\`\`\`java\r
ArrayList<String> names =\r
    new ArrayList<>();\r
\r
Collections.sort(names);\r
\`\`\`\r
\r
---\r
\r
# Reverse Sorting\r
\r
\`\`\`java\r
Collections.sort(\r
    numbers,\r
    Collections.reverseOrder()\r
);\r
\`\`\`\r
\r
---\r
\r
# Sorting Custom Objects\r
\r
Use Comparable interface.\r
\r
\`\`\`java\r
class Student\r
implements Comparable<Student> {\r
\r
    int marks;\r
\r
    @Override\r
    public int compareTo(Student s) {\r
\r
        return this.marks - s.marks;\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Comparator Interface\r
\r
Used for custom sorting logic.\r
\r
\`\`\`java\r
Collections.sort(\r
    students,\r
    (a, b) -> a.name.compareTo(b.name)\r
);\r
\`\`\`\r
\r
---\r
\r
# Comparable vs Comparator\r
\r
| Comparable | Comparator |\r
|---|---|\r
| Natural ordering | Custom ordering |\r
| compareTo() | compare() |\r
| Inside class | Outside class |\r
\r
---\r
\r
# Time Complexity\r
\r
Java uses optimized sorting algorithms.\r
\r
Typical complexity:\r
\r
\`\`\`txt\r
O(n log n)\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- Sorting collections\r
- Reverse sorting\r
- Comparable\r
- Comparator\r
- Custom object sorting`;export{e as default};