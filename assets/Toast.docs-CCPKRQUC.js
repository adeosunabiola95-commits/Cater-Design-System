import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-D0sRiov9.js";import{M as a,C as t,A as c}from"./blocks-CA-j9cXE.js";import{T as i,D as h,W as l,S as d,A as x}from"./Toast.stories-BCPSlT1W.js";import"./iframe-DAe-cY6O.js";import"./preload-helper-QhaUMbJ9.js";import"./index-awndDGEM.js";import"./index-C7ArfztH.js";import"./Toast-C97jMm6H.js";import"./Cancel-1sRoDiDj.js";import"./Button-Cuy8_dW9.js";import"./proxy-DCy2txyG.js";function o(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:i}),`
`,e.jsx(s.h1,{id:"toast",children:"Toast"}),`
`,e.jsxs(s.p,{children:["Transient notification for cart and workflow feedback. Maps to Figma ",e.jsx(s.strong,{children:"Toast"})," ",e.jsx(s.code,{children:"3989:7863"})," in ",e.jsx(s.a,{href:"https://www.figma.com/design/tK5SjqGRgeVr5w5tmxuLDa/Cater-Design-System?node-id=3989-7863",rel:"nofollow",children:"Cater Design System"}),"."]}),`
`,e.jsxs(s.p,{children:["Dark ",e.jsx(s.strong,{children:"Mirage 900"})," surface, ",e.jsx(s.strong,{children:"10px"})," corner radius, ",e.jsx(s.strong,{children:"12px"})," padding, ",e.jsx(s.strong,{children:"21px"})," gap between message, action, and close. Message is ",e.jsx(s.strong,{children:"14px"})," white body copy with an optional ",e.jsx(s.strong,{children:"semibold"})," highlight; action uses ",e.jsx(s.strong,{children:"Brand Gossip"})," (",e.jsx(s.code,{children:"#CCF8B9"}),"); close uses the ",e.jsx(s.strong,{children:"24×24"})," cancel icon."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"default",children:"Default"}),`
`,e.jsxs(s.p,{children:["Figma default: “Your ",e.jsx(s.strong,{children:"Basic Breakfast Bar"})," has been added to cart” with ",e.jsx(s.strong,{children:"View"})," action and dismiss control."]}),`
`,e.jsx(t,{of:h,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"without-action",children:"Without action"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"showAction={false}"})," hides the View control (Figma ",e.jsx(s.code,{children:"Show View"})," = false)."]}),`
`,e.jsx(t,{of:l,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"simple-message",children:"Simple message"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"children"})," for a single-line message without highlight segments or action."]}),`
`,e.jsx(t,{of:d,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"example-animated",children:"Example: Animated"}),`
`,e.jsx(s.p,{children:"Click the button to show the Figma default toast with enter/exit animation."}),`
`,e.jsx(t,{of:x,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Use for transient success feedback (e.g. item added to cart)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Keep copy short; use ",e.jsx(s.code,{children:"messageHighlight"})," for the entity name (product, plan, etc.)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Wire ",e.jsx(s.code,{children:"onAction"})," when the View control should navigate or open a detail"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't"}),": Use for errors that need acknowledgment — use Alert or Modal"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't"}),": Stack many toasts without auto-dismiss — prefer the stacking example pattern"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": ",e.jsx(s.code,{children:'role="status"'}),"; close button has ",e.jsx(s.code,{children:'aria-label="Close notification"'})]}),`
`]})]})}function y(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{y as default};
