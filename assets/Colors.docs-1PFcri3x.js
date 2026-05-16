import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-D0sRiov9.js";import{M as c,C as r}from"./blocks-CA-j9cXE.js";import{C as t,B as d,P as a,S as l}from"./Colors.stories-CWdaQ5lK.js";import"./iframe-DAe-cY6O.js";import"./preload-helper-QhaUMbJ9.js";import"./index-awndDGEM.js";import"./index-C7ArfztH.js";function o(n){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(c,{of:t}),`
`,e.jsx(s.h1,{id:"colors",children:"Colors"}),`
`,e.jsxs(s.p,{children:["Color tokens synced to ",e.jsx(s.strong,{children:"Cater Design Systems"})," Figma (Brands, Primitives, Semantic / Tokens collections)."]}),`
`,e.jsx(s.h2,{id:"use-in-code",children:"Use in code"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"TypeScript"})," — import maps from this repo (",e.jsx(s.code,{children:"@/"})," matches ",e.jsx(s.code,{children:"src/"}),"):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { brands, primitives, semantic } from '@/tokens';

const cardBg = semantic.surface.default;
const primary = primitives.salem['600'];
`})}),`
`,e.jsxs(s.p,{children:[e.jsxs(s.strong,{children:["Tailwind (v4 ",e.jsx(s.code,{children:"@theme"}),")"]})," — colors from ",e.jsx(s.code,{children:"src/index.css"})," are available as utilities (see component stories), e.g. ",e.jsx(s.code,{children:"bg-surface-default"}),", ",e.jsx(s.code,{children:"text-text-title"}),", ",e.jsx(s.code,{children:"bg-brand-sherwood-green"}),", ",e.jsx(s.code,{children:"border-border-default"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"CSS variables"})," — same file defines ",e.jsx(s.code,{children:"--color-*"})," for brands, primitives, and semantic tokens (e.g. ",e.jsx(s.code,{children:"var(--color-text-title)"}),")."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"brand-colors",children:"Brand Colors"}),`
`,e.jsx(s.p,{children:"Core brand colors from which all scales are derived."}),`
`,e.jsx(r,{of:d,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"primitive-scales",children:"Primitive Scales"}),`
`,e.jsx(s.p,{children:"Full 50–900 shade scales for each brand color."}),`
`,e.jsx(r,{of:a,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"semantic-tokens",children:"Semantic Tokens"}),`
`,e.jsx(s.p,{children:"Purpose-driven color tokens for use in components."}),`
`,e.jsx(r,{of:l,sourceState:"shown"})]})}function v(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{v as default};
