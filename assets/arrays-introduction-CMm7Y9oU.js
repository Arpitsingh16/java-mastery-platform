var e=`# Introduction to Arrays in Java\r
\r
Arrays are one of the most fundamental data structures in Java.\r
\r
An array allows you to store multiple values of the same type inside a single variable.\r
\r
---\r
\r
# Why Arrays?\r
\r
Without arrays:\r
\r
\`\`\`java\r
int marks1 = 90;\r
int marks2 = 85;\r
int marks3 = 78;\r
\`\`\`\r
\r
With arrays:\r
\r
\`\`\`java\r
int[] marks = {90, 85, 78};\r
\`\`\`\r
\r
Arrays make code cleaner, scalable, and easier to manage.\r
\r
---\r
\r
# Declaring an Array\r
\r
\`\`\`java\r
int[] numbers;\r
\`\`\`\r
\r
This only declares the array reference.\r
\r
---\r
\r
# Creating an Array\r
\r
\`\`\`java\r
int[] numbers = new int[5];\r
\`\`\`\r
\r
This creates an array capable of storing 5 integers.\r
\r
Default values:\r
\r
| Data Type | Default Value |\r
|---|---|\r
| int | 0 |\r
| double | 0.0 |\r
| boolean | false |\r
| String | null |\r
\r
---\r
\r
# Initializing Arrays\r
\r
\`\`\`java\r
int[] numbers = {10, 20, 30, 40};\r
\`\`\`\r
\r
---\r
\r
# Accessing Array Elements\r
\r
Arrays use indexing.\r
\r
Index starts from 0.\r
\r
\`\`\`java\r
System.out.println(numbers[0]);\r
\`\`\`\r
\r
Output:\r
\r
\`\`\`txt\r
10\r
\`\`\`\r
\r
---\r
\r
# Modifying Elements\r
\r
\`\`\`java\r
numbers[1] = 100;\r
\`\`\`\r
\r
---\r
\r
# Array Length\r
\r
\`\`\`java\r
System.out.println(numbers.length);\r
\`\`\`\r
\r
---\r
\r
# Complete Example\r
\r
\`\`\`java\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        int[] numbers = {10, 20, 30};\r
\r
        System.out.println(numbers[0]);\r
\r
        numbers[1] = 50;\r
\r
        System.out.println(numbers[1]);\r
\r
        System.out.println(numbers.length);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Important Notes\r
\r
- Arrays store fixed-size data\r
- All elements must be same datatype\r
- Index starts from 0\r
- Arrays are stored in Heap memory\r
\r
---\r
\r
# Advantages of Arrays\r
\r
- Fast access using index\r
- Easy iteration\r
- Memory efficient\r
- Useful for algorithms\r
\r
---\r
\r
# Limitations of Arrays\r
\r
- Fixed size\r
- Cannot directly add/remove dynamically\r
- Same datatype only\r
\r
---\r
\r
# Interview Question\r
\r
## Difference between Array and ArrayList?\r
\r
| Array | ArrayList |\r
|---|---|\r
| Fixed size | Dynamic size |\r
| Faster | Slightly slower |\r
| Primitive support | Objects only |\r
| Core language feature | Part of Collections Framework |\r
\r
---\r
\r
# Summary\r
\r
In this lesson you learned:\r
\r
- What arrays are\r
- How to declare arrays\r
- How to initialize arrays\r
- How indexing works\r
- Advantages and limitations of arrays`;export{e as default};