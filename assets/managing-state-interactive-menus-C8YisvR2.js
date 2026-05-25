var e=`# Managing Interactive Menus\r
\r
Interactive menus improve user experience.\r
\r
## Example\r
\r
\`\`\`java\r
import java.util.Scanner;\r
\r
public class Main {\r
\r
    public static void main(String[] args) {\r
\r
        Scanner sc = new Scanner(System.in);\r
\r
        int choice;\r
\r
        do {\r
\r
            System.out.println("1. Add");\r
            System.out.println("2. Delete");\r
            System.out.println("3. Exit");\r
\r
            choice = sc.nextInt();\r
\r
        } while(choice != 3);\r
    }\r
}\r
\`\`\`\r
\r
## Key Points\r
\r
- Use loops for continuous interaction.\r
- Validate user input.\r
- Keep menus simple.`;export{e as default};