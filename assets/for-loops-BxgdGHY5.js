var e=`# For Loops in Java\r
\r
A \`for\` loop is used when the number of iterations is known.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
for(initialization; condition; update) {\r
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
        for(int i = 1; i <= 5; i++) {\r
\r
            System.out.println(i);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# How It Works\r
\r
| Part | Purpose |\r
|---|---|\r
| initialization | starting point |\r
| condition | loop runs while true |\r
| update | changes loop variable |\r
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
- Printing tables\r
- Processing arrays\r
- Repeating tasks\r
- Data iteration\r
\r
---\r
\r
# Nested Loops Example\r
\r
\`\`\`java\r
for(int i = 1; i <= 3; i++) {\r
\r
    for(int j = 1; j <= 2; j++) {\r
\r
        System.out.println(i + " " + j);\r
    }\r
}\r
\`\`\`\r
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
for(int i = 1; i <= 5; ) {\r
\`\`\`\r
\r
No update expression.\r
\r
---\r
\r
## 2. Wrong Conditions\r
\r
\`\`\`java\r
i >= 5\r
\`\`\`\r
\r
may stop loop immediately.\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Print numbers 1–100\r
2. Print multiplication table\r
3. Print factorial\r
4. Print star patterns\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a program that prints all even numbers from 1 to 50.`;export{e as default};