var e=`# Try Catch in Java\r
\r
Exception handling prevents programs from crashing unexpectedly.\r
\r
Java uses:\r
\r
- try\r
- catch\r
\r
blocks to handle runtime errors safely.\r
\r
---\r
\r
# Basic Syntax\r
\r
\`\`\`java\r
try {\r
\r
    // risky code\r
\r
} catch (Exception e) {\r
\r
    // handling code\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
int a = 10;\r
int b = 0;\r
\r
try {\r
\r
    int result = a / b;\r
\r
    System.out.println(result);\r
\r
} catch (ArithmeticException e) {\r
\r
    System.out.println("Cannot divide by zero");\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Cannot divide by zero\r
\`\`\`\r
\r
---\r
\r
# How It Works\r
\r
1. Java executes try block\r
2. Exception occurs\r
3. Control jumps to catch block\r
4. Program continues safely\r
\r
---\r
\r
# Multiple Catch Blocks\r
\r
\`\`\`java\r
try {\r
\r
    String text = null;\r
\r
    System.out.println(text.length());\r
\r
} catch (ArithmeticException e) {\r
\r
    System.out.println("Math error");\r
\r
} catch (NullPointerException e) {\r
\r
    System.out.println("Null error");\r
}\r
\`\`\`\r
\r
---\r
\r
# Generic Exception Catch\r
\r
\`\`\`java\r
catch (Exception e)\r
\`\`\`\r
\r
Handles most exceptions.\r
\r
---\r
\r
# Printing Exception Message\r
\r
\`\`\`java\r
catch (Exception e) {\r
\r
    System.out.println(e.getMessage());\r
}\r
\`\`\`\r
\r
---\r
\r
# Common Exceptions\r
\r
| Exception | Cause |\r
|---|---|\r
| ArithmeticException | Divide by zero |\r
| NullPointerException | Null object access |\r
| ArrayIndexOutOfBoundsException | Invalid array index |\r
| NumberFormatException | Invalid number conversion |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- try block\r
- catch block\r
- handling runtime errors\r
- multiple catch blocks\r
- exception messages`;export{e as default};