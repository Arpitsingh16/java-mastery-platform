# Runnable Interface in Java

Runnable is used to create threads in Java.

Preferred over extending Thread class.

---

# Why Runnable?

Advantages:

- supports inheritance
- cleaner design
- reusable tasks

---

# Runnable Syntax

```java
class MyTask
implements Runnable {

    public void run() {

    }
}
```

---

# Example

```java
class MyTask
implements Runnable {

    public void run() {

        System.out.println(
            "Task running"
        );
    }
}

public class Main {

    public static void main(String[] args) {

        MyTask task =
            new MyTask();

        Thread thread =
            new Thread(task);

        thread.start();
    }
}
```

---

# Output

```txt
Task running
```

---

# Runnable vs Thread

| Runnable | Thread |
|---|---|
| interface | class |
| flexible | limited inheritance |

---

# Lambda Runnable

```java
Runnable task = () -> {

    System.out.println("Running");
};
```

---

# Multiple Threads

```java
Thread t1 =
    new Thread(task);

Thread t2 =
    new Thread(task);
```

---

# Benefits

- reusable code
- better architecture
- supports functional style

---

# Summary

You learned:

- Runnable interface
- creating threads
- thread execution
- lambda Runnable
- Runnable vs Thread