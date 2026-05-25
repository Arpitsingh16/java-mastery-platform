# Introduction to JDBC

JDBC stands for:

```txt
Java Database Connectivity
```

It allows Java applications to communicate with databases.

---

# Why JDBC?

JDBC is used to:

- connect Java with databases
- execute SQL queries
- store and retrieve data
- manage transactions

---

# Supported Databases

JDBC works with:

- MySQL
- PostgreSQL
- Oracle
- SQL Server

---

# JDBC Architecture

```txt
Java Application
       ↓
      JDBC
       ↓
   Database Driver
       ↓
     Database
```

---

# Main JDBC Components

| Component | Purpose |
|---|---|
| DriverManager | manages drivers |
| Connection | database connection |
| Statement | executes SQL |
| ResultSet | stores query results |

---

# JDBC Workflow

1. Load driver
2. Create connection
3. Execute SQL
4. Process results
5. Close connection

---

# Basic Example

```java
import java.sql.*;

public class Main {

    public static void main(String[] args)
    throws Exception {

        Connection connection =
            DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/test",
                "root",
                "password"
            );

        System.out.println(
            "Connected"
        );

        connection.close();
    }
}
```

---

# JDBC Packages

```java
import java.sql.*;
```

---

# Advantages

- platform independent
- supports multiple databases
- secure database access

---

# Summary

You learned:

- JDBC basics
- JDBC architecture
- database communication
- JDBC workflow
- core JDBC components