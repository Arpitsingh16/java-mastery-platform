var e=`# Introduction to Methods in Java\r
\r
Methods are reusable blocks of code.\r
\r
They help:\r
\r
- reduce repetition\r
- improve readability\r
- organize logic\r
\r
---\r
\r
# Basic Syntax\r
\r
\`\`\`java\r
returnType methodName() {\r
\r
    // code\r
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
    static void greet() {\r
\r
        System.out.println(\r
            "Welcome to Java"\r
        );\r
    }\r
\r
    public static void main(String[] args) {\r
\r
        greet();\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Welcome to Java\r
\`\`\`\r
\r
---\r
\r
# Method Components\r
\r
| Part | Purpose |\r
|---|---|\r
| return type | returned value |\r
| method name | identifier |\r
| parameters | input values |\r
| body | logic |\r
\r
---\r
\r
# Void Methods\r
\r
Methods that return nothing.\r
\r
\`\`\`java\r
void display() {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Calling Methods\r
\r
\`\`\`java\r
greet();\r
\`\`\`\r
\r
Method executes when called.\r
\r
---\r
\r
# Why Methods Matter\r
\r
Without methods:\r
\r
- repeated code increases\r
- debugging becomes difficult\r
\r
---\r
\r
# Advantages\r
\r
- code reuse\r
- modular programming\r
- easier maintenance\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- method basics\r
- syntax\r
- method calls\r
- void methods\r
- reusable code`;export{e as default};