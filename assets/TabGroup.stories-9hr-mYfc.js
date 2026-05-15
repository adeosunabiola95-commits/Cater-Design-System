import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as p}from"./iframe-M8wFrZyQ.js";import{T as a}from"./TabGroup-C9YLKNn0.js";const x={title:"Components/TabGroup",component:a,parameters:{docs:{description:{component:"Interactive tab groups. Maps to Figma Tab group (node 495:1517). Variants: Outline tab (underline), Buttongroup (pill). Click tabs to switch content."},source:{type:"dynamic"}}},argTypes:{variant:{control:"select",options:["outline","buttongroup"],table:{defaultValue:{summary:"outline"}}},size:{control:"select",options:["sm","md"],table:{defaultValue:{summary:"sm"}}},fullWidth:{control:"boolean",table:{defaultValue:{summary:"false"}}}}},e=[{id:"overview",label:"Overview",content:t.jsx("p",{className:"font-body text-sm text-text-body",children:"Overview content. This panel updates when you click a different tab."})},{id:"analytics",label:"Analytics",content:t.jsx("p",{className:"font-body text-sm text-text-body",children:"Analytics content. Charts, metrics, and reports would go here."})},{id:"settings",label:"Settings",content:t.jsx("p",{className:"font-body text-sm text-text-body",children:"Settings content. User preferences and configuration options."})}],u=[{id:"all",label:"All",content:t.jsx("p",{className:"font-body text-sm text-text-body",children:"All items"})},{id:"active",label:"Active",badge:5,content:t.jsx("p",{className:"font-body text-sm text-text-body",children:"Active items only"})},{id:"archived",label:"Archived",content:t.jsx("p",{className:"font-body text-sm text-text-body",children:"Archived items"})}],v=[{id:"inbox",label:"Inbox",badge:12,content:t.jsx("p",{className:"font-body text-sm text-text-body",children:"Inbox content"})},{id:"unread",label:"Unread",badge:3,content:t.jsx("p",{className:"font-body text-sm text-text-body",children:"Unread content"})},{id:"archive",label:"Archive",badge:99,content:t.jsx("p",{className:"font-body text-sm text-text-body",children:"Archive content (badge shows 99+)"})}],s={args:{variant:"outline",size:"sm",tabs:e,showContent:!0},name:"Outline tab"},n={args:{variant:"buttongroup",size:"sm",tabs:e,showContent:!0},name:"Buttongroup"},o={args:{variant:"buttongroup",size:"sm",tabs:u,activeTabId:"active",showContent:!0},name:"With badge"},r={args:{variant:"buttongroup",size:"sm",tabs:v,activeTabId:"inbox",showContent:!0},name:"Buttongroup with badge counters"},i={args:{variant:"buttongroup",size:"sm",fullWidth:!0,tabs:e,showContent:!0},name:"Buttongroup full width"},c={args:{variant:"outline",size:"md",tabs:e,showContent:!0},name:"Medium size"},l={render:function(){const[m,b]=p.useState("overview");return t.jsx("div",{className:"max-w-md",children:t.jsx(a,{variant:"outline",size:"md",tabs:e,activeTabId:m,onTabChange:b,showContent:!0})})},name:"Interactive example"},d={render:()=>t.jsxs("div",{className:"flex max-w-md flex-col gap-8",children:[t.jsxs("div",{children:[t.jsx("p",{className:"mb-2 font-body text-sm font-semibold text-text-title",children:"Outline tab"}),t.jsx(a,{variant:"outline",size:"sm",tabs:e,activeTabId:"analytics",showContent:!0})]}),t.jsxs("div",{children:[t.jsx("p",{className:"mb-2 font-body text-sm font-semibold text-text-title",children:"Buttongroup"}),t.jsx(a,{variant:"buttongroup",size:"sm",tabs:e,activeTabId:"settings",showContent:!0})]}),t.jsxs("div",{children:[t.jsx("p",{className:"mb-2 font-body text-sm font-semibold text-text-title",children:"Buttongroup with badge"}),t.jsx(a,{variant:"buttongroup",size:"sm",tabs:u,activeTabId:"active",showContent:!0})]}),t.jsxs("div",{children:[t.jsx("p",{className:"mb-2 font-body text-sm font-semibold text-text-title",children:"Buttongroup full width"}),t.jsx(a,{variant:"buttongroup",size:"sm",fullWidth:!0,tabs:e,activeTabId:"analytics",showContent:!0})]})]}),name:"All variants"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'sm',
    tabs: exampleTabs,
    showContent: true
  },
  name: 'Outline tab'
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buttongroup',
    size: 'sm',
    tabs: exampleTabs,
    showContent: true
  },
  name: 'Buttongroup'
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buttongroup',
    size: 'sm',
    tabs: tabsWithBadge,
    activeTabId: 'active',
    showContent: true
  },
  name: 'With badge'
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buttongroup',
    size: 'sm',
    tabs: tabsWithBadgeCounters,
    activeTabId: 'inbox',
    showContent: true
  },
  name: 'Buttongroup with badge counters'
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buttongroup',
    size: 'sm',
    fullWidth: true,
    tabs: exampleTabs,
    showContent: true
  },
  name: 'Buttongroup full width'
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md',
    tabs: exampleTabs,
    showContent: true
  },
  name: 'Medium size'
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExampleRender() {
    const [active, setActive] = React.useState('overview');
    return <div className="max-w-md">
        <TabGroup variant="outline" size="md" tabs={exampleTabs} activeTabId={active} onTabChange={setActive} showContent />
      </div>;
  },
  name: 'Interactive example'
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex max-w-md flex-col gap-8">
      <div>
        <p className="mb-2 font-body text-sm font-semibold text-text-title">Outline tab</p>
        <TabGroup variant="outline" size="sm" tabs={exampleTabs} activeTabId="analytics" showContent />
      </div>
      <div>
        <p className="mb-2 font-body text-sm font-semibold text-text-title">Buttongroup</p>
        <TabGroup variant="buttongroup" size="sm" tabs={exampleTabs} activeTabId="settings" showContent />
      </div>
      <div>
        <p className="mb-2 font-body text-sm font-semibold text-text-title">Buttongroup with badge</p>
        <TabGroup variant="buttongroup" size="sm" tabs={tabsWithBadge} activeTabId="active" showContent />
      </div>
      <div>
        <p className="mb-2 font-body text-sm font-semibold text-text-title">Buttongroup full width</p>
        <TabGroup variant="buttongroup" size="sm" fullWidth tabs={exampleTabs} activeTabId="analytics" showContent />
      </div>
    </div>,
  name: 'All variants'
}`,...d.parameters?.docs?.source}}};const g=["OutlineTab","Buttongroup","WithBadge","ButtongroupWithBadgeCounters","ButtongroupFullWidth","MediumSize","InteractiveExample","AllVariants"],T=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:d,Buttongroup:n,ButtongroupFullWidth:i,ButtongroupWithBadgeCounters:r,InteractiveExample:l,MediumSize:c,OutlineTab:s,WithBadge:o,__namedExportsOrder:g,default:x},Symbol.toStringTag,{value:"Module"}));export{d as A,n as B,l as I,c as M,s as O,T,o as W,i as a,r as b};
