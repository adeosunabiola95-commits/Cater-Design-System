import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as r}from"./Button-Cuy8_dW9.js";const{expect:L,fn:I,userEvent:w,within:T}=__STORYBOOK_MODULE_TEST__,O={title:"Components/Button",component:r,args:{onClick:I()},parameters:{docs:{description:{component:"Buttons trigger actions — Cater Design Systems / Figma (component set 20:3394). Six types, three sizes, four icon positions, optional fullWidth. Radius/full (pill) on root. Primary: Sherwood Green #073D30 + Gossip #CCF8B9 label."},source:{type:"dynamic"}}},argTypes:{variant:{control:"select",options:["primary","destructive","outline","ghost","secondary-color","tertiary-grey"],description:'Visual style of the button. Maps to Figma "Type" property.',table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:'Size of the button. Maps to Figma "Size" property.',table:{defaultValue:{summary:"medium"}}},icon:{control:"select",options:["none","left","right","alone"],description:'Icon position. Maps to Figma "Icon" property.',table:{defaultValue:{summary:"none"}}},disabled:{control:"boolean",description:'Whether the button is disabled. Maps to Figma "State=disabled".'},fullWidth:{control:"boolean",description:"Stretch the button to fill the width of its parent container.",table:{defaultValue:{summary:"false"}}},children:{control:"text",description:"Button label text."}}},t={args:{variant:"primary",children:"Label"}},n={args:{variant:"destructive",children:"Label"}},s={args:{variant:"outline",children:"Label"}},o={args:{variant:"ghost",children:"Label"}},i={name:"Secondary Color",args:{variant:"secondary-color",children:"Label"}},l={name:"Tertiary Grey",args:{variant:"tertiary-grey",children:"Label"}},c={args:{variant:"primary",size:"small",children:"Label"}},d={args:{variant:"primary",size:"medium",children:"Label"}},u={args:{variant:"primary",size:"large",children:"Label"}},p={name:"Icon Left",args:{variant:"primary",icon:"left",children:"Label"}},m={name:"Icon Right",args:{variant:"primary",icon:"right",children:"Label"}},y={name:"Icon Alone",args:{variant:"primary",icon:"alone","aria-label":"Continue"}},h={name:"Full Width",args:{variant:"primary",fullWidth:!0,children:"Label"},decorators:[a=>e.jsx("div",{style:{width:320},children:e.jsx(a,{})})]},g={name:"Full Width – Icon Right",args:{variant:"primary",fullWidth:!0,icon:"right",children:"Continue"},decorators:[a=>e.jsx("div",{style:{width:320},children:e.jsx(a,{})})]},v={name:"Full Width – All Types",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(r,{variant:"primary",fullWidth:!0,children:"Primary"}),e.jsx(r,{variant:"destructive",fullWidth:!0,children:"Destructive"}),e.jsx(r,{variant:"outline",fullWidth:!0,children:"Outline"}),e.jsx(r,{variant:"ghost",fullWidth:!0,children:"Ghost"}),e.jsx(r,{variant:"secondary-color",fullWidth:!0,children:"Secondary"}),e.jsx(r,{variant:"tertiary-grey",fullWidth:!0,children:"Tertiary"})]})},b={args:{variant:"primary",disabled:!0,children:"Label"},play:async({args:a,canvasElement:W})=>{const D=T(W).getByRole("button",{name:/label/i});await w.click(D),await L(D).toBeDisabled(),await L(a.onClick).not.toHaveBeenCalled()}},x={name:"Destructive Disabled",args:{variant:"destructive",disabled:!0,children:"Label"}},f={name:"Outline Disabled",args:{variant:"outline",disabled:!0,children:"Label"}},B={name:"All Types",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"secondary-color",children:"Secondary"}),e.jsx(r,{variant:"tertiary-grey",children:"Tertiary"})]})},F={name:"All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{size:"small",children:"Small"}),e.jsx(r,{size:"medium",children:"Medium"}),e.jsx(r,{size:"large",children:"Large"})]})},S={name:"All Icon Positions",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{icon:"none",children:"No Icon"}),e.jsx(r,{icon:"left",children:"Icon Left"}),e.jsx(r,{icon:"right",children:"Icon Right"}),e.jsx(r,{icon:"alone","aria-label":"Continue"})]})},z={primary:"bg-sherwood-chelsea-gem-900",destructive:"bg-bright-red-900",outline:"bg-mirage-100",ghost:"bg-mirage-100","secondary-color":"bg-salem-100","tertiary-grey":"bg-mirage-100"},j={name:"All Types Hovered",render:()=>e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:["primary","destructive","outline","ghost","secondary-color","tertiary-grey"].map(a=>e.jsx(r,{variant:a,className:z[a],children:a.charAt(0).toUpperCase()+a.slice(1)},a))})},E={primary:{backgroundColor:"#073D30",color:"#CCF8B9",boxShadow:"0 0 0 2px #FFFFFF, 0 0 0 4px #8DE5D0"},destructive:{backgroundColor:"#6B0100",boxShadow:"0 0 0 2px #FFFFFF, 0 0 0 4px #E89A9A"},outline:{backgroundColor:"#F1F2F5",borderColor:"transparent",boxShadow:"0 0 0 2px #FFFFFF, 0 0 0 4px #CEECDA"},ghost:{backgroundColor:"#F1F2F5",boxShadow:"0 0 0 2px #FFFFFF, 0 0 0 4px #CEECDA"},"secondary-color":{backgroundColor:"#CEECDA",boxShadow:"0 0 0 2px #FFFFFF, 0 0 0 4px #CEECDA"},"tertiary-grey":{backgroundColor:"#F1F2F5",boxShadow:"0 0 0 2px #FFFFFF, 0 0 0 4px #CEECDA"}},A={name:"All Types Focused",render:()=>e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"},children:["primary","destructive","outline","ghost","secondary-color","tertiary-grey"].map(a=>e.jsx(r,{variant:a,style:E[a],children:a.charAt(0).toUpperCase()+a.slice(1)},a))})},C={name:"All Types Disabled",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"primary",disabled:!0,children:"Primary"}),e.jsx(r,{variant:"destructive",disabled:!0,children:"Destructive"}),e.jsx(r,{variant:"outline",disabled:!0,children:"Outline"}),e.jsx(r,{variant:"ghost",disabled:!0,children:"Ghost"}),e.jsx(r,{variant:"secondary-color",disabled:!0,children:"Secondary"}),e.jsx(r,{variant:"tertiary-grey",disabled:!0,children:"Tertiary"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Label'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Label'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Label'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Label'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Secondary Color',
  args: {
    variant: 'secondary-color',
    children: 'Label'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary Grey',
  args: {
    variant: 'tertiary-grey',
    children: 'Label'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Label'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Label'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Label'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Icon Left',
  args: {
    variant: 'primary',
    icon: 'left',
    children: 'Label'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Icon Right',
  args: {
    variant: 'primary',
    icon: 'right',
    children: 'Label'
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Icon Alone',
  args: {
    variant: 'primary',
    icon: 'alone',
    'aria-label': 'Continue'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Label'
  },
  decorators: [Story => <div style={{
    width: 320
  }}>
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Full Width – Icon Right',
  args: {
    variant: 'primary',
    fullWidth: true,
    icon: 'right',
    children: 'Continue'
  },
  decorators: [Story => <div style={{
    width: 320
  }}>
        <Story />
      </div>]
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Full Width – All Types',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 320
  }}>
      <Button variant="primary" fullWidth>
        Primary
      </Button>
      <Button variant="destructive" fullWidth>
        Destructive
      </Button>
      <Button variant="outline" fullWidth>
        Outline
      </Button>
      <Button variant="ghost" fullWidth>
        Ghost
      </Button>
      <Button variant="secondary-color" fullWidth>
        Secondary
      </Button>
      <Button variant="tertiary-grey" fullWidth>
        Tertiary
      </Button>
    </div>
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Label'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /label/i
    });
    await userEvent.click(button);
    await expect(button).toBeDisabled();
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Destructive Disabled',
  args: {
    variant: 'destructive',
    disabled: true,
    children: 'Label'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Outline Disabled',
  args: {
    variant: 'outline',
    disabled: true,
    children: 'Label'
  }
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'All Types',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="secondary-color">Secondary</Button>
      <Button variant="tertiary-grey">Tertiary</Button>
    </div>
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
}`,...F.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'All Icon Positions',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Button icon="none">No Icon</Button>
      <Button icon="left">Icon Left</Button>
      <Button icon="right">Icon Right</Button>
      <Button icon="alone" aria-label="Continue" />
    </div>
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'All Types Hovered',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      {(['primary', 'destructive', 'outline', 'ghost', 'secondary-color', 'tertiary-grey'] as const).map(v => <Button key={v} variant={v} className={hoverOverrides[v]}>
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </Button>)}
    </div>
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'All Types Focused',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      {(['primary', 'destructive', 'outline', 'ghost', 'secondary-color', 'tertiary-grey'] as const).map(v => <Button key={v} variant={v} style={focusedStyles[v]}>
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </Button>)}
    </div>
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'All Types Disabled',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="destructive" disabled>Destructive</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="secondary-color" disabled>Secondary</Button>
      <Button variant="tertiary-grey" disabled>Tertiary</Button>
    </div>
}`,...C.parameters?.docs?.source}}};const G=["Primary","Destructive","Outline","Ghost","SecondaryColor","TertiaryGrey","Small","Medium","Large","IconLeft","IconRight","IconAlone","FullWidth","FullWidthWithIcon","FullWidthTypes","Disabled","DestructiveDisabled","OutlineDisabled","AllTypes","AllSizes","AllIconPositions","AllHovered","AllFocused","AllDisabled"],_=Object.freeze(Object.defineProperty({__proto__:null,AllDisabled:C,AllFocused:A,AllHovered:j,AllIconPositions:S,AllSizes:F,AllTypes:B,Destructive:n,DestructiveDisabled:x,Disabled:b,FullWidth:h,FullWidthTypes:v,FullWidthWithIcon:g,Ghost:o,IconAlone:y,IconLeft:p,IconRight:m,Large:u,Medium:d,Outline:s,OutlineDisabled:f,Primary:t,SecondaryColor:i,Small:c,TertiaryGrey:l,__namedExportsOrder:G,default:O},Symbol.toStringTag,{value:"Module"}));export{B as A,_ as B,n as D,h as F,o as G,s as O,t as P,i as S,l as T,F as a,S as b,g as c,v as d,C as e};
