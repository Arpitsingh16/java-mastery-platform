# Introduction to Threads in Java

A thread is the smallest unit of execution inside a program.

Java supports:

```txt
Multithreading
```

which allows multiple tasks to run simultaneously.

---

# Why Threads?

Threads improve:

- performance
- responsiveness
- multitasking

---

# Real World Examples

- downloading files
- video streaming
- games
- web servers

---

# Creating Threads

Two common ways:

- extending Thread class
- implementing Runnable interface

---

# Thread Class Example

```java
class MyThread extends Thread {

    public void run() {

        System.out.println(
            "Thread running"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        MyThread thread =
            new MyThread();

        thread.start();
    }
}
```

---

# Output

```txt
Thread running
```

---

# start() vs run()

| start() | run() |
|---|---|
| creates new thread | normal method call |

---

# Main Thread

Every Java program starts with:

```txt
main thread
```

---

# Multiple Threads Example

```java
for (int i = 1; i <= 5; i++) {

    System.out.println(i);
}
```

Can execute alongside other threads.

---

# Advantages

- faster execution
- parallel tasks
- better CPU usage

---

# Summary

You learned:

- thread basics
- multithreading
- Thread class
- start() method
- parallel execution