import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DAe-cY6O.js";import{M as a}from"./MessageBox-BEJOwvhc.js";import{C as m}from"./Cancel-1sRoDiDj.js";import{Chat as g}from"./Chat-D1LP0BQV.js";const y={title:"Components/Message Box",component:a,parameters:{docs:{description:{component:"A multiline text input (textarea) with the same styling as Input Field. Supports label, hint, sizes, error state, leading icon, and clear button. Uses the same border, shadow, focus ring, and motion animations."},source:{type:"dynamic"}}},argTypes:{label:{control:"text"},hint:{control:"text"},size:{control:"select",options:["sm","md"],table:{defaultValue:{summary:"md"}}},action:{control:"select",options:["default","error"],table:{defaultValue:{summary:"default"}}},placeholder:{control:"text"},rows:{control:"number",table:{defaultValue:{summary:"4"}}},resize:{control:"select",options:["none","vertical","horizontal","both"],table:{defaultValue:{summary:"vertical"}}},disabled:{control:"boolean"}}},r={args:{label:"Message *",hint:"Enter your message here.",placeholder:"Type your message..."}},s={name:"With Value",args:{label:"Message *",hint:"Enter your message here.",defaultValue:"Hello, I would like to inquire about your services.",placeholder:"Type your message..."}},l={args:{label:"Message *",hint:"Enter your message here.",size:"sm",placeholder:"Type your message..."}},t={args:{label:"Message *",hint:"This field is required.",action:"error",defaultValue:"Incomplete message",placeholder:"Type your message..."}},o={name:"With Clear Icon",render:()=>{const[u,d]=p.useState("");return e.jsx("div",{style:{width:400},children:e.jsx(a,{label:"Message *",hint:"The clear icon appears when you type.",value:u,onChange:h=>d(h.target.value),clearIcon:e.jsx(m,{width:20,height:20}),onClear:()=>d(""),placeholder:"Type your message..."})})}},n={args:{label:"Message *",hint:"This field is disabled.",defaultValue:"Disabled content",disabled:!0,placeholder:"Type your message..."}},i={name:"With Leading Icon",render:()=>e.jsx("div",{style:{width:400},children:e.jsx(a,{label:"Feedback *",hint:"Share your thoughts with us.",placeholder:"Type your feedback...",leadingIcon:e.jsx(g,{width:20,height:20})})})},c={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",style:{width:400},children:[e.jsx(a,{label:"Default",placeholder:"Default message box..."}),e.jsx(a,{label:"With value",defaultValue:"Some pre-filled content.",placeholder:"Type here..."}),e.jsx(a,{label:"Error state",action:"error",defaultValue:"Invalid input",hint:"Please correct this field.",placeholder:"Type here..."}),e.jsx(a,{label:"Disabled",disabled:!0,defaultValue:"Disabled content",placeholder:"Type here..."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message *',
    hint: 'Enter your message here.',
    placeholder: 'Type your message...'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    label: 'Message *',
    hint: 'Enter your message here.',
    defaultValue: 'Hello, I would like to inquire about your services.',
    placeholder: 'Type your message...'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message *',
    hint: 'Enter your message here.',
    size: 'sm',
    placeholder: 'Type your message...'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message *',
    hint: 'This field is required.',
    action: 'error',
    defaultValue: 'Incomplete message',
    placeholder: 'Type your message...'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Clear Icon',
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: 400
    }}>
        <MessageBox label="Message *" hint="The clear icon appears when you type." value={value} onChange={e => setValue(e.target.value)} clearIcon={<Cancel width={20} height={20} />} onClear={() => setValue('')} placeholder="Type your message..." />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message *',
    hint: 'This field is disabled.',
    defaultValue: 'Disabled content',
    disabled: true,
    placeholder: 'Type your message...'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Leading Icon',
  render: () => <div style={{
    width: 400
  }}>
      <MessageBox label="Feedback *" hint="Share your thoughts with us." placeholder="Type your feedback..." leadingIcon={<Chat width={20} height={20} />} />
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-col gap-8" style={{
    width: 400
  }}>
      <MessageBox label="Default" placeholder="Default message box..." />
      <MessageBox label="With value" defaultValue="Some pre-filled content." placeholder="Type here..." />
      <MessageBox label="Error state" action="error" defaultValue="Invalid input" hint="Please correct this field." placeholder="Type here..." />
      <MessageBox label="Disabled" disabled defaultValue="Disabled content" placeholder="Type here..." />
    </div>
}`,...c.parameters?.docs?.source}}};const b=["Default","WithValue","Small","Error","WithClearIcon","Disabled","WithLeadingIcon","AllVariants"],M=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:c,Default:r,Disabled:n,Error:t,Small:l,WithClearIcon:o,WithLeadingIcon:i,WithValue:s,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{c as A,r as D,t as E,M,l as S,s as W,n as a,o as b,i as c};
