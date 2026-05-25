var e=`# Classes and Objects in Java\r
\r
Java is an:\r
\r
\`\`\`txt\r
Object-Oriented Programming Language\r
\`\`\`\r
\r
Classes and objects are core concepts of OOP.\r
\r
---\r
\r
# What is a Class?\r
\r
A class is a blueprint for creating objects.\r
\r
It defines:\r
\r
- properties\r
- behaviors\r
\r
---\r
\r
# Class Example\r
\r
\`\`\`java\r
class Student {\r
\r
    String name;\r
\r
    int age;\r
}\r
\`\`\`\r
\r
---\r
\r
# What is an Object?\r
\r
An object is an instance of a class.\r
\r
---\r
\r
# Creating Object\r
\r
\`\`\`java\r
Student s1 =\r
    new Student();\r
\`\`\`\r
\r
---\r
\r
# Accessing Variables\r
\r
\`\`\`java\r
s1.name = "Rahul";\r
\r
s1.age = 20;\r
\`\`\`\r
\r
---\r
\r
# Full Example\r
\r
\`\`\`java\r
class Student {\r
\r
    String name;\r
\r
    int age;\r
}\r
\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        Student s1 =\r
            new Student();\r
\r
        s1.name = "Rahul";\r
\r
        s1.age = 20;\r
\r
        System.out.println(\r
            s1.name\r
        );\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Rahul\r
\`\`\`\r
\r
---\r
\r
# Real World Analogy\r
\r
| Class | Object |\r
|---|---|\r
| Car blueprint | Actual car |\r
| Student template | Real student |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- classes\r
- objects\r
- object creation\r
- accessing properties\r
- OOP basics`;export{e as default};