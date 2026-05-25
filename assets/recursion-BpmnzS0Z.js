var e=`# Recursion in Java\r
\r
Recursion occurs when a method calls itself.\r
\r
---\r
\r
# Basic Structure\r
\r
\`\`\`java\r
void method() {\r
\r
    method();\r
}\r
\`\`\`\r
\r
---\r
\r
# Base Condition\r
\r
Recursion MUST stop using a base condition.\r
\r
Without it:\r
\r
\`\`\`txt\r
StackOverflowError\r
\`\`\`\r
\r
---\r
\r
# Factorial Example\r
\r
\`\`\`java\r
int factorial(int n) {\r
\r
    if (n == 1) {\r
\r
        return 1;\r
    }\r
\r
    return n * factorial(n - 1);\r
}\r
\`\`\`\r
\r
---\r
\r
# Working\r
\r
\`\`\`txt\r
factorial(5)\r
= 5 * factorial(4)\r
= 5 * 4 * factorial(3)\r
\`\`\`\r
\r
---\r
\r
# Recursive Flow\r
\r
- method call added to stack\r
- execution pauses\r
- resumes after return\r
\r
---\r
\r
# Fibonacci Example\r
\r
\`\`\`java\r
int fibonacci(int n) {\r
\r
    if (n <= 1) {\r
\r
        return n;\r
    }\r
\r
    return fibonacci(n - 1)\r
         + fibonacci(n - 2);\r
}\r
\`\`\`\r
\r
---\r
\r
# Advantages\r
\r
- cleaner code\r
- useful for trees/graphs\r
- divide-and-conquer algorithms\r
\r
---\r
\r
# Disadvantages\r
\r
- memory overhead\r
- slower sometimes\r
- stack overflow risk\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- recursion basics\r
- base condition\r
- call stack\r
- factorial recursion\r
- fibonacci recursion`;export{e as default};