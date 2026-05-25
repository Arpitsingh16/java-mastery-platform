var e=`# Stream Filter in Java\r
\r
\`filter()\` is used to select elements matching a condition.\r
\r
It is part of Java Streams API.\r
\r
---\r
\r
# Import Statement\r
\r
\`\`\`java\r
import java.util.stream.*;\r
\`\`\`\r
\r
---\r
\r
# Basic Syntax\r
\r
\`\`\`java\r
stream.filter(condition)\r
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
            Arrays.asList(1, 2, 3, 4, 5, 6);\r
\r
        numbers.stream()\r
\r
            .filter(n -> n % 2 == 0)\r
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
2\r
4\r
6\r
\`\`\`\r
\r
---\r
\r
# How filter() Works\r
\r
It keeps elements where condition returns:\r
\r
\`\`\`txt\r
true\r
\`\`\`\r
\r
---\r
\r
# Filtering Strings\r
\r
\`\`\`java\r
names.stream()\r
\r
    .filter(name -> name.startsWith("A"))\r
\r
    .forEach(System.out::println);\r
\`\`\`\r
\r
---\r
\r
# Chaining Operations\r
\r
\`\`\`java\r
numbers.stream()\r
\r
    .filter(n -> n > 10)\r
\r
    .filter(n -> n % 2 == 0)\r
\`\`\`\r
\r
---\r
\r
# Benefits\r
\r
- cleaner code\r
- functional programming\r
- readable pipelines\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- filter() method\r
- lambda expressions\r
- stream filtering\r
- chaining operations\r
- functional style`;export{e as default};