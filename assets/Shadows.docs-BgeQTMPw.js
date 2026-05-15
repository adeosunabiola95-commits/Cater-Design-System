import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-CKmbD9vm.js";import{M as i,C as r}from"./blocks-Cm_5GcLR.js";import{S as c,E as a}from"./Shadows.stories-C86CjClS.js";import"./iframe-M8wFrZyQ.js";import"./preload-helper-QhaUMbJ9.js";import"./index-DSg-9hBA.js";import"./index-COMEjieL.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(s.h1,{id:"shadows",children:"Shadows"}),`
`,e.jsx(s.p,{children:"Shadow tokens define elevation and depth for UI elements."}),`
`,e.jsx(s.h2,{id:"use-in-code",children:"Use in code"}),`
`,e.jsxs(s.p,{children:["See ",e.jsx(s.strong,{children:"Snippets"})," below each table row in the canvas, and prefer copying from the ",e.jsx(s.strong,{children:"Show code"})," panel on the story for full context."]}),`
`,e.jsx(s.h2,{id:"elevation-scale",children:"Elevation Scale"}),`
`,e.jsxs(s.p,{children:["Five elevation levels create visual hierarchy and depth. Each level uses one or two ",e.jsx(s.code,{children:"box-shadow"})," layers with the brand shadow color ",e.jsx(s.code,{children:"rgba(16, 24, 40, opacity)"}),"."]}),`
`,e.jsxs(s.p,{children:[`| Token | CSS Value | Usage |
|-------|-----------|-------|
| `,e.jsx(s.code,{children:"xs"})," | ",e.jsx(s.code,{children:"0 1px 2px rgba(16,24,40,0.05)"}),` | Subtle lift for buttons, inputs |
| `,e.jsx(s.code,{children:"sm"})," | ",e.jsx(s.code,{children:"0 1px 2px …0.06, 0 1px 3px …0.10"}),` | Cards, dropdowns |
| `,e.jsx(s.code,{children:"md"})," | ",e.jsx(s.code,{children:"0 2px 4px -2px …0.06, 0 4px 8px -2px …0.10"}),` | Popovers, tooltips |
| `,e.jsx(s.code,{children:"lg"})," | ",e.jsx(s.code,{children:"0 4px 6px -2px …0.03, 0 12px 16px -4px …0.08"}),` | Modals, dialogs |
| `,e.jsx(s.code,{children:"xl"})," | ",e.jsx(s.code,{children:"0 8px 8px -4px …0.03, 0 20px 24px -4px …0.08"})," | Full-page overlays |"]}),`
`,e.jsx(r,{of:a,sourceState:"shown"}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"tailwind-css",children:"Tailwind CSS"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="shadow-xs">...</div>
<div class="shadow-sm">...</div>
<div class="shadow-md">...</div>
<div class="shadow-lg">...</div>
<div class="shadow-xl">...</div>
`})}),`
`,e.jsx(s.h3,{id:"typescript-import",children:"TypeScript Import"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { shadows } from '@/tokens';

<div style={{ boxShadow: shadows.md }}>...</div>
`})})]})}function w(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{w as default};
