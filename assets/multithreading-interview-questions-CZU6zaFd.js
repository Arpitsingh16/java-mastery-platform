var e=`# Multithreading Interview Questions\r
\r
---\r
\r
# 1. What is Thread?\r
\r
Smallest unit of execution inside process.\r
\r
---\r
\r
# 2. Difference Between Process and Thread\r
\r
| Process | Thread |\r
|---|---|\r
| heavyweight | lightweight |\r
| separate memory | shared memory |\r
\r
---\r
\r
# 3. How to Create Thread?\r
\r
Two ways:\r
\r
- Thread class\r
- Runnable interface\r
\r
---\r
\r
# 4. What is Synchronization?\r
\r
Controls shared resource access.\r
\r
---\r
\r
# 5. What is Deadlock?\r
\r
Two threads waiting forever for each other.\r
\r
---\r
\r
# 6. What is Race Condition?\r
\r
Multiple threads modifying shared data simultaneously.\r
\r
---\r
\r
# 7. Difference Between sleep() and wait()\r
\r
| sleep() | wait() |\r
|---|---|\r
| Thread class | Object class |\r
| no lock release | releases lock |\r
\r
---\r
\r
# 8. What is ExecutorService?\r
\r
Framework for managing thread pools.\r
\r
---\r
\r
# 9. What is Volatile Keyword?\r
\r
Ensures variable visibility across threads.\r
\r
---\r
\r
# 10. What is Thread Lifecycle?\r
\r
States:\r
\r
- New\r
- Runnable\r
- Running\r
- Waiting\r
- Terminated\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- thread interview questions\r
- synchronization\r
- deadlocks\r
- race conditions\r
- concurrency concepts`;export{e as default};