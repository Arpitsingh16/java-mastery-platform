# Thread Priority in Java

Thread priority suggests execution importance to CPU scheduler.

---

# Priority Range

```txt
1 to 10
```

---

# Constants

| Constant | Value |
|---|---|
| MIN_PRIORITY | 1 |
| NORM_PRIORITY | 5 |
| MAX_PRIORITY | 10 |

---

# Setting Priority

```java
thread.setPriority(10);
```

---

# Example

```java
class MyThread extends Thread {

    public void run() {

        System.out.println(
            Thread.currentThread()
                .getPriority()
        );
    }
}

public class Main {

    public static void main(String[] args) {

        MyThread t1 =
            new MyThread();

        t1.setPriority(10);

        t1.start();
    }
}
```

---

# Getting Priority

```java
thread.getPriority();
```

---

# Important Point

Priority is:

```txt
only a suggestion
```

Operating system decides actual scheduling.

---

# Default Priority

Main thread priority:

```txt
5
```

---

# Priority Example

Higher priority threads usually execute first.

But not guaranteed.

---

# Summary

You learned:

- thread priorities
- priority constants
- setPriority()
- getPriority()
- scheduling behavior