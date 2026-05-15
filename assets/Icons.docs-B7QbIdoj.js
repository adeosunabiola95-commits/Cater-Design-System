import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-CKmbD9vm.js";import{M as c,C as r}from"./blocks-Cm_5GcLR.js";import{I as t,G as d,B as l,S as h,C as a}from"./Icons.stories-B5_w2Osz.js";import"./iframe-M8wFrZyQ.js";import"./preload-helper-QhaUMbJ9.js";import"./index-DSg-9hBA.js";import"./index-COMEjieL.js";import"./Icon-Cxj4HwRQ.js";import"./Chat-E4RI8uD8.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(c,{of:t}),`
`,n.jsx(e.h1,{id:"icons",children:"Icons"}),`
`,n.jsxs(e.p,{children:["The icon library contains ",n.jsx(e.strong,{children:"313 icons"})," at 24x24. All use ",n.jsx(e.code,{children:"currentColor"})," for styling flexibility. On any story below, open ",n.jsx(e.strong,{children:"Show code"})," to copy the rendered snippet."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"browse-all-icons",children:"Browse All Icons"}),`
`,n.jsx(e.p,{children:"Click any icon in the gallery to copy its import statement."}),`
`,n.jsx(r,{of:d,sourceState:"shown"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"by-category",children:"By Category"}),`
`,n.jsx(e.p,{children:"Icons are organized into semantic categories for easier discovery."}),`
`,n.jsx(r,{of:l,sourceState:"shown"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"individual-import-recommended-for-production",children:"Individual import (recommended for production)"}),`
`,n.jsxs(e.p,{children:["The SVG ",n.jsx(e.strong,{children:"drawer/menu icon"})," is exported as ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"DrawerIcon"})})," so it does not clash with the layout ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Drawer"})})," component (",n.jsx(e.code,{children:"cater-design-systems"})," / ",n.jsx(e.code,{children:"@/components/Modal"}),")."]}),`
`,n.jsx(e.p,{children:"Import only the icons you need for optimal tree-shaking:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Close, Search, Home, DrawerIcon } from '@/icons';

function MyComponent() {
  return (
    <button>
      <Close width={20} height={20} />
    </button>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"icon-wrapper-for-dynamic-usage",children:"Icon wrapper (for dynamic usage)"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.code,{children:"Icon"})," component when the icon name is determined at runtime:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Icon } from '@/icons';

function DynamicIcon({ iconName }: { iconName: string }) {
  return <Icon name={iconName} size={24} className="text-mirage-900" />;
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"sizing",children:"Sizing"}),`
`,n.jsxs(e.p,{children:["Icons default to 24x24 but accept any ",n.jsx(e.code,{children:"width"})," and ",n.jsx(e.code,{children:"height"})," values via standard SVG props."]}),`
`,n.jsx(r,{of:h,sourceState:"shown"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"color",children:"Color"}),`
`,n.jsxs(e.p,{children:["All icons use ",n.jsx(e.code,{children:"currentColor"})," for their fill/stroke, so they automatically inherit the parent text color. Use Tailwind ",n.jsx(e.code,{children:"text-*"})," utilities to colorize them."]}),`
`,n.jsx(r,{of:a,sourceState:"shown"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.p,{children:["Every icon component accepts all standard SVG element props (",n.jsx(e.code,{children:"SVGProps<SVGSVGElement>"}),"):"]}),`
`,n.jsxs(e.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,n.jsx(e.code,{children:"width"})," | ",n.jsx(e.code,{children:"number \\| string"})," | ",n.jsx(e.code,{children:"24"}),` | Icon width |
| `,n.jsx(e.code,{children:"height"})," | ",n.jsx(e.code,{children:"number \\| string"})," | ",n.jsx(e.code,{children:"24"}),` | Icon height |
| `,n.jsx(e.code,{children:"className"})," | ",n.jsx(e.code,{children:"string"})," | — | CSS classes (use Tailwind ",n.jsx(e.code,{children:"text-*"}),` for color) |
| `,n.jsx(e.code,{children:"style"})," | ",n.jsx(e.code,{children:"CSSProperties"}),` | — | Inline styles |
| `,n.jsx(e.code,{children:"onClick"})," | ",n.jsx(e.code,{children:"function"})," | — | Click handler |"]}),`
`,n.jsx(e.h3,{id:"icon-wrapper-additional-props",children:"Icon wrapper additional props"}),`
`,n.jsxs(e.p,{children:[`| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `,n.jsx(e.code,{children:"name"})," | ",n.jsx(e.code,{children:"IconName"}),` | — | Name of the icon to render (required) |
| `,n.jsx(e.code,{children:"size"})," | ",n.jsx(e.code,{children:"number"})," | ",n.jsx(e.code,{children:"24"})," | Sets both width and height |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"guidelines",children:"Guidelines"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Use semantic icons"})," that clearly communicate their purpose"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Maintain consistent sizing"})," within the same context (e.g., all toolbar icons at 20px)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pair with text"})," when the icon meaning may be ambiguous"]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Use ",n.jsx(e.code,{children:"currentColor"})]})," inheritance rather than hardcoding colors on individual icons"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Import individually"})," for production builds to enable tree-shaking"]}),`
`]})]})}function I(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{I as default};
