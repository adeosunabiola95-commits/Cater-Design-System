import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-M8wFrZyQ.js";import{r as P}from"./index-DSg-9hBA.js";import{A as q,m as H}from"./proxy-Kgw04Yn3.js";import{B as r}from"./Button-BUJifrcg.js";const O={"top-right":{arrow:"bottom-[-5px] right-[10px]",pointDown:!0},"top-left":{arrow:"bottom-[-5px] left-[10px]",pointDown:!0},"top-center":{arrow:"bottom-[-5px] left-1/2 -translate-x-1/2",pointDown:!0},"bottom-right":{arrow:"top-[-5px] right-[10px]",pointDown:!1},"bottom-left":{arrow:"top-[-5px] left-[10px]",pointDown:!1},"bottom-center":{arrow:"top-[-5px] left-1/2 -translate-x-1/2",pointDown:!1}},X=({fill:t,pointDown:a})=>e.jsx("span",{"aria-hidden":!0,className:"block",style:{width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",...a?{borderTop:`7px solid ${t}`}:{borderBottom:`7px solid ${t}`}}});function z(t,a,i){switch(a){case"top-right":return{top:t.top-i-4,left:t.right};case"top-left":return{top:t.top-i-4,left:t.left};case"top-center":return{top:t.top-i-4,left:t.left+t.width/2};case"bottom-right":return{top:t.bottom+4,left:t.right};case"bottom-left":return{top:t.bottom+4,left:t.left};case"bottom-center":return{top:t.bottom+4,left:t.left+t.width/2};default:return{top:t.top-i-4,left:t.right}}}function I(t){switch(t){case"top-right":case"bottom-right":return"translateX(-100%)";case"top-left":case"bottom-left":return"translateX(0)";case"top-center":case"bottom-center":return"translateX(-50%)";default:return"translateX(-100%)"}}const Y=120,y=({content:t,color:a="dark",placement:i="top-center",children:j,className:_=""})=>{const[w,L]=s.useState(!1),[v,S]=s.useState(null),B=s.useRef(null),o=s.useRef(null),D=O[i],k=a==="dark",C=k?"bg-mirage-900":"bg-white",E=k?"text-white":"text-text-title",F=k?"#101828":"#FFFFFF",V=()=>{o.current&&(clearTimeout(o.current),o.current=null),L(!0)},R=()=>{o.current=setTimeout(()=>{L(!1),S(null),o.current=null},Y)},$=()=>{o.current&&(clearTimeout(o.current),o.current=null)};s.useEffect(()=>{if(!w||!B.current)return;const A=B.current.getBoundingClientRect(),N=z(A,i,44);S({top:N.top,left:N.left,transform:I(i)})},[w,i]),s.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]);const T={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15,ease:[.25,.1,.25,1]}},M=typeof document<"u"?P.createPortal(e.jsx(q,{children:w&&v?e.jsxs(H.div,{role:"tooltip",className:`fixed z-[9999] flex max-w-[244px] px-2.5 py-2.5 rounded shadow-[0_1px_2px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.1)] ${C}`,style:{top:v.top,left:v.left,transform:v.transform},initial:T.initial,animate:T.animate,exit:T.exit,transition:T.transition,onMouseEnter:$,onMouseLeave:R,children:[e.jsx("span",{className:`font-body text-[13px] font-semibold leading-[144%] ${E}`,children:t}),e.jsx("span",{className:`absolute flex items-center justify-center ${D.arrow}`,children:e.jsx(X,{fill:F,pointDown:D.pointDown})})]},"tooltip"):null}),document.body):null;return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:B,className:`relative inline-flex ${_}`,onMouseEnter:V,onMouseLeave:R,children:j}),M]})};y.displayName="Tooltip";y.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tooltip content. Single line or multi-line (Description state)."},color:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"Visual variant. Dark = mirage-900 bg, white text. Light = white bg, text-title.",defaultValue:{value:"'dark'",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| 'top-right'
| 'top-left'
| 'top-center'
| 'bottom-right'
| 'bottom-left'
| 'bottom-center'`,elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"}]},description:"Placement of tooltip and arrow relative to trigger.",defaultValue:{value:"'top-center'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:"Trigger element."},className:{required:!1,tsType:{name:"string"},description:"Optional className for the trigger wrapper.",defaultValue:{value:"''",computed:!1}}}};const G={title:"Components/Tooltip",component:y,tags:[],parameters:{layout:"centered",docs:{description:{component:"Tooltips provide contextual information on hover. Maps to Figma Tooltips (276:1543). Variants: Color (Dark/Light), Type (6 placements), State (Single-line/Description)."},source:{type:"dynamic"}}},decorators:[t=>e.jsx("div",{className:"min-h-[200px] flex items-center justify-center p-8",children:e.jsx(t,{})})],argTypes:{content:{control:"text",description:"Tooltip content. Single line or multi-line (Description state)."},color:{control:"select",options:["dark","light"],description:'Visual variant. Maps to Figma "Color" property.',table:{defaultValue:{summary:"dark"}}},placement:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],description:'Placement of tooltip relative to trigger. Maps to Figma "Type" property.',table:{defaultValue:{summary:"top-center"}}}}},n="This is a tooltip",J="This a long descriptive tooltips, keep it at a minimum of 3 lines consistently across different usage",l={args:{content:n,color:"dark",placement:"top-center",children:e.jsx(r,{variant:"outline",children:"Hover me"})}},c={args:{content:n,color:"light",placement:"top-center",children:e.jsx(r,{variant:"outline",children:"Hover me"})}},p={args:{content:n,color:"dark",placement:"top-right",children:e.jsx(r,{variant:"outline",children:"Top-right"})}},m={args:{content:n,color:"dark",placement:"top-left",children:e.jsx(r,{variant:"outline",children:"Top-left"})}},u={args:{content:n,color:"dark",placement:"top-center",children:e.jsx(r,{variant:"outline",children:"Top-center"})}},d={args:{content:n,color:"dark",placement:"bottom-right",children:e.jsx(r,{variant:"outline",children:"Bottom-right"})}},g={args:{content:n,color:"dark",placement:"bottom-left",children:e.jsx(r,{variant:"outline",children:"Bottom-left"})}},f={args:{content:n,color:"dark",placement:"bottom-center",children:e.jsx(r,{variant:"outline",children:"Bottom-center"})}},h={args:{content:n,color:"dark",placement:"top-center",children:e.jsx(r,{variant:"outline",children:"Single-line"})}},x={args:{content:J,color:"light",placement:"top-center",children:e.jsx(r,{variant:"outline",children:"Description"})}},b={render:()=>e.jsx("div",{className:"flex flex-wrap gap-8 p-16",children:["dark","light"].map(t=>["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"].map(a=>e.jsx(y,{content:n,color:t,placement:a,children:e.jsxs("button",{type:"button",className:"rounded border border-border-default bg-white px-3 py-2 font-body text-sm font-medium text-text-title hover:bg-mirage-100",children:[t," / ",a]})},`${t}-${a}`)))})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-center',
    children: <Button variant="outline">Hover me</Button>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'light',
    placement: 'top-center',
    children: <Button variant="outline">Hover me</Button>
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-right',
    children: <Button variant="outline">Top-right</Button>
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-left',
    children: <Button variant="outline">Top-left</Button>
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-center',
    children: <Button variant="outline">Top-center</Button>
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'bottom-right',
    children: <Button variant="outline">Bottom-right</Button>
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'bottom-left',
    children: <Button variant="outline">Bottom-left</Button>
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'bottom-center',
    children: <Button variant="outline">Bottom-center</Button>
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: singleLine,
    color: 'dark',
    placement: 'top-center',
    children: <Button variant="outline">Single-line</Button>
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    content: description,
    color: "light",
    placement: "top-center",
    children: <Button variant="outline">Description</Button>
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-8 p-16">
      {(['dark', 'light'] as const).map(color => (['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'] as const).map(placement => <Tooltip key={\`\${color}-\${placement}\`} content={singleLine} color={color} placement={placement}>
            <button type="button" className="rounded border border-border-default bg-white px-3 py-2 font-body text-sm font-medium text-text-title hover:bg-mirage-100">
              {color} / {placement}
            </button>
          </Tooltip>))}
    </div>
}`,...b.parameters?.docs?.source}}};const K=["Dark","Light","TopRight","TopLeft","TopCenter","BottomRight","BottomLeft","BottomCenter","SingleLine","Description","AllVariants"],ot=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:b,BottomCenter:f,BottomLeft:g,BottomRight:d,Dark:l,Description:x,Light:c,SingleLine:h,TopCenter:u,TopLeft:m,TopRight:p,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{b as A,l as D,c as L,ot as T};
