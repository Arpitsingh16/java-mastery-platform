# Do While Loop in Java

The do-while loop executes code at least once.

---

# Syntax

```java
do {

    // code

} while (condition);
```

---

# Example

```java
int i = 1;

do {

    System.out.println(i);

    i++;

} while (i <= 5);
```

---

# Output

```txt
1
2
3
4
5
```

---

# Key Difference

| While | Do While |
|---|---|
| Checks first | Executes first |

---

# Example

```java
int number = 10;

do {

    System.out.println(number);

} while (number < 5);
```

Runs once even though condition false.

---

# Menu Example

```java
int choice;

do {

    System.out.println("1. Start");
    System.out.println("2. Exit");

    choice = scanner.nextInt();

} while (choice != 2);
```

---

# Summary

You learned:

- do-while syntax
- guaranteed execution
- loop comparison
- menu-driven loops