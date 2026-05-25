var e=`# JDBC Interview Questions\r
\r
---\r
\r
# 1. What is JDBC?\r
\r
Java Database Connectivity API.\r
\r
Used to connect Java applications with databases.\r
\r
---\r
\r
# 2. What are JDBC Components?\r
\r
- DriverManager\r
- Connection\r
- Statement\r
- PreparedStatement\r
- ResultSet\r
\r
---\r
\r
# 3. Difference Between Statement and PreparedStatement\r
\r
| Statement | PreparedStatement |\r
|---|---|\r
| vulnerable to SQL injection | secure |\r
| slower | faster |\r
\r
---\r
\r
# 4. What is ResultSet?\r
\r
Stores data returned from database query.\r
\r
---\r
\r
# 5. What is SQL Injection?\r
\r
Malicious SQL code inserted through inputs.\r
\r
---\r
\r
# 6. Why Use PreparedStatement?\r
\r
- prevents SQL injection\r
- improves performance\r
\r
---\r
\r
# 7. What is Connection Pooling?\r
\r
Reusing database connections for performance.\r
\r
---\r
\r
# 8. Difference Between executeQuery() and executeUpdate()\r
\r
| executeQuery | executeUpdate |\r
|---|---|\r
| SELECT queries | INSERT/UPDATE/DELETE |\r
\r
---\r
\r
# 9. What is Commit and Rollback?\r
\r
Used for transaction management.\r
\r
---\r
\r
# 10. What is JDBC Driver?\r
\r
Software component enabling Java-database communication.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- JDBC basics\r
- prepared statements\r
- transactions\r
- result sets\r
- database interview concepts`;export{e as default};