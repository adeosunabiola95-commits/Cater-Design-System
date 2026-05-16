import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as a}from"./iframe-DAe-cY6O.js";import{T as u}from"./Toast-C97jMm6H.js";import{B as h}from"./Button-Cuy8_dW9.js";import{A as x,m as y}from"./proxy-DCy2txyG.js";const T={title:"Components/Toast",component:u,parameters:{docs:{description:{component:"Toast — Figma component `3989:7863` (Cater Design System). Dark mirage-900 surface, 10px radius, 12px padding, 21px gap. Message 14px white with optional semibold highlight, Gossip action link, 24px close icon."},source:{type:"dynamic"}}},argTypes:{messageBefore:{control:"text"},messageHighlight:{control:"text"},messageAfter:{control:"text"},actionLabel:{control:"text"},showAction:{control:"boolean"},children:{control:"text"}}},o={args:{messageBefore:"Your ",messageHighlight:"Basic Breakfast Bar",messageAfter:" has been added to cart",actionLabel:"View",showAction:!0,onAction:()=>{},onClose:()=>{}}},n={name:"Without action",args:{messageBefore:"Your ",messageHighlight:"Basic Breakfast Bar",messageAfter:" has been added to cart",showAction:!1,onClose:()=>{}}},r={name:"Simple message",args:{children:"Payment added",showAction:!1,onClose:()=>{}}},g=[{messageBefore:"Your ",messageHighlight:"Basic Breakfast Bar",messageAfter:" has been added to cart"},{children:"Item saved"},{children:"Settings updated"},{children:"Link copied"}],k=5e3,B={initial:{opacity:0,y:16,scale:.96,filter:"blur(6px)"},animate:{opacity:1,y:0,scale:1,filter:"blur(0px)"},exit:{opacity:0,y:8,scale:.96,filter:"blur(6px)"},transition:{type:"spring",stiffness:400,damping:28,mass:.8,filter:{duration:.3,ease:[.22,.61,.36,1]}}},c={name:"Example: Stacking",parameters:{docs:{description:{story:"Click the button multiple times to add toasts. New toasts stack on top; each auto-dismisses after 5s and can be dismissed manually."},source:{type:"dynamic"}}},render:function(){const[m,s]=a.useState([]),p=a.useRef(0),f=a.useRef(0),A=a.useCallback(()=>{const t=g[f.current%g.length];f.current+=1;const d=++p.current;s(i=>[{id:d,payload:t},...i]),setTimeout(()=>{s(i=>i.filter(S=>S.id!==d))},k)},[]),v=a.useCallback(t=>{s(d=>d.filter(i=>i.id!==t))},[]);return e.jsx("div",{className:"flex min-h-[400px] justify-center items-center",children:e.jsxs("div",{className:"flex flex-col gap-6 items-center",children:[e.jsx(h,{size:"small",onClick:A,children:"Add toast"}),e.jsx(x,{mode:"popLayout",children:e.jsx("div",{className:"fixed bottom-8 right-8 flex flex-col gap-2 items-end z-50 pointer-events-none",children:m.map(t=>e.jsx(y.div,{layout:!0,...B,className:"pointer-events-auto",children:e.jsx(u,{...t.payload,actionLabel:"View",showAction:!("children"in t.payload),onAction:()=>{},onClose:()=>v(t.id)})},t.id))})})]})})}},l={name:"Example: Click to show",parameters:{docs:{description:{story:"Click the button to show a single animated Toast matching the Figma default."},source:{type:"dynamic"}}},render:function(){const[m,s]=a.useState(!1);return e.jsx("div",{className:"flex min-h-[400px] justify-center items-center",children:e.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[e.jsx(h,{size:"small",onClick:()=>s(p=>!p),children:"Click me"}),e.jsx(x,{children:m&&e.jsx(y.div,{initial:{opacity:0,y:16,scale:.96,filter:"blur(6px)"},animate:{opacity:1,y:0,scale:1,filter:"blur(0px)"},exit:{opacity:0,y:8,scale:.96,filter:"blur(6px)"},transition:{duration:.25,ease:[.22,.61,.36,1]},children:e.jsx(u,{messageBefore:"Your ",messageHighlight:"Basic Breakfast Bar",messageAfter:" has been added to cart",actionLabel:"View",onAction:()=>{},onClose:()=>s(!1)})})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    messageBefore: 'Your ',
    messageHighlight: 'Basic Breakfast Bar',
    messageAfter: ' has been added to cart',
    actionLabel: 'View',
    showAction: true,
    onAction: () => {},
    onClose: () => {}
  }
}`,...o.parameters?.docs?.source},description:{story:"Figma default: cart confirmation with View action",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Without action',
  args: {
    messageBefore: 'Your ',
    messageHighlight: 'Basic Breakfast Bar',
    messageAfter: ' has been added to cart',
    showAction: false,
    onClose: () => {}
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Simple message',
  args: {
    children: 'Payment added',
    showAction: false,
    onClose: () => {}
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Example: Stacking',
  parameters: {
    docs: {
      description: {
        story: 'Click the button multiple times to add toasts. New toasts stack on top; each auto-dismisses after 5s and can be dismissed manually.'
      },
      source: {
        type: 'dynamic'
      }
    }
  },
  render: function StackingRender() {
    const [toasts, setToasts] = React.useState<{
      id: number;
      payload: (typeof STACK_ITEMS)[number];
    }[]>([]);
    const idRef = React.useRef(0);
    const msgIndexRef = React.useRef(0);
    const addToast = React.useCallback(() => {
      const payload = STACK_ITEMS[msgIndexRef.current % STACK_ITEMS.length];
      msgIndexRef.current += 1;
      const id = ++idRef.current;
      setToasts(prev => [{
        id,
        payload
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
                  <Toast {...toast.payload} actionLabel="View" showAction={'children' in toast.payload ? false : true} onAction={() => {}} onClose={() => removeToast(toast.id)} />
                </motion.div>)}
            </div>
          </AnimatePresence>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Example: Click to show',
  parameters: {
    docs: {
      description: {
        story: 'Click the button to show a single animated Toast matching the Figma default.'
      },
      source: {
        type: 'dynamic'
      }
    }
  },
  render: function AnimatedExampleRender() {
    const [visible, setVisible] = React.useState(false);
    return <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <Button size="small" onClick={() => setVisible(v => !v)}>
            Click me
          </Button>
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
                <Toast messageBefore="Your " messageHighlight="Basic Breakfast Bar" messageAfter=" has been added to cart" actionLabel="View" onAction={() => {}} onClose={() => setVisible(false)} />
              </motion.div>}
          </AnimatePresence>
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const C=["Default","WithoutAction","SimpleMessage","Stacking","AnimatedExample"],_=Object.freeze(Object.defineProperty({__proto__:null,AnimatedExample:l,Default:o,SimpleMessage:r,Stacking:c,WithoutAction:n,__namedExportsOrder:C,default:T},Symbol.toStringTag,{value:"Module"}));export{l as A,o as D,r as S,_ as T,n as W};
