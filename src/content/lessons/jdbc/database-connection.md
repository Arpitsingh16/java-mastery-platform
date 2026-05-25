# Database Connection in JDBC

A database connection links Java applications with databases.

---

# Import Package

```java
import java.sql.*;
```

---

# Connection Syntax

```java
Connection connection =
    DriverManager.getConnection(
        url,
        username,
        password
    );
```

---

# MySQL Example

```java
Connection connection =
    DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/studentdb",
        "root",
        "password"
    );
```

---

# Connection Parameters

| Parameter | Meaning |
|---|---|
| URL | database location |
| username | database username |
| password | database password |

---

# Complete Example

```java
import java.sql.*;

public class Main {

    public static void main(String[] args) {

        try {

            Connection connection =
                DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/test",
                    "root",
                    "password"
                );

            System.out.println(
                "Database Connected"
            );

            connection.close();

        } catch (SQLException e) {

            System.out.println(
                e.getMessage()
            );
        }
    }
}
```

---

# Output

```txt
Database Connected
```

---

# Common Errors

| Error | Cause |
|---|---|
| SQLException | wrong credentials |
| Driver not found | missing JDBC driver |

---

# Closing Connections

Always close database connections.

```java
connection.close();
```

---

# Try-With-Resources

```java
try (
    Connection connection =
        DriverManager.getConnection(...)
) {

}
```

---

# Summary

You learned:

- database connection setup
- DriverManager
- connection parameters
- exception handling
- safe connection closing