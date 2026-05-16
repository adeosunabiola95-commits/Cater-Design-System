import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as u}from"./iframe-DAe-cY6O.js";import{B as s}from"./Banner-DytR39eT.js";import{B as f}from"./Button-Cuy8_dW9.js";import{A as w,m as x}from"./proxy-DCy2txyG.js";const g={title:"Components/Banner",component:s,parameters:{docs:{description:{component:"Banners display title + description with icon and semantic states. Extracted from Figma Notification Type=Banner. States: Success, Info, Error, Warning, Grey."},source:{type:"dynamic"}}},argTypes:{state:{control:"select",options:["success","info","error","warning","grey"],table:{defaultValue:{summary:"success"}}},title:{control:"text"},description:{control:"text"}}},t="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",a={args:{state:"success",title:"You added a new reward",description:t,onClose:()=>{}}},r={args:{state:"info",title:"We've just released a new feature",description:t,onClose:()=>{}}},o={args:{state:"error",title:"There was a problem with that action",description:t,onClose:()=>{}}},i={args:{state:"warning",title:"Just to let you know this might be a problem",description:t,onClose:()=>{}}},n={args:{state:"grey",title:"We've just released a new feature",description:t,onClose:()=>{}}},c={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-2xl",children:[e.jsx(s,{state:"success",title:"You added a new reward",description:t,onClose:()=>{}}),e.jsx(s,{state:"info",title:"We've just released a new feature",description:t,onClose:()=>{}}),e.jsx(s,{state:"error",title:"There was a problem with that action",description:t,onClose:()=>{}}),e.jsx(s,{state:"warning",title:"Just to let you know this might be a problem",description:t,onClose:()=>{}}),e.jsx(s,{state:"grey",title:"We've just released a new feature",description:t,onClose:()=>{}})]})},l={name:"Example: Click to show",parameters:{docs:{description:{story:"Click the button to show an animated Banner. Uses motion for enter/exit."}}},render:function(){const[m,d]=u.useState(!1);return e.jsx("div",{className:"flex min-h-[400px] justify-center items-center",children:e.jsxs("div",{className:"flex flex-col gap-4 max-w-2xl w-full items-center",children:[e.jsx(f,{size:"small",onClick:()=>d(p=>!p),children:"Click me"}),e.jsx(w,{children:m&&e.jsx(x.div,{className:"w-full",initial:{opacity:0,y:-12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.2,ease:[.25,.1,.25,1]},children:e.jsx(s,{state:"success",title:"You added a new reward",description:t,onClose:()=>d(!1)})})})]})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'success',
    title: 'You added a new reward',
    description: defaultDescription,
    onClose: () => {}
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'info',
    title: "We've just released a new feature",
    description: defaultDescription,
    onClose: () => {}
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'error',
    title: 'There was a problem with that action',
    description: defaultDescription,
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'warning',
    title: 'Just to let you know this might be a problem',
    description: defaultDescription,
    onClose: () => {}
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'grey',
    title: "We've just released a new feature",
    description: defaultDescription,
    onClose: () => {}
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="flex flex-col gap-4 max-w-2xl">
      <Banner state="success" title="You added a new reward" description={defaultDescription} onClose={() => {}} />
      <Banner state="info" title="We've just released a new feature" description={defaultDescription} onClose={() => {}} />
      <Banner state="error" title="There was a problem with that action" description={defaultDescription} onClose={() => {}} />
      <Banner state="warning" title="Just to let you know this might be a problem" description={defaultDescription} onClose={() => {}} />
      <Banner state="grey" title="We've just released a new feature" description={defaultDescription} onClose={() => {}} />
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Example: Click to show',
  parameters: {
    docs: {
      description: {
        story: 'Click the button to show an animated Banner. Uses motion for enter/exit.'
      }
    }
  },
  render: function AnimatedExampleRender() {
    const [visible, setVisible] = React.useState(false);
    return <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-4 max-w-2xl w-full items-center">
          <Button size="small" onClick={() => setVisible(v => !v)}>Click me</Button>
        <AnimatePresence>
          {visible && <motion.div className="w-full" initial={{
            opacity: 0,
            y: -12
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -12
          }} transition={{
            duration: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}>
              <Banner state="success" title="You added a new reward" description={defaultDescription} onClose={() => setVisible(false)} />
            </motion.div>}
        </AnimatePresence>
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const y=["Success","Info","Error","Warning","Grey","AllStates","AnimatedExample"],B=Object.freeze(Object.defineProperty({__proto__:null,AllStates:c,AnimatedExample:l,Error:o,Grey:n,Info:r,Success:a,Warning:i,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{c as A,B,l as a};
