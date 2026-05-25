var e=`# Return Types in Java Methods\r
\r
Methods can return values back to caller.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
returnType methodName() {\r
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
public class Main {\r
\r
    static int add(int a, int b) {\r
\r
        return a + b;\r
    }\r
\r
    public static void main(String[] args) {\r
\r
        int result = add(10, 20);\r
\r
        System.out.println(result);\r
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
\`\`\`\r
\r
---\r
\r
# Return Keyword\r
\r
\`\`\`java\r
return\r
\`\`\`\r
\r
ends method execution immediately.\r
\r
---\r
\r
# Void Return Type\r
\r
\`\`\`java\r
void display() {\r
\r
}\r
\`\`\`\r
\r
Returns nothing.\r
\r
---\r
\r
# Returning Strings\r
\r
\`\`\`java\r
static String greet() {\r
\r
    return "Hello";\r
}\r
\`\`\`\r
\r
---\r
\r
# Returning Boolean\r
\r
\`\`\`java\r
static boolean isAdult(int age) {\r
\r
    return age >= 18;\r
}\r
\`\`\`\r
\r
---\r
\r
# Important Rules\r
\r
- return type must match returned value\r
- void methods cannot return values\r
\r
---\r
\r
# Common Error\r
\r
Incorrect:\r
\r
\`\`\`java\r
int method() {\r
\r
    return "Hello";\r
}\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- return types\r
- return keyword\r
- returning values\r
- void methods\r
- method result handling`;export{e as default};