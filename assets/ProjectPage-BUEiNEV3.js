import{c as e,r as t}from"./index-yzuftLcg.js";import{t as n}from"./projects-CAiWmD3C.js";var r=t();function i({title:e,items:t}){return(0,r.jsxs)(`div`,{className:`\r
        rounded-3xl border\r
        border-slate-800\r
        bg-slate-900/70 p-8\r
      `,children:[(0,r.jsx)(`h2`,{className:`mb-6 text-3xl font-bold`,children:e}),(0,r.jsx)(`ul`,{className:`space-y-4`,children:t.map(e=>(0,r.jsxs)(`li`,{className:`\r
              flex items-start gap-3\r
              text-slate-300\r
            `,children:[(0,r.jsx)(`div`,{className:`\r
                mt-2 h-2 w-2\r
                rounded-full bg-orange-500\r
              `}),(0,r.jsx)(`span`,{children:e})]},e))})]})}function a(){let{slug:t}=e(),a=n.find(e=>e.slug===t);return a?(0,r.jsxs)(`div`,{className:`mx-auto max-w-6xl`,children:[(0,r.jsxs)(`div`,{className:`mb-12`,children:[(0,r.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-center gap-4`,children:[(0,r.jsx)(`span`,{className:`\r
              rounded-full bg-orange-500/10\r
              px-4 py-1 text-sm\r
              text-orange-400\r
            `,children:a.level}),(0,r.jsx)(`span`,{className:`text-slate-400`,children:a.duration})]}),(0,r.jsx)(`h1`,{className:`mb-6 text-6xl font-black`,children:a.title}),(0,r.jsx)(`p`,{className:`max-w-3xl text-xl text-slate-400`,children:a.description})]}),(0,r.jsxs)(`div`,{className:`mb-12 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8`,children:[(0,r.jsx)(`h2`,{className:`mb-4 text-3xl font-bold text-orange-400`,children:`Project Objective`}),(0,r.jsx)(`p`,{className:`text-lg`,children:a.objective})]}),(0,r.jsxs)(`div`,{className:`mb-12 grid gap-8 lg:grid-cols-2`,children:[(0,r.jsx)(i,{title:`Features`,items:a.features}),(0,r.jsx)(i,{title:`Concepts Used`,items:a.concepts})]}),(0,r.jsxs)(`div`,{className:`mb-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-8`,children:[(0,r.jsx)(`h2`,{className:`mb-6 text-3xl font-bold`,children:`Folder Structure`}),(0,r.jsx)(`pre`,{className:`\r
            overflow-x-auto rounded-2xl\r
            bg-slate-950 p-6 text-sm\r
          `,children:a.folderStructure})]}),(0,r.jsx)(`div`,{className:`mb-12`,children:(0,r.jsx)(i,{title:`Step-by-Step Build Plan`,items:a.steps})}),(0,r.jsx)(`div`,{children:(0,r.jsx)(i,{title:`Bonus Challenges`,items:a.challenges})})]}):(0,r.jsx)(`h1`,{children:`Project not found`})}export{a as default};