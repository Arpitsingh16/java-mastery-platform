var e=`# Break and Continue in Java\r
\r
\`break\` and \`continue\` control loop execution.\r
\r
---\r
\r
# Break Statement\r
\r
\`break\` immediately exits the loop.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
for(int i = 1; i <= 10; i++) {\r
\r
    if(i == 5) {\r
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
\`continue\` skips the current iteration.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
for(int i = 1; i <= 5; i++) {\r
\r
    if(i == 3) {\r
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
# Real-World Use Cases\r
\r
- Search systems\r
- Input validation\r
- Filtering logic\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Infinite Loops with continue\r
\r
Always ensure loop variable updates correctly.\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Skip even numbers\r
2. Stop loop at specific value\r
3. Search value in array\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a loop that skips multiples of 3.`;export{e as default};