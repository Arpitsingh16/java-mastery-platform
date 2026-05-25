var e=`# CRUD Operations in JDBC\r
\r
CRUD stands for:\r
\r
- Create\r
- Read\r
- Update\r
- Delete\r
\r
These are basic database operations.\r
\r
---\r
\r
# CREATE Operation\r
\r
Insert data into database.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
String sql =\r
    "INSERT INTO students(name, age) VALUES(?, ?)";\r
\r
PreparedStatement statement =\r
    connection.prepareStatement(sql);\r
\r
statement.setString(1, "Aman");\r
\r
statement.setInt(2, 21);\r
\r
statement.executeUpdate();\r
\`\`\`\r
\r
---\r
\r
# READ Operation\r
\r
Retrieve data.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
String sql =\r
    "SELECT * FROM students";\r
\r
Statement statement =\r
    connection.createStatement();\r
\r
ResultSet result =\r
    statement.executeQuery(sql);\r
\`\`\`\r
\r
---\r
\r
# UPDATE Operation\r
\r
Modify existing records.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
String sql =\r
    "UPDATE students SET age = ? WHERE id = ?";\r
\r
PreparedStatement statement =\r
    connection.prepareStatement(sql);\r
\r
statement.setInt(1, 25);\r
\r
statement.setInt(2, 1);\r
\r
statement.executeUpdate();\r
\`\`\`\r
\r
---\r
\r
# DELETE Operation\r
\r
Remove records.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
String sql =\r
    "DELETE FROM students WHERE id = ?";\r
\r
PreparedStatement statement =\r
    connection.prepareStatement(sql);\r
\r
statement.setInt(1, 1);\r
\r
statement.executeUpdate();\r
\`\`\`\r
\r
---\r
\r
# executeUpdate()\r
\r
Returns affected rows count.\r
\r
---\r
\r
# CRUD Summary Table\r
\r
| Operation | SQL |\r
|---|---|\r
| Create | INSERT |\r
| Read | SELECT |\r
| Update | UPDATE |\r
| Delete | DELETE |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- CRUD operations\r
- INSERT query\r
- SELECT query\r
- UPDATE query\r
- DELETE query`;export{e as default};