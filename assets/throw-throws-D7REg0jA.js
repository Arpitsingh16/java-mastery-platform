var e=`# Throw and Throws in Java\r
\r
Java provides:\r
\r
- throw\r
- throws\r
\r
for exception handling.\r
\r
---\r
\r
# throw Keyword\r
\r
Used to manually create exceptions.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
int age = 15;\r
\r
if (age < 18) {\r
\r
    throw new ArithmeticException(\r
        "Not eligible"\r
    );\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Exception in thread "main"\r
\`\`\`\r
\r
---\r
\r
# throws Keyword\r
\r
Used in method declaration.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
void readFile()\r
throws IOException {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Difference Between Throw and Throws\r
\r
| throw | throws |\r
|---|---|\r
| creates exception | declares exception |\r
| used inside method | used in signature |\r
\r
---\r
\r
# Custom Validation Example\r
\r
\`\`\`java\r
void validate(int marks) {\r
\r
    if (marks < 0) {\r
\r
        throw new IllegalArgumentException(\r
            "Marks cannot be negative"\r
        );\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Multiple Exceptions\r
\r
\`\`\`java\r
void process()\r
throws IOException, SQLException {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Checked vs Unchecked Exceptions\r
\r
| Checked | Unchecked |\r
|---|---|\r
| compile-time | runtime |\r
| must handle | optional |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- throw keyword\r
- throws keyword\r
- manual exceptions\r
- method exception declaration\r
- checked vs unchecked exceptions`;export{e as default};