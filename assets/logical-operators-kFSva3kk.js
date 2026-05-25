var e=`# Logical Operators in Java\r
\r
Logical operators combine multiple conditions.\r
\r
## Logical Operators\r
\r
| Operator | Meaning |\r
|----------|----------|\r
| && | AND |\r
| \\|\\| | OR |\r
| ! | NOT |\r
\r
## Example\r
\r
\`\`\`java\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        int age = 20;\r
\r
        System.out.println(age > 18 && age < 30);\r
        System.out.println(age > 25 || age < 30);\r
        System.out.println(!(age > 18));\r
    }\r
}\r
\`\`\`\r
\r
## Output\r
\r
\`\`\`txt\r
true\r
true\r
false\r
\`\`\`\r
\r
## Key Points\r
\r
- \`&&\` returns true only if both conditions are true.\r
- \`||\` returns true if one condition is true.\r
- \`!\` reverses boolean value.`;export{e as default};