var e=`# Generic Classes in Java\r
\r
Generic classes allow code to work with different data types safely.\r
\r
They improve:\r
\r
- reusability\r
- type safety\r
- readability\r
\r
---\r
\r
# Why Generics?\r
\r
Without generics:\r
\r
\`\`\`java\r
Object data;\r
\`\`\`\r
\r
requires type casting.\r
\r
Generics remove unnecessary casting.\r
\r
---\r
\r
# Basic Syntax\r
\r
\`\`\`java\r
class Box<T> {\r
\r
    T value;\r
}\r
\`\`\`\r
\r
\`T\` represents a type parameter.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
class Box<T> {\r
\r
    T value;\r
\r
    void setValue(T value) {\r
\r
        this.value = value;\r
    }\r
\r
    T getValue() {\r
\r
        return value;\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Using Generic Class\r
\r
\`\`\`java\r
Box<Integer> box =\r
    new Box<>();\r
\r
box.setValue(100);\r
\r
System.out.println(\r
    box.getValue()\r
);\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
100\r
\`\`\`\r
\r
---\r
\r
# Multiple Type Parameters\r
\r
\`\`\`java\r
class Pair<K, V> {\r
\r
    K key;\r
\r
    V value;\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
Pair<String, Integer> student =\r
    new Pair<>();\r
\`\`\`\r
\r
---\r
\r
# Advantages\r
\r
- compile-time checking\r
- reusable code\r
- avoids ClassCastException\r
\r
---\r
\r
# Common Generic Types\r
\r
| Symbol | Meaning |\r
|---|---|\r
| T | Type |\r
| E | Element |\r
| K | Key |\r
| V | Value |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- generic classes\r
- type parameters\r
- type safety\r
- reusable code\r
- multiple generics`;export{e as default};