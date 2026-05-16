import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-D0sRiov9.js";import{M as o,C as i}from"./blocks-CA-j9cXE.js";import{R as c,S as l}from"./Radius.stories-DNl9rkWQ.js";import"./iframe-DAe-cY6O.js";import"./preload-helper-QhaUMbJ9.js";import"./index-awndDGEM.js";import"./index-C7ArfztH.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...d(),...n.components};return s.jsxs(s.Fragment,{children:[`
`,`
`,s.jsx(o,{of:c}),`
`,s.jsx(e.h1,{id:"radius",children:"Radius"}),`
`,s.jsxs(e.p,{children:["Radius tokens from Figma (Radius collection): none, sm, md, lg, xl, 2xl, ",s.jsx(e.strong,{children:"modal"})," (20px dialog shell from Modals), full. Exposed in ",s.jsx(e.code,{children:"src/tokens/radius.ts"})," and ",s.jsx(e.code,{children:"src/index.css"})," ",s.jsx(e.code,{children:"@theme"}),"."]}),`
`,s.jsx(e.h2,{id:"use-in-code",children:"Use in code"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"TypeScript"}),":"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { radius } from '@/tokens';

<div style={{ borderRadius: radius.modal }} />
`})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"CSS variables"}),":"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-css",children:`border-radius: var(--radius-lg);
border-radius: var(--radius-modal);
`})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Tailwind"})," — use rounded utilities wired to this scale (e.g. ",s.jsx(e.code,{children:"rounded-lg"}),", ",s.jsx(e.code,{children:"rounded-full"}),", modal shell uses ",s.jsx(e.code,{children:"radius-modal"})," / design tokens as in ",s.jsx(e.code,{children:"Button"})," / ",s.jsx(e.code,{children:"Modal"}),")."]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h2,{id:"scale",children:"Scale"}),`
`,s.jsx(i,{of:l,sourceState:"shown"})]})}function g(n={}){const{wrapper:e}={...d(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(r,{...n})}):r(n)}export{g as default};
