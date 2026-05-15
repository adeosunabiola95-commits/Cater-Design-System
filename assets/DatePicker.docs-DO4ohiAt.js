import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-CKmbD9vm.js";import{M as d,C as r,a as l}from"./blocks-Cm_5GcLR.js";import{D as i,S as o,W as c,a as h,b as x,P as j,c as g}from"./DatePicker.stories-C8zINMe1.js";import"./iframe-M8wFrZyQ.js";import"./preload-helper-QhaUMbJ9.js";import"./index-DSg-9hBA.js";import"./index-COMEjieL.js";import"./DatePicker-BmL6nUsD.js";import"./Icon-Cxj4HwRQ.js";import"./Chat-E4RI8uD8.js";import"./Button-BUJifrcg.js";import"./proxy-Kgw04Yn3.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(d,{of:i}),`
`,e.jsx(s.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx(s.p,{children:"Date picker with single date, dual date (range), and pre-set range variants."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Figma:"})," COMPONENT_SET ",e.jsx(s.strong,{children:"Date Picker"})," ",e.jsx(s.code,{children:"278:1649"})," (Desktop Bridge). Selected endpoints: ",e.jsx(s.strong,{children:"Sherwood Green"})," + ",e.jsx(s.strong,{children:"Gossip"}),". ",e.jsx(s.strong,{children:"In-range"})," days and ",e.jsx(s.strong,{children:"hover / pointer"})," on cells: ",e.jsx(s.strong,{children:"Salem 50"}),". Frame stroke ",e.jsx(s.strong,{children:"Dialogue/outline"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(s.p,{children:"The DatePicker supports three variants:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Single date"}),": One calendar for selecting a single date. 377×331px."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dual dates"}),": Two side-by-side calendars for range selection. 660×331px."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Pre-set range"}),": Preset buttons (Last 7 days, Last 30 days, etc.) plus calendar. 545px wide."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(s.h3,{id:"single-date",children:"Single Date"}),`
`,e.jsx(s.p,{children:"Single calendar with month navigation."}),`
`,e.jsx(r,{of:o,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"with-disabled-dates",children:"With Disabled Dates"}),`
`,e.jsxs(s.p,{children:["Uses ",e.jsx(s.code,{children:"isDateDisabled"})," to disable weekends."]}),`
`,e.jsx(r,{of:c,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"dual-date",children:"Dual Date"}),`
`,e.jsx(s.p,{children:"Dual date picker for range selection. Two calendar panels, 24px padding, 20px gap."}),`
`,e.jsx(r,{of:h,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"dual-date-with-disabled-dates",children:"Dual Date With Disabled Dates"}),`
`,e.jsx(s.p,{children:"Dual date picker with weekends disabled."}),`
`,e.jsx(r,{of:x,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"preset-range",children:"Preset Range"}),`
`,e.jsx(s.p,{children:"Pre-set range date picker. Preset buttons (Last 7 days, Last 30 days, This month, Last month) on the left, calendar on the right. Header shows the selected range."}),`
`,e.jsx(r,{of:j,sourceState:"shown"}),`
`,e.jsx(s.h3,{id:"preset-range-with-custom-presets",children:"Preset Range With Custom Presets"}),`
`,e.jsxs(s.p,{children:["Pre-set range with custom presets. Use the ",e.jsx(s.code,{children:"presets"})," prop to define labels and date ranges."]}),`
`,e.jsx(r,{of:g,sourceState:"shown"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Use single variant for due dates, appointment scheduling, or single-date forms"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Use dual variant for date range filters (e.g. reports, analytics)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),': Use preset-range when users commonly select ranges like "Last 7 days" or "This month"']}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Provide ",e.jsx(s.code,{children:"isDateDisabled"})," to block past dates, weekends, or holidays"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Do"}),": Use controlled mode (",e.jsx(s.code,{children:"value"})," + ",e.jsx(s.code,{children:"onChange"}),") when integrating with forms"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Don't"}),": Use for time selection—DatePicker is date-only"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": Month nav buttons have ",e.jsx(s.code,{children:'aria-label="Previous month"'})," / ",e.jsx(s.code,{children:'"Next month"'})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": Date cells use ",e.jsx(s.code,{children:"aria-pressed"})," for selection and ",e.jsx(s.code,{children:'aria-current="date"'})," for today"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": Dual variant has ",e.jsx(s.code,{children:'role="application"'})," and ",e.jsx(s.code,{children:'aria-label="Dual date picker"'})]}),`
`]})]})}function M(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{M as default};
