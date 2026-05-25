var e=`# For Loops in Java\r
\r
For loops are used when the number of iterations is known.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
for (initialization; condition; update) {\r
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
for (int i = 1; i <= 5; i++) {\r
\r
    System.out.println(i);\r
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
# Loop Components\r
\r
| Part | Purpose |\r
|---|---|\r
| initialization | starting value |\r
| condition | loop continuation |\r
| update | increment/decrement |\r
\r
---\r
\r
# Reverse Loop\r
\r
\`\`\`java\r
for (int i = 5; i >= 1; i--) {\r
\r
    System.out.println(i);\r
}\r
\`\`\`\r
\r
---\r
\r
# Infinite Loop\r
\r
\`\`\`java\r
for (;;) {\r
\r
}\r
\`\`\`\r
\r
Avoid accidentally creating these.\r
\r
---\r
\r
# Sum Example\r
\r
\`\`\`java\r
int sum = 0;\r
\r
for (int i = 1; i <= 10; i++) {\r
\r
    sum += i;\r
}\r
\`\`\`\r
\r
---\r
\r
# Nested Loops\r
\r
\`\`\`java\r
for (int i = 1; i <= 3; i++) {\r
\r
    for (int j = 1; j <= 3; j++) {\r
\r
        System.out.print("* ");\r
    }\r
\r
    System.out.println();\r
}\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- for loop syntax\r
- iteration\r
- reverse loops\r
- nested loops\r
- infinite loops`;export{e as default};