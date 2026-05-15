import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as F}from"./iframe-M8wFrZyQ.js";import{C as I}from"./CheckboxGroupItem-CbPb5ryf.js";import{R as j}from"./Radio-CGIrWpV1.js";function V({size:y,className:v}){return e.jsx("svg",{width:y,height:y,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,className:v,children:e.jsx("path",{d:"M2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10C1 10.2652 1.10536 10.5196 1.29289 10.7071C1.48043 10.8946 1.73478 11 2 11H10C10.1884 11.0001 10.373 10.9469 10.5326 10.8466C10.6921 10.7463 10.8201 10.603 10.9017 10.4332C10.9833 10.2633 11.0153 10.0739 10.9939 9.88672C10.9726 9.69954 10.8988 9.52212 10.781 9.375L8.281 7L10.781 4.625C10.8988 4.47791 10.9726 4.30053 10.9939 4.11331C11.0153 3.92609 10.9833 3.73665 10.9017 3.56682C10.8201 3.39698 10.6921 3.25367 10.5326 3.15338C10.373 3.0531 10.1884 2.99993 10 3H2V2C2 1.73478 1.89464 1.48043 1.70711 1.29289C1.51957 1.10536 1.26522 1 2 1Z",fill:"currentColor"})})}const M={indigo:{light:{bg:"bg-blush-pink-100",text:"text-blush-pink-900",border:"border-blush-pink-300"},lighter:{bg:"bg-blush-pink-50",text:"text-blush-pink-900",border:"border-blush-pink-200"}},green:{light:{bg:"bg-salem-100",text:"text-salem-900",border:"border-salem-300"},lighter:{bg:"bg-salem-50",text:"text-salem-900",border:"border-salem-200"}},red:{light:{bg:"bg-bright-red-50",text:"text-bright-red-900",border:"border-bright-red-300"},lighter:{bg:"bg-bright-red-25",text:"text-bright-red-900",border:"border-bright-red-200"}},orange:{light:{bg:"bg-flush-orange-100",text:"text-flush-orange-900",border:"border-flush-orange-300"},lighter:{bg:"bg-flush-orange-50",text:"text-flush-orange-900",border:"border-flush-orange-200"}},grey:{light:{bg:"bg-mirage-200",text:"text-mirage-800",border:"border-mirage-300"},lighter:{bg:"bg-mirage-100",text:"text-mirage-800",border:"border-mirage-200"}}},W={sm:"h-5 px-1_5 gap-0_5 text-[13px] leading-[150%] tracking-[-0.01em]",md:"h-6 px-2 gap-1 text-[14px] leading-[150%] tracking-[-0.01em]"},_={sm:12,md:14},r=F.forwardRef(({color:y="indigo",size:v="sm",outline:w=!1,showIcon:R=!1,state:C="light",iconElement:S,children:z,className:k="",...L},N)=>{const B=M[y][C],O=_[v],G=S??e.jsx(V,{size:O,className:B.text}),A=["inline-flex items-center justify-center","rounded-[6px]","font-body font-normal",W[v],B.bg,B.text,w&&`border border-solid ${B.border}`,k].filter(Boolean).join(" ");return e.jsxs("span",{ref:N,className:A,...L,children:[R&&G,z]})});r.displayName="Badge";r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"union",raw:"'indigo' | 'green' | 'red' | 'orange' | 'grey'",elements:[{name:"literal",value:"'indigo'"},{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'grey'"}]},description:'Badge color. Maps to Figma "Color" property.',defaultValue:{value:"'indigo'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:'Badge size. Maps to Figma "Size" property.',defaultValue:{value:"'sm'",computed:!1}},outline:{required:!1,tsType:{name:"boolean"},description:'Outline style. Maps to Figma "Outline" property.',defaultValue:{value:"false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:'Show icon before label. Maps to Figma "With icon" property.',defaultValue:{value:"false",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'light' | 'lighter'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'lighter'"}]},description:'Background intensity. Maps to Figma "State" property.',defaultValue:{value:"'light'",computed:!1}},iconElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element to render (default: Flag icon)."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Badge label text"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const E={title:"Components/Badge",component:r,tags:[],parameters:{docs:{description:{component:"Badges display short labels or status. Available in 5 colors (Indigo, Green, Red, Orange, Grey), 2 sizes (sm, md), with optional outline and icon. Extracted from the Cater Design Systems Figma."},source:{type:"dynamic"}}},argTypes:{color:{control:"select",options:["indigo","green","red","orange","grey"],description:'Badge color. Maps to Figma "Color" property.',table:{defaultValue:{summary:"indigo"}}},size:{control:"select",options:["sm","md"],description:'Badge size. Maps to Figma "Size" property.',table:{defaultValue:{summary:"sm"}}},outline:{control:"boolean",description:'Outline style. Maps to Figma "Outline" property.',table:{defaultValue:{summary:"false"}}},showIcon:{control:"boolean",description:'Show icon before label. Maps to Figma "With icon" property.',table:{defaultValue:{summary:"false"}}},state:{control:"select",options:["light","lighter"],description:'Background intensity. Maps to Figma "State" property.',table:{defaultValue:{summary:"light"}}},children:{control:"text",description:"Badge label text."}}},a={args:{color:"indigo",children:"Label"}},o={args:{color:"green",children:"Label"}},s={args:{color:"red",children:"Label"}},l={args:{color:"orange",children:"Label"}},i={args:{color:"grey",children:"Label"}},t={args:{size:"sm",color:"indigo",children:"Label"}},n={args:{size:"md",color:"indigo",children:"Label"}},d={args:{outline:!0,color:"indigo",children:"Label"}},c={args:{showIcon:!0,color:"indigo",children:"Label"}},g={args:{state:"light",color:"indigo",children:"Label"}},m={args:{state:"lighter",color:"indigo",children:"Label"}},p={name:"All Colors",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{color:"indigo",children:"Indigo"}),e.jsx(r,{color:"green",children:"Green"}),e.jsx(r,{color:"red",children:"Red"}),e.jsx(r,{color:"orange",children:"Orange"}),e.jsx(r,{color:"grey",children:"Grey"})]})},u={name:"All Colors With Icon",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{color:"indigo",showIcon:!0,children:"Indigo"}),e.jsx(r,{color:"green",showIcon:!0,children:"Green"}),e.jsx(r,{color:"red",showIcon:!0,children:"Red"}),e.jsx(r,{color:"orange",showIcon:!0,children:"Orange"}),e.jsx(r,{color:"grey",showIcon:!0,children:"Grey"})]})},h={name:"All Colors Outline",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{color:"indigo",outline:!0,children:"Indigo"}),e.jsx(r,{color:"green",outline:!0,children:"Green"}),e.jsx(r,{color:"red",outline:!0,children:"Red"}),e.jsx(r,{color:"orange",outline:!0,children:"Orange"}),e.jsx(r,{color:"grey",outline:!0,children:"Grey"})]})},x={name:"All Colors Lighter",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{color:"indigo",state:"lighter",children:"Indigo"}),e.jsx(r,{color:"green",state:"lighter",children:"Green"}),e.jsx(r,{color:"red",state:"lighter",children:"Red"}),e.jsx(r,{color:"orange",state:"lighter",children:"Orange"}),e.jsx(r,{color:"grey",state:"lighter",children:"Grey"})]})},b={name:"All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{size:"sm",color:"indigo",children:"Small"}),e.jsx(r,{size:"md",color:"indigo",children:"Medium"})]})},f={name:"Badge Info",parameters:{docs:{description:{story:'Example from Figma "Badge info": badges in context with Checkbox and Radio. Badges sit 6–8px from the text. Uses Checkbox (mp), Radio (mp), and disabled Radio states.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-[280px] font-body",children:[e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsxs("div",{className:"flex items-center gap-[6px] py-2",children:[e.jsx(I,{variant:"mp",size:"sm",label:"Chicken Fajitas"}),e.jsx(r,{color:"indigo",showIcon:!0,children:"Recommended"})]}),e.jsx("div",{className:"flex items-center py-2",children:e.jsx(I,{variant:"mp",size:"sm",label:"Steak with Roasted Veggies"})})]}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsxs("div",{className:"flex items-center gap-[6px] py-2",children:[e.jsx(j,{variant:"mp",size:"sm",name:"badge-info-radio",label:"Chicken Fajitas",defaultChecked:!0}),e.jsx(r,{color:"indigo",showIcon:!0,outline:!0,children:"Recommended"})]}),e.jsx("div",{className:"flex items-center py-2",children:e.jsx(j,{variant:"mp",size:"sm",name:"badge-info-radio",label:"Steak with Roasted Veggies"})})]}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsxs("div",{className:"flex items-center gap-[6px] py-2",children:[e.jsx(j,{variant:"mp",size:"sm",name:"badge-info-disabled",label:"Chicken Fajitas",disabled:!0,selected:!0}),e.jsx(r,{color:"grey",showIcon:!0,children:"Unavailable"})]}),e.jsx("div",{className:"flex items-center py-2",children:e.jsx(j,{variant:"mp",size:"sm",name:"badge-info-disabled",label:"Steak with Roasted Veggies",disabled:!0})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'indigo',
    children: 'Label'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'green',
    children: 'Label'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'red',
    children: 'Label'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'orange',
    children: 'Label'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey',
    children: 'Label'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    color: 'indigo',
    children: 'Label'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'indigo',
    children: 'Label'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    outline: true,
    color: 'indigo',
    children: 'Label'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    showIcon: true,
    color: 'indigo',
    children: 'Label'
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'light',
    color: 'indigo',
    children: 'Label'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'lighter',
    color: 'indigo',
    children: 'Label'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All Colors',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="grey">Grey</Badge>
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'All Colors With Icon',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge color="indigo" showIcon>Indigo</Badge>
      <Badge color="green" showIcon>Green</Badge>
      <Badge color="red" showIcon>Red</Badge>
      <Badge color="orange" showIcon>Orange</Badge>
      <Badge color="grey" showIcon>Grey</Badge>
    </div>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All Colors Outline',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge color="indigo" outline>Indigo</Badge>
      <Badge color="green" outline>Green</Badge>
      <Badge color="red" outline>Red</Badge>
      <Badge color="orange" outline>Orange</Badge>
      <Badge color="grey" outline>Grey</Badge>
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'All Colors Lighter',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge color="indigo" state="lighter">Indigo</Badge>
      <Badge color="green" state="lighter">Green</Badge>
      <Badge color="red" state="lighter">Red</Badge>
      <Badge color="orange" state="lighter">Orange</Badge>
      <Badge color="grey" state="lighter">Grey</Badge>
    </div>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Badge size="sm" color="indigo">Small</Badge>
      <Badge size="md" color="indigo">Medium</Badge>
    </div>
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Badge Info',
  parameters: {
    docs: {
      description: {
        story: 'Example from Figma "Badge info": badges in context with Checkbox and Radio. Badges sit 6–8px from the text. Uses Checkbox (mp), Radio (mp), and disabled Radio states.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6 max-w-[280px] font-body">
      {/* Example 1: Checkbox + Recommended badge */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-[6px] py-2">
          <Checkbox variant="mp" size="sm" label="Chicken Fajitas" />
          <Badge color="indigo" showIcon>Recommended</Badge>
        </div>
        <div className="flex items-center py-2">
          <Checkbox variant="mp" size="sm" label="Steak with Roasted Veggies" />
        </div>
      </div>
      {/* Example 2: Radio (selected) + Recommended outline badge */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-[6px] py-2">
          <Radio variant="mp" size="sm" name="badge-info-radio" label="Chicken Fajitas" defaultChecked />
          <Badge color="indigo" showIcon outline>Recommended</Badge>
        </div>
        <div className="flex items-center py-2">
          <Radio variant="mp" size="sm" name="badge-info-radio" label="Steak with Roasted Veggies" />
        </div>
      </div>
      {/* Example 3: Disabled Radio + Unavailable badge */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-[6px] py-2">
          <Radio variant="mp" size="sm" name="badge-info-disabled" label="Chicken Fajitas" disabled selected />
          <Badge color="grey" showIcon>Unavailable</Badge>
        </div>
        <div className="flex items-center py-2">
          <Radio variant="mp" size="sm" name="badge-info-disabled" label="Steak with Roasted Veggies" disabled />
        </div>
      </div>
    </div>
}`,...f.parameters?.docs?.source}}};const T=["Indigo","Green","Red","Orange","Grey","Small","Medium","Outline","WithIcon","Light","Lighter","AllColors","AllColorsWithIcon","AllOutline","AllLighter","AllSizes","BadgeInfo"],P=Object.freeze(Object.defineProperty({__proto__:null,AllColors:p,AllColorsWithIcon:u,AllLighter:x,AllOutline:h,AllSizes:b,BadgeInfo:f,Green:o,Grey:i,Indigo:a,Light:g,Lighter:m,Medium:n,Orange:l,Outline:d,Red:s,Small:t,WithIcon:c,__namedExportsOrder:T,default:E},Symbol.toStringTag,{value:"Module"}));export{p as A,P as B,o as G,a as I,l as O,s as R,f as a,i as b,b as c,h as d,u as e,x as f};
