import{h as e,r as t,s as n,u as r}from"./index-yWOJ6nhS.js";import{t as i}from"./projects-CAiWmD3C.js";var a=e(r(),1),o=t();function s({project:e}){return(0,o.jsxs)(n,{to:`/projects/${e.slug}`,className:`\r
        group block rounded-3xl\r
        border border-slate-800\r
        bg-slate-900/70 p-8\r
        transition hover:-translate-y-1\r
        hover:border-orange-500\r
      `,children:[(0,o.jsxs)(`div`,{className:`mb-4 flex items-center justify-between`,children:[(0,o.jsx)(`span`,{className:`\r
            rounded-full bg-orange-500/10\r
            px-4 py-1 text-sm\r
            text-orange-400\r
          `,children:e.level}),(0,o.jsx)(`span`,{className:`text-sm text-slate-400`,children:e.duration})]}),(0,o.jsx)(`h2`,{className:`\r
          mb-4 text-3xl font-bold\r
          transition group-hover:text-orange-400\r
        `,children:e.title}),(0,o.jsx)(`p`,{className:`mb-6 text-slate-400`,children:e.description}),(0,o.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:e.technologies.map(e=>(0,o.jsx)(`span`,{className:`\r
              rounded-lg bg-slate-800\r
              px-3 py-1 text-sm\r
            `,children:e},e))})]})}function c(){let[e,t]=(0,a.useState)(`All`),n=[`All`,`Beginner`,`Intermediate`,`Advanced`],r=e===`All`?i:i.filter(t=>t.level===e);return(0,o.jsxs)(`div`,{className:`mx-auto max-w-7xl`,children:[(0,o.jsxs)(`div`,{className:`mb-12`,children:[(0,o.jsx)(`h1`,{className:`mb-6 text-6xl font-black`,children:`Java Projects`}),(0,o.jsx)(`p`,{className:`max-w-3xl text-xl text-slate-400`,children:`Build real-world Java projects to strengthen your programming skills.`})]}),(0,o.jsx)(`div`,{className:`mb-10 flex flex-wrap gap-4`,children:n.map(n=>(0,o.jsx)(`button`,{onClick:()=>t(n),className:`
              rounded-xl px-5 py-3
              font-medium transition
              ${e===n?`bg-orange-500 text-white`:`bg-slate-900 text-slate-300 hover:bg-slate-800`}
            `,children:n},n))}),(0,o.jsx)(`div`,{className:`grid gap-8 lg:grid-cols-2`,children:r.map(e=>(0,o.jsx)(s,{project:e},e.slug))})]})}export{c as default};