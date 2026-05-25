# Managing Interactive Menus

Interactive menus improve user experience.

## Example

```java
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int choice;

        do {

            System.out.println("1. Add");
            System.out.println("2. Delete");
            System.out.println("3. Exit");

            choice = sc.nextInt();

        } while(choice != 3);
    }
}
```

## Key Points

- Use loops for continuous interaction.
- Validate user input.
- Keep menus simple.