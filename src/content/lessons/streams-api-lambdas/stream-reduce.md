# Stream Reduce in Java

`reduce()` combines stream elements into a single result.

Used for:

- sum
- multiplication
- aggregation

---

# Syntax

```java
stream.reduce(identity, operation)
```

---

# Sum Example

```java
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Integer> numbers =
            Arrays.asList(1, 2, 3, 4);

        int sum = numbers.stream()

            .reduce(0, (a, b) -> a + b);

        System.out.println(sum);
    }
}
```

---

# Output

```txt
10
```

---

# Maximum Value Example

```java
int max = numbers.stream()

    .reduce(Integer.MIN_VALUE,
        (a, b) -> a > b ? a : b
    );
```

---

# String Concatenation

```java
String text = words.stream()

    .reduce("", (a, b) -> a + b);
```

---

# Identity Value

Initial value passed to reduce.

Example:

```java
0
```

for sum operation.

---

# Reduce vs Collect

| reduce() | collect() |
|---|---|
| single value | collections/results |

---

# Summary

You learned:

- reduce() method
- aggregation
- summation
- maximum calculation
- stream reduction