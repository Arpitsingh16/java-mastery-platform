var e=`# PreparedStatement in JDBC\r
\r
PreparedStatement executes parameterized SQL queries safely.\r
\r
---\r
\r
# Why PreparedStatement?\r
\r
Advantages:\r
\r
- prevents SQL injection\r
- faster execution\r
- reusable queries\r
\r
---\r
\r
# Syntax\r
\r
\`\`\`java\r
PreparedStatement statement =\r
    connection.prepareStatement(sql);\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
String sql =\r
    "SELECT * FROM users WHERE id = ?";\r
\r
PreparedStatement statement =\r
    connection.prepareStatement(sql);\r
\r
statement.setInt(1, 101);\r
\r
ResultSet result =\r
    statement.executeQuery();\r
\`\`\`\r
\r
---\r
\r
# Placeholder Symbol\r
\r
\`\`\`java\r
?\r
\`\`\`\r
\r
represents dynamic values.\r
\r
---\r
\r
# Inserting Data Example\r
\r
\`\`\`java\r
String sql =\r
    "INSERT INTO students(name, age) VALUES(?, ?)";\r
\r
PreparedStatement statement =\r
    connection.prepareStatement(sql);\r
\r
statement.setString(1, "Rahul");\r
\r
statement.setInt(2, 20);\r
\r
statement.executeUpdate();\r
\`\`\`\r
\r
---\r
\r
# SQL Injection Prevention\r
\r
Unsafe:\r
\r
\`\`\`java\r
"SELECT * FROM users WHERE name = '" + name + "'"\r
\`\`\`\r
\r
Safe:\r
\r
\`\`\`java\r
PreparedStatement\r
\`\`\`\r
\r
---\r
\r
# Common Methods\r
\r
| Method | Purpose |\r
|---|---|\r
| setInt() | integer value |\r
| setString() | string value |\r
| setDouble() | decimal value |\r
\r
---\r
\r
# executeQuery vs executeUpdate\r
\r
| Method | Purpose |\r
|---|---|\r
| executeQuery() | SELECT |\r
| executeUpdate() | INSERT/UPDATE/DELETE |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- PreparedStatement basics\r
- parameterized queries\r
- SQL injection prevention\r
- inserting data\r
- query execution`;export{e as default};