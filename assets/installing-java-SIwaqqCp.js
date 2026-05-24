var e=`# Installing Java\r
\r
Before writing Java programs, you must install Java on your system.\r
\r
This includes:\r
\r
- JDK (Java Development Kit)\r
- Java compiler\r
- Runtime environment\r
\r
---\r
\r
# What You Need\r
\r
Install:\r
\r
\`\`\`txt\r
JDK (Java Development Kit)\r
\`\`\`\r
\r
The JDK contains:\r
\r
- Java compiler\r
- JVM\r
- JRE\r
- Development tools\r
\r
---\r
\r
# Step 1 — Download JDK\r
\r
Download the latest JDK from Oracle or OpenJDK.\r
\r
Recommended versions:\r
\r
- Java 17\r
- Java 21\r
\r
---\r
\r
# Step 2 — Install Java\r
\r
Run the installer and follow the setup process.\r
\r
Typical installation path on Windows:\r
\r
\`\`\`txt\r
C:\\Program Files\\Java\\\r
\`\`\`\r
\r
---\r
\r
# Step 3 — Verify Installation\r
\r
Open terminal or command prompt.\r
\r
Run:\r
\r
\`\`\`bash\r
java -version\r
\`\`\`\r
\r
Example output:\r
\r
\`\`\`txt\r
java version "21"\r
\`\`\`\r
\r
---\r
\r
# Step 4 — Verify Compiler\r
\r
Run:\r
\r
\`\`\`bash\r
javac -version\r
\`\`\`\r
\r
Example:\r
\r
\`\`\`txt\r
javac 21\r
\`\`\`\r
\r
---\r
\r
# Environment Variables\r
\r
Sometimes Java must be added to PATH manually.\r
\r
Important variables:\r
\r
| Variable | Purpose |\r
|---|---|\r
| JAVA_HOME | Java installation path |\r
| PATH | Allows terminal access |\r
\r
---\r
\r
# Example JAVA_HOME\r
\r
\`\`\`txt\r
C:\\Program Files\\Java\\jdk-21\r
\`\`\`\r
\r
---\r
\r
# First Java Program\r
\r
Create:\r
\r
\`\`\`txt\r
Main.java\r
\`\`\`\r
\r
Add:\r
\r
\`\`\`java\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        System.out.println("Java Installed Successfully!");\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Compile Program\r
\r
\`\`\`bash\r
javac Main.java\r
\`\`\`\r
\r
---\r
\r
# Run Program\r
\r
\`\`\`bash\r
java Main\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Java Installed Successfully!\r
\`\`\`\r
\r
---\r
\r
# Beginner Mistakes\r
\r
## 1. Installing JRE Instead of JDK\r
\r
You need:\r
\r
\`\`\`txt\r
JDK\r
\`\`\`\r
\r
not only JRE.\r
\r
---\r
\r
## 2. PATH Not Configured\r
\r
If terminal says:\r
\r
\`\`\`txt\r
java is not recognized\r
\`\`\`\r
\r
PATH is incorrect.\r
\r
---\r
\r
## 3. Wrong File Name\r
\r
File name must match class name.\r
\r
Correct:\r
\r
\`\`\`txt\r
Main.java\r
\`\`\`\r
\r
---\r
\r
# Practice Exercises\r
\r
1. Install Java\r
2. Verify javac command\r
3. Compile Hello World\r
4. Change output message\r
\r
---\r
\r
# Mini Challenge\r
\r
Create a Java program that prints:\r
\r
- your name\r
- your college\r
- your favorite programming language`;export{e as default};