var e=`# Stream Map in Java\r
\r
\`map()\` transforms stream elements.\r
\r
Used for:\r
\r
- modifying data\r
- converting values\r
- creating new collections\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
stream.map(transformation)\r
\`\`\`\r
\r
---\r
\r
# Example\r
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
            Arrays.asList(1, 2, 3);\r
\r
        numbers.stream()\r
\r
            .map(n -> n * n)\r
\r
            .forEach(System.out::println);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
1\r
4\r
9\r
\`\`\`\r
\r
---\r
\r
# String Transformation\r
\r
\`\`\`java\r
names.stream()\r
\r
    .map(String::toUpperCase)\r
\r
    .forEach(System.out::println);\r
\`\`\`\r
\r
---\r
\r
# Converting Types\r
\r
\`\`\`java\r
numbers.stream()\r
\r
    .map(String::valueOf)\r
\`\`\`\r
\r
Converts integers to strings.\r
\r
---\r
\r
# Chaining Example\r
\r
\`\`\`java\r
numbers.stream()\r
\r
    .filter(n -> n > 2)\r
\r
    .map(n -> n * 10)\r
\`\`\`\r
\r
---\r
\r
# Benefits\r
\r
- concise transformations\r
- readable pipelines\r
- immutable operations\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- map() method\r
- transforming streams\r
- type conversion\r
- chaining operations\r
- lambda transformations`;export{e as default};