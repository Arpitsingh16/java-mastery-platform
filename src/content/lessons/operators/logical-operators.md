# Logical Operators in Java

Logical operators combine multiple conditions.

## Logical Operators

| Operator | Meaning |
|----------|----------|
| && | AND |
| \|\| | OR |
| ! | NOT |

## Example

```java
public class Main {

    public static void main(String[] args) {

        int age = 20;

        System.out.println(age > 18 && age < 30);
        System.out.println(age > 25 || age < 30);
        System.out.println(!(age > 18));
    }
}
```

## Output

```txt
true
true
false
```

## Key Points

- `&&` returns true only if both conditions are true.
- `||` returns true if one condition is true.
- `!` reverses boolean value.