var e=`# Variables in Java\r
\r
Variables store data in memory.\r
\r
A variable has:\r
\r
- data type\r
- name\r
- value\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
dataType variableName = value;\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
int age = 20;\r
\`\`\`\r
\r
| Part | Meaning |\r
|---|---|\r
| int | data type |\r
| age | variable name |\r
| 20 | value |\r
\r
---\r
\r
# More Examples\r
\r
\`\`\`java\r
String name = "Abhi";\r
\r
double salary = 55000.50;\r
\r
char grade = 'A';\r
\`\`\`\r
\r
---\r
\r
# Rules for Variable Names\r
\r
Valid:\r
\r
\`\`\`java\r
age\r
studentName\r
_marks\r
\`\`\`\r
\r
Invalid:\r
\r
\`\`\`java\r
1age\r
student-name\r
class\r
\`\`\`\r
\r
---\r
\r
# Variable Declaration\r
\r
\`\`\`java\r
int number;\r
\`\`\`\r
\r
---\r
\r
# Variable Initialization\r
\r
\`\`\`java\r
number = 50;\r
\`\`\`\r
\r
---\r
\r
# Combined Example\r
\r
\`\`\`java\r
int number = 50;\r
\`\`\`\r
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
        String name = "Rahul";\r
\r
        int age = 21;\r
\r
        double cgpa = 8.7;\r
\r
        System.out.println(name);\r
\r
        System.out.println(age);\r
\r
        System.out.println(cgpa);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Why Variables Matter\r
\r
Variables allow programs to:\r
\r
- store user data\r
- perform calculations\r
- manage application state\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Using Reserved Keywords\r
\r
Wrong:\r
\r
\`\`\`java\r
int class = 10;\r
\`\`\`\r
\r
---\r
\r
## 2. Forgetting Initialization\r
\r
\`\`\`java\r
int number;\r
\r
System.out.println(number);\r
\`\`\`\r
\r
causes error.\r
\r
---\r
\r
## 3. Wrong Data Type\r
\r
\`\`\`java\r
int salary = 50000.75;\r
\`\`\`\r
\r
Incorrect because decimal values need:\r
\r
\`\`\`java\r
double\r
\`\`\`\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Store student details\r
2. Store bank balance\r
3. Create employee profile\r
4. Print product details\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a program that stores and prints:\r
\r
- name\r
- age\r
- city\r
- CGPA`;export{e as default};