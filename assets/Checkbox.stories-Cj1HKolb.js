import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./iframe-DAe-cY6O.js";import{C as a,a as D}from"./CheckboxGroupItem-B79X7s7x.js";import{S as I}from"./Icon-hv7FGtLB.js";import"./Cancel-1sRoDiDj.js";import"./Chat-D1LP0BQV.js";const N={title:"Components/Checkbox",component:a,parameters:{docs:{description:{component:"A checkbox component for multi-select options. Available in 2 sizes (sm, md) with Default, Hover, Focused, and Disabled states. Supports checked and indeterminate states. Extracted from the Cater Design Systems Figma."},source:{type:"dynamic"}}},argTypes:{variant:{control:"select",options:["mp","saas"],description:"Visual variant. mp = Checboxes mp (outlined), saas = Checboxes saas (filled when checked).",table:{defaultValue:{summary:"mp"}}},size:{control:"select",options:["sm","md"],description:'Size of the checkbox. Maps to Figma "Size" property.',table:{defaultValue:{summary:"md"}}},checked:{control:"boolean",description:'Controlled checked state. Maps to Figma "Checked" property.'},indeterminate:{control:"boolean",description:'Indeterminate state (partial selection). Maps to Figma "indeterminate" property.'},label:{control:"text",description:"Label text displayed beside the checkbox."},disabled:{control:"boolean",description:'Whether the checkbox is disabled. Maps to Figma "State=Disabled".'}}},n={args:{label:"Orange Juice",size:"md"}},o={args:{label:"Apple Juice",size:"md",defaultChecked:!0}},m={args:{label:"Select All",size:"md",indeterminate:!0}},p={args:{label:"Orange Juice",size:"sm"},name:"Small – Default"},h={args:{label:"Apple Juice",size:"sm",defaultChecked:!0},name:"Small – Checked"},u={args:{label:"Unavailable",size:"md",disabled:!0},name:"Disabled – Unchecked"},b={args:{label:"Unavailable",size:"md",disabled:!0,defaultChecked:!0},name:"Disabled – Checked"},k={args:{label:"Orange Juice",variant:"saas",size:"md"},name:"Saas – Default"},x={args:{label:"Apple Juice",variant:"saas",size:"md",defaultChecked:!0},name:"Saas – Checked"},C={args:{label:"Select All",variant:"saas",size:"md",indeterminate:!0},name:"Saas – Indeterminate"},w=()=>{const[d,c]=j.useState([{label:"Orange Juice",checked:!1},{label:"Apple Juice",checked:!0},{label:"Grape Juice",checked:!1}]),l=s=>{c(r=>r.map((i,y)=>y===s?{...i,checked:!i.checked}:i))},t=d.every(s=>s.checked),z=d.some(s=>s.checked)&&!t;return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Select All",checked:t,indeterminate:z,onChange:()=>{const s=!t;c(r=>r.map(i=>({...i,checked:s})))}}),e.jsx("div",{className:"flex flex-col gap-3 pl-6",children:d.map((s,r)=>e.jsx(a,{label:s.label,checked:s.checked,onChange:()=>l(r)},s.label))})]})},f={render:()=>e.jsx(w,{}),name:"Checkbox Group"},U=[{id:"1",icon:!0,label:"Pizza Fest Campaign",description:"Boost sales with festive rewards, ready in minutes!",checked:!1},{id:"2",icon:!0,label:"Summer Promo",description:"Seasonal offers and discounts for the summer.",checked:!0},{id:"3",icon:!0,label:"Third option",checked:!1}],g={render:function(){const[c,l]=j.useState(U);return e.jsx("div",{className:"flex max-w-md flex-col [&>*:not(:first-child)]:-mt-px",children:c.map(t=>e.jsx(D,{icon:t.icon?e.jsx(I,{width:24,height:24,className:"text-text-body"}):void 0,label:t.label,description:"description"in t?t.description:void 0,checked:t.checked,onChange:z=>l(s=>s.map(r=>r.id===t.id?{...r,checked:z}:r))},t.id))})},name:"Checkbox group items"},v={render:function(){const[c,l]=j.useState(!1);return e.jsx("div",{className:"max-w-md",children:e.jsx(D,{icon:e.jsx(I,{width:24,height:24,className:"text-text-body"}),label:"Pizza Fest Campaign",description:"Boost sales with festive rewards, ready in minutes!",checked:c,onChange:l})})},name:"Checkbox group item with icon"},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Checboxes mp (outlined)"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{variant:"mp",label:"Unchecked",size:"md"}),e.jsx(a,{variant:"mp",label:"Checked",size:"md",defaultChecked:!0}),e.jsx(a,{variant:"mp",label:"Indeterminate",size:"md",indeterminate:!0}),e.jsx(a,{variant:"mp",label:"Disabled Unchecked",size:"md",disabled:!0}),e.jsx(a,{variant:"mp",label:"Disabled Checked",size:"md",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Checboxes saas (filled when checked)"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{variant:"saas",label:"Unchecked",size:"md"}),e.jsx(a,{variant:"saas",label:"Checked",size:"md",defaultChecked:!0}),e.jsx(a,{variant:"saas",label:"Indeterminate",size:"md",indeterminate:!0}),e.jsx(a,{variant:"saas",label:"Disabled Unchecked",size:"md",disabled:!0}),e.jsx(a,{variant:"saas",label:"Disabled Checked",size:"md",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Small (mp & saas)"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{variant:"mp",label:"mp Unchecked",size:"sm"}),e.jsx(a,{variant:"mp",label:"mp Checked",size:"sm",defaultChecked:!0}),e.jsx(a,{variant:"saas",label:"saas Unchecked",size:"sm"}),e.jsx(a,{variant:"saas",label:"saas Checked",size:"sm",defaultChecked:!0})]})]})]}),name:"All Variants"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Orange Juice',
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Apple Juice',
    size: 'md',
    defaultChecked: true
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select All',
    size: 'md',
    indeterminate: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Orange Juice',
    size: 'sm'
  },
  name: 'Small – Default'
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Apple Juice',
    size: 'sm',
    defaultChecked: true
  },
  name: 'Small – Checked'
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unavailable',
    size: 'md',
    disabled: true
  },
  name: 'Disabled – Unchecked'
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unavailable',
    size: 'md',
    disabled: true,
    defaultChecked: true
  },
  name: 'Disabled – Checked'
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Orange Juice',
    variant: 'saas',
    size: 'md'
  },
  name: 'Saas – Default'
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Apple Juice',
    variant: 'saas',
    size: 'md',
    defaultChecked: true
  },
  name: 'Saas – Checked'
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select All',
    variant: 'saas',
    size: 'md',
    indeterminate: true
  },
  name: 'Saas – Indeterminate'
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroupDemo />,
  name: 'Checkbox Group'
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function CheckboxGroupItemsRender() {
    const [items, setItems] = useState(groupItems);
    return <div className="flex max-w-md flex-col [&>*:not(:first-child)]:-mt-px">
        {items.map(item => <CheckboxGroupItem key={item.id} icon={item.icon ? <Speaker2 width={24} height={24} className="text-text-body" /> : undefined} label={item.label} description={'description' in item ? item.description : undefined} checked={item.checked} onChange={checked => setItems(prev => prev.map(i => i.id === item.id ? {
        ...i,
        checked
      } : i))} />)}
      </div>;
  },
  name: 'Checkbox group items'
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function CheckboxGroupItemsWithIconRender() {
    const [checked, setChecked] = useState(false);
    return <div className="max-w-md">
        <CheckboxGroupItem icon={<Speaker2 width={24} height={24} className="text-text-body" />} label="Pizza Fest Campaign" description="Boost sales with festive rewards, ready in minutes!" checked={checked} onChange={setChecked} />
      </div>;
  },
  name: 'Checkbox group item with icon'
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="font-body font-semibold text-text-title mb-3">Checboxes mp (outlined)</p>
        <div className="flex flex-col gap-3">
          <Checkbox variant="mp" label="Unchecked" size="md" />
          <Checkbox variant="mp" label="Checked" size="md" defaultChecked />
          <Checkbox variant="mp" label="Indeterminate" size="md" indeterminate />
          <Checkbox variant="mp" label="Disabled Unchecked" size="md" disabled />
          <Checkbox variant="mp" label="Disabled Checked" size="md" disabled defaultChecked />
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Checboxes saas (filled when checked)</p>
        <div className="flex flex-col gap-3">
          <Checkbox variant="saas" label="Unchecked" size="md" />
          <Checkbox variant="saas" label="Checked" size="md" defaultChecked />
          <Checkbox variant="saas" label="Indeterminate" size="md" indeterminate />
          <Checkbox variant="saas" label="Disabled Unchecked" size="md" disabled />
          <Checkbox variant="saas" label="Disabled Checked" size="md" disabled defaultChecked />
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Small (mp & saas)</p>
        <div className="flex flex-col gap-3">
          <Checkbox variant="mp" label="mp Unchecked" size="sm" />
          <Checkbox variant="mp" label="mp Checked" size="sm" defaultChecked />
          <Checkbox variant="saas" label="saas Unchecked" size="sm" />
          <Checkbox variant="saas" label="saas Checked" size="sm" defaultChecked />
        </div>
      </div>
    </div>,
  name: 'All Variants'
}`,...S.parameters?.docs?.source}}};const A=["Default","Checked","Indeterminate","SmallDefault","SmallChecked","DisabledUnchecked","DisabledChecked","SaasDefault","SaasChecked","SaasIndeterminate","CheckboxGroup","CheckboxGroupItems","CheckboxGroupItemsWithIcon","AllVariants"],M=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:S,CheckboxGroup:f,CheckboxGroupItems:g,CheckboxGroupItemsWithIcon:v,Checked:o,Default:n,DisabledChecked:b,DisabledUnchecked:u,Indeterminate:m,SaasChecked:x,SaasDefault:k,SaasIndeterminate:C,SmallChecked:h,SmallDefault:p,__namedExportsOrder:A,default:N},Symbol.toStringTag,{value:"Module"}));export{S as A,M as C,n as D,m as I,p as S,o as a,u as b,b as c,h as d,k as e,x as f,C as g,f as h,g as i,v as j};
