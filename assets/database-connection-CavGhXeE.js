var e=`# Database Connection in JDBC\r
\r
A database connection links Java applications with databases.\r
\r
---\r
\r
# Import Package\r
\r
\`\`\`java\r
import java.sql.*;\r
\`\`\`\r
\r
---\r
\r
# Connection Syntax\r
\r
\`\`\`java\r
Connection connection =\r
    DriverManager.getConnection(\r
        url,\r
        username,\r
        password\r
    );\r
\`\`\`\r
\r
---\r
\r
# MySQL Example\r
\r
\`\`\`java\r
Connection connection =\r
    DriverManager.getConnection(\r
        "jdbc:mysql://localhost:3306/studentdb",\r
        "root",\r
        "password"\r
    );\r
\`\`\`\r
\r
---\r
\r
# Connection Parameters\r
\r
| Parameter | Meaning |\r
|---|---|\r
| URL | database location |\r
| username | database username |\r
| password | database password |\r
\r
---\r
\r
# Complete Example\r
\r
\`\`\`java\r
import java.sql.*;\r
\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        try {\r
\r
            Connection connection =\r
                DriverManager.getConnection(\r
                    "jdbc:mysql://localhost:3306/test",\r
                    "root",\r
                    "password"\r
                );\r
\r
            System.out.println(\r
                "Database Connected"\r
            );\r
\r
            connection.close();\r
\r
        } catch (SQLException e) {\r
\r
            System.out.println(\r
                e.getMessage()\r
            );\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Database Connected\r
\`\`\`\r
\r
---\r
\r
# Common Errors\r
\r
| Error | Cause |\r
|---|---|\r
| SQLException | wrong credentials |\r
| Driver not found | missing JDBC driver |\r
\r
---\r
\r
# Closing Connections\r
\r
Always close database connections.\r
\r
\`\`\`java\r
connection.close();\r
\`\`\`\r
\r
---\r
\r
# Try-With-Resources\r
\r
\`\`\`java\r
try (\r
    Connection connection =\r
        DriverManager.getConnection(...)\r
) {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- database connection setup\r
- DriverManager\r
- connection parameters\r
- exception handling\r
- safe connection closing`;export{e as default};