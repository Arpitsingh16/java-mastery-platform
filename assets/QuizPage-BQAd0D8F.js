import{c as e,h as t,r as n,u as r}from"./index-yWOJ6nhS.js";var i=t(r(),1),a=n();function o({questions:e,moduleSlug:t}){let[n,r]=(0,i.useState)(0),[o,s]=(0,i.useState)(0),[c,l]=(0,i.useState)(null),[u,d]=(0,i.useState)(!1),[f,p]=(0,i.useState)(!1),m=e[n];function h(e){c||(l(e),d(!0),e===m.correctAnswer&&s(e=>e+1))}function g(){if(l(null),d(!1),n===e.length-1){p(!0),localStorage.setItem(`${t}-quiz-score`,o+ +(c===m.correctAnswer));return}r(e=>e+1)}function _(){r(0),s(0),l(null),d(!1),p(!1)}if(f){let t=o+ +(c===m.correctAnswer);return(0,a.jsxs)(`div`,{className:`\r
          rounded-3xl border\r
          border-slate-800\r
          bg-slate-900/60 p-10\r
        `,children:[(0,a.jsx)(`h2`,{className:`mb-4 text-4xl font-black`,children:`Quiz Complete`}),(0,a.jsxs)(`p`,{className:`mb-8 text-2xl text-slate-300`,children:[`Your Score:`,(0,a.jsxs)(`span`,{className:`ml-3 text-orange-400`,children:[t,` / `,e.length]})]}),(0,a.jsx)(`button`,{onClick:_,className:`\r
            rounded-2xl bg-orange-500\r
            px-6 py-3 font-semibold\r
            text-white transition\r
            hover:bg-orange-600\r
          `,children:`Retry Quiz`})]})}return(0,a.jsxs)(`div`,{className:`\r
        rounded-3xl border\r
        border-slate-800\r
        bg-slate-900/60 p-10\r
      `,children:[(0,a.jsxs)(`div`,{className:`mb-6 text-sm text-slate-400`,children:[`Question `,n+1,` of`,` `,e.length]}),(0,a.jsx)(`h2`,{className:`mb-8 text-3xl font-bold`,children:m.question}),(0,a.jsx)(`div`,{className:`space-y-4`,children:m.options.map(e=>{let t=e===m.correctAnswer;return(0,a.jsx)(`button`,{onClick:()=>h(e),className:`
                w-full rounded-2xl
                border p-5 text-left
                transition

                ${c?t?`border-green-500 bg-green-500/10`:e===c?`border-red-500 bg-red-500/10`:`border-slate-700`:`border-slate-700 hover:border-orange-500`}
              `,children:e},e)})}),u&&(0,a.jsxs)(`div`,{className:`\r
            mt-8 rounded-2xl\r
            bg-slate-800/70 p-6\r
          `,children:[(0,a.jsx)(`h3`,{className:`mb-3 text-xl font-bold`,children:`Explanation`}),(0,a.jsx)(`p`,{className:`text-slate-300`,children:m.explanation}),(0,a.jsx)(`button`,{onClick:g,className:`\r
              mt-6 rounded-xl\r
              bg-orange-500 px-5 py-3\r
              font-semibold text-white\r
              transition hover:bg-orange-600\r
            `,children:`Next Question`})]})]})}var s={"control-flow":[{id:1,question:`Which statement is used for decision making in Java?`,options:[`loop`,`if`,`array`,`class`],correctAnswer:`if`,explanation:`The if statement is used for conditional decision making.`},{id:2,question:`Which loop is best when iterations are known?`,options:[`while`,`do-while`,`for`,`switch`],correctAnswer:`for`,explanation:`For loops are ideal when iteration count is known.`}]};function c(){let{moduleSlug:t}=e(),n=s[t];return console.log(`QUIZZES:`,s),console.log(`QUESTIONS:`,n),n?(0,a.jsxs)(`div`,{className:`mx-auto max-w-4xl`,children:[(0,a.jsx)(`h1`,{className:`mb-10 text-5xl font-black`,children:`Module Quiz`}),(0,a.jsx)(o,{questions:n,moduleSlug:t})]}):(0,a.jsxs)(`div`,{className:`p-10`,children:[(0,a.jsx)(`h1`,{className:`text-5xl font-black text-red-500`,children:`Quiz not found`}),(0,a.jsxs)(`p`,{className:`mt-4 text-xl text-slate-300`,children:[`Requested slug:`,(0,a.jsx)(`span`,{className:`ml-2 text-orange-400`,children:t})]})]})}export{c as default};