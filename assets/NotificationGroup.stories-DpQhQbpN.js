import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-M8wFrZyQ.js";import{T as N}from"./Toggle-Dz1rxXzW.js";const t=p.forwardRef(({title:a,description:s,size:i="sm",checked:o,defaultChecked:f,onChange:u,disabled:g,className:x=""},h)=>e.jsxs("div",{ref:h,className:["flex items-start gap-[8px]",x].join(" "),style:{width:284},children:[e.jsx("div",{style:{paddingTop:2,flexShrink:0},children:e.jsx(N,{size:i,checked:o,defaultChecked:f,onChange:u,disabled:g})}),e.jsxs("div",{className:"flex flex-col",style:{gap:2,minWidth:0,flex:1},children:[e.jsx("span",{className:"font-body",style:{fontSize:16,fontWeight:500,lineHeight:"150%",letterSpacing:"0.16px",color:"#29344A"},children:a}),s&&e.jsx("span",{className:"font-body",style:{fontSize:14,fontWeight:400,lineHeight:"150%",color:"#5A626F"},children:s})]})]}));t.displayName="NotificationGroup";t.__docgenInfo={description:"",methods:[],displayName:"NotificationGroup",props:{title:{required:!0,tsType:{name:"string"},description:"Title text"},description:{required:!1,tsType:{name:"string"},description:"Description text"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Size of the toggle",defaultValue:{value:"'sm'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Controlled checked state"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback when toggled"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},className:{required:!1,tsType:{name:"string"},description:"Additional className",defaultValue:{value:"''",computed:!1}}}};const y={title:"Components/Notification Group",component:t,tags:[],parameters:{docs:{description:{component:"A notification settings row that pairs a Toggle/Switch with a title and description. Used for settings pages where users toggle individual notification preferences. Extracted from the Cater Design Systems Figma."},source:{type:"dynamic"}}},argTypes:{title:{control:"text",description:"Title text for the notification setting."},description:{control:"text",description:"Optional description text below the title."},size:{control:"select",options:["sm","md"],description:'Size of the toggle switch. Maps to Figma "Notification group" variants.',table:{defaultValue:{summary:"sm"}}},checked:{control:"boolean",description:"Controlled checked state of the toggle."},disabled:{control:"boolean",description:"Whether the toggle is disabled."}}},n={args:{title:"Notification settings",description:"Allow text and email notification",size:"sm"},name:"Small – Off"},r={args:{title:"Notification settings",description:"Allow text and email notification",size:"md"},name:"Medium – Off"},l={args:{title:"Notification settings",description:"Allow text and email notification",size:"sm",defaultChecked:!0},name:"Small – On"},c={args:{title:"Notification settings",description:"Allow text and email notification",size:"md",defaultChecked:!0},name:"Medium – On"},S=()=>{const[a,s]=p.useState({push:!0,email:!1,sms:!0,marketing:!1});return e.jsxs("div",{className:"flex flex-col",style:{gap:24},children:[e.jsx(t,{title:"Push notifications",description:"Receive push notifications on your device",checked:a.push,onChange:i=>s(o=>({...o,push:i}))}),e.jsx(t,{title:"Email notifications",description:"Receive email updates about your account",checked:a.email,onChange:i=>s(o=>({...o,email:i}))}),e.jsx(t,{title:"SMS notifications",description:"Receive text messages for urgent alerts",checked:a.sms,onChange:i=>s(o=>({...o,sms:i}))}),e.jsx(t,{title:"Marketing emails",description:"Receive promotional offers and news",checked:a.marketing,onChange:i=>s(o=>({...o,marketing:i}))})]})},d={render:()=>e.jsx(S,{}),name:"Settings Page Example"},m={render:()=>e.jsxs("div",{className:"flex flex-col",style:{gap:24},children:[e.jsx("p",{className:"font-body font-semibold",style:{color:"#29344A",margin:0},children:"Small"}),e.jsx(t,{title:"Notification settings",description:"Allow text and email notification",size:"sm"}),e.jsx(t,{title:"Notification settings",description:"Allow text and email notification",size:"sm",defaultChecked:!0}),e.jsx("p",{className:"font-body font-semibold",style:{color:"#29344A",margin:0,marginTop:8},children:"Medium"}),e.jsx(t,{title:"Notification settings",description:"Allow text and email notification",size:"md"}),e.jsx(t,{title:"Notification settings",description:"Allow text and email notification",size:"md",defaultChecked:!0})]}),name:"All Variants"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notification settings',
    description: 'Allow text and email notification',
    size: 'sm'
  },
  name: 'Small – Off'
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notification settings',
    description: 'Allow text and email notification',
    size: 'md'
  },
  name: 'Medium – Off'
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notification settings',
    description: 'Allow text and email notification',
    size: 'sm',
    defaultChecked: true
  },
  name: 'Small – On'
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notification settings',
    description: 'Allow text and email notification',
    size: 'md',
    defaultChecked: true
  },
  name: 'Medium – On'
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <NotificationSettingsDemo />,
  name: 'Settings Page Example'
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col" style={{
    gap: 24
  }}>
      <p className="font-body font-semibold" style={{
      color: '#29344A',
      margin: 0
    }}>Small</p>
      <NotificationGroup title="Notification settings" description="Allow text and email notification" size="sm" />
      <NotificationGroup title="Notification settings" description="Allow text and email notification" size="sm" defaultChecked />

      <p className="font-body font-semibold" style={{
      color: '#29344A',
      margin: 0,
      marginTop: 8
    }}>Medium</p>
      <NotificationGroup title="Notification settings" description="Allow text and email notification" size="md" />
      <NotificationGroup title="Notification settings" description="Allow text and email notification" size="md" defaultChecked />
    </div>,
  name: 'All Variants'
}`,...m.parameters?.docs?.source}}};const b=["SmallOff","MediumOff","SmallOn","MediumOn","SettingsPage","AllVariants"],j=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:m,MediumOff:r,MediumOn:c,SettingsPage:d,SmallOff:n,SmallOn:l,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{m as A,r as M,j as N,n as S,l as a,c as b,d as c};
