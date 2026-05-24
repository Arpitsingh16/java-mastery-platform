var e=`# Type Casting in Java\r
\r
Type casting converts one data type into another.\r
\r
Java supports:\r
\r
- implicit casting\r
- explicit casting\r
\r
---\r
\r
# Implicit Casting\r
\r
Also called:\r
\r
\`\`\`txt\r
widening conversion\r
\`\`\`\r
\r
Smaller type converts automatically into larger type.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
int number = 10;\r
\r
double result = number;\r
\r
System.out.println(result);\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
10.0\r
\`\`\`\r
\r
---\r
\r
# Explicit Casting\r
\r
Also called:\r
\r
\`\`\`txt\r
narrowing conversion\r
\`\`\`\r
\r
Larger type manually converts into smaller type.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
double price = 99.99;\r
\r
int finalPrice = (int) price;\r
\r
System.out.println(finalPrice);\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
99\r
\`\`\`\r
\r
Decimal portion is removed.\r
\r
---\r
\r
# Why Type Casting Is Important\r
\r
Used in:\r
\r
- calculations\r
- user input\r
- APIs\r
- data processing\r
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
        int a = 50;\r
\r
        double b = a;\r
\r
        System.out.println(b);\r
\r
        double x = 99.99;\r
\r
        int y = (int) x;\r
\r
        System.out.println(y);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Data Loss\r
\r
\`\`\`java\r
double x = 9.99;\r
\r
int y = (int) x;\r
\`\`\`\r
\r
Output:\r
\r
\`\`\`txt\r
9\r
\`\`\`\r
\r
Precision lost.\r
\r
---\r
\r
## 2. Forgetting Parentheses\r
\r
Wrong:\r
\r
\`\`\`java\r
int y = int x;\r
\`\`\`\r
\r
Correct:\r
\r
\`\`\`java\r
int y = (int) x;\r
\`\`\`\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Convert int to double\r
2. Convert double to int\r
3. Convert char to int\r
4. Print ASCII values\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a temperature converter using type casting.`;export{e as default};