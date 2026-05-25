var e=`# Abstraction in Java\r
\r
Abstraction hides implementation details and shows essential functionality.\r
\r
---\r
\r
# Why Abstraction?\r
\r
Benefits:\r
\r
- reduced complexity\r
- cleaner code\r
- better maintainability\r
\r
---\r
\r
# Abstract Class\r
\r
\`\`\`java\r
abstract class Animal {\r
\r
    abstract void sound();\r
}\r
\`\`\`\r
\r
---\r
\r
# Subclass Implementation\r
\r
\`\`\`java\r
class Dog extends Animal {\r
\r
    void sound() {\r
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
- abstract class cannot create objects\r
- abstract methods have no body\r
\r
---\r
\r
# Concrete Methods Allowed\r
\r
\`\`\`java\r
void sleep() {\r
\r
    System.out.println("Sleeping");\r
}\r
\`\`\`\r
\r
---\r
\r
# Abstract Class vs Interface\r
\r
| Abstract Class | Interface |\r
|---|---|\r
| partial abstraction | full abstraction |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- abstraction\r
- abstract classes\r
- abstract methods\r
- implementation hiding\r
- abstraction benefits`;export{e as default};