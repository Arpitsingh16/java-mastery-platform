# Classes and Objects in Java

Java is an:

```txt
Object-Oriented Programming Language
```

Classes and objects are core concepts of OOP.

---

# What is a Class?

A class is a blueprint for creating objects.

It defines:

- properties
- behaviors

---

# Class Example

```java
class Student {

    String name;

    int age;
}
```

---

# What is an Object?

An object is an instance of a class.

---

# Creating Object

```java
Student s1 =
    new Student();
```

---

# Accessing Variables

```java
s1.name = "Rahul";

s1.age = 20;
```

---

# Full Example

```java
class Student {

    String name;

    int age;
}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student();

        s1.name = "Rahul";

        s1.age = 20;

        System.out.println(
            s1.name
        );
    }
}
```

---

# Output

```txt
Rahul
```

---

# Real World Analogy

| Class | Object |
|---|---|
| Car blueprint | Actual car |
| Student template | Real student |

---

# Summary

You learned:

- classes
- objects
- object creation
- accessing properties
- OOP basics