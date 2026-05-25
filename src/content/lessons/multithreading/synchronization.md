# Synchronization in Java

Synchronization controls access to shared resources.

It prevents:

```txt
Race Conditions
```

---

# Race Condition

Occurs when multiple threads modify shared data simultaneously.

---

# Unsynchronized Example

```java
class Counter {

    int count = 0;

    void increment() {

        count++;
    }
}
```

Multiple threads may corrupt value.

---

# Synchronized Method

```java
synchronized void increment() {

    count++;
}
```

---

# Example

```java
class Counter {

    int count = 0;

    synchronized void increment() {

        count++;
    }
}
```

---

# How Synchronization Works

Only one thread enters synchronized block at a time.

---

# Synchronized Block

```java
synchronized(this) {

    // critical section
}
```

---

# Deadlock

Occurs when threads wait forever for locks.

---

# Thread Safety

Synchronization helps create:

```txt
Thread-Safe Programs
```

---

# Performance Issue

Too much synchronization can slow applications.

---

# Summary

You learned:

- synchronization basics
- race conditions
- synchronized methods
- thread safety
- deadlocks