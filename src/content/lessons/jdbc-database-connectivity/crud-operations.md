# CRUD Operations in JDBC

CRUD stands for:

- Create
- Read
- Update
- Delete

These are basic database operations.

---

# CREATE Operation

Insert data into database.

---

# Example

```java
String sql =
    "INSERT INTO students(name, age) VALUES(?, ?)";

PreparedStatement statement =
    connection.prepareStatement(sql);

statement.setString(1, "Aman");

statement.setInt(2, 21);

statement.executeUpdate();
```

---

# READ Operation

Retrieve data.

---

# Example

```java
String sql =
    "SELECT * FROM students";

Statement statement =
    connection.createStatement();

ResultSet result =
    statement.executeQuery(sql);
```

---

# UPDATE Operation

Modify existing records.

---

# Example

```java
String sql =
    "UPDATE students SET age = ? WHERE id = ?";

PreparedStatement statement =
    connection.prepareStatement(sql);

statement.setInt(1, 25);

statement.setInt(2, 1);

statement.executeUpdate();
```

---

# DELETE Operation

Remove records.

---

# Example

```java
String sql =
    "DELETE FROM students WHERE id = ?";

PreparedStatement statement =
    connection.prepareStatement(sql);

statement.setInt(1, 1);

statement.executeUpdate();
```

---

# executeUpdate()

Returns affected rows count.

---

# CRUD Summary Table

| Operation | SQL |
|---|---|
| Create | INSERT |
| Read | SELECT |
| Update | UPDATE |
| Delete | DELETE |

---

# Summary

You learned:

- CRUD operations
- INSERT query
- SELECT query
- UPDATE query
- DELETE query