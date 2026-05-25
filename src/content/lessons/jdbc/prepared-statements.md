# PreparedStatement in JDBC

PreparedStatement executes parameterized SQL queries safely.

---

# Why PreparedStatement?

Advantages:

- prevents SQL injection
- faster execution
- reusable queries

---

# Syntax

```java
PreparedStatement statement =
    connection.prepareStatement(sql);
```

---

# Example

```java
String sql =
    "SELECT * FROM users WHERE id = ?";

PreparedStatement statement =
    connection.prepareStatement(sql);

statement.setInt(1, 101);

ResultSet result =
    statement.executeQuery();
```

---

# Placeholder Symbol

```java
?
```

represents dynamic values.

---

# Inserting Data Example

```java
String sql =
    "INSERT INTO students(name, age) VALUES(?, ?)";

PreparedStatement statement =
    connection.prepareStatement(sql);

statement.setString(1, "Rahul");

statement.setInt(2, 20);

statement.executeUpdate();
```

---

# SQL Injection Prevention

Unsafe:

```java
"SELECT * FROM users WHERE name = '" + name + "'"
```

Safe:

```java
PreparedStatement
```

---

# Common Methods

| Method | Purpose |
|---|---|
| setInt() | integer value |
| setString() | string value |
| setDouble() | decimal value |

---

# executeQuery vs executeUpdate

| Method | Purpose |
|---|---|
| executeQuery() | SELECT |
| executeUpdate() | INSERT/UPDATE/DELETE |

---

# Summary

You learned:

- PreparedStatement basics
- parameterized queries
- SQL injection prevention
- inserting data
- query execution