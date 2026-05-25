import{h as e,n as t,o as n,r,s as i,t as a,u as o}from"./index-yzuftLcg.js";import{t as s}from"./proxy-B-0ofwWp.js";var c=n(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),l=e(o(),1),u=r();function d({search:e,setSearch:t}){return(0,u.jsxs)(`div`,{className:`relative w-full max-w-2xl`,children:[(0,u.jsx)(c,{className:`\r
          absolute left-5 top-1/2\r
          -translate-y-1/2\r
          text-slate-500\r
        `,size:20}),(0,u.jsx)(`input`,{type:`text`,placeholder:`Search modules...`,value:e,onChange:e=>t(e.target.value),className:`\r
          h-16 w-full rounded-2xl\r
          border border-slate-800\r
          bg-slate-900/80\r
          pl-14 pr-6 text-lg\r
          outline-none transition\r
          focus:border-orange-500\r
        `})]})}function f({title:e,progress:t}){return(0,u.jsxs)(`div`,{className:`rounded-2xl border border-slate-800 bg-slate-900 p-6`,children:[(0,u.jsxs)(`div`,{className:`mb-4 flex items-center justify-between`,children:[(0,u.jsx)(`h3`,{className:`font-semibold`,children:e}),(0,u.jsxs)(`span`,{className:`text-orange-400`,children:[t,`%`]})]}),(0,u.jsx)(`div`,{className:`h-3 overflow-hidden rounded-full bg-slate-800`,children:(0,u.jsx)(`div`,{className:`h-full rounded-full bg-orange-500 transition-all duration-500`,style:{width:`${t}%`}})})]})}function p({title:e,value:t}){return(0,u.jsxs)(`div`,{className:`\r
        rounded-3xl border\r
        border-slate-800\r
        bg-gradient-to-br\r
        from-slate-900\r
        to-slate-950\r
        p-8\r
      `,children:[(0,u.jsx)(`div`,{className:`text-sm uppercase tracking-wide text-slate-500`,children:e}),(0,u.jsx)(`div`,{className:`mt-4 text-5xl font-black text-orange-400`,children:t})]})}function m(){let[e,n]=(0,l.useState)(``),{completedCount:r,totalLessons:o,overallProgress:c,getModuleProgress:m}=a(),h=t.filter(t=>t.title.toLowerCase().includes(e.toLowerCase()));return(0,u.jsxs)(`div`,{className:`mx-auto max-w-7xl`,children:[(0,u.jsxs)(`div`,{className:`mb-12`,children:[(0,u.jsx)(`h1`,{className:`mb-4 text-5xl font-black`,children:`Java Roadmap`}),(0,u.jsx)(`p`,{className:`max-w-2xl text-lg text-slate-400`,children:`Track your progress from beginner to advanced Java developer.`})]}),(0,u.jsx)(`div`,{className:`mb-10`,children:(0,u.jsx)(d,{search:e,setSearch:n})}),(0,u.jsxs)(`div`,{className:`mb-12 grid gap-6 md:grid-cols-3`,children:[(0,u.jsx)(p,{title:`Completed Lessons`,value:r}),(0,u.jsx)(p,{title:`Total Lessons`,value:o}),(0,u.jsx)(p,{title:`Overall Progress`,value:`${c}%`})]}),(0,u.jsx)(`div`,{className:`mb-16`,children:(0,u.jsx)(f,{title:`Java Mastery Progress`,progress:c})}),(0,u.jsx)(`div`,{className:`grid gap-6 md:grid-cols-2 xl:grid-cols-3`,children:h.map(e=>(0,u.jsx)(s.div,{whileHover:{y:-5},transition:{duration:.2},children:(0,u.jsxs)(i,{to:`/module/${e.id}`,className:`\r
                block rounded-3xl border border-slate-800\r
                bg-slate-900 p-8 transition\r
                hover:border-orange-500\r
              `,children:[(0,u.jsxs)(`div`,{className:`mb-4 text-sm text-orange-400`,children:[`Module `,e.id]}),(0,u.jsx)(`h2`,{className:`mb-4 text-2xl font-bold`,children:e.title}),(0,u.jsx)(`p`,{className:`mb-6 text-slate-400`,children:e.description}),(0,u.jsxs)(`div`,{className:`mb-2 flex justify-between text-sm`,children:[(0,u.jsx)(`span`,{children:`Progress`}),(0,u.jsxs)(`span`,{children:[m(e),`%`]})]}),(0,u.jsx)(`div`,{className:`h-2 overflow-hidden rounded-full bg-slate-800`,children:(0,u.jsx)(`div`,{className:`h-full rounded-full bg-orange-500`,style:{width:`${m(e)}%`}})})]})},e.id))})]})}export{m as default};