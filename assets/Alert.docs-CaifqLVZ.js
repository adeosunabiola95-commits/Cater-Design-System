import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-D0sRiov9.js";import{M as l,C as r,A as a}from"./blocks-CA-j9cXE.js";import{A as i,a as c,b as h}from"./Alert.stories-DQdVLcba.js";import"./iframe-DAe-cY6O.js";import"./preload-helper-QhaUMbJ9.js";import"./index-awndDGEM.js";import"./index-C7ArfztH.js";import"./Alert-BVIuSK-L.js";import"./Button-Cuy8_dW9.js";import"./proxy-DCy2txyG.js";function t(e){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return s.jsxs(s.Fragment,{children:[`
`,`
`,s.jsx(l,{of:i}),`
`,s.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,s.jsx(n.p,{children:"Alerts display inline messages with semantic states. Full-width, single-line notifications with optional close button."}),`
`,s.jsx(n.hr,{}),`
`,s.jsx(n.h2,{id:"states",children:"States"}),`
`,s.jsx(n.p,{children:"Five semantic states. Each uses a distinct background color."}),`
`,s.jsx(r,{of:c,sourceState:"shown"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Success"}),": Green background (salem-300). Use for confirmations, success messages."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Info"}),": Pink background (blush-pink-300). Use for informational notices."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Error"}),": Red background (bright-red-200). Use for errors or critical issues."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Warning"}),": Orange background (flush-orange-300). Use for cautions."]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Grey"}),": Neutral background (mirage-200). Use for neutral or low-emphasis messages."]}),`
`]}),`
`,s.jsx(n.hr,{}),`
`,s.jsx(n.h2,{id:"example-animated",children:"Example: Animated"}),`
`,s.jsx(n.p,{children:"Click the button to show an Alert with enter/exit animation."}),`
`,s.jsx(r,{of:h,sourceState:"shown"}),`
`,s.jsx(n.hr,{}),`
`,s.jsx(n.h2,{id:"props",children:"Props"}),`
`,s.jsx(a,{of:i}),`
`,s.jsx(n.hr,{}),`
`,s.jsx(n.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Do"}),": Use Alerts for inline, full-width messages (e.g. at top of a form or section)"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Do"}),": Match state to semantic meaning (success=green, error=red, etc.)"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Do"}),": Provide ",s.jsx(n.code,{children:"onClose"})," when the user can dismiss the message"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Don't"}),": Use Alerts for temporary toasts—use Toast instead"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Don't"}),": Stack multiple Alerts without clear hierarchy"]}),`
`]})]})}function k(e={}){const{wrapper:n}={...o(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(t,{...e})}):t(e)}export{k as default};
