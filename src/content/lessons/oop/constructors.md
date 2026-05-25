# Constructors in Java

Constructors initialize objects.

They execute automatically during object creation.

---

# Constructor Rules

- same name as class
- no return type

---

# Basic Constructor

```java
class Student {

    Student() {

        System.out.println(
            "Constructor called"
        );
    }
}
```

---

# Example

```java
class Student {

    String name;

    Student() {

        name = "Unknown";
    }
}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student();

        System.out.println(
            s1.name
        );
    }
}
```

---

# Output

```txt
Unknown
```

---

# Parameterized Constructor

```java
Student(String n) {

    name = n;
}
```

---

# Example

```java
Student s1 =
    new Student("Rahul");
```

---

# Constructor Overloading

Multiple constructors with different parameters.

---

# Default Constructor

Java provides default constructor if none exists.

---

# this Keyword

```java
this.name = name;
```

Used to refer current object.

---

# Summary

You learned:

- constructors
- parameterized constructors
- constructor overloading
- default constructor
- this keyword