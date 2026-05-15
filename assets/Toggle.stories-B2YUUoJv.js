import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-M8wFrZyQ.js";import{T as s}from"./Toggle-Dz1rxXzW.js";const p={title:"Components/Toggle",component:s,tags:[],parameters:{docs:{description:{component:"A toggle/switch component for binary on/off states. Available in 2 sizes (sm, md) with Default, Hover, Pressed, and Disabled states. Shows a checkmark icon when toggled on. Extracted from the Cater Design Systems Figma."},source:{type:"dynamic"}}},argTypes:{size:{control:"select",options:["sm","md"],description:'Size of the toggle. Maps to Figma "Size" property.',table:{defaultValue:{summary:"md"}}},checked:{control:"boolean",description:'Controlled checked state. Maps to Figma "Switch" property.'},disabled:{control:"boolean",description:'Whether the toggle is disabled. Maps to Figma "State=Disabled".'}}},a={args:{size:"md"}},t={args:{size:"md",defaultChecked:!0}},l={args:{size:"sm"},name:"Small – Off"},r={args:{size:"sm",defaultChecked:!0},name:"Small – On"},c={args:{size:"md",disabled:!0},name:"Disabled – Off"},n={args:{size:"md",disabled:!0,defaultChecked:!0},name:"Disabled – On"},f=()=>{const[o,m]=x.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{checked:o,onChange:m}),e.jsx("span",{className:"font-body text-text-subtitle text-sm",children:o?"On":"Off"})]})},i={render:()=>e.jsx(f,{})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Medium"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"md"}),e.jsx("span",{className:"text-xs text-text-caption",children:"Default Off"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"md",defaultChecked:!0}),e.jsx("span",{className:"text-xs text-text-caption",children:"Default On"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"md",disabled:!0}),e.jsx("span",{className:"text-xs text-text-caption",children:"Disabled Off"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"md",disabled:!0,defaultChecked:!0}),e.jsx("span",{className:"text-xs text-text-caption",children:"Disabled On"})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Small"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{className:"text-xs text-text-caption",children:"Default Off"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"sm",defaultChecked:!0}),e.jsx("span",{className:"text-xs text-text-caption",children:"Default On"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"sm",disabled:!0}),e.jsx("span",{className:"text-xs text-text-caption",children:"Disabled Off"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"sm",disabled:!0,defaultChecked:!0}),e.jsx("span",{className:"text-xs text-text-caption",children:"Disabled On"})]})]})]})]}),name:"All Variants"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    defaultChecked: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  name: 'Small – Off'
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultChecked: true
  },
  name: 'Small – On'
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: true
  },
  name: 'Disabled – Off'
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: true,
    defaultChecked: true
  },
  name: 'Disabled – On'
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledToggle />
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="font-body font-semibold text-text-title mb-3">Medium</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" />
            <span className="text-xs text-text-caption">Default Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" defaultChecked />
            <span className="text-xs text-text-caption">Default On</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" disabled />
            <span className="text-xs text-text-caption">Disabled Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" disabled defaultChecked />
            <span className="text-xs text-text-caption">Disabled On</span>
          </div>
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Small</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" />
            <span className="text-xs text-text-caption">Default Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" defaultChecked />
            <span className="text-xs text-text-caption">Default On</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" disabled />
            <span className="text-xs text-text-caption">Disabled Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" disabled defaultChecked />
            <span className="text-xs text-text-caption">Disabled On</span>
          </div>
        </div>
      </div>
    </div>,
  name: 'All Variants'
}`,...d.parameters?.docs?.source}}};const g=["Default","On","SmallOff","SmallOn","DisabledOff","DisabledOn","Controlled","AllVariants"],N=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:d,Controlled:i,Default:a,DisabledOff:c,DisabledOn:n,On:t,SmallOff:l,SmallOn:r,__namedExportsOrder:g,default:p},Symbol.toStringTag,{value:"Module"}));export{d as A,i as C,a as D,t as O,l as S,N as T,c as a,n as b,r as c};
