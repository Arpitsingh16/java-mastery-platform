# BufferedReader in Java

`BufferedReader` improves file reading performance.

It reads large chunks instead of single characters.

---

# Import Statements

```java
import java.io.BufferedReader;

import java.io.FileReader;
```

---

# Basic Example

```java
import java.io.BufferedReader;
import java.io.FileReader;

public class Main {

    public static void main(String[] args)
    throws Exception {

        BufferedReader reader =
            new BufferedReader(
                new FileReader("data.txt")
            );

        String line;

        while (
            (line = reader.readLine())
            != null
        ) {

            System.out.println(line);
        }

        reader.close();
    }
}
```

---

# readLine() Method

Reads one full line at a time.

Returns:

```txt
null
```

when file ends.

---

# Why BufferedReader is Faster

Instead of reading:

```txt
1 character at a time
```

it reads:

```txt
large buffered chunks
```

---

# Performance Advantage

| FileReader | BufferedReader |
|---|---|
| slower | faster |
| character-based | buffered |

---

# Reading User Input

```java
BufferedReader br =
    new BufferedReader(
        new InputStreamReader(System.in)
    );
```

---

# Common Exceptions

| Exception | Cause |
|---|---|
| IOException | Input/output failure |

---

# Try-With-Resources

```java
try (
    BufferedReader reader =
        new BufferedReader(
            new FileReader("data.txt")
        )
) {

}
```

---

# Summary

You learned:

- BufferedReader basics
- readLine()
- buffered reading
- performance optimization
- safe resource handling