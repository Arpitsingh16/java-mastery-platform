# Method Parameters in Java

Parameters allow methods to receive input values.

---

# Syntax

```java
void methodName(type parameter) {

}
```

---

# Example

```java
public class Main {

    static void greet(String name) {

        System.out.println(
            "Hello " + name
        );
    }

    public static void main(String[] args) {

        greet("Rahul");
    }
}
```

---

# Output

```txt
Hello Rahul
```

---

# Multiple Parameters

```java
static void add(int a, int b) {

    System.out.println(a + b);
}
```

---

# Calling Method

```java
add(10, 20);
```

---

# Arguments vs Parameters

| Parameters | Arguments |
|---|---|
| variables in method | actual values passed |

---

# Java is Pass By Value

Java always passes:

```txt
copies of values
```

---

# Primitive Example

```java
static void change(int x) {

    x = 50;
}
```

Original variable remains unchanged.

---

# Object Reference Example

```java
static void modify(Student s) {

    s.name = "Aman";
}
```

Object data can change.

---

# Summary

You learned:

- method parameters
- arguments
- multiple parameters
- pass-by-value concept
- object references