import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-M8wFrZyQ.js";import{R as a}from"./Radio-CGIrWpV1.js";const S={title:"Components/Radio",component:a,tags:[],parameters:{docs:{description:{component:"A radio button component for single-select choices within a group. Available in 2 sizes (sm, md) with Default, Hover, Focused, and Disabled states. Extracted from the Cater Design Systems Figma."},source:{type:"dynamic"}}},argTypes:{variant:{control:"select",options:["mp","saas"],description:"Visual variant. mp = Checboxes mp (outlined), saas = Checboxes saas (filled when selected).",table:{defaultValue:{summary:"mp"}}},size:{control:"select",options:["sm","md"],description:'Size of the radio button. Maps to Figma "Size" property.',table:{defaultValue:{summary:"md"}}},label:{control:"text",description:"Label text displayed beside the radio button."},disabled:{control:"boolean",description:'Whether the radio is disabled. Maps to Figma "State=Disabled".'}}},l={args:{label:"Orange Juice",size:"md",name:"demo"}},d={args:{label:"Apple Juice",size:"md",selected:!0,name:"demo"}},t={args:{label:"Orange Juice",size:"sm",name:"demo-sm"},name:"Small – Default"},m={args:{label:"Apple Juice",size:"sm",selected:!0,name:"demo-sm"},name:"Small – Selected"},n={args:{label:"Unavailable",size:"md",disabled:!0,name:"demo-dis"},name:"Disabled – Unselected"},r={args:{label:"Unavailable",size:"md",disabled:!0,selected:!0,name:"demo-dis"},name:"Disabled – Selected"},i={args:{label:"Orange Juice",variant:"saas",size:"md",name:"demo-saas"},name:"Saas – Default"},o={args:{label:"Apple Juice",variant:"saas",size:"md",selected:!0,name:"demo-saas"},name:"Saas – Selected"},g=()=>{const[b,u]=v.useState("apple"),x=[{value:"orange",label:"Orange Juice"},{value:"apple",label:"Apple Juice"},{value:"grape",label:"Grape Juice"}];return e.jsx("div",{className:"flex flex-col gap-3",role:"radiogroup","aria-label":"Juice selection",children:x.map(s=>e.jsx(a,{name:"juice",value:s.value,label:s.label,selected:b===s.value,onChange:()=>u(s.value)},s.value))})},c={render:()=>e.jsx(g,{}),name:"Radio Group"},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Checboxes mp (outlined)"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{variant:"mp",label:"Unselected",size:"md",name:"md-demo"}),e.jsx(a,{variant:"mp",label:"Selected",size:"md",selected:!0,name:"md-demo-2"}),e.jsx(a,{variant:"mp",label:"Disabled Unselected",size:"md",disabled:!0,name:"md-demo-3"}),e.jsx(a,{variant:"mp",label:"Disabled Selected",size:"md",disabled:!0,selected:!0,name:"md-demo-4"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Checboxes saas (filled when selected)"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{variant:"saas",label:"Unselected",size:"md",name:"md-saas"}),e.jsx(a,{variant:"saas",label:"Selected",size:"md",selected:!0,name:"md-saas-2"}),e.jsx(a,{variant:"saas",label:"Disabled Unselected",size:"md",disabled:!0,name:"md-saas-3"}),e.jsx(a,{variant:"saas",label:"Disabled Selected",size:"md",disabled:!0,selected:!0,name:"md-saas-4"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Small (mp & saas)"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{variant:"mp",label:"mp Unselected",size:"sm",name:"sm-demo"}),e.jsx(a,{variant:"mp",label:"mp Selected",size:"sm",selected:!0,name:"sm-demo-2"}),e.jsx(a,{variant:"saas",label:"saas Unselected",size:"sm",name:"sm-saas"}),e.jsx(a,{variant:"saas",label:"saas Selected",size:"sm",selected:!0,name:"sm-saas-2"})]})]})]}),name:"All Variants"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Orange Juice',
    size: 'md',
    name: 'demo'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Apple Juice',
    size: 'md',
    selected: true,
    name: 'demo'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Orange Juice',
    size: 'sm',
    name: 'demo-sm'
  },
  name: 'Small – Default'
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Apple Juice',
    size: 'sm',
    selected: true,
    name: 'demo-sm'
  },
  name: 'Small – Selected'
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unavailable',
    size: 'md',
    disabled: true,
    name: 'demo-dis'
  },
  name: 'Disabled – Unselected'
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Unavailable',
    size: 'md',
    disabled: true,
    selected: true,
    name: 'demo-dis'
  },
  name: 'Disabled – Selected'
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Orange Juice',
    variant: 'saas',
    size: 'md',
    name: 'demo-saas'
  },
  name: 'Saas – Default'
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Apple Juice',
    variant: 'saas',
    size: 'md',
    selected: true,
    name: 'demo-saas'
  },
  name: 'Saas – Selected'
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroupDemo />,
  name: 'Radio Group'
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="font-body font-semibold text-text-title mb-3">Checboxes mp (outlined)</p>
        <div className="flex flex-col gap-3">
          <Radio variant="mp" label="Unselected" size="md" name="md-demo" />
          <Radio variant="mp" label="Selected" size="md" selected name="md-demo-2" />
          <Radio variant="mp" label="Disabled Unselected" size="md" disabled name="md-demo-3" />
          <Radio variant="mp" label="Disabled Selected" size="md" disabled selected name="md-demo-4" />
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Checboxes saas (filled when selected)</p>
        <div className="flex flex-col gap-3">
          <Radio variant="saas" label="Unselected" size="md" name="md-saas" />
          <Radio variant="saas" label="Selected" size="md" selected name="md-saas-2" />
          <Radio variant="saas" label="Disabled Unselected" size="md" disabled name="md-saas-3" />
          <Radio variant="saas" label="Disabled Selected" size="md" disabled selected name="md-saas-4" />
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Small (mp & saas)</p>
        <div className="flex flex-col gap-3">
          <Radio variant="mp" label="mp Unselected" size="sm" name="sm-demo" />
          <Radio variant="mp" label="mp Selected" size="sm" selected name="sm-demo-2" />
          <Radio variant="saas" label="saas Unselected" size="sm" name="sm-saas" />
          <Radio variant="saas" label="saas Selected" size="sm" selected name="sm-saas-2" />
        </div>
      </div>
    </div>,
  name: 'All Variants'
}`,...p.parameters?.docs?.source}}};const f=["Default","Selected","SmallDefault","SmallSelected","DisabledUnselected","DisabledSelected","SaasDefault","SaasSelected","RadioGroup","AllVariants"],j=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:p,Default:l,DisabledSelected:r,DisabledUnselected:n,RadioGroup:c,SaasDefault:i,SaasSelected:o,Selected:d,SmallDefault:t,SmallSelected:m,__namedExportsOrder:f,default:S},Symbol.toStringTag,{value:"Module"}));export{p as A,l as D,j as R,d as S,n as a,r as b,t as c,m as d,i as e,o as f,c as g};
