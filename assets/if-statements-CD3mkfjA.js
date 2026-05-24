var e=`# If Statements in Java\r
\r
An \`if\` statement allows a program to make decisions based on conditions.\r
\r
## Syntax\r
\r
\`\`\`java\r
if(condition) {\r
    // code executes if condition is true\r
}\r
\`\`\`\r
\r
---\r
\r
## Example\r
\r
\`\`\`java\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        int age = 20;\r
\r
        if(age >= 18) {\r
            System.out.println("You are eligible to vote.");\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
## How It Works\r
\r
The condition inside the parentheses is evaluated.\r
\r
- If the condition is \`true\`\r
  → block executes\r
\r
- If the condition is \`false\`\r
  → block is skipped\r
\r
---\r
\r
## Comparison Operators\r
\r
| Operator | Meaning |\r
|---|---|\r
| \`==\` | Equal to |\r
| \`!=\` | Not equal |\r
| \`>\` | Greater than |\r
| \`<\` | Less than |\r
| \`>=\` | Greater than or equal |\r
| \`<=\` | Less than or equal |\r
\r
---\r
\r
## Real-World Example\r
\r
\`\`\`java\r
double balance = 5000;\r
\r
if(balance > 1000) {\r
    System.out.println("Minimum balance maintained");\r
}\r
\`\`\`\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Using \`=\` Instead of \`==\`\r
\r
Wrong:\r
\r
\`\`\`java\r
if(age = 18)\r
\`\`\`\r
\r
Correct:\r
\r
\`\`\`java\r
if(age == 18)\r
\`\`\`\r
\r
---\r
\r
## 2. Forgetting Curly Braces\r
\r
Bad practice:\r
\r
\`\`\`java\r
if(age > 18)\r
    System.out.println("Adult");\r
\`\`\`\r
\r
Better:\r
\r
\`\`\`java\r
if(age > 18) {\r
    System.out.println("Adult");\r
}\r
\`\`\`\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Check if a number is positive\r
2. Check if a student passed\r
3. Check voting eligibility\r
4. Check if temperature is above 30\r
\r
---\r
\r
# Mini Challenge\r
\r
Write a Java program that checks whether a number is even or odd.`;export{e as default};