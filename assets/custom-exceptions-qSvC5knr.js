var e=`# Custom Exceptions in Java\r
\r
Java allows developers to create their own exceptions.\r
\r
Custom exceptions improve:\r
\r
- readability\r
- debugging\r
- business validation\r
\r
---\r
\r
# Creating Custom Exception\r
\r
Extend Exception class.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
class InvalidAgeException\r
extends Exception {\r
\r
    public InvalidAgeException(\r
        String message\r
    ) {\r
\r
        super(message);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Using Custom Exception\r
\r
\`\`\`java\r
public class Main {\r
\r
    static void validateAge(int age)\r
    throws InvalidAgeException {\r
\r
        if (age < 18) {\r
\r
            throw new InvalidAgeException(\r
                "Age must be 18+"\r
            );\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
\r
        try {\r
\r
            validateAge(15);\r
\r
        } catch (InvalidAgeException e) {\r
\r
            System.out.println(\r
                e.getMessage()\r
            );\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Age must be 18+\r
\`\`\`\r
\r
---\r
\r
# Why Use Custom Exceptions?\r
\r
Custom exceptions make errors:\r
\r
- meaningful\r
- domain-specific\r
- easier to debug\r
\r
---\r
\r
# Checked Custom Exception\r
\r
\`\`\`java\r
extends Exception\r
\`\`\`\r
\r
---\r
\r
# Unchecked Custom Exception\r
\r
\`\`\`java\r
extends RuntimeException\r
\`\`\`\r
\r
---\r
\r
# Best Practices\r
\r
- use meaningful names\r
- provide detailed messages\r
- avoid unnecessary custom exceptions\r
\r
---\r
\r
# Real World Examples\r
\r
- InvalidUserException\r
- PaymentFailedException\r
- WeakPasswordException\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- creating custom exceptions\r
- checked vs unchecked custom exceptions\r
- validation handling\r
- better debugging`;export{e as default};