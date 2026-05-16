import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-D0sRiov9.js";import{M as i,C as n,A as h}from"./blocks-CA-j9cXE.js";import{C as o,D as a,a as d,I as l,b as x,c as j,S as u,d as p,e as m,f as k,g as b,h as f,i as g,j as w,A as S}from"./Checkbox.stories-Cj1HKolb.js";import"./iframe-DAe-cY6O.js";import"./preload-helper-QhaUMbJ9.js";import"./index-awndDGEM.js";import"./index-C7ArfztH.js";import"./CheckboxGroupItem-B79X7s7x.js";import"./proxy-DCy2txyG.js";import"./Icon-hv7FGtLB.js";import"./Cancel-1sRoDiDj.js";import"./Chat-D1LP0BQV.js";function t(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:o}),`
`,e.jsx(s.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx(s.p,{children:"A checkbox component for selecting one or multiple options from a list. Supports checked, unchecked, and indeterminate states."}),`
`,e.jsx(s.p,{children:"Two visual variants:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"mp (Checboxes mp)"}),": Outlined style — dark green border, green checkmark on white background"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"saas (Checboxes saas)"}),": Filled style — grey border when unchecked, green background with white checkmark when checked"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"states",children:"States"}),`
`,e.jsx(s.h3,{id:"default-unchecked",children:"Default (Unchecked)"}),`
`,e.jsx(n,{of:a,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"checked",children:"Checked"}),`
`,e.jsx(s.p,{children:"Shows a tick-02 checkmark icon inside the box."}),`
`,e.jsx(n,{of:d,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"indeterminate",children:"Indeterminate"}),`
`,e.jsx(s.p,{children:'Shows a horizontal dash for partial selection (e.g., "Select All" with some children checked).'}),`
`,e.jsx(n,{of:l,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:x,sourceState:"shown"}),`
`,e.jsx(n,{of:j,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Small (sm)"}),": 18×18px box, 14×14px icon"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Medium (md)"}),": 20×20px box, 16×16px icon (default)"]}),`
`]}),`
`,e.jsx(n,{of:u,sourceState:"shown"}),`
`,e.jsx(n,{of:p,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"variants-mp-vs-saas",children:"Variants (mp vs saas)"}),`
`,e.jsx(s.h3,{id:"checboxes-mp-default",children:"Checboxes mp (default)"}),`
`,e.jsx(s.p,{children:"Outlined style with dark green border and green checkmark."}),`
`,e.jsx(s.h3,{id:"checboxes-saas",children:"Checboxes saas"}),`
`,e.jsx(s.p,{children:"Filled style: grey border when unchecked, green background with white checkmark when checked."}),`
`,e.jsx(n,{of:m,sourceState:"shown"}),`
`,e.jsx(n,{of:k,sourceState:"shown"}),`
`,e.jsx(n,{of:b,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"checkbox-group",children:"Checkbox Group"}),`
`,e.jsx(s.p,{children:'Use multiple checkboxes together with a "Select All" parent that reflects the indeterminate state.'}),`
`,e.jsx(n,{of:f,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"checkbox-group-items",children:"Checkbox group items"}),`
`,e.jsx(s.p,{children:"Row layout for selectable campaign-style items: icon, name, description, and checkbox. Use for lists where each row can be selected."}),`
`,e.jsx(n,{of:g,sourceState:"shown"}),`
`,e.jsx(n,{of:w,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"all-variants",children:"All Variants"}),`
`,e.jsx(n,{of:S,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(h,{of:o}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Use checkboxes when users can select zero, one, or multiple items"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Use the indeterminate state for a parent checkbox in a nested group"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't"}),": Use checkboxes when only one option can be selected — use radio buttons instead"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": Hidden native ",e.jsx(s.code,{children:'<input type="checkbox">'})," is used for screen reader support"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": Focus ring triggers via keyboard navigation on the label wrapper"]}),`
`]})]})}function O(r={}){const{wrapper:s}={...c(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(t,{...r})}):t(r)}export{O as default};
