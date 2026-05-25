var e=`# Thread Lifecycle in Java\r
\r
Threads move through multiple states during execution.\r
\r
---\r
\r
# Thread States\r
\r
| State | Description |\r
|---|---|\r
| New | thread created |\r
| Runnable | ready to run |\r
| Running | executing |\r
| Waiting | paused |\r
| Terminated | finished |\r
\r
---\r
\r
# Lifecycle Flow\r
\r
\`\`\`txt\r
New → Runnable → Running\r
         ↓\r
      Waiting\r
         ↓\r
    Terminated\r
\`\`\`\r
\r
---\r
\r
# New State\r
\r
\`\`\`java\r
Thread t =\r
    new Thread();\r
\`\`\`\r
\r
Thread created but not started.\r
\r
---\r
\r
# Runnable State\r
\r
\`\`\`java\r
t.start();\r
\`\`\`\r
\r
Thread ready for CPU scheduling.\r
\r
---\r
\r
# Running State\r
\r
Thread executes:\r
\r
\`\`\`java\r
run()\r
\`\`\`\r
\r
method.\r
\r
---\r
\r
# Waiting State\r
\r
Occurs during:\r
\r
- sleep()\r
- wait()\r
- join()\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
Thread.sleep(2000);\r
\`\`\`\r
\r
Pauses thread for 2 seconds.\r
\r
---\r
\r
# Terminated State\r
\r
Thread finishes execution.\r
\r
---\r
\r
# Checking Thread State\r
\r
\`\`\`java\r
System.out.println(\r
    t.getState()\r
);\r
\`\`\`\r
\r
---\r
\r
# Important Methods\r
\r
| Method | Purpose |\r
|---|---|\r
| start() | start thread |\r
| sleep() | pause thread |\r
| join() | wait for thread |\r
| isAlive() | check running |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- thread states\r
- lifecycle stages\r
- sleep()\r
- join()\r
- thread transitions`;export{e as default};