# Stream Filter in Java

`filter()` is used to select elements matching a condition.

It is part of Java Streams API.

---

# Import Statement

```java
import java.util.stream.*;
```

---

# Basic Syntax

```java
stream.filter(condition)
```

---

# Example

```java
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Integer> numbers =
            Arrays.asList(1, 2, 3, 4, 5, 6);

        numbers.stream()

            .filter(n -> n % 2 == 0)

            .forEach(System.out::println);
    }
}
```

---

# Output

```txt
2
4
6
```

---

# How filter() Works

It keeps elements where condition returns:

```txt
true
```

---

# Filtering Strings

```java
names.stream()

    .filter(name -> name.startsWith("A"))

    .forEach(System.out::println);
```

---

# Chaining Operations

```java
numbers.stream()

    .filter(n -> n > 10)

    .filter(n -> n % 2 == 0)
```

---

# Benefits

- cleaner code
- functional programming
- readable pipelines

---

# Summary

You learned:

- filter() method
- lambda expressions
- stream filtering
- chaining operations
- functional style