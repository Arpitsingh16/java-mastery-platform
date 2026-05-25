var e=`# Break and Continue in Java\r
\r
Break and continue control loop execution.\r
\r
---\r
\r
# Break Statement\r
\r
Break exits the loop immediately.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
for (int i = 1; i <= 10; i++) {\r
\r
    if (i == 5) {\r
\r
        break;\r
    }\r
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
\`\`\`\r
\r
---\r
\r
# Continue Statement\r
\r
Continue skips current iteration.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
for (int i = 1; i <= 5; i++) {\r
\r
    if (i == 3) {\r
\r
        continue;\r
    }\r
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
4\r
5\r
\`\`\`\r
\r
---\r
\r
# Break in Switch\r
\r
\`\`\`java\r
switch (day) {\r
\r
    case 1:\r
        break;\r
}\r
\`\`\`\r
\r
Prevents fall-through.\r
\r
---\r
\r
# Nested Loop Break\r
\r
Break exits only inner loop.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- break statement\r
- continue statement\r
- loop control\r
- switch break usage`;export{e as default};