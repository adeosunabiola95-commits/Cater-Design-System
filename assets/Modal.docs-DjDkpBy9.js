import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-CKmbD9vm.js";import{M as l,C as n,a as t}from"./blocks-Cm_5GcLR.js";import{M as a}from"./Modal-Cir4IY21.js";import{M as c,I as h,C as x,T as j,P as m}from"./Modal.stories-DBkV2ODQ.js";import{M as i,A as p,a as g,S as f}from"./Modal.more-examples.stories-Bn_YKcqU.js";import{D as u,A as w}from"./Drawer.stories-DdqYpMG8.js";import"./iframe-M8wFrZyQ.js";import"./preload-helper-QhaUMbJ9.js";import"./index-DSg-9hBA.js";import"./index-COMEjieL.js";import"./Button-BUJifrcg.js";import"./Icon-Cxj4HwRQ.js";import"./Chat-E4RI8uD8.js";import"./proxy-Kgw04Yn3.js";import"./InputField-CapBl8WK.js";import"./TabGroup-C9YLKNn0.js";import"./CheckboxGroupItem-CbPb5ryf.js";import"./Banner-Dlwn7l0e.js";import"./CopySuffix-DjEcot35.js";function o(r){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:c}),`
`,e.jsx(s.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(s.p,{children:["Centered overlay dialogs for focused flows. Current Storybook coverage follows ",e.jsx(s.strong,{children:"four use-case patterns"})," that map to the Figma ",e.jsx(s.strong,{children:"Modals"})," component set (node ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"4651:9943"})}),", ",e.jsx(s.em,{children:"Marketplace (Sally)"}),"). Exact variant names and spacing should be verified with Figma Desktop Bridge when the API is available."]}),`
`,e.jsxs(s.p,{children:["For slide-in panels, see ",e.jsx(s.strong,{children:e.jsx(s.a,{href:"#side-drawer",children:"Drawer"})})," (",e.jsx(s.code,{children:"Components/Drawer"}),")."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"patterns",children:"Patterns"}),`
`,e.jsx(s.h3,{id:"01--inform",children:"01 · Inform"}),`
`,e.jsx(s.p,{children:"Acknowledgement or lightweight messaging; primary + secondary text actions."}),`
`,e.jsx(n,{of:h,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"02--confirm",children:"02 · Confirm"}),`
`,e.jsx(s.p,{children:"Explicit cancel vs commit; use for destructive or high-friction decisions."}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"03--task--form",children:"03 · Task / Form"}),`
`,e.jsx(s.p,{children:"Scrollable body for fields or longer content; standard footer actions."}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"04--list-picker",children:"04 · List picker"}),`
`,e.jsx(s.p,{children:"Tabs or filters + scrollable selectable list; footer confirms selection."}),`
`,e.jsx(n,{of:m,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"side-drawer",children:"Side drawer"}),`
`,e.jsxs(s.p,{children:["Slide-in ",e.jsx(s.code,{children:"Drawer"})," from the right or left (",e.jsx(s.code,{children:"Drawer"})," export in ",e.jsx(s.code,{children:"Modal.tsx"}),"). Canonical story:"]}),`
`,e.jsx(n,{of:w,meta:u,sourceState:"shown"}),`
`,e.jsxs(s.p,{children:["Drawer props table: open ",e.jsx(s.strong,{children:"Components → Drawer"})," docs, or refer to ",e.jsx(s.code,{children:"DrawerProps"})," in ",e.jsx(s.code,{children:"Modal.tsx"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsxs(s.p,{children:["Additional composed flows (",e.jsx(s.strong,{children:"Add Business"}),", ",e.jsx(s.strong,{children:"Add Link"}),", ",e.jsx(s.strong,{children:"Select Campaign"}),") live under ",e.jsx(s.strong,{children:"Examples → Modal"}),". Canvases here use ",e.jsx(s.code,{children:"meta={ModalMoreExamplesStories}"})," because this page is attached to ",e.jsx(s.code,{children:"Modal.stories"}),"."]}),`
`,e.jsx(s.h3,{id:"add-business-modal",children:"Add Business Modal"}),`
`,e.jsx(n,{of:p,meta:i,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"add-link-modal",children:"Add Link Modal"}),`
`,e.jsx(n,{of:g,meta:i,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"select-campaign-modal",children:"Select Campaign Modal"}),`
`,e.jsx(n,{of:f,meta:i,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(s.p,{children:["Reuses existing ",e.jsx(s.code,{children:"Modal"})," ",e.jsx(s.code,{children:"size"})," presets until new tokens are synced from Figma:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"sm"}),": 480px"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"md"}),": 625px"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"lg"}),": 720px"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"select-campaign"}),": 565px (list-picker layout)"]}),`
`]}),`
`,e.jsx(s.h3,{id:"drawer-widths",children:"Drawer widths"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"sm"}),": 381px"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"md"}),": 420px"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"props-modal",children:"Props (Modal)"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-guidelines",children:"Usage guidelines"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Pick the pattern that matches cognitive load — inform vs confirm vs task vs picker."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Use ",e.jsx(s.strong,{children:"Drawer"})," for supplementary or secondary flows that shouldn’t block the whole viewport."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Provide a clear primary action and a visible dismiss path."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Use ",e.jsx(s.code,{children:"ModalPrimaryActions"})," when you want cancel + primary footer layout on modals."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don’t"}),": Nest modals."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": ",e.jsx(s.code,{children:'role="dialog"'}),", ",e.jsx(s.code,{children:'aria-modal="true"'}),", labelled by title/description when present."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": Close control should retain ",e.jsx(s.code,{children:"aria-label"}),"; wire ",e.jsx(s.strong,{children:"Escape"})," to ",e.jsx(s.code,{children:"onClose"})," in app shell if required."]}),`
`]})]})}function _(r={}){const{wrapper:s}={...d(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(o,{...r})}):o(r)}export{_ as default};
