import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-D0sRiov9.js";import{M as a,C as o,A as d}from"./blocks-CA-j9cXE.js";import{L as r,S as l,B as c,M as h,D as x,R as p,a as j}from"./Logo.stories-Ch0SMaGH.js";import"./iframe-DAe-cY6O.js";import"./preload-helper-QhaUMbJ9.js";import"./index-awndDGEM.js";import"./index-C7ArfztH.js";import"./Logo-qTqEifie.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:r}),`
`,e.jsx(n.h1,{id:"logo",children:"Logo"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"wecater"})," wordmark in ",e.jsx(n.strong,{children:"Sherwood Green"})," (",e.jsx(n.code,{children:"#073D30"}),"). Use the size tokens below so the logo stays crisp and aligned with navigation chrome across mobile, tablet, and desktop."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Figma"})," — Cater Design System (",e.jsx(n.code,{children:"tK5SjqGRgeVr5w5tmxuLDa"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Logo group: ",e.jsx(n.code,{children:"4344:3496"})," (~",e.jsx(n.strong,{children:"172×36"})," px)"]}),`
`,e.jsxs(n.li,{children:["Top Bar reference: ",e.jsx(n.code,{children:"4664:14355"})," (WeCater Explore)"]}),`
`]}),`
`,e.jsx("iframe",{style:{border:"1px solid var(--color-border-default, #E4E7EC)",borderRadius:8,width:"100%",height:480},src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FtK5SjqGRgeVr5w5tmxuLDa%2FCater-Design-System%3Fnode-id%3D4664-14355",allowFullScreen:!0,title:"Figma — WeCater Top Bar with Logo"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"size-scale",children:"Size scale"}),`
`,e.jsxs(n.p,{children:["Five heights are used in product UI. Dimensions are taken from ",e.jsx(n.strong,{children:"Logo"})," instances in the Figma file (not invented)."]}),`
`,e.jsxs(n.p,{children:[`| Token | Frame (px) | Typical use |
| ----- | ---------- | ----------- |
| `,e.jsx(n.code,{children:"xs"}),` | 97×20 | Compact chrome — footers, nested panels |
| `,e.jsx(n.code,{children:"sm"})," | 140×32 | ",e.jsx(n.strong,{children:"Mobile"}),` navigation / top bar |
| `,e.jsx(n.code,{children:"md"})," | 160×33 | ",e.jsx(n.strong,{children:"Tablet"}),` navigation |
| `,e.jsx(n.code,{children:"lg"})," | 172×36 | ",e.jsx(n.strong,{children:"Desktop"}),` navigation (canonical) |
| `,e.jsx(n.code,{children:"xl"})," | 215×45 | Marketing / hero (sparingly) |"]}),`
`,e.jsx(o,{of:l,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsxs(n.p,{children:["Match Storybook viewports (",e.jsx(n.strong,{children:"Mobile"})," 375px, ",e.jsx(n.strong,{children:"Tablet"})," 768px, ",e.jsx(n.strong,{children:"Desktop"})," 1280px)."]}),`
`,e.jsx(o,{of:c,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:["| Viewport | Recommended ",e.jsx(n.code,{children:"size"}),` | Notes |
| -------- | ------------------ | ----- |
| Mobile (≤767px) | `,e.jsx(n.code,{children:"sm"}),` | Default for app headers |
| Tablet (768–1023px) | `,e.jsx(n.code,{children:"md"})," | Or ",e.jsx(n.code,{children:"lg"}),` when layout matches desktop nav |
| Desktop (≥1024px) | `,e.jsx(n.code,{children:"lg"})," | Top Bar / global chrome |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"navigation-examples",children:"Navigation examples"}),`
`,e.jsx(n.h3,{id:"mobile",children:"Mobile"}),`
`,e.jsx(o,{of:h,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"desktop",children:"Desktop"}),`
`,e.jsx(o,{of:x,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"responsive-wecater-explore",children:"Responsive (WeCater Explore)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sm"})," below the ",e.jsx(n.code,{children:"sm:"})," breakpoint, ",e.jsx(n.code,{children:"lg"})," from 640px up — same pattern as ",e.jsx(n.code,{children:"ExploreTopBar"}),"."]}),`
`,e.jsx(o,{of:p,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"default",children:"Default"}),`
`,e.jsx(o,{of:j,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Logo } from '@/components/Logo';

// Desktop nav
<Logo size="lg" />

// Mobile nav
<Logo size="sm" />

// Responsive (two instances — hide/show with Tailwind)
<Logo size="sm" className="sm:hidden" />
<Logo size="lg" className="hidden sm:block" />
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always provide context with ",e.jsx(n.code,{children:"alt"})," (default: ",e.jsx(n.code,{children:"wecater"}),")."]}),`
`,e.jsxs(n.li,{children:["Do not stretch the wordmark; pick a ",e.jsx(n.strong,{children:"size token"})," instead of arbitrary width/height."]}),`
`,e.jsxs(n.li,{children:["Keep clear space around the logo equal to at least ",e.jsx(n.strong,{children:"half the wordmark height"})," on all sides."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon-only"})," (~64×64) marks appear in Figma for avatars/app icons; use a dedicated asset when that variant is added to code."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{of:r})]})}function S(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{S as default};
