var e=`# Nested If Statements in Java\r
\r
A nested if statement means placing one if statement inside another.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
if (condition1) {\r
\r
    if (condition2) {\r
\r
        // code\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
int age = 25;\r
boolean hasLicense = true;\r
\r
if (age >= 18) {\r
\r
    if (hasLicense) {\r
\r
        System.out.println("Can drive");\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Can drive\r
\`\`\`\r
\r
---\r
\r
# Why Use Nested If?\r
\r
Nested if statements help when:\r
\r
- one condition depends on another\r
- complex validation is needed\r
\r
---\r
\r
# Student Example\r
\r
\`\`\`java\r
int marks = 85;\r
\r
if (marks >= 40) {\r
\r
    if (marks >= 75) {\r
\r
        System.out.println("Distinction");\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Deep Nesting Problem\r
\r
Too much nesting creates unreadable code.\r
\r
Bad:\r
\r
\`\`\`java\r
if () {\r
    if () {\r
        if () {\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Better Alternative\r
\r
Use logical operators.\r
\r
\`\`\`java\r
if (age >= 18 && hasLicense) {\r
\r
    System.out.println("Can drive");\r
}\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- nested conditions\r
- dependent validation\r
- readability concerns\r
- logical operator optimization`;export{e as default};