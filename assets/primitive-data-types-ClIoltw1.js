var e=`# Primitive Data Types in Java\r
\r
Primitive data types store simple values directly in memory.\r
\r
Java provides 8 primitive data types.\r
\r
---\r
\r
# List of Primitive Types\r
\r
| Data Type | Size | Example |\r
|---|---|---|\r
| byte | 1 byte | 100 |\r
| short | 2 bytes | 2000 |\r
| int | 4 bytes | 50000 |\r
| long | 8 bytes | 100000L |\r
| float | 4 bytes | 5.5f |\r
| double | 8 bytes | 99.99 |\r
| char | 2 bytes | 'A' |\r
| boolean | 1 bit | true |\r
\r
---\r
\r
# Integer Types\r
\r
\`\`\`java\r
int age = 20;\r
long population = 8000000L;\r
\`\`\`\r
\r
---\r
\r
# Decimal Types\r
\r
\`\`\`java\r
float price = 99.5f;\r
double salary = 55000.75;\r
\`\`\`\r
\r
---\r
\r
# Character Type\r
\r
\`\`\`java\r
char grade = 'A';\r
\`\`\`\r
\r
Characters use single quotes.\r
\r
---\r
\r
# Boolean Type\r
\r
\`\`\`java\r
boolean isJavaFun = true;\r
\`\`\`\r
\r
Boolean stores:\r
\r
- true\r
- false\r
\r
---\r
\r
# Example Program\r
\r
\`\`\`java\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        int age = 21;\r
\r
        double cgpa = 8.5;\r
\r
        char grade = 'A';\r
\r
        boolean passed = true;\r
\r
        System.out.println(age);\r
        System.out.println(cgpa);\r
        System.out.println(grade);\r
        System.out.println(passed);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Why Data Types Matter\r
\r
They control:\r
\r
- memory usage\r
- performance\r
- allowed operations\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Forgetting f in float\r
\r
Wrong:\r
\r
\`\`\`java\r
float num = 5.5;\r
\`\`\`\r
\r
Correct:\r
\r
\`\`\`java\r
float num = 5.5f;\r
\`\`\`\r
\r
---\r
\r
## 2. Using Double Quotes for char\r
\r
Wrong:\r
\r
\`\`\`java\r
char grade = "A";\r
\`\`\`\r
\r
Correct:\r
\r
\`\`\`java\r
char grade = 'A';\r
\`\`\`\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Create variables of all primitive types\r
2. Store student information\r
3. Print employee salary\r
4. Store product price\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a program storing:\r
\r
- name initial\r
- age\r
- height\r
- marks\r
- pass status`;export{e as default};