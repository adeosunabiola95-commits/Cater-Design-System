import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CKmbD9vm.js";import{M as l,C as s,a as d}from"./blocks-Cm_5GcLR.js";import{I as t,D as c,W as h,E as a,A as x,N as p,C as j,a as u,b as f,c as m,d as g,e as w,f as y}from"./InputField.stories-C35gPwJl.js";import"./iframe-M8wFrZyQ.js";import"./preload-helper-QhaUMbJ9.js";import"./index-DSg-9hBA.js";import"./index-COMEjieL.js";import"./InputField-CapBl8WK.js";import"./proxy-Kgw04Yn3.js";import"./DateInput-C-VVgufs.js";import"./DatePicker-BmL6nUsD.js";import"./Icon-Cxj4HwRQ.js";import"./Chat-E4RI8uD8.js";import"./Button-BUJifrcg.js";import"./CopySuffix-DjEcot35.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(l,{of:t}),`
`,e.jsx(n.h1,{id:"input-field",children:"Input Field"}),`
`,e.jsx(n.p,{children:"Input fields allow users to enter and edit text. Supports 2 sizes, 5 types with optional leading/trailing icons and suffix panels, and error states with accessible validation messaging."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"default",children:"Default"}),`
`,e.jsx(n.p,{children:"A standard text input with a label, trailing chevron, and helper text."}),`
`,e.jsx(s,{of:c,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"with-value",children:"With Value"}),`
`,e.jsx(n.p,{children:"An input field with pre-filled content."}),`
`,e.jsx(s,{of:h,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"error-state",children:"Error State"}),`
`,e.jsxs(n.p,{children:["When validation fails, the border changes to ",e.jsx(n.code,{children:"error-border"}),", the focus ring turns red, and the hint text switches to ",e.jsx(n.code,{children:"error-text-subtle"})," color."]}),`
`,e.jsx(s,{of:a,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small (sm)"}),": ",e.jsx(n.code,{children:"10px"})," vertical / ",e.jsx(n.code,{children:"12px"})," horizontal padding, ",e.jsx(n.code,{children:"44px"})," field height"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium (md)"}),": ",e.jsx(n.code,{children:"12px"})," vertical / ",e.jsx(n.code,{children:"12px"})," horizontal padding, ",e.jsx(n.code,{children:"48px"})," field height"]}),`
`]}),`
`,e.jsx(s,{of:x,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"name",children:"Name"}),`
`,e.jsxs(n.p,{children:["Simple text input with a trailing ",e.jsx(n.code,{children:"ArrowDown02"})," icon."]}),`
`,e.jsx(s,{of:p,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"company",children:"Company"}),`
`,e.jsxs(n.p,{children:["Leading ",e.jsx(n.code,{children:"Search"})," icon for lookup. The ",e.jsx(n.code,{children:"Cancel"})," icon only appears when the input has a value, and clicking it clears the field."]}),`
`,e.jsx(s,{of:j,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"amount",children:"Amount"}),`
`,e.jsxs(n.p,{children:['Two-part layout: white input area on the left, grey suffix panel on the right with "USD" text and an ',e.jsx(n.code,{children:"ArrowDown02"})," icon for currency selection."]}),`
`,e.jsx(s,{of:u,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"date",children:"Date"}),`
`,e.jsxs(n.p,{children:["Trailing ",e.jsx(n.code,{children:"Date"})," icon for date picker trigger."]}),`
`,e.jsx(s,{of:f,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"copy",children:"Copy"}),`
`,e.jsxs(n.p,{children:["Two-part layout: white input area on the left, grey suffix panel on the right with a ",e.jsx(n.code,{children:"Copy"}),' icon and "Copy" label. Clicking copies the value to clipboard.']}),`
`,e.jsx(s,{of:m,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"all-types-side-by-side",children:"All Types Side-by-Side"}),`
`,e.jsx(s,{of:g,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"action-states",children:"Action States"}),`
`,e.jsx(n.p,{children:"Default and error states shown side-by-side."}),`
`,e.jsx(s,{of:w,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:"Disabled inputs have reduced opacity and a not-allowed cursor."}),`
`,e.jsx(s,{of:y,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do"}),": Always include a label for accessibility"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do"}),": Provide hint text to clarify what the user should enter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do"}),": Use the error action state with a descriptive error message"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't"}),": Use placeholder text as a replacement for labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't"}),": Disable inputs without explaining why"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": The input is linked to its label via ",e.jsx(n.code,{children:"htmlFor"}),"/",e.jsx(n.code,{children:"id"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": Hint text is connected to the input via ",e.jsx(n.code,{children:"aria-describedby"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": Error state sets ",e.jsx(n.code,{children:"aria-invalid"})," on the input element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": Focus ring uses ",e.jsx(n.code,{children:"box-shadow"})," for visible focus indication"]}),`
`]})]})}function X(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{X as default};
