var e=`# FileReader in Java\r
\r
\`FileReader\` is used to read character-based files in Java.\r
\r
It is suitable for:\r
\r
- text files\r
- configuration files\r
- logs\r
\r
---\r
\r
# Import Statement\r
\r
\`\`\`java\r
import java.io.FileReader;\r
\`\`\`\r
\r
---\r
\r
# Basic Example\r
\r
\`\`\`java\r
import java.io.FileReader;\r
\r
public class Main {\r
\r
    public static void main(String[] args)\r
    throws Exception {\r
\r
        FileReader reader =\r
            new FileReader("data.txt");\r
\r
        int character;\r
\r
        while ((character = reader.read()) != -1) {\r
\r
            System.out.print(\r
                (char) character\r
            );\r
        }\r
\r
        reader.close();\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# How read() Works\r
\r
\`read()\` returns:\r
\r
- ASCII/Unicode integer value\r
- \`-1\` when file ends\r
\r
---\r
\r
# Reading Character by Character\r
\r
\`\`\`java\r
int ch = reader.read();\r
\`\`\`\r
\r
---\r
\r
# FileNotFoundException\r
\r
Occurs when file does not exist.\r
\r
---\r
\r
# Common Exceptions\r
\r
| Exception | Cause |\r
|---|---|\r
| FileNotFoundException | Missing file |\r
| IOException | Reading error |\r
\r
---\r
\r
# Better Resource Handling\r
\r
Use try-with-resources.\r
\r
\`\`\`java\r
try (\r
    FileReader reader =\r
        new FileReader("data.txt")\r
) {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# FileReader vs Scanner\r
\r
| FileReader | Scanner |\r
|---|---|\r
| character stream | token-based |\r
| faster | easier syntax |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- FileReader basics\r
- reading files\r
- character streams\r
- read() method\r
- exception handling`;export{e as default};