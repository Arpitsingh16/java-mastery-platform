var e=`# Time Complexity in Java\r
\r
Time complexity measures algorithm efficiency.\r
\r
---\r
\r
# Why Complexity Matters\r
\r
Efficient programs:\r
\r
- run faster\r
- use fewer resources\r
- scale better\r
\r
---\r
\r
# Big O Notation\r
\r
Big O describes worst-case performance.\r
\r
---\r
\r
# Common Complexities\r
\r
| Complexity | Meaning |\r
|---|---|\r
| O(1) | Constant |\r
| O(log n) | Logarithmic |\r
| O(n) | Linear |\r
| O(n log n) | Efficient sorting |\r
| O(n²) | Nested loops |\r
\r
---\r
\r
# O(1) Example\r
\r
\`\`\`java\r
int value = arr[0];\r
\`\`\`\r
\r
---\r
\r
# O(n) Example\r
\r
\`\`\`java\r
for (int num : arr) {\r
\r
    System.out.println(num);\r
}\r
\`\`\`\r
\r
---\r
\r
# O(n²) Example\r
\r
\`\`\`java\r
for (int i = 0; i < n; i++) {\r
\r
    for (int j = 0; j < n; j++) {\r
\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Space Complexity\r
\r
Measures memory usage.\r
\r
---\r
\r
# Important Rules\r
\r
Ignore:\r
\r
- constants\r
- lower-order terms\r
\r
Example:\r
\r
\`\`\`txt\r
O(2n) -> O(n)\r
\`\`\`\r
\r
---\r
\r
# Complexity Comparison\r
\r
| Complexity | Speed |\r
|---|---|\r
| O(1) | Fastest |\r
| O(log n) | Very fast |\r
| O(n) | Acceptable |\r
| O(n²) | Slow |\r
\r
---\r
\r
# Interview Importance\r
\r
Complexity analysis is heavily asked in:\r
\r
- coding interviews\r
- DSA rounds\r
- system optimization\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- Big O notation\r
- time complexity\r
- space complexity\r
- efficiency analysis\r
\`\`\``;export{e as default};