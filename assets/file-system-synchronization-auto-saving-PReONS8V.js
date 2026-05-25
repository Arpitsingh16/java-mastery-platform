var e=`# File Synchronization and Auto Saving\r
\r
Applications can automatically save data to files.\r
\r
## Example\r
\r
\`\`\`java\r
import java.io.FileWriter;\r
\r
public class Main {\r
\r
    public static void main(String[] args) throws Exception {\r
\r
        FileWriter writer =\r
            new FileWriter("data.txt");\r
\r
        writer.write("Auto saved data");\r
\r
        writer.close();\r
    }\r
}\r
\`\`\`\r
\r
## Benefits\r
\r
- Prevents data loss\r
- Improves reliability\r
- Maintains backups`;export{e as default};