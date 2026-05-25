var e=`# Introduction to Threads in Java\r
\r
A thread is the smallest unit of execution inside a program.\r
\r
Java supports:\r
\r
\`\`\`txt\r
Multithreading\r
\`\`\`\r
\r
which allows multiple tasks to run simultaneously.\r
\r
---\r
\r
# Why Threads?\r
\r
Threads improve:\r
\r
- performance\r
- responsiveness\r
- multitasking\r
\r
---\r
\r
# Real World Examples\r
\r
- downloading files\r
- video streaming\r
- games\r
- web servers\r
\r
---\r
\r
# Creating Threads\r
\r
Two common ways:\r
\r
- extending Thread class\r
- implementing Runnable interface\r
\r
---\r
\r
# Thread Class Example\r
\r
\`\`\`java\r
class MyThread extends Thread {\r
\r
    public void run() {\r
\r
        System.out.println(\r
            "Thread running"\r
        );\r
    }\r
}\r
\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        MyThread thread =\r
            new MyThread();\r
\r
        thread.start();\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output\r
\r
\`\`\`txt\r
Thread running\r
\`\`\`\r
\r
---\r
\r
# start() vs run()\r
\r
| start() | run() |\r
|---|---|\r
| creates new thread | normal method call |\r
\r
---\r
\r
# Main Thread\r
\r
Every Java program starts with:\r
\r
\`\`\`txt\r
main thread\r
\`\`\`\r
\r
---\r
\r
# Multiple Threads Example\r
\r
\`\`\`java\r
for (int i = 1; i <= 5; i++) {\r
\r
    System.out.println(i);\r
}\r
\`\`\`\r
\r
Can execute alongside other threads.\r
\r
---\r
\r
# Advantages\r
\r
- faster execution\r
- parallel tasks\r
- better CPU usage\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- thread basics\r
- multithreading\r
- Thread class\r
- start() method\r
- parallel execution`;export{e as default};