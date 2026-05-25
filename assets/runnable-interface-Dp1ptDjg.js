var e=`# Runnable Interface in Java\r
\r
Runnable is used to create threads in Java.\r
\r
Preferred over extending Thread class.\r
\r
---\r
\r
# Why Runnable?\r
\r
Advantages:\r
\r
- supports inheritance\r
- cleaner design\r
- reusable tasks\r
\r
---\r
\r
# Runnable Syntax\r
\r
\`\`\`java\r
class MyTask\r
implements Runnable {\r
\r
    public void run() {\r
\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
class MyTask\r
implements Runnable {\r
\r
    public void run() {\r
\r
        System.out.println(\r
            "Task running"\r
        );\r
    }\r
}\r
\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        MyTask task =\r
            new MyTask();\r
\r
        Thread thread =\r
            new Thread(task);\r
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
Task running\r
\`\`\`\r
\r
---\r
\r
# Runnable vs Thread\r
\r
| Runnable | Thread |\r
|---|---|\r
| interface | class |\r
| flexible | limited inheritance |\r
\r
---\r
\r
# Lambda Runnable\r
\r
\`\`\`java\r
Runnable task = () -> {\r
\r
    System.out.println("Running");\r
};\r
\`\`\`\r
\r
---\r
\r
# Multiple Threads\r
\r
\`\`\`java\r
Thread t1 =\r
    new Thread(task);\r
\r
Thread t2 =\r
    new Thread(task);\r
\`\`\`\r
\r
---\r
\r
# Benefits\r
\r
- reusable code\r
- better architecture\r
- supports functional style\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- Runnable interface\r
- creating threads\r
- thread execution\r
- lambda Runnable\r
- Runnable vs Thread`;export{e as default};