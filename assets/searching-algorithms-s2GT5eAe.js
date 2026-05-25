var e=`# Searching Algorithms in Java\r
\r
Searching algorithms locate elements inside data structures.\r
\r
---\r
\r
# Linear Search\r
\r
Checks elements one-by-one.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
int[] arr = {10, 20, 30};\r
\r
int target = 20;\r
\r
for (int i = 0; i < arr.length; i++) {\r
\r
    if (arr[i] == target) {\r
\r
        System.out.println("Found");\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Complexity\r
\r
\`\`\`txt\r
O(n)\r
\`\`\`\r
\r
---\r
\r
# Binary Search\r
\r
Works only on sorted arrays.\r
\r
---\r
\r
# Binary Search Example\r
\r
\`\`\`java\r
int[] arr = {1, 2, 3, 4, 5};\r
\r
int left = 0;\r
int right = arr.length - 1;\r
\r
while (left <= right) {\r
\r
    int mid = (left + right) / 2;\r
\r
    if (arr[mid] == 3) {\r
\r
        System.out.println("Found");\r
        break;\r
    }\r
\r
    if (arr[mid] < 3) {\r
\r
        left = mid + 1;\r
\r
    } else {\r
\r
        right = mid - 1;\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Complexity\r
\r
\`\`\`txt\r
O(log n)\r
\`\`\`\r
\r
---\r
\r
# Linear vs Binary Search\r
\r
| Linear | Binary |\r
|---|---|\r
| Slow | Fast |\r
| Unsorted works | Sorted only |\r
| O(n) | O(log n) |\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- linear search\r
- binary search\r
- complexity comparison\r
- sorted array requirement`;export{e as default};