import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as a}from"./iframe-M8wFrZyQ.js";import{T as m}from"./Toast-DFwA2YEf.js";import{B as f}from"./Button-BUJifrcg.js";import{A as x,m as y}from"./proxy-Kgw04Yn3.js";const S={title:"Components/Toast",component:m,parameters:{docs:{description:{component:"Toast displays a compact dark notification. Extracted from Figma Notification Type=Toast. Supports stacking (newest on top) with motion.dev enter/exit animations."},source:{type:"dynamic"}}},argTypes:{children:{control:"text"}}},o={args:{children:"Payment added",onClose:()=>{}}},u=["Payment added","Item saved","Settings updated","Link copied","Changes saved"],b=5e3,k={initial:{opacity:0,y:16,scale:.96,filter:"blur(6px)"},animate:{opacity:1,y:0,scale:1,filter:"blur(0px)"},exit:{opacity:0,y:8,scale:.96,filter:"blur(6px)"},transition:{type:"spring",stiffness:400,damping:28,mass:.8,filter:{duration:.3,ease:[.22,.61,.36,1]}}},n={name:"Example: Stacking",parameters:{docs:{description:{story:"Click the button multiple times to add toasts. New toasts stack on top; each auto-dismisses after 5s and can be dismissed manually. Uses motion.dev spring animations for enter/exit."}}},render:function(){const[l,s]=a.useState([]),d=a.useRef(0),p=a.useRef(0),v=a.useCallback(()=>{const t=u[p.current%u.length];p.current+=1;const c=++d.current;s(i=>[{id:c,message:t},...i]),setTimeout(()=>{s(i=>i.filter(h=>h.id!==c))},b)},[]),T=a.useCallback(t=>{s(c=>c.filter(i=>i.id!==t))},[]);return e.jsx("div",{className:"flex min-h-[400px] justify-center items-center",children:e.jsxs("div",{className:"flex flex-col gap-6 items-center",children:[e.jsx(f,{size:"small",onClick:v,children:"Add toast"}),e.jsx(x,{mode:"popLayout",children:e.jsx("div",{className:"fixed bottom-8 right-8 flex flex-col gap-2 items-end z-50 pointer-events-none",children:l.map(t=>e.jsx(y.div,{layout:!0,...k,className:"pointer-events-auto",children:e.jsx(m,{onClose:()=>T(t.id),children:t.message})},t.id))})})]})})}},r={name:"Example: Click to show",parameters:{docs:{description:{story:"Click the button to show a single animated Toast. Uses motion for enter/exit."}}},render:function(){const[l,s]=a.useState(!1);return e.jsx("div",{className:"flex min-h-[400px] justify-center items-center",children:e.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[e.jsx(f,{size:"small",onClick:()=>s(d=>!d),children:"Click me"}),e.jsx(x,{children:l&&e.jsx(y.div,{initial:{opacity:0,y:16,scale:.96,filter:"blur(6px)"},animate:{opacity:1,y:0,scale:1,filter:"blur(0px)"},exit:{opacity:0,y:8,scale:.96,filter:"blur(6px)"},transition:{duration:.25,ease:[.22,.61,.36,1]},children:e.jsx(m,{onClose:()=>s(!1),children:"Payment added"})})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Payment added',
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Example: Stacking',
  parameters: {
    docs: {
      description: {
        story: 'Click the button multiple times to add toasts. New toasts stack on top; each auto-dismisses after 5s and can be dismissed manually. Uses motion.dev spring animations for enter/exit.'
      }
    }
  },
  render: function StackingRender() {
    const [toasts, setToasts] = React.useState<{
      id: number;
      message: string;
    }[]>([]);
    const idRef = React.useRef(0);
    const msgIndexRef = React.useRef(0);
    const addToast = React.useCallback(() => {
      const message = STACK_MESSAGES[msgIndexRef.current % STACK_MESSAGES.length];
      msgIndexRef.current += 1;
      const id = ++idRef.current;
      setToasts(prev => [{
        id,
        message
      }, ...prev]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, TOAST_DURATION_MS);
    }, []);
    const removeToast = React.useCallback((id: number) => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, []);
    return <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-6 items-center">
          <Button size="small" onClick={addToast}>
            Add toast
          </Button>
          <AnimatePresence mode="popLayout">
            <div className="fixed bottom-8 right-8 flex flex-col gap-2 items-end z-50 pointer-events-none">
              {toasts.map(toast => <motion.div key={toast.id} layout {...toastStackAnimation} className="pointer-events-auto">
                  <Toast onClose={() => removeToast(toast.id)}>{toast.message}</Toast>
                </motion.div>)}
            </div>
          </AnimatePresence>
        </div>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Example: Click to show',
  parameters: {
    docs: {
      description: {
        story: 'Click the button to show a single animated Toast. Uses motion for enter/exit.'
      }
    }
  },
  render: function AnimatedExampleRender() {
    const [visible, setVisible] = React.useState(false);
    return <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <Button size="small" onClick={() => setVisible(v => !v)}>Click me</Button>
          <AnimatePresence>
            {visible && <motion.div initial={{
            opacity: 0,
            y: 16,
            scale: 0.96,
            filter: 'blur(6px)'
          }} animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)'
          }} exit={{
            opacity: 0,
            y: 8,
            scale: 0.96,
            filter: 'blur(6px)'
          }} transition={{
            duration: 0.25,
            ease: [0.22, 0.61, 0.36, 1]
          }}>
                <Toast onClose={() => setVisible(false)}>Payment added</Toast>
              </motion.div>}
          </AnimatePresence>
        </div>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const C=["Default","Stacking","AnimatedExample"],_=Object.freeze(Object.defineProperty({__proto__:null,AnimatedExample:r,Default:o,Stacking:n,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{r as A,o as D,_ as T};
