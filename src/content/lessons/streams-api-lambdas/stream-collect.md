# Stream Collect in Java

`collect()` gathers stream results into collections or structures.

---

# Syntax

```java
stream.collect(Collectors.method())
```

---

# Import Statement

```java
import java.util.stream.Collectors;
```

---

# Collect to List Example

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {

        List<Integer> numbers =
            Arrays.asList(1, 2, 3, 4);

        List<Integer> evenNumbers =

            numbers.stream()

                .filter(n -> n % 2 == 0)

                .collect(Collectors.toList());

        System.out.println(evenNumbers);
    }
}
```

---

# Output

```txt
[2, 4]
```

---

# Collect to Set

```java
.collect(Collectors.toSet())
```

---

# Joining Strings

```java
.collect(Collectors.joining(", "))
```

---

# Counting Elements

```java
.collect(Collectors.counting())
```

---

# Grouping Example

```java
.collect(Collectors.groupingBy(
    String::length
))
```

---

# Collect vs Reduce

| collect() | reduce() |
|---|---|
| collections | single value |

---

# Benefits

- easy collection building
- readable pipelines
- powerful aggregation

---

# Summary

You learned:

- collect() method
- Collectors utility
- grouping
- joining
- collecting stream results