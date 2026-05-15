import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-CKmbD9vm.js";import{M as a,C as i}from"./blocks-Cm_5GcLR.js";import{S as o,a as d,A as t}from"./Spacing.stories-8QnbE-mf.js";import"./iframe-M8wFrZyQ.js";import"./preload-helper-QhaUMbJ9.js";import"./index-DSg-9hBA.js";import"./index-COMEjieL.js";function r(e){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...c(),...e.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(a,{of:o}),`
`,n.jsx(s.h1,{id:"spacing",children:"Spacing"}),`
`,n.jsxs(s.p,{children:["Spacing tokens from Figma (",n.jsx(s.strong,{children:"Spacing/"}),"*). Use ",n.jsx(s.strong,{children:"Tokens/Radius"})," for ",n.jsx(s.code,{children:"Radius/full"})," (pills); Spacing/999 is deprecated in Figma."]}),`
`,n.jsx(s.h2,{id:"use-in-code",children:"Use in code"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"TypeScript"}),":"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { spacing } from '@/tokens';

<div style={{ padding: spacing[4], gap: spacing[2] }} />
`})}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"CSS variables"})," (",n.jsx(s.code,{children:"src/index.css"}),"):"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`padding: var(--spacing-4);
gap: var(--spacing-2);
`})}),`
`,n.jsxs(s.p,{children:["Tailwind spacing utilities align to this scale when you use the design-system theme (e.g. ",n.jsx(s.code,{children:"p-4"}),", ",n.jsx(s.code,{children:"gap-2"}),")."]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"scale",children:"Scale"}),`
`,n.jsx(i,{of:d,sourceState:"shown"}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"applied",children:"Applied"}),`
`,n.jsx(s.p,{children:"Visual demonstration of each spacing value applied as padding."}),`
`,n.jsx(i,{of:t,sourceState:"shown"})]})}function f(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{f as default};
