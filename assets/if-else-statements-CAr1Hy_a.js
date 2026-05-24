var e=`# If Else Statements in Java\r
\r
\`if-else\` statements allow programs to choose between two paths.\r
\r
## Syntax\r
\r
\`\`\`java\r
if(condition) {\r
    // executes if true\r
}\r
else {\r
    // executes if false\r
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
        int marks = 45;\r
\r
        if(marks >= 40) {\r
            System.out.println("Pass");\r
        }\r
        else {\r
            System.out.println("Fail");\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Flow Explanation\r
\r
- Condition checked\r
- If true → \`if\` block executes\r
- Otherwise → \`else\` block executes\r
\r
---\r
\r
# Real-World Use Cases\r
\r
- Login systems\r
- ATM withdrawal checks\r
- Eligibility systems\r
- Result evaluation\r
\r
---\r
\r
# Example — ATM Balance Check\r
\r
\`\`\`java\r
double balance = 2000;\r
double withdraw = 5000;\r
\r
if(balance >= withdraw) {\r
    System.out.println("Withdrawal successful");\r
}\r
else {\r
    System.out.println("Insufficient balance");\r
}\r
\`\`\`\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Missing Braces\r
\r
Always use braces for readability.\r
\r
## 2. Wrong Conditions\r
\r
Avoid impossible conditions:\r
\r
\`\`\`java\r
if(age < 0)\r
\`\`\`\r
\r
unless intentionally validating input.\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Largest of two numbers\r
2. Check odd/even\r
3. Pass/fail system\r
4. Compare temperatures\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a simple login checker using username/password conditions.`;export{e as default};