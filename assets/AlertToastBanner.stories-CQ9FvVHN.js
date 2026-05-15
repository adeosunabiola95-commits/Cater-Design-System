import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as t}from"./iframe-M8wFrZyQ.js";import{A as h}from"./Alert-3zTOM85j.js";import{T as j}from"./Toast-DFwA2YEf.js";import{B as R}from"./Banner-Dlwn7l0e.js";import{B as r}from"./Button-BUJifrcg.js";import{A as l,m as c}from"./proxy-Kgw04Yn3.js";const B={title:"Examples/Alert, Toast & Banner",parameters:{docs:{description:{component:"Click each button to show an animated Alert, Toast, or Banner. Toasts stack (newest on top), auto-dismiss after 5s, and can be dismissed manually. Uses motion.dev spring animations for enter/exit."},source:{type:"dynamic"}}}},p={initial:{opacity:0,y:-12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.2,ease:[.25,.1,.25,1]}},f=["Payment added","Item saved","Settings updated","Link copied","Changes saved"],k=5e3,C={initial:{opacity:0,y:16,scale:.96,filter:"blur(6px)"},animate:{opacity:1,y:0,scale:1,filter:"blur(0px)"},exit:{opacity:0,y:8,scale:.96,filter:"blur(6px)"},transition:{type:"spring",stiffness:400,damping:28,mass:.8,filter:{duration:.3,ease:[.22,.61,.36,1]}}},i={name:"Alert, Toast, Banner",render:function(){const[x,d]=t.useState(!1),[v,o]=t.useState([]),[b,m]=t.useState(!1),g=t.useRef(0),u=t.useRef(0),y=t.useCallback(()=>{const s=f[u.current%f.length];u.current+=1;const n=++g.current;o(a=>[{id:n,message:s},...a]),setTimeout(()=>{o(a=>a.filter(T=>T.id!==n))},k)},[]),A=t.useCallback(s=>{o(n=>n.filter(a=>a.id!==s))},[]);return e.jsx("div",{className:"flex min-h-[400px] justify-center items-center",children:e.jsxs("div",{className:"flex flex-col gap-8 max-w-2xl w-full p-4 items-center",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[e.jsx(r,{size:"small",onClick:()=>d(s=>!s),children:"Alert"}),e.jsx(r,{size:"small",onClick:y,children:"Toast"}),e.jsx(r,{size:"small",onClick:()=>m(s=>!s),children:"Banner"})]}),e.jsxs("div",{className:"flex flex-col gap-6 w-full items-center",children:[e.jsx(l,{children:x&&e.jsx(c.div,{...p,children:e.jsx(h,{state:"success",onClose:()=>d(!1),children:"We've just sent a password reset link to your email. Please check your inbox"})},"alert")}),e.jsx(l,{mode:"popLayout",children:e.jsx("div",{className:"fixed bottom-8 right-8 flex flex-col gap-2 items-end z-50 pointer-events-none",children:v.map(s=>e.jsx(c.div,{layout:!0,...C,className:"pointer-events-auto",children:e.jsx(j,{onClose:()=>A(s.id),children:s.message})},s.id))})}),e.jsx(l,{children:b&&e.jsx(c.div,{...p,children:e.jsx(R,{state:"success",title:"You added a new reward",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",onClose:()=>m(!1)})},"banner")})]})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Alert, Toast, Banner',
  render: function AnimatedExamplesRender() {
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [toasts, setToasts] = React.useState<{
      id: number;
      message: string;
    }[]>([]);
    const [bannerVisible, setBannerVisible] = React.useState(false);
    const toastIdRef = React.useRef(0);
    const toastMessageIndexRef = React.useRef(0);
    const addToast = React.useCallback(() => {
      const message = toastMessages[toastMessageIndexRef.current % toastMessages.length];
      toastMessageIndexRef.current += 1;
      const id = ++toastIdRef.current;
      setToasts(prev => [{
        id,
        message
      }, ...prev]);
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, TOAST_DURATION_MS);
    }, []);
    const removeToast = React.useCallback((id: number) => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, []);
    return <div className="flex min-h-[400px] justify-center items-center">
        <div className="flex flex-col gap-8 max-w-2xl w-full p-4 items-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="small" onClick={() => setAlertVisible(v => !v)}>Alert</Button>
            <Button size="small" onClick={addToast}>Toast</Button>
            <Button size="small" onClick={() => setBannerVisible(v => !v)}>Banner</Button>
          </div>

          <div className="flex flex-col gap-6 w-full items-center">
            <AnimatePresence>
              {alertVisible && <motion.div key="alert" {...slideUp}>
                  <Alert state="success" onClose={() => setAlertVisible(false)}>
                    We've just sent a password reset link to your email. Please check your inbox
                  </Alert>
                </motion.div>}
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
              <div className="fixed bottom-8 right-8 flex flex-col gap-2 items-end z-50 pointer-events-none">
                {toasts.map(toast => <motion.div key={toast.id} layout {...toastEnterExit} className="pointer-events-auto">
                    <Toast onClose={() => removeToast(toast.id)}>{toast.message}</Toast>
                  </motion.div>)}
              </div>
            </AnimatePresence>

            <AnimatePresence>
              {bannerVisible && <motion.div key="banner" {...slideUp}>
                  <Banner state="success" title="You added a new reward" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." onClose={() => setBannerVisible(false)} />
                </motion.div>}
            </AnimatePresence>
          </div>
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const w=["AnimatedExamples"],z=Object.freeze(Object.defineProperty({__proto__:null,AnimatedExamples:i,__namedExportsOrder:w,default:B},Symbol.toStringTag,{value:"Module"}));export{z as A,i as a};
