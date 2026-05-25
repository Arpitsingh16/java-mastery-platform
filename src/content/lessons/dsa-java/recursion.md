# Recursion in Java

Recursion occurs when a method calls itself.

---

# Basic Structure

```java
void method() {

    method();
}
```

---

# Base Condition

Recursion MUST stop using a base condition.

Without it:

```txt
StackOverflowError
```

---

# Factorial Example

```java
int factorial(int n) {

    if (n == 1) {

        return 1;
    }

    return n * factorial(n - 1);
}
```

---

# Working

```txt
factorial(5)
= 5 * factorial(4)
= 5 * 4 * factorial(3)
```

---

# Recursive Flow

- method call added to stack
- execution pauses
- resumes after return

---

# Fibonacci Example

```java
int fibonacci(int n) {

    if (n <= 1) {

        return n;
    }

    return fibonacci(n - 1)
         + fibonacci(n - 2);
}
```

---

# Advantages

- cleaner code
- useful for trees/graphs
- divide-and-conquer algorithms

---

# Disadvantages

- memory overhead
- slower sometimes
- stack overflow risk

---

# Summary

You learned:

- recursion basics
- base condition
- call stack
- factorial recursion
- fibonacci recursion