"use strict";exports.id=8592,exports.ids=[8592],exports.modules={8592:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});var s=t(7247);t(8964);var a=t(8245),i=t.n(a);function n({elements:e,align:r,containerized:t}){return s.jsx("div",{className:"flex flex-wrap gap-md",children:e.map((e,a)=>e.url?(0,s.jsxs)("a",{href:e.url,className:`flex-grow basis-0 min-w-80 group hover:border-primary ${t&&"panel"} ${"center"===r?"text-center":"right"===r?"text-right":"text-left"}`,children:[e.icon&&s.jsx("i",{className:`${e.icon} text-3xl text-primary mb-sm group-hover:-rotate-[10deg] transition`}),s.jsx("h2",{className:"text-foreground-primary group-hover:text-primary",children:e.name}),e.description&&s.jsx("p",{className:"text-foreground-secondary mt-xs",children:e.description})]},a):(0,s.jsxs)("div",{className:`flex-grow basis-0 min-w-80 ${t&&"panel"} ${"center"===r?"text-center":"right"===r?"text-right":"text-left"}`,children:[e.icon&&s.jsx("div",{className:`text-primary-contrast bg-primary bg-opacity-btn w-12 h-12 rounded-btn flex items-center justify-center mb-sm ${"center"===r?"mx-auto":"right"===r?"ml-auto":""}`,children:s.jsx("i",{className:`${e.icon} text-2xl`})}),s.jsx("h2",{className:"text-foreground-primary",children:e.name}),e.description&&s.jsx("div",{className:"text-foreground-secondary mt-xs markdown",dangerouslySetInnerHTML:{__html:i().sanitize(e.description,{ADD_ATTR:["target"]})}})]},a))})}}};