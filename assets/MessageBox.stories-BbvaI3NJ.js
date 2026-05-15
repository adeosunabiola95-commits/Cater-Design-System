import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-M8wFrZyQ.js";import{m as k,A as Q}from"./proxy-Kgw04Yn3.js";import{C as X,a as Y}from"./Chat-E4RI8uD8.js";const Z={type:"spring",visualDuration:.25,bounce:.2},ee={duration:.2,ease:[.25,.1,.25,1]},ae={sm:"py-[10px] px-[12px]",md:"py-[12px] px-[12px]"},t=a.forwardRef(({label:g,hint:r,size:f="md",action:z="default",leadingIcon:T,clearIcon:b,onClear:V,className:W="",disabled:C,id:q,value:o,defaultValue:j,onChange:S,onFocus:I,onBlur:M,rows:B=4,resize:y="vertical",...R},_)=>{const A=a.useId(),v=q??A,D=r?`${v}-hint`:void 0,x=z==="error",s=o!==void 0,[F,w]=a.useState(j??""),E=(s?String(o):F).length>0;a.useEffect(()=>{s&&w(String(o))},[o,s]);const P=a.useCallback(l=>{s||w(l.target.value),S?.(l)},[s,S]),L=a.useCallback(()=>{s||w(""),V?.()},[s,V]),[O,N]=a.useState(!1),$=a.useCallback(l=>{N(!0),I?.(l)},[I]),H=a.useCallback(l=>{N(!1),M?.(l)},[M]),U=x?"border-error-border":"border-border-default focus-within:border-salem-600",G=x?"0 0 0 2px #FFDCDC":"0 0 0 2px #CEECDA",J=x?"text-[#6B0100]":"text-text-subtitle",K=y==="none"?"resize-none":y==="vertical"?"resize-y":y==="horizontal"?"resize-x":"resize";return e.jsxs("div",{className:`flex flex-col gap-[8px] ${W}`,children:[g&&e.jsx("label",{htmlFor:v,className:"font-body font-medium text-[14px] leading-[150%] tracking-[0.14px] text-text-subtitle",children:g}),e.jsxs(k.div,{className:["flex gap-[8px] bg-white border rounded-[4px]","shadow-[0_1px_2px_rgba(16,24,40,0.05)]",ae[f],U,C?"opacity-50 cursor-not-allowed":""].join(" "),animate:{boxShadow:O?`${G}, 0 1px 2px rgba(16,24,40,0.05)`:"0 1px 2px rgba(16,24,40,0.05)"},transition:Z,children:[T&&e.jsx("span",{className:"shrink-0 flex items-start justify-center text-text-subtitle w-[20px] h-[20px] pt-[2px]",children:T}),e.jsxs("div",{className:["relative flex-1 min-w-0 flex flex-col",b&&E?"pr-7":""].join(" "),children:[e.jsx("textarea",{ref:_,id:v,rows:B,disabled:C,"aria-describedby":D,"aria-invalid":x||void 0,...s?{value:o}:{defaultValue:j},onChange:P,onFocus:$,onBlur:H,className:["flex-1 min-w-0 min-h-0 bg-transparent outline-none font-body font-medium","text-[16px] leading-[150%] tracking-[0.16px]","text-text-subtitle placeholder:text-text-caption","disabled:cursor-not-allowed",K].join(" "),...R}),b&&e.jsx("div",{className:"absolute top-0 right-0",children:e.jsx(Q,{children:E&&e.jsx(k.button,{type:"button","aria-label":"Clear",onClick:L,className:"shrink-0 flex items-center justify-center text-text-body w-[20px] h-[20px] cursor-pointer",initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:ee,children:b},"clear")})})]})]}),r&&e.jsx("p",{id:D,className:`font-body text-[14px] leading-[150%] ${J}`,children:r})]})});t.displayName="MessageBox";t.__docgenInfo={description:"",methods:[],displayName:"MessageBox",props:{label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},action:{required:!1,tsType:{name:"union",raw:"'default' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},clearIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon shown only when the textarea has a value. Clicking it clears the content."},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the clear icon is clicked"},rows:{required:!1,tsType:{name:"number"},description:"Minimum number of visible rows",defaultValue:{value:"4",computed:!1}},resize:{required:!1,tsType:{name:"union",raw:"'none' | 'vertical' | 'horizontal' | 'both'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'both'"}]},description:"Whether the textarea can be resized by the user",defaultValue:{value:"'vertical'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const te={title:"Components/Message Box",component:t,parameters:{docs:{description:{component:"A multiline text input (textarea) with the same styling as Input Field. Supports label, hint, sizes, error state, leading icon, and clear button. Uses the same border, shadow, focus ring, and motion animations."},source:{type:"dynamic"}}},argTypes:{label:{control:"text"},hint:{control:"text"},size:{control:"select",options:["sm","md"],table:{defaultValue:{summary:"md"}}},action:{control:"select",options:["default","error"],table:{defaultValue:{summary:"default"}}},placeholder:{control:"text"},rows:{control:"number",table:{defaultValue:{summary:"4"}}},resize:{control:"select",options:["none","vertical","horizontal","both"],table:{defaultValue:{summary:"vertical"}}},disabled:{control:"boolean"}}},n={args:{label:"Message *",hint:"Enter your message here.",placeholder:"Type your message..."}},i={name:"With Value",args:{label:"Message *",hint:"Enter your message here.",defaultValue:"Hello, I would like to inquire about your services.",placeholder:"Type your message..."}},c={args:{label:"Message *",hint:"Enter your message here.",size:"sm",placeholder:"Type your message..."}},d={args:{label:"Message *",hint:"This field is required.",action:"error",defaultValue:"Incomplete message",placeholder:"Type your message..."}},u={name:"With Clear Icon",render:()=>{const[g,r]=a.useState("");return e.jsx("div",{style:{width:400},children:e.jsx(t,{label:"Message *",hint:"The clear icon appears when you type.",value:g,onChange:f=>r(f.target.value),clearIcon:e.jsx(X,{width:20,height:20}),onClear:()=>r(""),placeholder:"Type your message..."})})}},p={args:{label:"Message *",hint:"This field is disabled.",defaultValue:"Disabled content",disabled:!0,placeholder:"Type your message..."}},m={name:"With Leading Icon",render:()=>e.jsx("div",{style:{width:400},children:e.jsx(t,{label:"Feedback *",hint:"Share your thoughts with us.",placeholder:"Type your feedback...",leadingIcon:e.jsx(Y,{width:20,height:20})})})},h={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",style:{width:400},children:[e.jsx(t,{label:"Default",placeholder:"Default message box..."}),e.jsx(t,{label:"With value",defaultValue:"Some pre-filled content.",placeholder:"Type here..."}),e.jsx(t,{label:"Error state",action:"error",defaultValue:"Invalid input",hint:"Please correct this field.",placeholder:"Type here..."}),e.jsx(t,{label:"Disabled",disabled:!0,defaultValue:"Disabled content",placeholder:"Type here..."})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message *',
    hint: 'Enter your message here.',
    placeholder: 'Type your message...'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    label: 'Message *',
    hint: 'Enter your message here.',
    defaultValue: 'Hello, I would like to inquire about your services.',
    placeholder: 'Type your message...'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message *',
    hint: 'Enter your message here.',
    size: 'sm',
    placeholder: 'Type your message...'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message *',
    hint: 'This field is required.',
    action: 'error',
    defaultValue: 'Incomplete message',
    placeholder: 'Type your message...'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Clear Icon',
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: 400
    }}>
        <MessageBox label="Message *" hint="The clear icon appears when you type." value={value} onChange={e => setValue(e.target.value)} clearIcon={<Cancel width={20} height={20} />} onClear={() => setValue('')} placeholder="Type your message..." />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message *',
    hint: 'This field is disabled.',
    defaultValue: 'Disabled content',
    disabled: true,
    placeholder: 'Type your message...'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Leading Icon',
  render: () => <div style={{
    width: 400
  }}>
      <MessageBox label="Feedback *" hint="Share your thoughts with us." placeholder="Type your feedback..." leadingIcon={<Chat width={20} height={20} />} />
    </div>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-col gap-8" style={{
    width: 400
  }}>
      <MessageBox label="Default" placeholder="Default message box..." />
      <MessageBox label="With value" defaultValue="Some pre-filled content." placeholder="Type here..." />
      <MessageBox label="Error state" action="error" defaultValue="Invalid input" hint="Please correct this field." placeholder="Type here..." />
      <MessageBox label="Disabled" disabled defaultValue="Disabled content" placeholder="Type here..." />
    </div>
}`,...h.parameters?.docs?.source}}};const se=["Default","WithValue","Small","Error","WithClearIcon","Disabled","WithLeadingIcon","AllVariants"],ce=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:h,Default:n,Disabled:p,Error:d,Small:c,WithClearIcon:u,WithLeadingIcon:m,WithValue:i,__namedExportsOrder:se,default:te},Symbol.toStringTag,{value:"Module"}));export{h as A,n as D,d as E,ce as M,c as S,i as W,p as a,u as b,m as c};
