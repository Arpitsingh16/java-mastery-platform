var e=`# Method Parameters in Java\r
\r
Parameters allow methods to receive input values.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
void methodName(type parameter) {\r
\r
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
    static void greet(String name) {\r
\r
        System.out.println(\r
            "Hello " + name\r
        );\r
    }\r
\r
    public static void main(String[] args) {\r
\r
        greet("Rahul");\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Hello Rahul\r
\`\`\`\r
\r
---\r
\r
# Multiple Parameters\r
\r
\`\`\`java\r
static void add(int a, int b) {\r
\r
    System.out.println(a + b);\r
}\r
\`\`\`\r
\r
---\r
\r
# Calling Method\r
\r
\`\`\`java\r
add(10, 20);\r
\`\`\`\r
\r
---\r
\r
# Arguments vs Parameters\r
\r
| Parameters | Arguments |\r
|---|---|\r
| variables in method | actual values passed |\r
\r
---\r
\r
# Java is Pass By Value\r
\r
Java always passes:\r
\r
\`\`\`txt\r
copies of values\r
\`\`\`\r
\r
---\r
\r
# Primitive Example\r
\r
\`\`\`java\r
static void change(int x) {\r
\r
    x = 50;\r
}\r
\`\`\`\r
\r
Original variable remains unchanged.\r
\r
---\r
\r
# Object Reference Example\r
\r
\`\`\`java\r
static void modify(Student s) {\r
\r
    s.name = "Aman";\r
}\r
\`\`\`\r
\r
Object data can change.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- method parameters\r
- arguments\r
- multiple parameters\r
- pass-by-value concept\r
- object references`;export{e as default};