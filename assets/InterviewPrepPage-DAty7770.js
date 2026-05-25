import{h as e,r as t,u as n}from"./index-yWOJ6nhS.js";var r=e(n(),1),i=[{id:1,level:`Beginner`,question:`What is Java?`,answer:`Java is a high-level, object-oriented programming language designed for portability, security, and scalability.`},{id:2,level:`Beginner`,question:`What is JVM?`,answer:`JVM stands for Java Virtual Machine. It executes Java bytecode and enables platform independence.`},{id:3,level:`Beginner`,question:`Difference between JDK, JRE, and JVM?`,answer:`JDK contains development tools, JRE provides runtime environment, and JVM executes Java bytecode.`},{id:4,level:`Intermediate`,question:`What is method overloading?`,answer:`Method overloading allows multiple methods with same name but different parameters.`},{id:5,level:`Intermediate`,question:`What is inheritance in Java?`,answer:`Inheritance allows one class to acquire properties and methods of another class.`},{id:6,level:`Advanced`,question:`What is multithreading?`,answer:`Multithreading allows concurrent execution of multiple threads within a program.`}],a=t();function o(){let[e,t]=(0,r.useState)(null);function n(e){t(t=>t===e?null:e)}return(0,a.jsxs)(`div`,{className:`mx-auto max-w-5xl`,children:[(0,a.jsxs)(`div`,{className:`mb-14`,children:[(0,a.jsx)(`h1`,{className:`mb-6 text-6xl font-black`,children:`Java Interview Preparation`}),(0,a.jsx)(`p`,{className:`max-w-3xl text-xl text-slate-400`,children:`Prepare for Java interviews with categorized technical questions and answers.`})]}),(0,a.jsx)(`div`,{className:`space-y-6`,children:i.map(t=>(0,a.jsxs)(`div`,{className:`\r
                rounded-3xl border\r
                border-slate-800\r
                bg-slate-900/60\r
                overflow-hidden\r
              `,children:[(0,a.jsxs)(`button`,{onClick:()=>n(t.id),className:`\r
                  flex w-full items-center\r
                  justify-between gap-6\r
                  p-8 text-left\r
                `,children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`div`,{className:`\r
                      mb-3 inline-flex rounded-full\r
                      bg-orange-500/10\r
                      px-3 py-1 text-sm\r
                      text-orange-400\r
                    `,children:t.level}),(0,a.jsx)(`h2`,{className:`text-2xl font-bold`,children:t.question})]}),(0,a.jsx)(`div`,{className:`text-3xl text-orange-400`,children:e===t.id?`-`:`+`})]}),e===t.id&&(0,a.jsx)(`div`,{className:`\r
                    border-t border-slate-800\r
                    px-8 py-6 text-slate-300\r
                  `,children:t.answer})]},t.id))})]})}export{o as default};