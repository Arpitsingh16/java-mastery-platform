import{t as e}from"./trophy-CsK70HWK.js";import{i as t,n,o as r,r as i,t as a}from"./index-CN4LivHG.js";var o=r(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),s=i();function c({title:n,description:r,completed:i,progress:a}){return(0,s.jsxs)(`div`,{className:`
        rounded-3xl border p-8 transition

        ${i?`border-green-500/30 bg-green-500/10`:`border-slate-800 bg-slate-900/60`}
      `,children:[(0,s.jsxs)(`div`,{className:`mb-6 flex items-center gap-4`,children:[(0,s.jsx)(`div`,{className:`
            flex h-14 w-14
            items-center justify-center
            rounded-2xl

            ${i?`bg-green-500`:`bg-orange-500`}
          `,children:i?(0,s.jsx)(t,{className:`text-white`}):(0,s.jsx)(e,{className:`text-white`})}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`h3`,{className:`text-2xl font-bold`,children:n}),(0,s.jsx)(`p`,{className:`text-slate-400`,children:r})]})]}),(0,s.jsxs)(`div`,{className:`mb-3 flex items-center justify-between`,children:[(0,s.jsx)(`span`,{className:`text-sm text-slate-400`,children:`Progress`}),(0,s.jsxs)(`span`,{className:`text-sm font-semibold text-orange-400`,children:[a,`%`]})]}),(0,s.jsx)(`div`,{className:`\r
          h-3 overflow-hidden rounded-full\r
          bg-slate-800\r
        `,children:(0,s.jsx)(`div`,{className:`\r
            h-full rounded-full\r
            bg-orange-500 transition-all\r
          `,style:{width:`${a}%`}})}),i&&(0,s.jsxs)(`div`,{className:`\r
            mt-6 inline-flex items-center\r
            gap-2 rounded-full\r
            bg-green-500/20 px-4 py-2\r
            text-sm text-green-400\r
          `,children:[(0,s.jsx)(o,{size:16}),`Module Completed`]})]})}function l(){let{completedLessons:e}=a();function t(t){let n=t.lessons.filter(t=>e.includes(t.slug)).length;return Math.round(n/t.lessons.length*100)}return(0,s.jsxs)(`div`,{className:`mx-auto max-w-7xl`,children:[(0,s.jsxs)(`div`,{className:`mb-14`,children:[(0,s.jsx)(`h1`,{className:`mb-6 text-6xl font-black`,children:`Achievements`}),(0,s.jsx)(`p`,{className:`max-w-3xl text-xl text-slate-400`,children:`Track your learning progress and unlock mastery milestones.`})]}),(0,s.jsx)(`div`,{className:`grid gap-8 lg:grid-cols-2`,children:n.map(e=>{let n=t(e);return(0,s.jsx)(c,{title:e.title,description:e.description,progress:n,completed:n===100},e.id)})})]})}export{l as default};