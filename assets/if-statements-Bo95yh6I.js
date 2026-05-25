var e=`# If Statements in Java\r
\r
The \`if\` statement is used for decision making in Java.\r
\r
It executes code only when a condition is true.\r
\r
---\r
\r
# Basic Syntax\r
\r
\`\`\`java\r
if (condition) {\r
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
int age = 18;\r
\r
if (age >= 18) {\r
\r
    System.out.println("Eligible to vote");\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Eligible to vote\r
\`\`\`\r
\r
---\r
\r
# Boolean Conditions\r
\r
Conditions always return:\r
\r
- true\r
- false\r
\r
Example:\r
\r
\`\`\`java\r
10 > 5\r
\`\`\`\r
\r
Returns:\r
\r
\`\`\`txt\r
true\r
\`\`\`\r
\r
---\r
\r
# Comparison Operators\r
\r
| Operator | Meaning |\r
|---|---|\r
| == | Equal |\r
| != | Not equal |\r
| > | Greater than |\r
| < | Less than |\r
| >= | Greater or equal |\r
| <= | Less or equal |\r
\r
---\r
\r
# Using Logical Operators\r
\r
\`\`\`java\r
int age = 20;\r
\r
if (age >= 18 && age <= 60) {\r
\r
    System.out.println("Valid age");\r
}\r
\`\`\`\r
\r
---\r
\r
# Common Mistake\r
\r
Incorrect:\r
\r
\`\`\`java\r
if (age = 18)\r
\`\`\`\r
\r
Correct:\r
\r
\`\`\`java\r
if (age == 18)\r
\`\`\`\r
\r
---\r
\r
# Multiple Conditions\r
\r
\`\`\`java\r
int number = 10;\r
\r
if (number > 0) {\r
\r
    System.out.println("Positive");\r
}\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- if statement syntax\r
- conditional execution\r
- comparison operators\r
- logical operators\r
- common mistakes`;export{e as default};