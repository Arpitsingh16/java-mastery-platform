var e=`# BufferedReader in Java\r
\r
\`BufferedReader\` improves file reading performance.\r
\r
It reads large chunks instead of single characters.\r
\r
---\r
\r
# Import Statements\r
\r
\`\`\`java\r
import java.io.BufferedReader;\r
\r
import java.io.FileReader;\r
\`\`\`\r
\r
---\r
\r
# Basic Example\r
\r
\`\`\`java\r
import java.io.BufferedReader;\r
import java.io.FileReader;\r
\r
public class Main {\r
\r
    public static void main(String[] args)\r
    throws Exception {\r
\r
        BufferedReader reader =\r
            new BufferedReader(\r
                new FileReader("data.txt")\r
            );\r
\r
        String line;\r
\r
        while (\r
            (line = reader.readLine())\r
            != null\r
        ) {\r
\r
            System.out.println(line);\r
        }\r
\r
        reader.close();\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# readLine() Method\r
\r
Reads one full line at a time.\r
\r
Returns:\r
\r
\`\`\`txt\r
null\r
\`\`\`\r
\r
when file ends.\r
\r
---\r
\r
# Why BufferedReader is Faster\r
\r
Instead of reading:\r
\r
\`\`\`txt\r
1 character at a time\r
\`\`\`\r
\r
it reads:\r
\r
\`\`\`txt\r
large buffered chunks\r
\`\`\`\r
\r
---\r
\r
# Performance Advantage\r
\r
| FileReader | BufferedReader |\r
|---|---|\r
| slower | faster |\r
| character-based | buffered |\r
\r
---\r
\r
# Reading User Input\r
\r
\`\`\`java\r
BufferedReader br =\r
    new BufferedReader(\r
        new InputStreamReader(System.in)\r
    );\r
\`\`\`\r
\r
---\r
\r
# Common Exceptions\r
\r
| Exception | Cause |\r
|---|---|\r
| IOException | Input/output failure |\r
\r
---\r
\r
# Try-With-Resources\r
\r
\`\`\`java\r
try (\r
    BufferedReader reader =\r
        new BufferedReader(\r
            new FileReader("data.txt")\r
        )\r
) {\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- BufferedReader basics\r
- readLine()\r
- buffered reading\r
- performance optimization\r
- safe resource handling`;export{e as default};