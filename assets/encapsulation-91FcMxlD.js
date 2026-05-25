var e=`# Encapsulation in Java\r
\r
Encapsulation means:\r
\r
\`\`\`txt\r
data hiding\r
\`\`\`\r
\r
and controlled access to data.\r
\r
---\r
\r
# Why Encapsulation?\r
\r
Benefits:\r
\r
- security\r
- maintainability\r
- controlled modification\r
\r
---\r
\r
# Private Variables\r
\r
\`\`\`java\r
private String name;\r
\`\`\`\r
\r
Cannot access directly outside class.\r
\r
---\r
\r
# Getter and Setter\r
\r
\`\`\`java\r
public void setName(String name) {\r
\r
    this.name = name;\r
}\r
\r
public String getName() {\r
\r
    return name;\r
}\r
\`\`\`\r
\r
---\r
\r
# Full Example\r
\r
\`\`\`java\r
class Student {\r
\r
    private String name;\r
\r
    public void setName(String name) {\r
\r
        this.name = name;\r
    }\r
\r
    public String getName() {\r
\r
        return name;\r
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
        s1.setName("Rahul");\r
\r
        System.out.println(\r
            s1.getName()\r
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
# Access Modifiers\r
\r
| Modifier | Access |\r
|---|---|\r
| private | same class |\r
| protected | package + subclass |\r
| public | everywhere |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- encapsulation\r
- private variables\r
- getter/setter methods\r
- access modifiers\r
- data security`;export{e as default};