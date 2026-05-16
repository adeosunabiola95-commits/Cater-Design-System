import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as T,r as A}from"./iframe-DAe-cY6O.js";import{C as B}from"./CheckboxGroupItem-B79X7s7x.js";function H({size:a,className:s}){return e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,className:s,children:e.jsx("path",{d:"M16.7071 7.29308C16.5196 7.10561 16.2652 7.00029 16.0001 7.00029C15.7349 7.00029 15.4806 7.10561 15.2931 7.29308L12.0001 10.5861L8.70708 7.29308C8.61483 7.19757 8.50449 7.12139 8.38249 7.06898C8.26048 7.01657 8.12926 6.98898 7.99648 6.98783C7.8637 6.98668 7.73202 7.01198 7.60913 7.06226C7.48623 7.11254 7.37458 7.18679 7.28069 7.28069C7.18679 7.37458 7.11254 7.48623 7.06226 7.60913C7.01198 7.73202 6.98668 7.8637 6.98783 7.99648C6.98898 8.12926 7.01657 8.26048 7.06898 8.38249C7.12139 8.50449 7.19757 8.61483 7.29308 8.70708L10.5861 12.0001L7.29308 15.2931C7.19757 15.3853 7.12139 15.4957 7.06898 15.6177C7.01657 15.7397 6.98898 15.8709 6.98783 16.0037C6.98668 16.1365 7.01198 16.2681 7.06226 16.391C7.11254 16.5139 7.18679 16.6256 7.28069 16.7195C7.37458 16.8134 7.48623 16.8876 7.60913 16.9379C7.73202 16.9882 7.8637 17.0135 7.99648 17.0123C8.12926 17.0112 8.26048 16.9836 8.38249 16.9312C8.50449 16.8788 8.61483 16.8026 8.70708 16.7071L12.0001 13.4141L15.2931 16.7071C15.4817 16.8892 15.7343 16.99 15.9965 16.9878C16.2587 16.9855 16.5095 16.8803 16.6949 16.6949C16.8803 16.5095 16.9855 16.2587 16.9878 15.9965C16.99 15.7343 16.8892 15.4817 16.7071 15.2931L13.4141 12.0001L16.7071 8.70708C16.8946 8.51955 16.9999 8.26525 16.9999 8.00008C16.9999 7.73492 16.8946 7.48061 16.7071 7.29308Z",fill:"currentColor"})})}function D({size:a,className:s}){return e.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,className:s,children:e.jsx("path",{d:"M4 1C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V22C3 22.2652 3.10536 22.5196 3.29289 22.7071C3.48043 22.8946 3.73478 23 4 23C4.26522 23 4.51957 22.8946 4.70711 22.7071C4.89464 22.5196 5 22.2652 5 22V15H20C20.1884 15.0001 20.373 14.9469 20.5326 14.8466C20.6921 14.7463 20.8201 14.603 20.9017 14.4332C20.9833 14.2633 21.0153 14.0739 20.9939 13.8867C20.9726 13.6995 20.8988 13.5221 20.781 13.375L17.281 9L20.781 4.625C20.8988 4.47791 20.9726 4.30053 20.9939 4.11331C21.0153 3.92609 20.9833 3.73665 20.9017 3.56682C20.8201 3.39698 20.6921 3.25367 20.5326 3.15338C20.373 3.0531 20.1884 2.99993 20 3H5V2C5 1.73478 4.89464 1.48043 4.70711 1.29289C4.51957 1.10536 4.26522 1 4 1ZM17.919 5L15.219 8.375C15.077 8.55236 14.9996 8.77279 14.9996 9C14.9996 9.22721 15.077 9.44764 15.219 9.625L17.919 13H5V5H17.919Z",fill:"currentColor"})})}const E={sm:"py-0_5 px-1_5 gap-0_5 text-[13px] leading-[150%]",md:"py-1 px-1_5 gap-1 text-[14px] leading-[150%]"},O={sm:14,md:16},t=T.forwardRef(({type:a="base",state:s="default",size:x="md",children:r,count:C,onRemove:v,checked:k,defaultChecked:S=!1,onCheckedChange:N,iconElement:W,className:j="",...z},R)=>{const y=O[x],I=s==="withcancel"||v!=null,b=a==="withcheckbox",F=a==="withflags",M=s==="withtag"&&C!=null,L=A.useId(),V=typeof r=="string"?r:typeof r=="number"?String(r):"Tag",_=s==="hover",q=["inline-flex items-center","rounded-full","font-body font-normal","bg-white text-text-title","border border-solid border-mirage-100",E[x],_&&"bg-mirage-50",j].filter(Boolean).join(" ");return e.jsxs("span",{ref:R,className:q,...z,children:[b&&e.jsx(B,{variant:"saas",size:"sm",checked:k,defaultChecked:S,onChange:N,"aria-label":V,wrapInLabel:!1,className:"shrink-0 m-0 p-0"}),F&&(W??e.jsx(D,{size:y,className:"text-text-title shrink-0"})),e.jsx("span",{id:b?L:void 0,children:r}),M&&e.jsx("span",{className:"text-text-caption",children:C}),I&&e.jsx("button",{type:"button",onClick:v,"aria-label":"Remove tag",className:"shrink-0 flex items-center justify-center w-4 h-4 rounded text-mirage-400 hover:text-mirage-600 focus:outline-none focus:ring-2 focus:ring-mirage-100",children:e.jsx(H,{size:y,className:"text-current"})})]})});t.displayName="Tags";t.__docgenInfo={description:"",methods:[],displayName:"Tags",props:{type:{required:!1,tsType:{name:"union",raw:"'base' | 'withcheckbox' | 'withflags'",elements:[{name:"literal",value:"'base'"},{name:"literal",value:"'withcheckbox'"},{name:"literal",value:"'withflags'"}]},description:'Tag type. Maps to Figma "Type" property.',defaultValue:{value:"'base'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'withcancel' | 'hover' | 'withtag'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'withcancel'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'withtag'"}]},description:'Tag state. Maps to Figma "State" property.',defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:'Tag size. Maps to Figma "Size" property.',defaultValue:{value:"'md'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tag label text"},count:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Count or secondary label (for withtag state)"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when cancel/remove is clicked. Enables cancel button when provided."},checked:{required:!1,tsType:{name:"boolean"},description:"Checkbox checked state (for withcheckbox type). Omit for uncontrolled."},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checkbox state when uncontrolled (for withcheckbox type)",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Called when checkbox changes (for withcheckbox type)"},iconElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element for withflags type"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Z={title:"Components/Tags",component:t,parameters:{docs:{description:{component:"Tags are pill-shaped labels for categorization or filtering. Available in Base, with checkbox, and with flags types; default, with cancel, hover, and with tag states; and sm/md sizes. Extracted from the Cater Design Systems Figma."},source:{type:"dynamic"}}},argTypes:{type:{control:"select",options:["base","withcheckbox","withflags"],description:'Tag type. Maps to Figma "Type" property.',table:{defaultValue:{summary:"base"}}},state:{control:"select",options:["default","withcancel","hover","withtag"],description:'Tag state. Maps to Figma "State" property.',table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md"],description:'Tag size. Maps to Figma "Size" property.',table:{defaultValue:{summary:"md"}}},children:{control:"text",description:"Tag label text."},onRemove:{action:"removed",description:"Called when cancel/remove is clicked."}}},n={args:{type:"base",children:"New arrivals"}},o={name:"With Checkbox",args:{type:"withcheckbox",children:"New arrivals"}},i={name:"With Flags",args:{type:"withflags",children:"New arrivals"}},c={args:{state:"default",children:"New arrivals"}},l={name:"With Cancel",args:{state:"withcancel",onRemove:()=>{},children:"New arrivals"}},d={args:{state:"hover",children:"New arrivals"}},m={name:"With Tag (count)",args:{state:"withtag",count:"5",children:"New arrivals"}},p={args:{size:"sm",children:"New arrivals"}},h={args:{size:"md",children:"New arrivals"}},u={name:"All Types",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{type:"base",children:"Base"}),e.jsx(t,{type:"withcheckbox",children:"With Checkbox"}),e.jsx(t,{type:"withflags",children:"With Flags"})]})},g={name:"All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"})]})},f={name:"Interactive With Cancel",render:()=>e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:e.jsx(t,{onRemove:()=>window.alert("Tag removed"),children:"Click X to remove"})})},w={name:"Interactive Checkbox",render:()=>{const[a,s]=T.useState(!1);return e.jsx(t,{type:"withcheckbox",checked:a,onCheckedChange:s,children:"Toggle me"})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'base',
    children: 'New arrivals'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Checkbox',
  args: {
    type: 'withcheckbox',
    children: 'New arrivals'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Flags',
  args: {
    type: 'withflags',
    children: 'New arrivals'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'default',
    children: 'New arrivals'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Cancel',
  args: {
    state: 'withcancel',
    onRemove: () => {},
    children: 'New arrivals'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'hover',
    children: 'New arrivals'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Tag (count)',
  args: {
    state: 'withtag',
    count: '5',
    children: 'New arrivals'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'New arrivals'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'New arrivals'
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'All Types',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Tags type="base">Base</Tags>
      <Tags type="withcheckbox">With Checkbox</Tags>
      <Tags type="withflags">With Flags</Tags>
    </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Tags size="sm">Small</Tags>
      <Tags size="md">Medium</Tags>
    </div>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Interactive With Cancel',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Tags onRemove={() => window.alert('Tag removed')}>Click X to remove</Tags>
    </div>
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Interactive Checkbox',
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <Tags type="withcheckbox" checked={checked} onCheckedChange={setChecked}>
        Toggle me
      </Tags>;
  }
}`,...w.parameters?.docs?.source}}};const X=["Base","WithCheckbox","WithFlags","Default","WithCancel","Hover","WithTag","Small","Medium","AllTypes","AllSizes","InteractiveWithCancel","InteractiveCheckbox"],K=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:g,AllTypes:u,Base:n,Default:c,Hover:d,InteractiveCheckbox:w,InteractiveWithCancel:f,Medium:h,Small:p,WithCancel:l,WithCheckbox:o,WithFlags:i,WithTag:m,__namedExportsOrder:X,default:Z},Symbol.toStringTag,{value:"Module"}));export{u as A,n as B,c as D,d as H,f as I,K as T,o as W,i as a,l as b,m as c,g as d,w as e};
