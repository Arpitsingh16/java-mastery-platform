# Custom Exceptions in Java

Java allows developers to create their own exceptions.

Custom exceptions improve:

- readability
- debugging
- business validation

---

# Creating Custom Exception

Extend Exception class.

---

# Example

```java
class InvalidAgeException
extends Exception {

    public InvalidAgeException(
        String message
    ) {

        super(message);
    }
}
```

---

# Using Custom Exception

```java
public class Main {

    static void validateAge(int age)
    throws InvalidAgeException {

        if (age < 18) {

            throw new InvalidAgeException(
                "Age must be 18+"
            );
        }
    }

    public static void main(String[] args) {

        try {

            validateAge(15);

        } catch (InvalidAgeException e) {

            System.out.println(
                e.getMessage()
            );
        }
    }
}
```

---

# Output

```txt
Age must be 18+
```

---

# Why Use Custom Exceptions?

Custom exceptions make errors:

- meaningful
- domain-specific
- easier to debug

---

# Checked Custom Exception

```java
extends Exception
```

---

# Unchecked Custom Exception

```java
extends RuntimeException
```

---

# Best Practices

- use meaningful names
- provide detailed messages
- avoid unnecessary custom exceptions

---

# Real World Examples

- InvalidUserException
- PaymentFailedException
- WeakPasswordException

---

# Summary

You learned:

- creating custom exceptions
- checked vs unchecked custom exceptions
- validation handling
- better debugging