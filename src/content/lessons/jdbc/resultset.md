# ResultSet in JDBC

ResultSet stores data returned from SQL queries.

---

# Creating ResultSet

```java
Statement statement =
    connection.createStatement();

ResultSet result =
    statement.executeQuery(
        "SELECT * FROM students"
    );
```

---

# Traversing ResultSet

```java
while (result.next()) {

    System.out.println(
        result.getString("name")
    );
}
```

---

# next() Method

Moves cursor to next row.

Returns:

```txt
true
```

if row exists.

---

# Accessing Data

| Method | Purpose |
|---|---|
| getInt() | integer |
| getString() | string |
| getDouble() | decimal |

---

# Example

```java
int id =
    result.getInt("id");

String name =
    result.getString("name");
```

---

# Full Example

```java
while (result.next()) {

    int id =
        result.getInt("id");

    String name =
        result.getString("name");

    System.out.println(
        id + " " + name
    );
}
```

---

# Output Example

```txt
1 Rahul
2 Aman
```

---

# Important Notes

- cursor starts before first row
- next() required before reading data

---

# Closing ResultSet

```java
result.close();
```

---

# Summary

You learned:

- ResultSet basics
- traversing query data
- next() method
- retrieving column values
- reading SQL results