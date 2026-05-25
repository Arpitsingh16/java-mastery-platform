# Generic Methods in Java

Generic methods allow methods to work with multiple data types.

---

# Basic Syntax

```java
<T> returnType methodName(T value)
```

---

# Example

```java
public class Main {

    static <T> void printData(T data) {

        System.out.println(data);
    }

    public static void main(String[] args) {

        printData(100);

        printData("Java");
    }
}
```

---

# Output

```txt
100
Java
```

---

# Returning Generic Values

```java
static <T> T getValue(T value) {

    return value;
}
```

---

# Example

```java
String text =
    getValue("Hello");
```

---

# Generic Method with Arrays

```java
static <T> void printArray(T[] arr) {

    for (T item : arr) {

        System.out.println(item);
    }
}
```

---

# Benefits

- reusable methods
- type-safe operations
- reduced duplicate code

---

# Generic Methods vs Generic Classes

| Generic Method | Generic Class |
|---|---|
| applies to method | applies to whole class |
| flexible | structured |

---

# Bounded Generic Method

```java
<T extends Number>
```

Restricts allowed types.

---

# Example

```java
static <T extends Number>
void printNumber(T num) {

    System.out.println(num);
}
```

---

# Summary

You learned:

- generic methods
- type parameters
- bounded generics
- reusable logic
- type-safe methods