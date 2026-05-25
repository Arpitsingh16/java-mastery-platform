var e=`# Sorting Algorithms in Java\r
\r
Sorting arranges elements in a specific order.\r
\r
Usually:\r
\r
- Ascending\r
- Descending\r
\r
---\r
\r
# Why Sorting Matters\r
\r
Sorting improves:\r
\r
- searching speed\r
- organization\r
- algorithm efficiency\r
\r
---\r
\r
# Bubble Sort\r
\r
Repeatedly swaps adjacent elements.\r
\r
---\r
\r
# Bubble Sort Example\r
\r
\`\`\`java\r
int[] arr = {5, 3, 1, 4};\r
\r
for (int i = 0; i < arr.length - 1; i++) {\r
\r
    for (int j = 0; j < arr.length - i - 1; j++) {\r
\r
        if (arr[j] > arr[j + 1]) {\r
\r
            int temp = arr[j];\r
\r
            arr[j] = arr[j + 1];\r
\r
            arr[j + 1] = temp;\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Selection Sort\r
\r
Finds minimum element repeatedly.\r
\r
---\r
\r
# Insertion Sort\r
\r
Builds sorted array gradually.\r
\r
---\r
\r
# Merge Sort\r
\r
Uses divide-and-conquer strategy.\r
\r
Complexity:\r
\r
\`\`\`txt\r
O(n log n)\r
\`\`\`\r
\r
---\r
\r
# Quick Sort\r
\r
Very fast practical sorting algorithm.\r
\r
Uses pivot partitioning.\r
\r
---\r
\r
# Time Complexity Table\r
\r
| Algorithm | Best | Worst |\r
|---|---|---|\r
| Bubble Sort | O(n) | O(n²) |\r
| Selection Sort | O(n²) | O(n²) |\r
| Insertion Sort | O(n) | O(n²) |\r
| Merge Sort | O(n log n) | O(n log n) |\r
| Quick Sort | O(n log n) | O(n²) |\r
\r
---\r
\r
# Java Built-in Sorting\r
\r
\`\`\`java\r
Arrays.sort(arr);\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- sorting basics\r
- bubble sort\r
- merge sort\r
- quick sort\r
- complexity analysis`;export{e as default};