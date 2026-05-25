var e=`# Introduction to JDBC\r
\r
JDBC stands for:\r
\r
\`\`\`txt\r
Java Database Connectivity\r
\`\`\`\r
\r
It allows Java applications to communicate with databases.\r
\r
---\r
\r
# Why JDBC?\r
\r
JDBC is used to:\r
\r
- connect Java with databases\r
- execute SQL queries\r
- store and retrieve data\r
- manage transactions\r
\r
---\r
\r
# Supported Databases\r
\r
JDBC works with:\r
\r
- MySQL\r
- PostgreSQL\r
- Oracle\r
- SQL Server\r
\r
---\r
\r
# JDBC Architecture\r
\r
\`\`\`txt\r
Java Application\r
       ↓\r
      JDBC\r
       ↓\r
   Database Driver\r
       ↓\r
     Database\r
\`\`\`\r
\r
---\r
\r
# Main JDBC Components\r
\r
| Component | Purpose |\r
|---|---|\r
| DriverManager | manages drivers |\r
| Connection | database connection |\r
| Statement | executes SQL |\r
| ResultSet | stores query results |\r
\r
---\r
\r
# JDBC Workflow\r
\r
1. Load driver\r
2. Create connection\r
3. Execute SQL\r
4. Process results\r
5. Close connection\r
\r
---\r
\r
# Basic Example\r
\r
\`\`\`java\r
import java.sql.*;\r
\r
public class Main {\r
\r
    public static void main(String[] args)\r
    throws Exception {\r
\r
        Connection connection =\r
            DriverManager.getConnection(\r
                "jdbc:mysql://localhost:3306/test",\r
                "root",\r
                "password"\r
            );\r
\r
        System.out.println(\r
            "Connected"\r
        );\r
\r
        connection.close();\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# JDBC Packages\r
\r
\`\`\`java\r
import java.sql.*;\r
\`\`\`\r
\r
---\r
\r
# Advantages\r
\r
- platform independent\r
- supports multiple databases\r
- secure database access\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- JDBC basics\r
- JDBC architecture\r
- database communication\r
- JDBC workflow\r
- core JDBC components`;export{e as default};