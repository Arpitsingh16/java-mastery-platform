# Thread Lifecycle in Java

Threads move through multiple states during execution.

---

# Thread States

| State | Description |
|---|---|
| New | thread created |
| Runnable | ready to run |
| Running | executing |
| Waiting | paused |
| Terminated | finished |

---

# Lifecycle Flow

```txt
New → Runnable → Running
         ↓
      Waiting
         ↓
    Terminated
```

---

# New State

```java
Thread t =
    new Thread();
```

Thread created but not started.

---

# Runnable State

```java
t.start();
```

Thread ready for CPU scheduling.

---

# Running State

Thread executes:

```java
run()
```

method.

---

# Waiting State

Occurs during:

- sleep()
- wait()
- join()

---

# Example

```java
Thread.sleep(2000);
```

Pauses thread for 2 seconds.

---

# Terminated State

Thread finishes execution.

---

# Checking Thread State

```java
System.out.println(
    t.getState()
);
```

---

# Important Methods

| Method | Purpose |
|---|---|
| start() | start thread |
| sleep() | pause thread |
| join() | wait for thread |
| isAlive() | check running |

---

# Summary

You learned:

- thread states
- lifecycle stages
- sleep()
- join()
- thread transitions