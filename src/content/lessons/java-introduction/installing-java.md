# Installing Java

Before writing Java programs, you must install Java on your system.

This includes:

- JDK (Java Development Kit)
- Java compiler
- Runtime environment

---

# What You Need

Install:

```txt
JDK (Java Development Kit)
```

The JDK contains:

- Java compiler
- JVM
- JRE
- Development tools

---

# Step 1 — Download JDK

Download the latest JDK from Oracle or OpenJDK.

Recommended versions:

- Java 17
- Java 21

---

# Step 2 — Install Java

Run the installer and follow the setup process.

Typical installation path on Windows:

```txt
C:\Program Files\Java\
```

---

# Step 3 — Verify Installation

Open terminal or command prompt.

Run:

```bash
java -version
```

Example output:

```txt
java version "21"
```

---

# Step 4 — Verify Compiler

Run:

```bash
javac -version
```

Example:

```txt
javac 21
```

---

# Environment Variables

Sometimes Java must be added to PATH manually.

Important variables:

| Variable | Purpose |
|---|---|
| JAVA_HOME | Java installation path |
| PATH | Allows terminal access |

---

# Example JAVA_HOME

```txt
C:\Program Files\Java\jdk-21
```

---

# First Java Program

Create:

```txt
Main.java
```

Add:

```java
public class Main {

    public static void main(String[] args) {

        System.out.println("Java Installed Successfully!");
    }
}
```

---

# Compile Program

```bash
javac Main.java
```

---

# Run Program

```bash
java Main
```

---

# Output

```txt
Java Installed Successfully!
```

---

# Beginner Mistakes

## 1. Installing JRE Instead of JDK

You need:

```txt
JDK
```

not only JRE.

---

## 2. PATH Not Configured

If terminal says:

```txt
java is not recognized
```

PATH is incorrect.

---

## 3. Wrong File Name

File name must match class name.

Correct:

```txt
Main.java
```

---

# Practice Exercises

1. Install Java
2. Verify javac command
3. Compile Hello World
4. Change output message

---

# Mini Challenge

Create a Java program that prints:

- your name
- your college
- your favorite programming language