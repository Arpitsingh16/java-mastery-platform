var e=`# FileWriter in Java\r
\r
\`FileWriter\` is used to write data into files.\r
\r
It writes character-based content.\r
\r
---\r
\r
# Import Statement\r
\r
\`\`\`java\r
import java.io.FileWriter;\r
\`\`\`\r
\r
---\r
\r
# Basic Example\r
\r
\`\`\`java\r
import java.io.FileWriter;\r
\r
public class Main {\r
\r
    public static void main(String[] args)\r
    throws Exception {\r
\r
        FileWriter writer =\r
            new FileWriter("output.txt");\r
\r
        writer.write(\r
            "Hello Java"\r
        );\r
\r
        writer.close();\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Output File\r
\r
\`\`\`txt\r
Hello Java\r
\`\`\`\r
\r
---\r
\r
# Why close() is Important\r
\r
Without \`close()\`:\r
\r
- data may not save properly\r
- memory leaks may occur\r
\r
---\r
\r
# Writing Multiple Lines\r
\r
\`\`\`java\r
writer.write("Java\\n");\r
\r
writer.write("Programming");\r
\`\`\`\r
\r
---\r
\r
# Append Mode\r
\r
\`\`\`java\r
FileWriter writer =\r
    new FileWriter(\r
        "output.txt",\r
        true\r
    );\r
\`\`\`\r
\r
\`true\` enables append mode.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
writer.write(\r
    "\\nNew Line"\r
);\r
\`\`\`\r
\r
---\r
\r
# Common Exceptions\r
\r
| Exception | Cause |\r
|---|---|\r
| IOException | Writing failure |\r
\r
---\r
\r
# Try-With-Resources\r
\r
\`\`\`java\r
try (\r
    FileWriter writer =\r
        new FileWriter("data.txt")\r
) {\r
\r
    writer.write("Safe writing");\r
}\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- FileWriter basics\r
- writing files\r
- append mode\r
- close() importance\r
- safe file handling`;export{e as default};