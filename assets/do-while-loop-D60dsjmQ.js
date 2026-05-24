var e=`# Do While Loop in Java\r
\r
A \`do-while\` loop executes at least once before checking the condition.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
do {\r
\r
    // code\r
\r
} while(condition);\r
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
        int i = 1;\r
\r
        do {\r
\r
            System.out.println(i);\r
\r
            i++;\r
\r
        } while(i <= 5);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Key Difference\r
\r
| Loop | Condition Checked |\r
|---|---|\r
| while | before execution |\r
| do-while | after execution |\r
\r
---\r
\r
# Real-World Use Cases\r
\r
- Menu systems\r
- Retry systems\r
- User interaction loops\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Missing Semicolon\r
\r
Wrong:\r
\r
\`\`\`java\r
while(i <= 5)\r
\`\`\`\r
\r
Correct:\r
\r
\`\`\`java\r
while(i <= 5);\r
\`\`\`\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Repeat menu program\r
2. Password retry system\r
3. Continue-until-exit application\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a simple menu-driven calculator using do-while.`;export{e as default};