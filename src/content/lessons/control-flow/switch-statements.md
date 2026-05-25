# Switch Statements in Java

Switch statements allow selection from multiple choices.

---

# Syntax

```java
switch (expression) {

    case value:
        // code
        break;

    default:
        // code
}
```

---

# Example

```java
int day = 2;

switch (day) {

    case 1:
        System.out.println("Monday");
        break;

    case 2:
        System.out.println("Tuesday");
        break;

    default:
        System.out.println("Invalid");
}
```

---

# Output

```txt
Tuesday
```

---

# Why Break is Important

Without break:

```java
fall-through
```

occurs.

---

# Example Without Break

```java
int num = 1;

switch (num) {

    case 1:
        System.out.println("One");

    case 2:
        System.out.println("Two");
}
```

Output:

```txt
One
Two
```

---

# Switch with Strings

```java
String role = "admin";

switch (role) {

    case "admin":
        System.out.println("Full access");
        break;
}
```

---

# Default Case

Runs when no case matches.

---

# If Else vs Switch

| If Else | Switch |
|---|---|
| Complex conditions | Multiple exact values |
| Flexible | Cleaner syntax |

---

# Summary

You learned:

- switch syntax
- case labels
- break keyword
- default case
- fall-through behavior