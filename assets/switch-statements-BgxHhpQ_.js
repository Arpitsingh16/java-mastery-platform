var e=`# Switch Statements in Java\r
\r
Switch statements allow selection from multiple choices.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
switch (expression) {\r
\r
    case value:\r
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
int day = 2;\r
\r
switch (day) {\r
\r
    case 1:\r
        System.out.println("Monday");\r
        break;\r
\r
    case 2:\r
        System.out.println("Tuesday");\r
        break;\r
\r
    default:\r
        System.out.println("Invalid");\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Tuesday\r
\`\`\`\r
\r
---\r
\r
# Why Break is Important\r
\r
Without break:\r
\r
\`\`\`java\r
fall-through\r
\`\`\`\r
\r
occurs.\r
\r
---\r
\r
# Example Without Break\r
\r
\`\`\`java\r
int num = 1;\r
\r
switch (num) {\r
\r
    case 1:\r
        System.out.println("One");\r
\r
    case 2:\r
        System.out.println("Two");\r
}\r
\`\`\`\r
\r
Output:\r
\r
\`\`\`txt\r
One\r
Two\r
\`\`\`\r
\r
---\r
\r
# Switch with Strings\r
\r
\`\`\`java\r
String role = "admin";\r
\r
switch (role) {\r
\r
    case "admin":\r
        System.out.println("Full access");\r
        break;\r
}\r
\`\`\`\r
\r
---\r
\r
# Default Case\r
\r
Runs when no case matches.\r
\r
---\r
\r
# If Else vs Switch\r
\r
| If Else | Switch |\r
|---|---|\r
| Complex conditions | Multiple exact values |\r
| Flexible | Cleaner syntax |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- switch syntax\r
- case labels\r
- break keyword\r
- default case\r
- fall-through behavior`;export{e as default};