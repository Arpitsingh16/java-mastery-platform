var e=`# While Loops in Java\r
\r
While loops repeat code while a condition remains true.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
while (condition) {\r
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
int i = 1;\r
\r
while (i <= 5) {\r
\r
    System.out.println(i);\r
\r
    i++;\r
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
# Important Point\r
\r
Condition is checked BEFORE execution.\r
\r
---\r
\r
# Infinite Loop Example\r
\r
\`\`\`java\r
while (true) {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# User Input Example\r
\r
\`\`\`java\r
Scanner sc = new Scanner(System.in);\r
\r
int number = 0;\r
\r
while (number != -1) {\r
\r
    number = sc.nextInt();\r
}\r
\`\`\`\r
\r
---\r
\r
# While vs For Loop\r
\r
| While | For |\r
|---|---|\r
| Unknown iterations | Known iterations |\r
| Flexible | Compact |\r
\r
---\r
\r
# Common Mistake\r
\r
Forgetting increment:\r
\r
\`\`\`java\r
i++;\r
\`\`\`\r
\r
causes infinite loop.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- while loop syntax\r
- condition checking\r
- infinite loops\r
- input-driven loops`;export{e as default};