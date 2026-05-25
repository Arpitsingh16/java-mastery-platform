# Return Types in Java Methods

Methods can return values back to caller.

---

# Syntax

```java
returnType methodName() {

    return value;
}
```

---

# Example

```java
public class Main {

    static int add(int a, int b) {

        return a + b;
    }

    public static void main(String[] args) {

        int result = add(10, 20);

        System.out.println(result);
    }
}
```

---

# Output

```txt
30
```

---

# Return Keyword

```java
return
```

ends method execution immediately.

---

# Void Return Type

```java
void display() {

}
```

Returns nothing.

---

# Returning Strings

```java
static String greet() {

    return "Hello";
}
```

---

# Returning Boolean

```java
static boolean isAdult(int age) {

    return age >= 18;
}
```

---

# Important Rules

- return type must match returned value
- void methods cannot return values

---

# Common Error

Incorrect:

```java
int method() {

    return "Hello";
}
```

---

# Summary

You learned:

- return types
- return keyword
- returning values
- void methods
- method result handling