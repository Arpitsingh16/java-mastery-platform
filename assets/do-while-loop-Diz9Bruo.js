var e=`# Do While Loop in Java\r
\r
The do-while loop executes code at least once.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
do {\r
\r
    // code\r
\r
} while (condition);\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
int i = 1;\r
\r
do {\r
\r
    System.out.println(i);\r
\r
    i++;\r
\r
} while (i <= 5);\r
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
# Key Difference\r
\r
| While | Do While |\r
|---|---|\r
| Checks first | Executes first |\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
int number = 10;\r
\r
do {\r
\r
    System.out.println(number);\r
\r
} while (number < 5);\r
\`\`\`\r
\r
Runs once even though condition false.\r
\r
---\r
\r
# Menu Example\r
\r
\`\`\`java\r
int choice;\r
\r
do {\r
\r
    System.out.println("1. Start");\r
    System.out.println("2. Exit");\r
\r
    choice = scanner.nextInt();\r
\r
} while (choice != 2);\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- do-while syntax\r
- guaranteed execution\r
- loop comparison\r
- menu-driven loops`;export{e as default};