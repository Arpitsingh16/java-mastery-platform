var e=`# Polymorphism in Java\r
\r
Polymorphism means:\r
\r
\`\`\`txt\r
many forms\r
\`\`\`\r
\r
Same method behaves differently.\r
\r
---\r
\r
# Types of Polymorphism\r
\r
| Type | Method |\r
|---|---|\r
| Compile-time | Overloading |\r
| Runtime | Overriding |\r
\r
---\r
\r
# Method Overloading Example\r
\r
\`\`\`java\r
class MathUtil {\r
\r
    int add(int a, int b) {\r
\r
        return a + b;\r
    }\r
\r
    double add(double a, double b) {\r
\r
        return a + b;\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Method Overriding Example\r
\r
\`\`\`java\r
class Animal {\r
\r
    void sound() {\r
\r
        System.out.println("Animal sound");\r
    }\r
}\r
\r
class Dog extends Animal {\r
\r
    void sound() {\r
\r
        System.out.println("Dog barks");\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Runtime Polymorphism\r
\r
\`\`\`java\r
Animal a = new Dog();\r
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
# Advantages\r
\r
- flexibility\r
- extensibility\r
- reusable code\r
\r
---\r
\r
# Dynamic Method Dispatch\r
\r
Method call resolved during runtime.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- polymorphism\r
- overloading\r
- overriding\r
- runtime polymorphism\r
- dynamic dispatch`;export{e as default};