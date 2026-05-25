# Type Casting in Java

Type casting converts one data type into another.

Java supports:

- implicit casting
- explicit casting

---

# Implicit Casting

Also called:

```txt
widening conversion
```

Smaller type converts automatically into larger type.

---

# Example

```java
int number = 10;

double result = number;

System.out.println(result);
```

---

# Output

```txt
10.0
```

---

# Explicit Casting

Also called:

```txt
narrowing conversion
```

Larger type manually converts into smaller type.

---

# Example

```java
double price = 99.99;

int finalPrice = (int) price;

System.out.println(finalPrice);
```

---

# Output

```txt
99
```

Decimal portion is removed.

---

# Why Type Casting Is Important

Used in:

- calculations
- user input
- APIs
- data processing

---

# Example Program

```java
public class Main {

    public static void main(String[] args) {

        int a = 50;

        double b = a;

        System.out.println(b);

        double x = 99.99;

        int y = (int) x;

        System.out.println(y);
    }
}
```

---

# Beginner Mistakes

## 1. Data Loss

```java
double x = 9.99;

int y = (int) x;
```

Output:

```txt
9
```

Precision lost.

---

## 2. Forgetting Parentheses

Wrong:

```java
int y = int x;
```

Correct:

```java
int y = (int) x;
```

---

# Practice Exercises

1. Convert int to double
2. Convert double to int
3. Convert char to int
4. Print ASCII values

---

# Mini Challenge

Create a temperature converter using type casting.