var e=`# Stream Reduce in Java\r
\r
\`reduce()\` combines stream elements into a single result.\r
\r
Used for:\r
\r
- sum\r
- multiplication\r
- aggregation\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
stream.reduce(identity, operation)\r
\`\`\`\r
\r
---\r
\r
# Sum Example\r
\r
\`\`\`java\r
import java.util.Arrays;\r
import java.util.List;\r
\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        List<Integer> numbers =\r
            Arrays.asList(1, 2, 3, 4);\r
\r
        int sum = numbers.stream()\r
\r
            .reduce(0, (a, b) -> a + b);\r
\r
        System.out.println(sum);\r
    }\r
}\r
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
# Maximum Value Example\r
\r
\`\`\`java\r
int max = numbers.stream()\r
\r
    .reduce(Integer.MIN_VALUE,\r
        (a, b) -> a > b ? a : b\r
    );\r
\`\`\`\r
\r
---\r
\r
# String Concatenation\r
\r
\`\`\`java\r
String text = words.stream()\r
\r
    .reduce("", (a, b) -> a + b);\r
\`\`\`\r
\r
---\r
\r
# Identity Value\r
\r
Initial value passed to reduce.\r
\r
Example:\r
\r
\`\`\`java\r
0\r
\`\`\`\r
\r
for sum operation.\r
\r
---\r
\r
# Reduce vs Collect\r
\r
| reduce() | collect() |\r
|---|---|\r
| single value | collections/results |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- reduce() method\r
- aggregation\r
- summation\r
- maximum calculation\r
- stream reduction`;export{e as default};