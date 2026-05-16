import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-DAe-cY6O.js";import{T as s}from"./Toggle-DzqPAb2B.js";const f={title:"Components/Toggle",component:s,args:{"aria-label":"Toggle"},parameters:{docs:{description:{component:"A toggle/switch component for binary on/off states. Available in 2 sizes (sm, md) with Default, Hover, Pressed, and Disabled states. Shows a checkmark icon when toggled on. Extracted from the Cater Design Systems Figma."},source:{type:"dynamic"}}},argTypes:{size:{control:"select",options:["sm","md"],description:'Size of the toggle. Maps to Figma "Size" property.',table:{defaultValue:{summary:"md"}}},checked:{control:"boolean",description:'Controlled checked state. Maps to Figma "Switch" property.'},disabled:{control:"boolean",description:'Whether the toggle is disabled. Maps to Figma "State=Disabled".'}}},a={args:{size:"md"}},t={args:{size:"md",defaultChecked:!0}},l={args:{size:"sm"},name:"Small – Off"},i={args:{size:"sm",defaultChecked:!0},name:"Small – On"},r={args:{size:"md",disabled:!0},name:"Disabled – Off"},d={args:{size:"md",disabled:!0,defaultChecked:!0},name:"Disabled – On"},g=()=>{const[c,m]=x.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{checked:c,onChange:m,"aria-label":"Example toggle"}),e.jsx("span",{className:"font-body text-text-subtitle text-sm",children:c?"On":"Off"})]})},o={render:()=>e.jsx(g,{})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Medium"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"md","aria-label":"Medium toggle off"}),e.jsx("span",{className:"text-xs text-text-subtitle",children:"Default Off"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"md",defaultChecked:!0,"aria-label":"Medium toggle on"}),e.jsx("span",{className:"text-xs text-text-subtitle",children:"Default On"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"md",disabled:!0,"aria-label":"Medium toggle disabled off"}),e.jsx("span",{className:"text-xs text-text-subtitle",children:"Disabled Off"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"md",disabled:!0,defaultChecked:!0,"aria-label":"Medium toggle disabled on"}),e.jsx("span",{className:"text-xs text-text-subtitle",children:"Disabled On"})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-body font-semibold text-text-title mb-3",children:"Small"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"sm","aria-label":"Small toggle off"}),e.jsx("span",{className:"text-xs text-text-subtitle",children:"Default Off"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"sm",defaultChecked:!0,"aria-label":"Small toggle on"}),e.jsx("span",{className:"text-xs text-text-subtitle",children:"Default On"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"sm",disabled:!0,"aria-label":"Small toggle disabled off"}),e.jsx("span",{className:"text-xs text-text-subtitle",children:"Disabled Off"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{size:"sm",disabled:!0,defaultChecked:!0,"aria-label":"Small toggle disabled on"}),e.jsx("span",{className:"text-xs text-text-subtitle",children:"Disabled On"})]})]})]})]}),name:"All Variants"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    defaultChecked: true
  },
  name: 'Small – On'
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: true
  },
  name: 'Disabled – Off'
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: true,
    defaultChecked: true
  },
  name: 'Disabled – On'
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledToggle />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="font-body font-semibold text-text-title mb-3">Medium</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" aria-label="Medium toggle off" />
            <span className="text-xs text-text-subtitle">Default Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" defaultChecked aria-label="Medium toggle on" />
            <span className="text-xs text-text-subtitle">Default On</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" disabled aria-label="Medium toggle disabled off" />
            <span className="text-xs text-text-subtitle">Disabled Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="md" disabled defaultChecked aria-label="Medium toggle disabled on" />
            <span className="text-xs text-text-subtitle">Disabled On</span>
          </div>
        </div>
      </div>

      <div>
        <p className="font-body font-semibold text-text-title mb-3">Small</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" aria-label="Small toggle off" />
            <span className="text-xs text-text-subtitle">Default Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" defaultChecked aria-label="Small toggle on" />
            <span className="text-xs text-text-subtitle">Default On</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" disabled aria-label="Small toggle disabled off" />
            <span className="text-xs text-text-subtitle">Disabled Off</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Toggle size="sm" disabled defaultChecked aria-label="Small toggle disabled on" />
            <span className="text-xs text-text-subtitle">Disabled On</span>
          </div>
        </div>
      </div>
    </div>,
  name: 'All Variants'
}`,...n.parameters?.docs?.source}}};const p=["Default","On","SmallOff","SmallOn","DisabledOff","DisabledOn","Controlled","AllVariants"],N=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:n,Controlled:o,Default:a,DisabledOff:r,DisabledOn:d,On:t,SmallOff:l,SmallOn:i,__namedExportsOrder:p,default:f},Symbol.toStringTag,{value:"Module"}));export{n as A,o as C,a as D,t as O,l as S,N as T,r as a,d as b,i as c};
