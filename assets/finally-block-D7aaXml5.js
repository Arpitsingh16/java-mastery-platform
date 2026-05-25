var e=`# Finally Block in Java\r
\r
The finally block always executes.\r
\r
Used for:\r
\r
- cleanup\r
- closing files\r
- releasing resources\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
try {\r
\r
    // risky code\r
\r
} catch (Exception e) {\r
\r
    // handling\r
\r
} finally {\r
\r
    // cleanup\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
try {\r
\r
    int result = 10 / 0;\r
\r
} catch (ArithmeticException e) {\r
\r
    System.out.println("Error occurred");\r
\r
} finally {\r
\r
    System.out.println("Finally block executed");\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Error occurred\r
Finally block executed\r
\`\`\`\r
\r
---\r
\r
# Important Point\r
\r
finally runs:\r
\r
- exception occurs\r
- exception does not occur\r
\r
---\r
\r
# File Closing Example\r
\r
\`\`\`java\r
Scanner sc = new Scanner(System.in);\r
\r
try {\r
\r
    System.out.println("Reading input");\r
\r
} finally {\r
\r
    sc.close();\r
}\r
\`\`\`\r
\r
---\r
\r
# When Finally May Not Run\r
\r
Rare cases:\r
\r
- JVM shutdown\r
- System.exit()\r
\r
---\r
\r
# Try Without Catch\r
\r
Valid syntax:\r
\r
\`\`\`java\r
try {\r
\r
} finally {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Why Finally is Important\r
\r
Without cleanup:\r
\r
- memory leaks\r
- resource leaks\r
- locked files\r
\r
can occur.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- finally block\r
- cleanup operations\r
- guaranteed execution\r
- resource management`;export{e as default};