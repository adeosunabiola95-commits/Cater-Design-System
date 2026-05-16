import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as f}from"./iframe-DAe-cY6O.js";const O={sm:"text-[14px] leading-[21px] tracking-[0.14px]",md:"text-[16px] leading-[24px] tracking-[0.16px]"},a=f.forwardRef(({variant:h="outline",size:g="sm",fullWidth:m=!1,compact:C=!1,tabs:v,activeTabId:y,onTabChange:z,showContent:w=!0,className:B=""},I)=>{const[N,W]=f.useState(v[0]?.id??""),T=y??N,A=t=>{y===void 0&&W(t),z?.(t)},b=v.find(t=>t.id===T),p=h==="outline",S=!p&&m;return e.jsx("div",{ref:I,className:B||void 0,children:e.jsxs("div",{className:C?"":"rounded-lg border border-mirage-100 bg-white",children:[e.jsx("div",{role:"tablist",className:p?"flex flex-row gap-4 border-b border-mirage-100 px-6 pt-5 pb-0":`flex flex-row gap-2 px-6 py-4 ${m?"w-full":""}`,children:v.map(t=>{const x=T===t.id;return e.jsxs("button",{type:"button",role:"tab","aria-selected":x,"aria-controls":w?`tabpanel-${t.id}`:void 0,id:`tab-${t.id}`,onClick:()=>A(t.id),className:["flex items-center justify-center gap-2 font-body font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-salem-100 focus-visible:ring-offset-1",O[g],p?["relative px-[10px] pb-3 -mb-px",x?"z-10 text-salem-800 shadow-[0_3px_0_0_var(--color-salem-600)]":"border-b-2 border-transparent text-text-body hover:text-text-title"]:["rounded px-2 py-1",S&&"min-w-0 flex-1",x?"bg-mirage-100 text-text-title":"text-text-body hover:text-text-title"]].flat().filter(Boolean).join(" "),children:[t.label,t.badge!=null&&!p&&e.jsx("span",{className:`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full font-body text-[10px] font-bold leading-[12px] tracking-[0.3px] text-text-body ${x?"bg-white":"bg-mirage-100"}`,"aria-label":typeof t.badge=="number"?`Count: ${t.badge}`:void 0,children:typeof t.badge=="number"?t.badge>99?"99+":t.badge:""})]},t.id)})}),w&&b?.content!==void 0&&e.jsx("div",{role:"tabpanel",id:`tabpanel-${b.id}`,"aria-labelledby":`tab-${b.id}`,className:"border-t border-mirage-100 px-6 py-4",children:b.content})]})})});a.displayName="TabGroup";a.__docgenInfo={description:"",methods:[],displayName:"TabGroup",props:{variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'buttongroup'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'buttongroup'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"When true and variant is buttongroup, tabs stretch to fill width equally.",defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"When true (e.g. inside Modal), no outer card—just the tablist.",defaultValue:{value:"false",computed:!1}},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},activeTabId:{required:!1,tsType:{name:"string"},description:""},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:""},showContent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const V={title:"Components/TabGroup",component:a,parameters:{docs:{description:{component:"Interactive tab groups. Maps to Figma Tab group (node 495:1517). Variants: Outline tab (underline), Buttongroup (pill). Click tabs to switch content."},source:{type:"dynamic"}}},argTypes:{variant:{control:"select",options:["outline","buttongroup"],table:{defaultValue:{summary:"outline"}}},size:{control:"select",options:["sm","md"],table:{defaultValue:{summary:"sm"}}},fullWidth:{control:"boolean",table:{defaultValue:{summary:"false"}}}}},n=[{id:"overview",label:"Overview",content:e.jsx("p",{className:"font-body text-sm text-text-body",children:"Overview content. This panel updates when you click a different tab."})},{id:"analytics",label:"Analytics",content:e.jsx("p",{className:"font-body text-sm text-text-body",children:"Analytics content. Charts, metrics, and reports would go here."})},{id:"settings",label:"Settings",content:e.jsx("p",{className:"font-body text-sm text-text-body",children:"Settings content. User preferences and configuration options."})}],j=[{id:"all",label:"All",content:e.jsx("p",{className:"font-body text-sm text-text-body",children:"All items"})},{id:"active",label:"Active",badge:5,content:e.jsx("p",{className:"font-body text-sm text-text-body",children:"Active items only"})},{id:"archived",label:"Archived",content:e.jsx("p",{className:"font-body text-sm text-text-body",children:"Archived items"})}],_=[{id:"inbox",label:"Inbox",badge:12,content:e.jsx("p",{className:"font-body text-sm text-text-body",children:"Inbox content"})},{id:"unread",label:"Unread",badge:3,content:e.jsx("p",{className:"font-body text-sm text-text-body",children:"Unread content"})},{id:"archive",label:"Archive",badge:99,content:e.jsx("p",{className:"font-body text-sm text-text-body",children:"Archive content (badge shows 99+)"})}],s={args:{variant:"outline",size:"sm",tabs:n,showContent:!0},name:"Outline tab"},o={args:{variant:"buttongroup",size:"sm",tabs:n,showContent:!0},name:"Buttongroup"},r={args:{variant:"buttongroup",size:"sm",tabs:j,activeTabId:"active",showContent:!0},name:"With badge"},i={args:{variant:"buttongroup",size:"sm",tabs:_,activeTabId:"inbox",showContent:!0},name:"Buttongroup with badge counters"},l={args:{variant:"buttongroup",size:"sm",fullWidth:!0,tabs:n,showContent:!0},name:"Buttongroup full width"},d={args:{variant:"outline",size:"md",tabs:n,showContent:!0},name:"Medium size"},u={render:function(){const[g,m]=f.useState("overview");return e.jsx("div",{className:"max-w-md",children:e.jsx(a,{variant:"outline",size:"md",tabs:n,activeTabId:g,onTabChange:m,showContent:!0})})},name:"Interactive example"},c={render:()=>e.jsxs("div",{className:"flex max-w-md flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-body text-sm font-semibold text-text-title",children:"Outline tab"}),e.jsx(a,{variant:"outline",size:"sm",tabs:n,activeTabId:"analytics",showContent:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-body text-sm font-semibold text-text-title",children:"Buttongroup"}),e.jsx(a,{variant:"buttongroup",size:"sm",tabs:n,activeTabId:"settings",showContent:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-body text-sm font-semibold text-text-title",children:"Buttongroup with badge"}),e.jsx(a,{variant:"buttongroup",size:"sm",tabs:j,activeTabId:"active",showContent:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-body text-sm font-semibold text-text-title",children:"Buttongroup full width"}),e.jsx(a,{variant:"buttongroup",size:"sm",fullWidth:!0,tabs:n,activeTabId:"analytics",showContent:!0})]})]}),name:"All variants"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'sm',
    tabs: exampleTabs,
    showContent: true
  },
  name: 'Outline tab'
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buttongroup',
    size: 'sm',
    tabs: exampleTabs,
    showContent: true
  },
  name: 'Buttongroup'
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buttongroup',
    size: 'sm',
    tabs: tabsWithBadge,
    activeTabId: 'active',
    showContent: true
  },
  name: 'With badge'
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buttongroup',
    size: 'sm',
    tabs: tabsWithBadgeCounters,
    activeTabId: 'inbox',
    showContent: true
  },
  name: 'Buttongroup with badge counters'
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'buttongroup',
    size: 'sm',
    fullWidth: true,
    tabs: exampleTabs,
    showContent: true
  },
  name: 'Buttongroup full width'
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md',
    tabs: exampleTabs,
    showContent: true
  },
  name: 'Medium size'
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function InteractiveExampleRender() {
    const [active, setActive] = React.useState('overview');
    return <div className="max-w-md">
        <TabGroup variant="outline" size="md" tabs={exampleTabs} activeTabId={active} onTabChange={setActive} showContent />
      </div>;
  },
  name: 'Interactive example'
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const q=["OutlineTab","Buttongroup","WithBadge","ButtongroupWithBadgeCounters","ButtongroupFullWidth","MediumSize","InteractiveExample","AllVariants"],k=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:c,Buttongroup:o,ButtongroupFullWidth:l,ButtongroupWithBadgeCounters:i,InteractiveExample:u,MediumSize:d,OutlineTab:s,WithBadge:r,__namedExportsOrder:q,default:V},Symbol.toStringTag,{value:"Module"}));export{c as A,o as B,u as I,d as M,s as O,k as T,r as W,l as a,i as b};
