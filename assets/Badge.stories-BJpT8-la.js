import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as r}from"./Badge-CGmB9pf6.js";import{C as B}from"./CheckboxGroupItem-B79X7s7x.js";import{R as y}from"./Radio-B9cJICa8.js";const v={title:"Components/Badge",component:r,parameters:{docs:{description:{component:"Badges display short labels or status. Available in 5 colors (Indigo, Green, Red, Orange, Grey), 2 sizes (sm, md), with optional outline and icon. Extracted from the Cater Design Systems Figma."},source:{type:"dynamic"}}},argTypes:{color:{control:"select",options:["indigo","green","red","orange","grey"],description:'Badge color. Maps to Figma "Color" property.',table:{defaultValue:{summary:"indigo"}}},size:{control:"select",options:["sm","md"],description:'Badge size. Maps to Figma "Size" property.',table:{defaultValue:{summary:"sm"}}},outline:{control:"boolean",description:'Outline style. Maps to Figma "Outline" property.',table:{defaultValue:{summary:"false"}}},showIcon:{control:"boolean",description:'Show icon before label. Maps to Figma "With icon" property.',table:{defaultValue:{summary:"false"}}},state:{control:"select",options:["light","lighter"],description:'Background intensity. Maps to Figma "State" property.',table:{defaultValue:{summary:"light"}}},children:{control:"text",description:"Badge label text."}}},a={args:{color:"indigo",children:"Label"}},o={args:{color:"green",children:"Label"}},s={args:{color:"red",children:"Label"}},l={args:{color:"orange",children:"Label"}},i={args:{color:"grey",children:"Label"}},n={args:{size:"sm",color:"indigo",children:"Label"}},d={args:{size:"md",color:"indigo",children:"Label"}},t={args:{outline:!0,color:"indigo",children:"Label"}},c={args:{showIcon:!0,color:"indigo",children:"Label"}},g={args:{state:"light",color:"indigo",children:"Label"}},m={args:{state:"lighter",color:"indigo",children:"Label"}},p={name:"All Colors",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{color:"indigo",children:"Indigo"}),e.jsx(r,{color:"green",children:"Green"}),e.jsx(r,{color:"red",children:"Red"}),e.jsx(r,{color:"orange",children:"Orange"}),e.jsx(r,{color:"grey",children:"Grey"})]})},h={name:"All Colors With Icon",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{color:"indigo",showIcon:!0,children:"Indigo"}),e.jsx(r,{color:"green",showIcon:!0,children:"Green"}),e.jsx(r,{color:"red",showIcon:!0,children:"Red"}),e.jsx(r,{color:"orange",showIcon:!0,children:"Orange"}),e.jsx(r,{color:"grey",showIcon:!0,children:"Grey"})]})},x={name:"All Colors Outline",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{color:"indigo",outline:!0,children:"Indigo"}),e.jsx(r,{color:"green",outline:!0,children:"Green"}),e.jsx(r,{color:"red",outline:!0,children:"Red"}),e.jsx(r,{color:"orange",outline:!0,children:"Orange"}),e.jsx(r,{color:"grey",outline:!0,children:"Grey"})]})},u={name:"All Colors Lighter",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{color:"indigo",state:"lighter",children:"Indigo"}),e.jsx(r,{color:"green",state:"lighter",children:"Green"}),e.jsx(r,{color:"red",state:"lighter",children:"Red"}),e.jsx(r,{color:"orange",state:"lighter",children:"Orange"}),e.jsx(r,{color:"grey",state:"lighter",children:"Grey"})]})},b={name:"All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{size:"sm",color:"indigo",children:"Small"}),e.jsx(r,{size:"md",color:"indigo",children:"Medium"})]})},f={name:"Badge Info",parameters:{docs:{description:{story:'Example from Figma "Badge info": badges in context with Checkbox and Radio. Badges sit 6–8px from the text. Uses Checkbox (mp), Radio (mp), and disabled Radio states.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-[280px] font-body",children:[e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsxs("div",{className:"flex items-center gap-[6px] py-2",children:[e.jsx(B,{variant:"mp",size:"sm",label:"Chicken Fajitas"}),e.jsx(r,{color:"indigo",showIcon:!0,children:"Recommended"})]}),e.jsx("div",{className:"flex items-center py-2",children:e.jsx(B,{variant:"mp",size:"sm",label:"Steak with Roasted Veggies"})})]}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsxs("div",{className:"flex items-center gap-[6px] py-2",children:[e.jsx(y,{variant:"mp",size:"sm",name:"badge-info-radio",label:"Chicken Fajitas",defaultChecked:!0}),e.jsx(r,{color:"indigo",showIcon:!0,outline:!0,children:"Recommended"})]}),e.jsx("div",{className:"flex items-center py-2",children:e.jsx(y,{variant:"mp",size:"sm",name:"badge-info-radio",label:"Steak with Roasted Veggies"})})]}),e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsxs("div",{className:"flex items-center gap-[6px] py-2",children:[e.jsx(y,{variant:"mp",size:"sm",name:"badge-info-disabled",label:"Chicken Fajitas",disabled:!0,selected:!0}),e.jsx(r,{color:"grey",showIcon:!0,children:"Unavailable"})]}),e.jsx("div",{className:"flex items-center py-2",children:e.jsx(y,{variant:"mp",size:"sm",name:"badge-info-disabled",label:"Steak with Roasted Veggies",disabled:!0})})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    color: 'indigo',
    children: 'Label'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'indigo',
    children: 'Label'
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    outline: true,
    color: 'indigo',
    children: 'Label'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const j=["Indigo","Green","Red","Orange","Grey","Small","Medium","Outline","WithIcon","Light","Lighter","AllColors","AllColorsWithIcon","AllOutline","AllLighter","AllSizes","BadgeInfo"],C=Object.freeze(Object.defineProperty({__proto__:null,AllColors:p,AllColorsWithIcon:h,AllLighter:u,AllOutline:x,AllSizes:b,BadgeInfo:f,Green:o,Grey:i,Indigo:a,Light:g,Lighter:m,Medium:d,Orange:l,Outline:t,Red:s,Small:n,WithIcon:c,__namedExportsOrder:j,default:v},Symbol.toStringTag,{value:"Module"}));export{p as A,C as B,o as G,a as I,l as O,s as R,f as a,i as b,b as c,x as d,h as e,u as f};
