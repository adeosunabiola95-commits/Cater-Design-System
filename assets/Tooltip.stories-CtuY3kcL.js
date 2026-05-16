import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-DAe-cY6O.js";import{r as X}from"./index-awndDGEM.js";import{A as z,m as I}from"./proxy-DCy2txyG.js";import{B as a}from"./Button-Cuy8_dW9.js";const Y={"top-right":{arrow:"bottom-[-5px] right-[10px]",pointDown:!0},"top-left":{arrow:"bottom-[-5px] left-[10px]",pointDown:!0},"top-center":{arrow:"bottom-[-5px] left-1/2 -translate-x-1/2",pointDown:!0},"bottom-right":{arrow:"top-[-5px] right-[10px]",pointDown:!1},"bottom-left":{arrow:"top-[-5px] left-[10px]",pointDown:!1},"bottom-center":{arrow:"top-[-5px] left-1/2 -translate-x-1/2",pointDown:!1}},K=({fill:t,pointDown:o})=>e.jsx("span",{"aria-hidden":!0,className:"block",style:{width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",...o?{borderTop:`7px solid ${t}`}:{borderBottom:`7px solid ${t}`}}});function U(t,o,r){switch(o){case"top-right":return{top:t.top-r-4,left:t.right};case"top-left":return{top:t.top-r-4,left:t.left};case"top-center":return{top:t.top-r-4,left:t.left+t.width/2};case"bottom-right":return{top:t.bottom+4,left:t.right};case"bottom-left":return{top:t.bottom+4,left:t.left};case"bottom-center":return{top:t.bottom+4,left:t.left+t.width/2};default:return{top:t.top-r-4,left:t.right}}}function G(t){switch(t){case"top-right":case"bottom-right":return"translateX(-100%)";case"top-left":case"bottom-left":return"translateX(0)";case"top-center":case"bottom-center":return"translateX(-50%)";default:return"translateX(-100%)"}}const J=120,B=({content:t,color:o="dark",placement:r="top-center",children:s,className:F=""})=>{const[k,D]=l.useState(!1),[y,E]=l.useState(null),S=l.useRef(null),n=l.useRef(null),R=Y[r],j=o==="dark",V=j?"bg-mirage-900":"bg-white",M=j?"text-white":"text-text-title",$=j?"#101828":"#FFFFFF",q=()=>{n.current&&(clearTimeout(n.current),n.current=null),D(!0)},_=()=>{n.current=setTimeout(()=>{D(!1),E(null),n.current=null},J)},O=()=>{n.current&&(clearTimeout(n.current),n.current=null)};l.useEffect(()=>{if(!k||!S.current)return;const H=S.current.getBoundingClientRect(),N=U(H,r,44);E({top:N.top,left:N.left,transform:G(r)})},[k,r]),l.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]);const T={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15,ease:[.25,.1,.25,1]}},P=typeof document<"u"?X.createPortal(e.jsx(z,{children:k&&y?e.jsxs(I.div,{role:"tooltip",className:`fixed z-[9999] flex max-w-[244px] px-2.5 py-2.5 rounded shadow-[0_1px_2px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.1)] ${V}`,style:{top:y.top,left:y.left,transform:y.transform},initial:T.initial,animate:T.animate,exit:T.exit,transition:T.transition,onMouseEnter:O,onMouseLeave:_,children:[e.jsx("span",{className:`font-body text-[13px] font-semibold leading-[144%] ${M}`,children:t}),e.jsx("span",{className:`absolute flex items-center justify-center ${R.arrow}`,children:e.jsx(K,{fill:$,pointDown:R.pointDown})})]},"tooltip"):null}),document.body):null;return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:S,className:`relative inline-flex ${F}`,onMouseEnter:q,onMouseLeave:_,children:s}),P]})};B.displayName="Tooltip";B.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tooltip content. Single line or multi-line (Description state)."},color:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"Visual variant. Dark = mirage-900 bg, white text. Light = white bg, text-title.",defaultValue:{value:"'dark'",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| 'top-right'
| 'top-left'
| 'top-center'
| 'bottom-right'
| 'bottom-left'
| 'bottom-center'`,elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"}]},description:"Placement of tooltip and arrow relative to trigger.",defaultValue:{value:"'top-center'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"Trigger element."},className:{required:!1,tsType:{name:"string"},description:"Optional className for the trigger wrapper.",defaultValue:{value:"''",computed:!1}}}};const{expect:A,userEvent:w,within:C}=__STORYBOOK_MODULE_TEST__;async function L(t,o){const s=C(t).getByRole("button",{name:o});await w.hover(s),await A(document.querySelector('[role="tooltip"]')).toBeTruthy(),await w.unhover(s)}const Q={title:"Components/Tooltip",component:B,parameters:{layout:"centered",docs:{description:{component:"Tooltips provide contextual information on hover. Maps to Figma Tooltips (276:1543). Variants: Color (Dark/Light), Type (6 placements), State (Single-line/Description)."},source:{type:"dynamic"}}},decorators:[t=>e.jsx("div",{className:"min-h-[200px] flex items-center justify-center p-8",children:e.jsx(t,{})})],argTypes:{content:{control:"text",description:"Tooltip content. Single line or multi-line (Description state)."},color:{control:"select",options:["dark","light"],description:'Visual variant. Maps to Figma "Color" property.',table:{defaultValue:{summary:"dark"}}},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],description:'Placement of tooltip relative to trigger. Maps to Figma "Type" property.',table:{defaultValue:{summary:"top-center"}}}}},i="This is a tooltip",W="This a long descriptive tooltips, keep it at a minimum of 3 lines consistently across different usage",c={args:{content:i,color:"dark",placement:"top-center",children:e.jsx(a,{variant:"outline",children:"Hover me"})},play:async({canvasElement:t})=>{await L(t,/hover me/i)}},p={args:{content:i,color:"light",placement:"top-center",children:e.jsx(a,{variant:"outline",children:"Hover me"})},play:async({canvasElement:t})=>{await L(t,/hover me/i)}},m={args:{content:i,color:"dark",placement:"top-right",children:e.jsx(a,{variant:"outline",children:"Top-right"})}},u={args:{content:i,color:"dark",placement:"top-left",children:e.jsx(a,{variant:"outline",children:"Top-left"})}},d={args:{content:i,color:"dark",placement:"top-center",children:e.jsx(a,{variant:"outline",children:"Top-center"})}},g={args:{content:i,color:"dark",placement:"bottom-right",children:e.jsx(a,{variant:"outline",children:"Bottom-right"})}},h={args:{content:i,color:"dark",placement:"bottom-left",children:e.jsx(a,{variant:"outline",children:"Bottom-left"})}},f={args:{content:i,color:"dark",placement:"bottom-center",children:e.jsx(a,{variant:"outline",children:"Bottom-center"})}},v={args:{content:i,color:"dark",placement:"top-center",children:e.jsx(a,{variant:"outline",children:"Single-line"})}},x={args:{content:W,color:"light",placement:"top-center",children:e.jsx(a,{variant:"outline",children:"Description"})},play:async({canvasElement:t})=>{await L(t,/description/i)}},b={play:async({canvasElement:t})=>{const o=C(t);await w.hover(o.getAllByRole("button")[0]),await A(document.querySelector('[role="tooltip"]')).toBeTruthy(),await w.unhover(o.getAllByRole("button")[0])},render:()=>e.jsx("div",{className:"flex flex-wrap gap-8 p-16",children:["dark","light"].map(t=>["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"].map(o=>e.jsx(B,{content:i,color:t,placement:o,children:e.jsxs("button",{type:"button",className:"rounded border border-border-default bg-white px-3 py-2 font-body text-sm font-medium text-text-title hover:bg-mirage-100",children:[t," / ",o]})},`${t}-${o}`)))})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-center',
    children: <Button variant="outline">Hover me</Button>
  },
  play: async ({
    canvasElement
  }) => {
    await hoverTooltipTrigger(canvasElement, /hover me/i);
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'light',
    placement: 'top-center',
    children: <Button variant="outline">Hover me</Button>
  },
  play: async ({
    canvasElement
  }) => {
    await hoverTooltipTrigger(canvasElement, /hover me/i);
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-right',
    children: <Button variant="outline">Top-right</Button>
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-left',
    children: <Button variant="outline">Top-left</Button>
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-center',
    children: <Button variant="outline">Top-center</Button>
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'bottom-right',
    children: <Button variant="outline">Bottom-right</Button>
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'bottom-left',
    children: <Button variant="outline">Bottom-left</Button>
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'bottom-center',
    children: <Button variant="outline">Bottom-center</Button>
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-center',
    children: <Button variant="outline">Single-line</Button>
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    content: description,
    color: "light",
    placement: "top-center",
    children: <Button variant="outline">Description</Button>
  },
  play: async ({
    canvasElement
  }) => {
    await hoverTooltipTrigger(canvasElement, /description/i);
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getAllByRole('button')[0]!);
    await expect(document.querySelector('[role="tooltip"]')).toBeTruthy();
    await userEvent.unhover(canvas.getAllByRole('button')[0]!);
  },
  render: () => <div className="flex flex-wrap gap-8 p-16">
      {(['dark', 'light'] as const).map(color => (['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'] as const).map(placement => <Tooltip key={\`\${color}-\${placement}\`} content={singleLine} color={color} placement={placement}>
            <button type="button" className="rounded border border-border-default bg-white px-3 py-2 font-body text-sm font-medium text-text-title hover:bg-mirage-100">
              {color} / {placement}
            </button>
          </Tooltip>))}
    </div>
}`,...b.parameters?.docs?.source}}};const Z=["Dark","Light","TopRight","TopLeft","TopCenter","BottomRight","BottomLeft","BottomCenter","SingleLine","Description","AllVariants"],it=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:b,BottomCenter:f,BottomLeft:h,BottomRight:g,Dark:c,Description:x,Light:p,SingleLine:v,TopCenter:d,TopLeft:u,TopRight:m,__namedExportsOrder:Z,default:Q},Symbol.toStringTag,{value:"Module"}));export{b as A,c as D,p as L,it as T};
