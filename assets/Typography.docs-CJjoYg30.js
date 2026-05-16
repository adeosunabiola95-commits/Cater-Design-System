import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-D0sRiov9.js";import{M as r,C as t}from"./blocks-CA-j9cXE.js";import{T as h,F as c,S as l,W as a}from"./Typography.stories-M6g94mg2.js";import"./iframe-DAe-cY6O.js";import"./preload-helper-QhaUMbJ9.js";import"./index-awndDGEM.js";import"./index-C7ArfztH.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.p,{children:["Typography tokens from Figma (Typography collection): ",e.jsx(n.strong,{children:"Family/Display"})," (General Sans), ",e.jsx(n.strong,{children:"Family/Body"})," (Inter), plus sizes, weights, line heights, and letter-spacing tokens."]}),`
`,e.jsx(n.h2,{id:"use-in-code",children:"Use in code"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"TypeScript"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from '@/tokens';

const styles = {
  fontFamily: fontFamily.body,
  fontSize: fontSize.md,
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.normal,
};
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"CSS / theme"})," — ",e.jsx(n.code,{children:"src/index.css"})," exposes ",e.jsx(n.code,{children:"--font-title"}),", ",e.jsx(n.code,{children:"--font-body"}),", and type scale variables on ",e.jsx(n.code,{children:"@theme"}),". In stories, use ",e.jsx(n.code,{children:"font-title"})," / ",e.jsx(n.code,{children:"font-body"})," Tailwind classes where configured."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"font-families",children:"Font Families"}),`
`,e.jsx(t,{of:c,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"type-scale",children:"Type Scale"}),`
`,e.jsx(n.p,{children:"Recommended sizes for headings, body text, and captions."}),`
`,e.jsx(t,{of:l,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"weight-line-height-letter-spacing",children:"Weight, line-height, letter-spacing"}),`
`,e.jsx(t,{of:a,sourceState:"shown"})]})}function u(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{u as default};
