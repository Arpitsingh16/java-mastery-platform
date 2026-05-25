# Finally Block in Java

The finally block always executes.

Used for:

- cleanup
- closing files
- releasing resources

---

# Syntax

```java
try {

    // risky code

} catch (Exception e) {

    // handling

} finally {

    // cleanup
}
```

---

# Example

```java
try {

    int result = 10 / 0;

} catch (ArithmeticException e) {

    System.out.println("Error occurred");

} finally {

    System.out.println("Finally block executed");
}
```

---

# Output

```txt
Error occurred
Finally block executed
```

---

# Important Point

finally runs:

- exception occurs
- exception does not occur

---

# File Closing Example

```java
Scanner sc = new Scanner(System.in);

try {

    System.out.println("Reading input");

} finally {

    sc.close();
}
```

---

# When Finally May Not Run

Rare cases:

- JVM shutdown
- System.exit()

---

# Try Without Catch

Valid syntax:

```java
try {

} finally {

}
```

---

# Why Finally is Important

Without cleanup:

- memory leaks
- resource leaks
- locked files

can occur.

---

# Summary

You learned:

- finally block
- cleanup operations
- guaranteed execution
- resource management