var e=`# Nested If Statements in Java\r
\r
A nested \`if\` statement means placing an \`if\` statement inside another \`if\` block.\r
\r
This helps handle multiple conditions.\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
if(condition1) {\r
\r
    if(condition2) {\r
        // code\r
    }\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        int age = 25;\r
        boolean hasLicense = true;\r
\r
        if(age >= 18) {\r
\r
            if(hasLicense) {\r
                System.out.println("You can drive.");\r
            }\r
\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# How It Works\r
\r
1. Outer condition executes first\r
2. Inner condition executes only if outer condition is true\r
\r
---\r
\r
# Real-World Use Cases\r
\r
- Banking systems\r
- Login verification\r
- Eligibility systems\r
- Multi-step validation\r
\r
---\r
\r
# Example — Student Scholarship\r
\r
\`\`\`java\r
int marks = 90;\r
boolean sportsQuota = true;\r
\r
if(marks >= 85) {\r
\r
    if(sportsQuota) {\r
        System.out.println("Scholarship Approved");\r
    }\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Excessive Nesting\r
\r
Too much nesting makes code difficult to read.\r
\r
Bad practice:\r
\r
\`\`\`java\r
if(a) {\r
    if(b) {\r
        if(c) {\r
\`\`\`\r
\r
---\r
\r
## 2. Forgetting Braces\r
\r
Always use braces for clarity.\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Check employee bonus eligibility\r
2. Verify ATM withdrawal conditions\r
3. Validate username and password\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a Java program that checks:\r
\r
- age >= 18\r
- citizen == true\r
\r
Then print voting eligibility.`;export{e as default};