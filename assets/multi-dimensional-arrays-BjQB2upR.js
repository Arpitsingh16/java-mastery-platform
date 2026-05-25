var e=`# Multi-Dimensional Arrays in Java\r
\r
A multi-dimensional array stores arrays inside another array.\r
\r
Most common:\r
\r
- 2D arrays\r
- Matrix structures\r
\r
---\r
\r
# Declaring a 2D Array\r
\r
\`\`\`java\r
int[][] matrix;\r
\`\`\`\r
\r
---\r
\r
# Creating a 2D Array\r
\r
\`\`\`java\r
int[][] matrix = new int[3][3];\r
\`\`\`\r
\r
Creates:\r
\r
- 3 rows\r
- 3 columns\r
\r
---\r
\r
# Initializing a 2D Array\r
\r
\`\`\`java\r
int[][] matrix = {\r
    {1, 2, 3},\r
    {4, 5, 6},\r
    {7, 8, 9}\r
};\r
\`\`\`\r
\r
---\r
\r
# Accessing Elements\r
\r
\`\`\`java\r
System.out.println(matrix[0][1]);\r
\`\`\`\r
\r
Output:\r
\r
\`\`\`txt\r
2\r
\`\`\`\r
\r
---\r
\r
# Iterating Through 2D Arrays\r
\r
\`\`\`java\r
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
# Enhanced For Loop\r
\r
\`\`\`java\r
for (int[] row : matrix) {\r
\r
    for (int value : row) {\r
\r
        System.out.print(value + " ");\r
    }\r
\r
    System.out.println();\r
}\r
\`\`\`\r
\r
---\r
\r
# Jagged Arrays\r
\r
Rows can have different lengths.\r
\r
\`\`\`java\r
int[][] jagged = {\r
    {1, 2},\r
    {3, 4, 5},\r
    {6}\r
};\r
\`\`\`\r
\r
---\r
\r
# Real World Uses\r
\r
- Game boards\r
- Matrices\r
- Seating systems\r
- Tables\r
- Graph algorithms\r
\r
---\r
\r
# Matrix Addition Example\r
\r
\`\`\`java\r
int[][] a = {\r
    {1, 2},\r
    {3, 4}\r
};\r
\r
int[][] b = {\r
    {5, 6},\r
    {7, 8}\r
};\r
\r
int[][] result = new int[2][2];\r
\r
for (int i = 0; i < 2; i++) {\r
\r
    for (int j = 0; j < 2; j++) {\r
\r
        result[i][j] = a[i][j] + b[i][j];\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Common Mistakes\r
\r
- Wrong index access\r
- Forgetting nested loops\r
- Incorrect dimensions\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- 2D arrays\r
- Matrix structures\r
- Nested loops\r
- Jagged arrays\r
- Matrix operations`;export{e as default};