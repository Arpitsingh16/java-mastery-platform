var e=`# Method Overloading in Java\r
\r
Method overloading means:\r
\r
\`\`\`txt\r
same method name\r
different parameters\r
\`\`\`\r
\r
---\r
\r
# Why Use Overloading?\r
\r
Improves:\r
\r
- readability\r
- flexibility\r
- code reuse\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
public class Main {\r
\r
    static int add(int a, int b) {\r
\r
        return a + b;\r
    }\r
\r
    static double add(double a, double b) {\r
\r
        return a + b;\r
    }\r
\r
    public static void main(String[] args) {\r
\r
        System.out.println(add(10, 20));\r
\r
        System.out.println(add(5.5, 2.5));\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
30\r
8.0\r
\`\`\`\r
\r
---\r
\r
# Valid Overloading Rules\r
\r
Methods must differ by:\r
\r
- parameter count\r
- parameter type\r
- parameter order\r
\r
---\r
\r
# Invalid Overloading\r
\r
Changing only return type is invalid.\r
\r
Incorrect:\r
\r
\`\`\`java\r
int test()\r
double test()\r
\`\`\`\r
\r
---\r
\r
# Constructor Overloading\r
\r
Constructors can also be overloaded.\r
\r
\`\`\`java\r
Student()\r
\r
Student(String name)\r
\`\`\`\r
\r
---\r
\r
# Benefits\r
\r
- cleaner APIs\r
- easier method usage\r
- improved readability\r
\r
---\r
\r
# Real World Example\r
\r
\`\`\`java\r
System.out.println()\r
\`\`\`\r
\r
has many overloaded versions.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- method overloading\r
- overloading rules\r
- constructor overloading\r
- parameter differences\r
- practical examples`;export{e as default};