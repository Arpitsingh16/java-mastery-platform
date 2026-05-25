var e=`# Stream Collect in Java\r
\r
\`collect()\` gathers stream results into collections or structures.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
stream.collect(Collectors.method())\r
\`\`\`\r
\r
---\r
\r
# Import Statement\r
\r
\`\`\`java\r
import java.util.stream.Collectors;\r
\`\`\`\r
\r
---\r
\r
# Collect to List Example\r
\r
\`\`\`java\r
import java.util.Arrays;\r
import java.util.List;\r
import java.util.stream.Collectors;\r
\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        List<Integer> numbers =\r
            Arrays.asList(1, 2, 3, 4);\r
\r
        List<Integer> evenNumbers =\r
\r
            numbers.stream()\r
\r
                .filter(n -> n % 2 == 0)\r
\r
                .collect(Collectors.toList());\r
\r
        System.out.println(evenNumbers);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
[2, 4]\r
\`\`\`\r
\r
---\r
\r
# Collect to Set\r
\r
\`\`\`java\r
.collect(Collectors.toSet())\r
\`\`\`\r
\r
---\r
\r
# Joining Strings\r
\r
\`\`\`java\r
.collect(Collectors.joining(", "))\r
\`\`\`\r
\r
---\r
\r
# Counting Elements\r
\r
\`\`\`java\r
.collect(Collectors.counting())\r
\`\`\`\r
\r
---\r
\r
# Grouping Example\r
\r
\`\`\`java\r
.collect(Collectors.groupingBy(\r
    String::length\r
))\r
\`\`\`\r
\r
---\r
\r
# Collect vs Reduce\r
\r
| collect() | reduce() |\r
|---|---|\r
| collections | single value |\r
\r
---\r
\r
# Benefits\r
\r
- easy collection building\r
- readable pipelines\r
- powerful aggregation\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- collect() method\r
- Collectors utility\r
- grouping\r
- joining\r
- collecting stream results`;export{e as default};