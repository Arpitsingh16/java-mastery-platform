# File Synchronization and Auto Saving

Applications can automatically save data to files.

## Example

```java
import java.io.FileWriter;

public class Main {

    public static void main(String[] args) throws Exception {

        FileWriter writer =
            new FileWriter("data.txt");

        writer.write("Auto saved data");

        writer.close();
    }
}
```

## Benefits

- Prevents data loss
- Improves reliability
- Maintains backups