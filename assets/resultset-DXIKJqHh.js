var e=`# ResultSet in JDBC\r
\r
ResultSet stores data returned from SQL queries.\r
\r
---\r
\r
# Creating ResultSet\r
\r
\`\`\`java\r
Statement statement =\r
    connection.createStatement();\r
\r
ResultSet result =\r
    statement.executeQuery(\r
        "SELECT * FROM students"\r
    );\r
\`\`\`\r
\r
---\r
\r
# Traversing ResultSet\r
\r
\`\`\`java\r
while (result.next()) {\r
\r
    System.out.println(\r
        result.getString("name")\r
    );\r
}\r
\`\`\`\r
\r
---\r
\r
# next() Method\r
\r
Moves cursor to next row.\r
\r
Returns:\r
\r
\`\`\`txt\r
true\r
\`\`\`\r
\r
if row exists.\r
\r
---\r
\r
# Accessing Data\r
\r
| Method | Purpose |\r
|---|---|\r
| getInt() | integer |\r
| getString() | string |\r
| getDouble() | decimal |\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
int id =\r
    result.getInt("id");\r
\r
String name =\r
    result.getString("name");\r
\`\`\`\r
\r
---\r
\r
# Full Example\r
\r
\`\`\`java\r
while (result.next()) {\r
\r
    int id =\r
        result.getInt("id");\r
\r
    String name =\r
        result.getString("name");\r
\r
    System.out.println(\r
        id + " " + name\r
    );\r
}\r
\`\`\`\r
\r
---\r
\r
# Output Example\r
\r
\`\`\`txt\r
1 Rahul\r
2 Aman\r
\`\`\`\r
\r
---\r
\r
# Important Notes\r
\r
- cursor starts before first row\r
- next() required before reading data\r
\r
---\r
\r
# Closing ResultSet\r
\r
\`\`\`java\r
result.close();\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- ResultSet basics\r
- traversing query data\r
- next() method\r
- retrieving column values\r
- reading SQL results`;export{e as default};