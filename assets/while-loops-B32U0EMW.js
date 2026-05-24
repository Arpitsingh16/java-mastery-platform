var e=`# While Loops in Java\r
\r
A \`while\` loop runs while a condition remains true.\r
\r
It is useful when the number of iterations is unknown.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
while(condition) {\r
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
    public static void main(String[] args) {\r
\r
        int i = 1;\r
\r
        while(i <= 5) {\r
\r
            System.out.println(i);\r
\r
            i++;\r
        }\r
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
2\r
3\r
4\r
5\r
\`\`\`\r
\r
---\r
\r
# Real-World Use Cases\r
\r
- Login systems\r
- Input validation\r
- Game loops\r
- ATM systems\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Infinite Loops\r
\r
Wrong:\r
\r
\`\`\`java\r
while(i <= 5) {\r
    System.out.println(i);\r
}\r
\`\`\`\r
\r
No increment.\r
\r
---\r
\r
## 2. Incorrect Conditions\r
\r
Always verify loop termination condition.\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Print numbers 1–50\r
2. Sum first 10 numbers\r
3. Reverse counting\r
4. Password retry system\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a number guessing loop.`;export{e as default};