var e=`# Switch Statements in Java\r
\r
A \`switch\` statement is used when multiple conditions depend on a single variable.\r
\r
It improves readability compared to many \`if-else\` blocks.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
switch(variable) {\r
\r
    case value1:\r
        // code\r
        break;\r
\r
    case value2:\r
        // code\r
        break;\r
\r
    default:\r
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
    public static void main(String[] args) {\r
\r
        int day = 3;\r
\r
        switch(day) {\r
\r
            case 1:\r
                System.out.println("Monday");\r
                break;\r
\r
            case 2:\r
                System.out.println("Tuesday");\r
                break;\r
\r
            case 3:\r
                System.out.println("Wednesday");\r
                break;\r
\r
            default:\r
                System.out.println("Invalid Day");\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Why \`break\` Matters\r
\r
Without \`break\`, execution continues into the next case.\r
\r
This is called:\r
\r
\`\`\`txt\r
fall-through\r
\`\`\`\r
\r
---\r
\r
# Real-World Use Cases\r
\r
- Calculator menus\r
- ATM systems\r
- Game menus\r
- CLI applications\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Forgetting break\r
\r
\`\`\`java\r
case 1:\r
    System.out.println("A");\r
\`\`\`\r
\r
may continue to next case unintentionally.\r
\r
---\r
\r
## 2. Overusing switch\r
\r
Use \`if-else\` when conditions are complex.\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Day of week program\r
2. Calculator using switch\r
3. Menu-driven food ordering system\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a program that prints month names using switch.`;export{e as default};