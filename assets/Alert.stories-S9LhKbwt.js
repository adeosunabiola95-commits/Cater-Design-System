import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as p}from"./iframe-M8wFrZyQ.js";import{A as l}from"./Alert-3zTOM85j.js";import{B as y}from"./Button-BUJifrcg.js";import{A as x,m as f}from"./proxy-Kgw04Yn3.js";const h={title:"Components/Alert",component:l,parameters:{docs:{description:{component:"Alerts display inline messages with semantic states. Extracted from Figma Notification Type=Alerts. States: Success, Info, Error, Warning, Grey."},source:{type:"dynamic"}}},argTypes:{state:{control:"select",options:["success","info","error","warning","grey"],table:{defaultValue:{summary:"success"}}},children:{control:"text"}}},r={args:{state:"success",children:"We've just sent a password reset link to your email. Please check your inbox",onClose:()=>{}}},t={args:{state:"info",children:"We've just sent a password reset link to your email. Please check your inbox",onClose:()=>{}}},a={args:{state:"error",children:"We've just sent a password reset link to your email. Please check your inbox",onClose:()=>{}}},o={args:{state:"warning",children:"We've just sent a password reset link to your email. Please check your inbox",onClose:()=>{}}},n={args:{state:"grey",children:"We've just sent a password reset link to your email. Please check your inbox",onClose:()=>{}}},i={name:"All States",render:()=>e.jsx("div",{className:"flex flex-col gap-4 max-w-2xl",children:["success","info","error","warning","grey"].map(s=>e.jsxs(l,{state:s,onClose:()=>{},children:[s.charAt(0).toUpperCase()+s.slice(1)," alert message"]},s))})},c={name:"Example: Click to show",parameters:{docs:{description:{story:"Click the button to show an animated Alert. Uses motion for enter/exit."}}},render:function(){const[u,m]=p.useState(!1);return e.jsx("div",{className:"flex min-h-[400px] justify-center items-center",children:e.jsxs("div",{className:"flex flex-col gap-4 max-w-2xl w-full items-center",children:[e.jsx(y,{size:"small",onClick:()=>m(d=>!d),children:"Click me"}),e.jsx(x,{children:u&&e.jsx(f.div,{className:"w-full",initial:{opacity:0,y:-12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.2,ease:[.25,.1,.25,1]},children:e.jsx(l,{state:"success",onClose:()=>m(!1),children:"We've just sent a password reset link to your email. Please check your inbox"})})})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'success',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {}
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'info',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {}
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'error',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {}
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'warning',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'grey',
    children: "We've just sent a password reset link to your email. Please check your inbox",
    onClose: () => {}
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="flex flex-col gap-4 max-w-2xl">
      {(['success', 'info', 'error', 'warning', 'grey'] as const).map(state => <Alert key={state} state={state} onClose={() => {}}>
          {state.charAt(0).toUpperCase() + state.slice(1)} alert message
        </Alert>)}
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Example: Click to show',
  parameters: {
    docs: {
      description: {
        story: 'Click the button to show an animated Alert. Uses motion for enter/exit.'
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
              <Alert state="success" onClose={() => setVisible(false)}>
                We've just sent a password reset link to your email. Please check your inbox
              </Alert>
            </motion.div>}
        </AnimatePresence>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const g=["Success","Info","Error","Warning","Grey","AllStates","AnimatedExample"],j=Object.freeze(Object.defineProperty({__proto__:null,AllStates:i,AnimatedExample:c,Error:a,Grey:n,Info:t,Success:r,Warning:o,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{j as A,i as a,c as b};
