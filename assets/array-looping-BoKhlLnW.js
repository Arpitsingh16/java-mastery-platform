var e=`# Looping Through Arrays in Java\r
\r
Looping allows us to access every element inside an array.\r
\r
---\r
\r
# Using a For Loop\r
\r
\`\`\`java\r
int[] numbers = {10, 20, 30, 40};\r
\r
for (int i = 0; i < numbers.length; i++) {\r
\r
    System.out.println(numbers[i]);\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
10\r
20\r
30\r
40\r
\`\`\`\r
\r
---\r
\r
# Enhanced For Loop\r
\r
Also called:\r
\r
- For-each loop\r
\r
Cleaner syntax.\r
\r
\`\`\`java\r
int[] numbers = {10, 20, 30};\r
\r
for (int num : numbers) {\r
\r
    System.out.println(num);\r
}\r
\`\`\`\r
\r
---\r
\r
# Difference Between Loops\r
\r
| For Loop | Enhanced For Loop |\r
|---|---|\r
| Uses index | No index |\r
| More control | Cleaner syntax |\r
| Better for modifications | Better for reading |\r
\r
---\r
\r
# Reverse Iteration\r
\r
\`\`\`java\r
for (int i = numbers.length - 1; i >= 0; i--) {\r
\r
    System.out.println(numbers[i]);\r
}\r
\`\`\`\r
\r
---\r
\r
# Calculating Sum\r
\r
\`\`\`java\r
int sum = 0;\r
\r
for (int num : numbers) {\r
\r
    sum += num;\r
}\r
\r
System.out.println(sum);\r
\`\`\`\r
\r
---\r
\r
# Finding Maximum Element\r
\r
\`\`\`java\r
int max = numbers[0];\r
\r
for (int num : numbers) {\r
\r
    if (num > max) {\r
\r
        max = num;\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Common Mistake\r
\r
## Array Index Out Of Bounds\r
\r
\`\`\`java\r
numbers[5]\r
\`\`\`\r
\r
Invalid if size smaller than 6.\r
\r
Causes:\r
\r
\`\`\`txt\r
ArrayIndexOutOfBoundsException\r
\`\`\`\r
\r
---\r
\r
# Nested Loop Example\r
\r
\`\`\`java\r
int[][] matrix = {\r
    {1, 2},\r
    {3, 4}\r
};\r
\r
for (int i = 0; i < matrix.length; i++) {\r
\r
    for (int j = 0; j < matrix[i].length; j++) {\r
\r
        System.out.print(matrix[i][j] + " ");\r
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
- Standard for loop\r
- Enhanced for loop\r
- Reverse iteration\r
- Array calculations\r
- Common iteration mistakes`;export{e as default};