var e=`# Inheritance in Java\r
\r
Inheritance allows one class to acquire properties of another class.\r
\r
---\r
\r
# Why Inheritance?\r
\r
Benefits:\r
\r
- code reuse\r
- cleaner design\r
- hierarchical relationships\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
class Child extends Parent {\r
\r
}\r
\`\`\`\r
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
        System.out.println("Animal sound");\r
    }\r
}\r
\r
class Dog extends Animal {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Using Inherited Method\r
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
Animal sound\r
\`\`\`\r
\r
---\r
\r
# Types of Inheritance\r
\r
| Type | Supported |\r
|---|---|\r
| Single | Yes |\r
| Multilevel | Yes |\r
| Multiple | No via classes |\r
\r
---\r
\r
# Multilevel Example\r
\r
\`\`\`java\r
class A {}\r
\r
class B extends A {}\r
\r
class C extends B {}\r
\`\`\`\r
\r
---\r
\r
# super Keyword\r
\r
Used to access parent members.\r
\r
\`\`\`java\r
super.sound();\r
\`\`\`\r
\r
---\r
\r
# Advantages\r
\r
- reduces duplication\r
- improves maintainability\r
- supports polymorphism\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- inheritance\r
- extends keyword\r
- parent-child classes\r
- super keyword\r
- inheritance types`;export{e as default};