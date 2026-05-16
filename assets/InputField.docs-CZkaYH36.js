import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-D0sRiov9.js";import{M as d,C as s,A as l}from"./blocks-CA-j9cXE.js";import{I as t,D as c,F as h,a,G as x,A as j,E as p,b as u,P as m,N as f,C as y,c as g,d as w,e as b,f as S,g as D,h as A,i as v,j as k}from"./InputField.stories-BSq2IEdN.js";import"./iframe-DAe-cY6O.js";import"./preload-helper-QhaUMbJ9.js";import"./index-awndDGEM.js";import"./index-C7ArfztH.js";import"./InputField-BUTCwuFN.js";import"./proxy-DCy2txyG.js";import"./DateInput-B2az3GYW.js";import"./DatePicker-DTdNEJlR.js";import"./Icon-hv7FGtLB.js";import"./Cancel-1sRoDiDj.js";import"./Chat-D1LP0BQV.js";import"./Button-Cuy8_dW9.js";import"./use-reduced-motion-DLMRVVQc.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h1,{id:"input-field",children:"Input Field"}),`
`,e.jsxs(n.p,{children:["Input fields allow users to enter and edit text. Figma component set ",e.jsx(n.code,{children:"99:960"}),". Supports ",e.jsx(n.strong,{children:"default"}),", ",e.jsx(n.strong,{children:"ghost"}),", and ",e.jsx(n.strong,{children:"filled"})," value states, 2 sizes, 5 types, and error action with accessible validation messaging."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"default",children:"Default"}),`
`,e.jsx(n.p,{children:"A standard text input with a label, trailing chevron, and helper text."}),`
`,e.jsx(s,{of:c,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"filled-state",children:"Filled State"}),`
`,e.jsxs(n.p,{children:["When the field has a value (or ",e.jsx(n.code,{children:'state="filled"'}),"), input text uses ",e.jsx(n.code,{children:"text-text-body"})," (",e.jsx(n.code,{children:"#29344A"}),") so typed content reads darker than the empty default (",e.jsx(n.code,{children:"#68707C"}),")."]}),`
`,e.jsx(s,{of:h,sourceState:"shown"}),`
`,e.jsxs(n.p,{children:["Omit ",e.jsx(n.code,{children:"state"})," and the component picks ",e.jsx(n.strong,{children:"filled"})," automatically when ",e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})," is non-empty."]}),`
`,e.jsx(s,{of:a,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"ghost-state",children:"Ghost State"}),`
`,e.jsxs(n.p,{children:["Copy-type fields use the lighter ghost tone (",e.jsx(n.code,{children:"text-text-caption"}),", ",e.jsx(n.code,{children:"#B2B8C1"}),")."]}),`
`,e.jsx(s,{of:x,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"all-states",children:"All States"}),`
`,e.jsx(s,{of:j,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"error-state",children:"Error State"}),`
`,e.jsxs(n.p,{children:["When validation fails, the border changes to ",e.jsx(n.code,{children:"error-border"}),", the focus ring turns red, and the hint text switches to ",e.jsx(n.code,{children:"error-text-subtle"})," color."]}),`
`,e.jsx(s,{of:p,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Small (sm)"}),": ",e.jsx(n.code,{children:"10px"})," vertical / ",e.jsx(n.code,{children:"12px"})," horizontal padding, ",e.jsx(n.code,{children:"44px"})," field height"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium (md)"}),": ",e.jsx(n.code,{children:"12px"})," vertical / ",e.jsx(n.code,{children:"12px"})," horizontal padding, ",e.jsx(n.code,{children:"48px"})," field height"]}),`
`]}),`
`,e.jsx(s,{of:u,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"practical-input-kinds",children:"Practical input kinds"}),`
`,e.jsxs(n.p,{children:["Pass ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"inputKind"})})," so each field uses the right HTML ",e.jsx(n.code,{children:"type"}),", mobile keyboard, ",e.jsx(n.code,{children:"autoComplete"}),", and character filtering:"]}),`
`,e.jsxs(n.p,{children:["| ",e.jsx(n.code,{children:"inputKind"}),` | Use for | Behavior |
| ----------- | ------- | -------- |
| `,e.jsx(n.code,{children:"email"})," | Email addresses | ",e.jsx(n.code,{children:'type="email"'}),`, email keyboard, strips spaces |
| `,e.jsx(n.code,{children:"phone"})," | Phone numbers | ",e.jsx(n.code,{children:'type="tel"'}),", telephone keypad, digits / ",e.jsx(n.code,{children:"+"})," / ",e.jsx(n.code,{children:"()"}),` / spaces only |
| `,e.jsx(n.code,{children:"url"})," | Websites, copy fields | ",e.jsx(n.code,{children:'type="url"'}),`, URL keyboard |
| `,e.jsx(n.code,{children:"name"})," | Person or business names | Letters, spaces, ",e.jsx(n.code,{children:"'"}),", ",e.jsx(n.code,{children:"."}),", ",e.jsx(n.code,{children:"-"}),` only |
| `,e.jsx(n.code,{children:"search"})," | Lookup / filter fields | ",e.jsx(n.code,{children:'type="search"'}),`, search keyboard |
| `,e.jsx(n.code,{children:"amount"})," | Currency | Decimal keypad, digits / ",e.jsx(n.code,{children:"."})," / ",e.jsx(n.code,{children:"$"}),` |
| `,e.jsx(n.code,{children:"number"}),` | Quantities | Numeric keypad, digits only |
| `,e.jsx(n.code,{children:"text"})," | General text | Default (no filtering) |"]}),`
`,e.jsx(s,{of:m,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.h3,{id:"name",children:"Name"}),`
`,e.jsxs(n.p,{children:["Simple text input with a trailing ",e.jsx(n.code,{children:"ArrowDown02"})," icon."]}),`
`,e.jsx(s,{of:f,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"company",children:"Company"}),`
`,e.jsxs(n.p,{children:["Leading ",e.jsx(n.code,{children:"Search"})," icon for lookup. The ",e.jsx(n.code,{children:"Cancel"})," icon only appears when the input has a value, and clicking it clears the field."]}),`
`,e.jsx(s,{of:y,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"amount",children:"Amount"}),`
`,e.jsxs(n.p,{children:['Two-part layout: white input area on the left, grey suffix panel on the right with "USD" text and an ',e.jsx(n.code,{children:"ArrowDown02"})," icon for currency selection."]}),`
`,e.jsx(s,{of:g,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"date",children:"Date"}),`
`,e.jsxs(n.p,{children:["Trailing ",e.jsx(n.code,{children:"Date"})," icon for date picker trigger."]}),`
`,e.jsx(s,{of:w,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"email",children:"Email"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'inputKind="email"'})," — email keyboard and built-in format validation."]}),`
`,e.jsx(s,{of:b,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"phone",children:"Phone"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'inputKind="phone"'})," — telephone keypad; only phone characters accepted."]}),`
`,e.jsx(s,{of:S,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"copy",children:"Copy"}),`
`,e.jsxs(n.p,{children:["Two-part layout: white input area on the left, grey suffix panel on the right with a ",e.jsx(n.code,{children:"Copy"}),' icon and "Copy" label. Uses ',e.jsx(n.code,{children:'inputKind="url"'}),". Clicking copies the value to clipboard."]}),`
`,e.jsx(s,{of:D,sourceState:"shown"}),`
`,e.jsx(n.h3,{id:"all-types-side-by-side",children:"All Types Side-by-Side"}),`
`,e.jsx(s,{of:A,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"action-states",children:"Action States"}),`
`,e.jsx(n.p,{children:"Default and error states shown side-by-side."}),`
`,e.jsx(s,{of:v,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:"Disabled inputs have reduced opacity and a not-allowed cursor."}),`
`,e.jsx(s,{of:k,sourceState:"shown"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do"}),": Always include a label for accessibility"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do"}),": Provide hint text to clarify what the user should enter"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do"}),": Set ",e.jsx(n.code,{children:"inputKind"})," to match the data you collect (",e.jsx(n.code,{children:"email"}),", ",e.jsx(n.code,{children:"phone"}),", ",e.jsx(n.code,{children:"url"}),", etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do"}),": Use the error action state with a descriptive error message"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't"}),": Use placeholder text as a replacement for labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't"}),": Disable inputs without explaining why"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": The input is linked to its label via ",e.jsx(n.code,{children:"htmlFor"}),"/",e.jsx(n.code,{children:"id"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": Hint text is connected to the input via ",e.jsx(n.code,{children:"aria-describedby"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": Error state sets ",e.jsx(n.code,{children:"aria-invalid"})," on the input element"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": Focus ring uses ",e.jsx(n.code,{children:"box-shadow"})," for visible focus indication"]}),`
`]})]})}function R(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{R as default};
