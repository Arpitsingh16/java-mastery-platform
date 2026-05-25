var e=`# Constructors in Java\r
\r
Constructors initialize objects.\r
\r
They execute automatically during object creation.\r
\r
---\r
\r
# Constructor Rules\r
\r
- same name as class\r
- no return type\r
\r
---\r
\r
# Basic Constructor\r
\r
\`\`\`java\r
class Student {\r
\r
    Student() {\r
\r
        System.out.println(\r
            "Constructor called"\r
        );\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
class Student {\r
\r
    String name;\r
\r
    Student() {\r
\r
        name = "Unknown";\r
    }\r
}\r
\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        Student s1 =\r
            new Student();\r
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
Unknown\r
\`\`\`\r
\r
---\r
\r
# Parameterized Constructor\r
\r
\`\`\`java\r
Student(String n) {\r
\r
    name = n;\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
Student s1 =\r
    new Student("Rahul");\r
\`\`\`\r
\r
---\r
\r
# Constructor Overloading\r
\r
Multiple constructors with different parameters.\r
\r
---\r
\r
# Default Constructor\r
\r
Java provides default constructor if none exists.\r
\r
---\r
\r
# this Keyword\r
\r
\`\`\`java\r
this.name = name;\r
\`\`\`\r
\r
Used to refer current object.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- constructors\r
- parameterized constructors\r
- constructor overloading\r
- default constructor\r
- this keyword`;export{e as default};