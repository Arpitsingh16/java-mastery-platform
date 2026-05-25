# Try Catch in Java

Exception handling prevents programs from crashing unexpectedly.

Java uses:

- try
- catch

blocks to handle runtime errors safely.

---

# Basic Syntax

```java
try {

    // risky code

} catch (Exception e) {

    // handling code
}
```

---

# Example

```java
int a = 10;
int b = 0;

try {

    int result = a / b;

    System.out.println(result);

} catch (ArithmeticException e) {

    System.out.println("Cannot divide by zero");
}
```

---

# Output

```txt
Cannot divide by zero
```

---

# How It Works

1. Java executes try block
2. Exception occurs
3. Control jumps to catch block
4. Program continues safely

---

# Multiple Catch Blocks

```java
try {

    String text = null;

    System.out.println(text.length());

} catch (ArithmeticException e) {

    System.out.println("Math error");

} catch (NullPointerException e) {

    System.out.println("Null error");
}
```

---

# Generic Exception Catch

```java
catch (Exception e)
```

Handles most exceptions.

---

# Printing Exception Message

```java
catch (Exception e) {

    System.out.println(e.getMessage());
}
```

---

# Common Exceptions

| Exception | Cause |
|---|---|
| ArithmeticException | Divide by zero |
| NullPointerException | Null object access |
| ArrayIndexOutOfBoundsException | Invalid array index |
| NumberFormatException | Invalid number conversion |

---

# Summary

You learned:

- try block
- catch block
- handling runtime errors
- multiple catch blocks
- exception messages