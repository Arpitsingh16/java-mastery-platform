var e=`# Interfaces in Java\r
\r
Interfaces define contracts that classes must implement.\r
\r
---\r
\r
# Why Interfaces?\r
\r
Interfaces provide:\r
\r
- abstraction\r
- loose coupling\r
- multiple inheritance support\r
\r
---\r
\r
# Interface Syntax\r
\r
\`\`\`java\r
interface Animal {\r
\r
    void sound();\r
}\r
\`\`\`\r
\r
---\r
\r
# Implementing Interface\r
\r
\`\`\`java\r
class Dog implements Animal {\r
\r
    public void sound() {\r
\r
        System.out.println(\r
            "Dog barks"\r
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
Animal a =\r
    new Dog();\r
\r
a.sound();\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Dog barks\r
\`\`\`\r
\r
---\r
\r
# Important Rules\r
\r
- interface methods are public abstract\r
- variables are public static final\r
\r
---\r
\r
# Multiple Interfaces\r
\r
\`\`\`java\r
class Test\r
implements A, B {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Default Methods\r
\r
\`\`\`java\r
default void display() {\r
\r
}\r
\`\`\`\r
\r
Allowed from Java 8.\r
\r
---\r
\r
# Interface vs Abstract Class\r
\r
| Interface | Abstract Class |\r
|---|---|\r
| full abstraction | partial abstraction |\r
| multiple inheritance | single inheritance |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- interfaces\r
- implements keyword\r
- abstraction\r
- multiple inheritance\r
- default methods`;export{e as default};