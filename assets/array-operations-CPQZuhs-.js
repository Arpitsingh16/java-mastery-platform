var e=`# Common Array Operations in Java\r
\r
Arrays support many common operations used in programming and algorithms.\r
\r
---\r
\r
# Traversing Arrays\r
\r
\`\`\`java\r
int[] numbers = {10, 20, 30};\r
\r
for (int num : numbers) {\r
\r
    System.out.println(num);\r
}\r
\`\`\`\r
\r
---\r
\r
# Searching Elements\r
\r
## Linear Search\r
\r
\`\`\`java\r
int target = 20;\r
\r
for (int num : numbers) {\r
\r
    if (num == target) {\r
\r
        System.out.println("Found");\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Sorting Arrays\r
\r
Using Arrays utility class.\r
\r
\`\`\`java\r
import java.util.Arrays;\r
\r
int[] numbers = {4, 2, 1, 3};\r
\r
Arrays.sort(numbers);\r
\r
System.out.println(Arrays.toString(numbers));\r
\`\`\`\r
\r
---\r
\r
# Copying Arrays\r
\r
\`\`\`java\r
int[] copy = Arrays.copyOf(numbers, numbers.length);\r
\`\`\`\r
\r
---\r
\r
# Comparing Arrays\r
\r
\`\`\`java\r
Arrays.equals(arr1, arr2);\r
\`\`\`\r
\r
---\r
\r
# Filling Arrays\r
\r
\`\`\`java\r
Arrays.fill(numbers, 0);\r
\`\`\`\r
\r
---\r
\r
# Binary Search\r
\r
Array must be sorted first.\r
\r
\`\`\`java\r
Arrays.binarySearch(numbers, 3);\r
\`\`\`\r
\r
---\r
\r
# Reversing Arrays\r
\r
\`\`\`java\r
for (int i = 0; i < numbers.length / 2; i++) {\r
\r
    int temp = numbers[i];\r
\r
    numbers[i] =\r
        numbers[numbers.length - 1 - i];\r
\r
    numbers[numbers.length - 1 - i] = temp;\r
}\r
\`\`\`\r
\r
---\r
\r
# Finding Maximum Value\r
\r
\`\`\`java\r
int max = numbers[0];\r
\r
for (int num : numbers) {\r
\r
    if (num > max) {\r
\r
        max = num;\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Arrays Utility Class\r
\r
Located in:\r
\r
\`\`\`java\r
java.util.Arrays\r
\`\`\`\r
\r
Provides useful helper methods.\r
\r
---\r
\r
# Time Complexity\r
\r
| Operation | Complexity |\r
|---|---|\r
| Access | O(1) |\r
| Linear Search | O(n) |\r
| Binary Search | O(log n) |\r
| Sorting | O(n log n) |\r
\r
---\r
\r
# Interview Question\r
\r
## Why is array access O(1)?\r
\r
Because arrays use contiguous memory allocation.\r
\r
Address calculation is direct.\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- Searching arrays\r
- Sorting arrays\r
- Copying arrays\r
- Comparing arrays\r
- Utility methods\r
- Complexity analysis`;export{e as default};