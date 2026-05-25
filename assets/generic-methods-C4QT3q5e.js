var e=`# Generic Methods in Java\r
\r
Generic methods allow methods to work with multiple data types.\r
\r
---\r
\r
# Basic Syntax\r
\r
\`\`\`java\r
<T> returnType methodName(T value)\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
public class Main {\r
\r
    static <T> void printData(T data) {\r
\r
        System.out.println(data);\r
    }\r
\r
    public static void main(String[] args) {\r
\r
        printData(100);\r
\r
        printData("Java");\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
100\r
Java\r
\`\`\`\r
\r
---\r
\r
# Returning Generic Values\r
\r
\`\`\`java\r
static <T> T getValue(T value) {\r
\r
    return value;\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
String text =\r
    getValue("Hello");\r
\`\`\`\r
\r
---\r
\r
# Generic Method with Arrays\r
\r
\`\`\`java\r
static <T> void printArray(T[] arr) {\r
\r
    for (T item : arr) {\r
\r
        System.out.println(item);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Benefits\r
\r
- reusable methods\r
- type-safe operations\r
- reduced duplicate code\r
\r
---\r
\r
# Generic Methods vs Generic Classes\r
\r
| Generic Method | Generic Class |\r
|---|---|\r
| applies to method | applies to whole class |\r
| flexible | structured |\r
\r
---\r
\r
# Bounded Generic Method\r
\r
\`\`\`java\r
<T extends Number>\r
\`\`\`\r
\r
Restricts allowed types.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
static <T extends Number>\r
void printNumber(T num) {\r
\r
    System.out.println(num);\r
}\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- generic methods\r
- type parameters\r
- bounded generics\r
- reusable logic\r
- type-safe methods`;export{e as default};