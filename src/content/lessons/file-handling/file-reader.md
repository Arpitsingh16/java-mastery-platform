# FileReader in Java

`FileReader` is used to read character-based files in Java.

It is suitable for:

- text files
- configuration files
- logs

---

# Import Statement

```java
import java.io.FileReader;
```

---

# Basic Example

```java
import java.io.FileReader;

public class Main {

    public static void main(String[] args)
    throws Exception {

        FileReader reader =
            new FileReader("data.txt");

        int character;

        while ((character = reader.read()) != -1) {

            System.out.print(
                (char) character
            );
        }

        reader.close();
    }
}
```

---

# How read() Works

`read()` returns:

- ASCII/Unicode integer value
- `-1` when file ends

---

# Reading Character by Character

```java
int ch = reader.read();
```

---

# FileNotFoundException

Occurs when file does not exist.

---

# Common Exceptions

| Exception | Cause |
|---|---|
| FileNotFoundException | Missing file |
| IOException | Reading error |

---

# Better Resource Handling

Use try-with-resources.

```java
try (
    FileReader reader =
        new FileReader("data.txt")
) {

}
```

---

# FileReader vs Scanner

| FileReader | Scanner |
|---|---|
| character stream | token-based |
| faster | easier syntax |

---

# Summary

You learned:

- FileReader basics
- reading files
- character streams
- read() method
- exception handling