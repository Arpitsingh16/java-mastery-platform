# FileWriter in Java

`FileWriter` is used to write data into files.

It writes character-based content.

---

# Import Statement

```java
import java.io.FileWriter;
```

---

# Basic Example

```java
import java.io.FileWriter;

public class Main {

    public static void main(String[] args)
    throws Exception {

        FileWriter writer =
            new FileWriter("output.txt");

        writer.write(
            "Hello Java"
        );

        writer.close();
    }
}
```

---

# Output File

```txt
Hello Java
```

---

# Why close() is Important

Without `close()`:

- data may not save properly
- memory leaks may occur

---

# Writing Multiple Lines

```java
writer.write("Java\n");

writer.write("Programming");
```

---

# Append Mode

```java
FileWriter writer =
    new FileWriter(
        "output.txt",
        true
    );
```

`true` enables append mode.

---

# Example

```java
writer.write(
    "\nNew Line"
);
```

---

# Common Exceptions

| Exception | Cause |
|---|---|
| IOException | Writing failure |

---

# Try-With-Resources

```java
try (
    FileWriter writer =
        new FileWriter("data.txt")
) {

    writer.write("Safe writing");
}
```

---

# Summary

You learned:

- FileWriter basics
- writing files
- append mode
- close() importance
- safe file handling