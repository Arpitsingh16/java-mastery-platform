# Encapsulation in Java

Encapsulation means:

```txt
data hiding
```

and controlled access to data.

---

# Why Encapsulation?

Benefits:

- security
- maintainability
- controlled modification

---

# Private Variables

```java
private String name;
```

Cannot access directly outside class.

---

# Getter and Setter

```java
public void setName(String name) {

    this.name = name;
}

public String getName() {

    return name;
}
```

---

# Full Example

```java
class Student {

    private String name;

    public void setName(String name) {

        this.name = name;
    }

    public String getName() {

        return name;
    }
}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student();

        s1.setName("Rahul");

        System.out.println(
            s1.getName()
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

# Access Modifiers

| Modifier | Access |
|---|---|
| private | same class |
| protected | package + subclass |
| public | everywhere |

---

# Summary

You learned:

- encapsulation
- private variables
- getter/setter methods
- access modifiers
- data security