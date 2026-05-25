var e=`# Wildcards in Java Generics\r
\r
Wildcards provide flexibility in generic programming.\r
\r
Symbol used:\r
\r
\`\`\`java\r
?\r
\`\`\`\r
\r
---\r
\r
# Why Wildcards?\r
\r
Sometimes exact type is unknown.\r
\r
Wildcards allow generic flexibility.\r
\r
---\r
\r
# Unbounded Wildcard\r
\r
\`\`\`java\r
List<?>\r
\`\`\`\r
\r
Accepts any type.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
List<?> items =\r
    new ArrayList<String>();\r
\`\`\`\r
\r
---\r
\r
# Upper Bounded Wildcard\r
\r
\`\`\`java\r
<? extends Number>\r
\`\`\`\r
\r
Accepts subclasses of Number.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
void printNumbers(\r
    List<? extends Number> list\r
) {\r
\r
    for (Number n : list) {\r
\r
        System.out.println(n);\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
# Lower Bounded Wildcard\r
\r
\`\`\`java\r
<? super Integer>\r
\`\`\`\r
\r
Accepts Integer or parent classes.\r
\r
---\r
\r
# Example\r
\r
\`\`\`java\r
List<? super Integer> list =\r
    new ArrayList<Number>();\r
\`\`\`\r
\r
---\r
\r
# PECS Principle\r
\r
\`\`\`txt\r
Producer Extends\r
Consumer Super\r
\`\`\`\r
\r
---\r
\r
# Wildcard Comparison\r
\r
| Wildcard | Purpose |\r
|---|---|\r
| <?> | Any type |\r
| <? extends T> | Read-only flexibility |\r
| <? super T> | Insert flexibility |\r
\r
---\r
\r
# Important Restriction\r
\r
Cannot safely add elements into:\r
\r
\`\`\`java\r
List<?>\r
\`\`\`\r
\r
---\r
\r
# Summary\r
\r
You learned:\r
\r
- wildcard basics\r
- upper bounds\r
- lower bounds\r
- PECS principle\r
- flexible generics`;export{e as default};