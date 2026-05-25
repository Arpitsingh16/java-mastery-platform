var e=`# Method Overriding in Java\r
\r
Method overriding occurs when subclass provides its own implementation of parent method.\r
\r
---\r
\r
# Rules\r
\r
- same method name\r
- same parameters\r
- inheritance required\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
class Animal {\r
\r
    void sound() {\r
\r
        System.out.println(\r
            "Animal sound"\r
        );\r
    }\r
}\r
\r
class Dog extends Animal {\r
\r
    @Override\r
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
# Using Overridden Method\r
\r
\`\`\`java\r
Dog d = new Dog();\r
\r
d.sound();\r
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
# @Override Annotation\r
\r
Helps compiler verify overriding correctness.\r
\r
---\r
\r
# Runtime Polymorphism\r
\r
\`\`\`java\r
Animal a =\r
    new Dog();\r
\r
a.sound();\r
\`\`\`\r
\r
Method resolved during runtime.\r
\r
---\r
\r
# super Keyword\r
\r
Call parent method.\r
\r
\`\`\`java\r
super.sound();\r
\`\`\`\r
\r
---\r
\r
# Overloading vs Overriding\r
\r
| Overloading | Overriding |\r
|---|---|\r
| same class | inheritance |\r
| different params | same params |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- method overriding\r
- inheritance\r
- runtime polymorphism\r
- @Override annotation\r
- super keyword`;export{e as default};