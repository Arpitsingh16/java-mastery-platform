import{c as e,r as t}from"./index-yzuftLcg.js";var n={"atm-simulation-system":{title:`ATM Simulation System`,category:`Control Flow Project`,difficulty:`Beginner`,duration:`3-5 Hours`,objective:`Build a console-based ATM application using conditions, loops, and switch statements.`,description:`This project helps learners combine Java control flow concepts into a realistic banking simulation.`,features:[`PIN authentication`,`Balance checking`,`Cash withdrawal`,`Cash deposit`,`Exit system`,`Menu-driven navigation`],conceptsUsed:[`if-else`,`switch statements`,`loops`,`variables`,`methods`,`user input`],folderStructure:`
ATM-Simulation/
│
├── Main.java
├── ATM.java
├── UserAccount.java
`,implementationSteps:[{step:1,title:`Create Main Class`,description:`Create the entry point of the application.`},{step:2,title:`Build Login System`,description:`Ask user for ATM PIN and validate credentials.`},{step:3,title:`Create Menu System`,description:`Use switch statements for ATM menu options.`},{step:4,title:`Implement Withdrawal`,description:`Deduct balance after validating funds.`},{step:5,title:`Implement Deposit`,description:`Allow user to deposit money into account.`},{step:6,title:`Loop Until Exit`,description:`Keep ATM running until user exits.`}],bonusChallenges:[`Add multiple user accounts`,`Limit withdrawal attempts`,`Generate transaction receipts`,`Add transfer money feature`],expectedOutput:`
===== ATM MENU =====

1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit

Enter Choice:
`}},r=t();function i(){let{slug:t}=e(),i=n[t];return i?(0,r.jsxs)(`div`,{className:`mx-auto max-w-6xl`,children:[(0,r.jsxs)(`div`,{className:`\r
          rounded-3xl border\r
          border-slate-800\r
          bg-slate-900/60 p-10\r
        `,children:[(0,r.jsxs)(`div`,{className:`mb-6 flex flex-wrap gap-4`,children:[(0,r.jsx)(`span`,{className:`\r
              rounded-full bg-orange-500/10\r
              px-4 py-2 text-sm\r
              font-medium text-orange-400\r
            `,children:i.category}),(0,r.jsx)(`span`,{className:`\r
              rounded-full bg-slate-800\r
              px-4 py-2 text-sm\r
              text-slate-300\r
            `,children:i.difficulty})]}),(0,r.jsx)(`h1`,{className:`text-5xl font-black`,children:i.title}),(0,r.jsx)(`p`,{className:`mt-6 max-w-3xl text-xl leading-relaxed text-slate-300`,children:i.description})]}),(0,r.jsxs)(`div`,{className:`mt-10 grid gap-8 lg:grid-cols-2`,children:[(0,r.jsxs)(`div`,{className:`\r
            rounded-3xl border border-slate-800\r
            bg-slate-900/60 p-8\r
          `,children:[(0,r.jsx)(`h2`,{className:`mb-6 text-3xl font-bold`,children:`Objective`}),(0,r.jsx)(`p`,{className:`text-slate-300`,children:i.objective})]}),(0,r.jsxs)(`div`,{className:`\r
            rounded-3xl border border-slate-800\r
            bg-slate-900/60 p-8\r
          `,children:[(0,r.jsx)(`h2`,{className:`mb-6 text-3xl font-bold`,children:`Features`}),(0,r.jsx)(`ul`,{className:`space-y-4`,children:i.features.map(e=>(0,r.jsxs)(`li`,{className:`text-slate-300`,children:[`• `,e]},e))})]})]}),(0,r.jsxs)(`div`,{className:`\r
          mt-10 rounded-3xl border\r
          border-slate-800\r
          bg-slate-900/60 p-8\r
        `,children:[(0,r.jsx)(`h2`,{className:`mb-6 text-3xl font-bold`,children:`Concepts Used`}),(0,r.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:i.conceptsUsed.map(e=>(0,r.jsx)(`span`,{className:`\r
                rounded-full bg-slate-800\r
                px-4 py-2 text-sm\r
                text-slate-300\r
              `,children:e},e))})]}),(0,r.jsxs)(`div`,{className:`\r
          mt-10 rounded-3xl border\r
          border-slate-800\r
          bg-slate-900/60 p-8\r
        `,children:[(0,r.jsx)(`h2`,{className:`mb-6 text-3xl font-bold`,children:`Folder Structure`}),(0,r.jsx)(`pre`,{className:`\r
            overflow-x-auto rounded-2xl\r
            bg-slate-950 p-6 text-sm\r
            text-orange-400\r
          `,children:i.folderStructure})]}),(0,r.jsxs)(`div`,{className:`\r
          mt-10 rounded-3xl border\r
          border-slate-800\r
          bg-slate-900/60 p-8\r
        `,children:[(0,r.jsx)(`h2`,{className:`mb-8 text-3xl font-bold`,children:`Step-by-Step Build Plan`}),(0,r.jsx)(`div`,{className:`space-y-8`,children:i.implementationSteps.map(e=>(0,r.jsxs)(`div`,{className:`\r
                  rounded-2xl border\r
                  border-slate-800\r
                  bg-slate-950/60 p-6\r
                `,children:[(0,r.jsx)(`div`,{className:`\r
                    mb-4 inline-flex h-10 w-10\r
                    items-center justify-center\r
                    rounded-full bg-orange-500\r
                    font-bold text-white\r
                  `,children:e.step}),(0,r.jsx)(`h3`,{className:`text-2xl font-bold`,children:e.title}),(0,r.jsx)(`p`,{className:`mt-4 text-slate-300`,children:e.description})]},e.step))})]}),(0,r.jsxs)(`div`,{className:`\r
          mt-10 rounded-3xl border\r
          border-slate-800\r
          bg-slate-900/60 p-8\r
        `,children:[(0,r.jsx)(`h2`,{className:`mb-6 text-3xl font-bold`,children:`Bonus Challenges`}),(0,r.jsx)(`ul`,{className:`space-y-4`,children:i.bonusChallenges.map(e=>(0,r.jsxs)(`li`,{className:`text-slate-300`,children:[`• `,e]},e))})]}),(0,r.jsxs)(`div`,{className:`\r
          mt-10 rounded-3xl border\r
          border-slate-800\r
          bg-slate-900/60 p-8\r
        `,children:[(0,r.jsx)(`h2`,{className:`mb-6 text-3xl font-bold`,children:`Expected Output`}),(0,r.jsx)(`pre`,{className:`\r
            overflow-x-auto rounded-2xl\r
            bg-slate-950 p-6 text-sm\r
            text-green-400\r
          `,children:i.expectedOutput})]})]}):(0,r.jsx)(`div`,{className:`p-10 text-4xl font-bold text-red-500`,children:`Project not found`})}export{i as default};