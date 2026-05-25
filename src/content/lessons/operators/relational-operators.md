# Relational Operators in Java

Relational operators compare two values.

## Relational Operators

| Operator | Meaning |
|----------|----------|
| == | Equal to |
| != | Not equal to |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal |
| <= | Less than or equal |

## Example

```java
public class Main {

    public static void main(String[] args) {

        int a = 10;
        int b = 20;

        System.out.println(a == b);
        System.out.println(a != b);
        System.out.println(a > b);
        System.out.println(a < b);
    }
}
```

## Output

```txt
false
true
false
true
```

## Key Points

- Relational operators always return boolean values.
- Commonly used inside conditions.