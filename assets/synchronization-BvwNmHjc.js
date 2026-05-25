var e=`# Synchronization in Java\r
\r
Synchronization controls access to shared resources.\r
\r
It prevents:\r
\r
\`\`\`txt\r
Race Conditions\r
\`\`\`\r
\r
---\r
\r
# Race Condition\r
\r
Occurs when multiple threads modify shared data simultaneously.\r
\r
---\r
\r
# Unsynchronized Example\r
\r
\`\`\`java\r
class Counter {\r
\r
    int count = 0;\r
\r
    void increment() {\r
\r
        count++;\r
    }\r
}\r
\`\`\`\r
\r
Multiple threads may corrupt value.\r
\r
---\r
\r
# Synchronized Method\r
\r
\`\`\`java\r
synchronized void increment() {\r
\r
    count++;\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
class Counter {\r
\r
    int count = 0;\r
\r
    synchronized void increment() {\r
\r
        count++;\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# How Synchronization Works\r
\r
Only one thread enters synchronized block at a time.\r
\r
---\r
\r
# Synchronized Block\r
\r
\`\`\`java\r
synchronized(this) {\r
\r
    // critical section\r
}\r
\`\`\`\r
\r
---\r
\r
# Deadlock\r
\r
Occurs when threads wait forever for locks.\r
\r
---\r
\r
# Thread Safety\r
\r
Synchronization helps create:\r
\r
\`\`\`txt\r
Thread-Safe Programs\r
\`\`\`\r
\r
---\r
\r
# Performance Issue\r
\r
Too much synchronization can slow applications.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- synchronization basics\r
- race conditions\r
- synchronized methods\r
- thread safety\r
- deadlocks`;export{e as default};