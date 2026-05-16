import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-D0sRiov9.js";import{M as a,C as o,A as d}from"./blocks-CA-j9cXE.js";import{M as r,T as i,W as c,a as h}from"./ModalHeader.stories-CnVfWLq5.js";import"./iframe-DAe-cY6O.js";import"./preload-helper-QhaUMbJ9.js";import"./index-awndDGEM.js";import"./index-C7ArfztH.js";import"./ModalHeader-DvvcZNzb.js";import"./Icon-hv7FGtLB.js";import"./Cancel-1sRoDiDj.js";import"./Chat-D1LP0BQV.js";import"./modalHeaderStoryArgs-Bwh4ZHW6.js";function s(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...l(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:r}),`
`,e.jsx(n.h1,{id:"modal-header",children:"Modal Header"}),`
`,e.jsxs(n.p,{children:["First molecule in the modal stack: ",e.jsx(n.strong,{children:"header"})," → body → actions. Maps to Figma ",e.jsx(n.em,{children:"Marketplace (Sally)"}),"."]}),`
`,e.jsx(n.h2,{id:"figma-variants",children:"Figma variants"}),`
`,e.jsxs(n.p,{children:[`| Variant | Node | Structure |
| ------- | ---- | --------- |
| `,e.jsx(n.strong,{children:"Header container"})," | ",e.jsx(n.code,{children:"4684:19909"}),` | Title + close |
| `,e.jsx(n.strong,{children:"Header container with subtext"})," | ",e.jsx(n.code,{children:"4684:19918"})," | Title + 12px gap + subtext + close |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Layout:"})," 24px padding (top/left/right/bottom), 32px gap between text column and close, title ",e.jsx(n.strong,{children:"General Sans Semibold 25px"}),", subtext ",e.jsx(n.strong,{children:"Inter 14px"}),"."]}),`
`,e.jsx(n.h2,{id:"molecules--atoms",children:"Molecules & atoms"}),`
`,e.jsxs(n.p,{children:[`| Piece | Export | Role |
| ----- | ------ | ---- |
| Shell | `,e.jsx(n.code,{children:"ModalHeader"}),` | Full header row + border |
| Text column | `,e.jsx(n.code,{children:"ModalHeaderTextGroup"}),` | Title + optional subtext (12px gap) |
| Title | `,e.jsx(n.code,{children:"ModalHeaderTitle"}),` | General Sans 25px |
| Subtext | `,e.jsx(n.code,{children:"ModalHeaderSubtext"}),` | Inter 14px |
| Close | `,e.jsx(n.code,{children:"ModalHeaderCloseButton"})," | 35×35 circle, Cancel 18px |"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"header-container-title-only",children:"Header container (title only)"}),`
`,e.jsx(o,{of:i,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"header-container-with-subtext",children:"Header container with subtext"}),`
`,e.jsx(o,{of:c,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"molecule-breakdown",children:"Molecule breakdown"}),`
`,e.jsx(o,{of:h,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ModalHeader } from '@/components/Modal';

<ModalHeader
  title="Change request"
  subtext="What would you like to update for this order?"
  onClose={handleClose}
/>
`})}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"subtext"})})," only when you need the second line; omit for title-only headers."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{of:r})]})}function C(t={}){const{wrapper:n}={...l(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{C as default};
