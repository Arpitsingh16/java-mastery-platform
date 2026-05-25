# Method Overloading in Java

Method overloading means:

```txt
same method name
different parameters
```

---

# Why Use Overloading?

Improves:

- readability
- flexibility
- code reuse

---

# Example

```java
public class Main {

    static int add(int a, int b) {

        return a + b;
    }

    static double add(double a, double b) {

        return a + b;
    }

    public static void main(String[] args) {

        System.out.println(add(10, 20));

        System.out.println(add(5.5, 2.5));
    }
}
```

---

# Output

```txt
30
8.0
```

---

# Valid Overloading Rules

Methods must differ by:

- parameter count
- parameter type
- parameter order

---

# Invalid Overloading

Changing only return type is invalid.

Incorrect:

```java
int test()
double test()
```

---

# Constructor Overloading

Constructors can also be overloaded.

```java
Student()

Student(String name)
```

---

# Benefits

- cleaner APIs
- easier method usage
- improved readability

---

# Real World Example

```java
System.out.println()
```

has many overloaded versions.

---

# Summary

You learned:

- method overloading
- overloading rules
- constructor overloading
- parameter differences
- practical examples