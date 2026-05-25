# Stream Map in Java

`map()` transforms stream elements.

Used for:

- modifying data
- converting values
- creating new collections

---

# Syntax

```java
stream.map(transformation)
```

---

# Example

```java
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Integer> numbers =
            Arrays.asList(1, 2, 3);

        numbers.stream()

            .map(n -> n * n)

            .forEach(System.out::println);
    }
}
```

---

# Output

```txt
1
4
9
```

---

# String Transformation

```java
names.stream()

    .map(String::toUpperCase)

    .forEach(System.out::println);
```

---

# Converting Types

```java
numbers.stream()

    .map(String::valueOf)
```

Converts integers to strings.

---

# Chaining Example

```java
numbers.stream()

    .filter(n -> n > 2)

    .map(n -> n * 10)
```

---

# Benefits

- concise transformations
- readable pipelines
- immutable operations

---

# Summary

You learned:

- map() method
- transforming streams
- type conversion
- chaining operations
- lambda transformations