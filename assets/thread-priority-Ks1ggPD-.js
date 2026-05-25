var e=`# Thread Priority in Java\r
\r
Thread priority suggests execution importance to CPU scheduler.\r
\r
---\r
\r
# Priority Range\r
\r
\`\`\`txt\r
1 to 10\r
\`\`\`\r
\r
---\r
\r
# Constants\r
\r
| Constant | Value |\r
|---|---|\r
| MIN_PRIORITY | 1 |\r
| NORM_PRIORITY | 5 |\r
| MAX_PRIORITY | 10 |\r
\r
---\r
\r
# Setting Priority\r
\r
\`\`\`java\r
thread.setPriority(10);\r
\`\`\`\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
class MyThread extends Thread {\r
\r
    public void run() {\r
\r
        System.out.println(\r
            Thread.currentThread()\r
                .getPriority()\r
        );\r
    }\r
}\r
\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        MyThread t1 =\r
            new MyThread();\r
\r
        t1.setPriority(10);\r
\r
        t1.start();\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Getting Priority\r
\r
\`\`\`java\r
thread.getPriority();\r
\`\`\`\r
\r
---\r
\r
# Important Point\r
\r
Priority is:\r
\r
\`\`\`txt\r
only a suggestion\r
\`\`\`\r
\r
Operating system decides actual scheduling.\r
\r
---\r
\r
# Default Priority\r
\r
Main thread priority:\r
\r
\`\`\`txt\r
5\r
\`\`\`\r
\r
---\r
\r
# Priority Example\r
\r
Higher priority threads usually execute first.\r
\r
But not guaranteed.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- thread priorities\r
- priority constants\r
- setPriority()\r
- getPriority()\r
- scheduling behavior`;export{e as default};