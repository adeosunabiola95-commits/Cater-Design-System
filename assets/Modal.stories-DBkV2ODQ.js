import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-M8wFrZyQ.js";import{M as d,a as f}from"./Modal-Cir4IY21.js";import{B as c}from"./Button-BUJifrcg.js";import{I as u}from"./InputField-CapBl8WK.js";import{T as k}from"./TabGroup-C9YLKNn0.js";import{a as C}from"./CheckboxGroupItem-CbPb5ryf.js";import{c as j}from"./Icon-Cxj4HwRQ.js";import"./Chat-E4RI8uD8.js";const S={title:"Components/Modal",component:d,parameters:{layout:"fullscreen",viewport:{defaultViewport:"desktop"},docs:{description:{component:"Centered dialogs for Cater Design Systems. Four patterns (inform, confirm, task, list picker). See **Examples → Modal** for composed flows and **Components → Drawer** for the slide-in panel."},story:{iframeHeight:800},source:{type:"dynamic"}}}},n={name:"01 · Inform",render:function(){const[o,t]=l.useState(!0);return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(c,{size:"small",onClick:()=>t(!0),children:"Open inform modal"}),e.jsx(d,{open:o,onClose:()=>t(!1),size:"sm",title:"Updates published",description:"Customers can now see these updates on your storefront.",footer:e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(c,{variant:"ghost",size:"small",type:"button",onClick:()=>t(!1),children:"Close"}),e.jsx(c,{variant:"primary",size:"small",type:"button",onClick:()=>t(!1),children:"Got it"})]}),children:e.jsx("p",{className:"font-body text-[14px] leading-[150%] text-text-subtitle",children:"You can unpublish or edit these details anytime from Settings."})})]})}},a={name:"02 · Confirm",render:function(){const[o,t]=l.useState(!0);return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(c,{size:"small",variant:"outline",onClick:()=>t(!0),children:"Open confirm modal"}),e.jsx(d,{open:o,onClose:()=>t(!1),size:"sm",title:"Remove this item?",description:"This removes the item from the order. You can add it again later.",footer:e.jsx(f,{primaryLabel:"Remove",onPrimary:()=>t(!1),onSecondary:()=>t(!1),secondaryLabel:"Keep item",secondaryVariant:"outline"})})]})}},r={name:"03 · Task / Form",render:function(){const[o,t]=l.useState(!0);return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(c,{size:"small",onClick:()=>t(!0),children:"Open task modal"}),e.jsx(d,{open:o,onClose:()=>t(!1),size:"md",title:"Edit venue details",description:"Update the basics buyers see on your profile.",footer:e.jsx(f,{primaryLabel:"Save",onPrimary:()=>t(!1),onSecondary:()=>t(!1),secondaryVariant:"outline"}),children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{label:"Display name *",placeholder:"Northside Kitchen"}),e.jsx(u,{label:"Contact email *",placeholder:"hello@example.com"}),e.jsx(u,{label:"Phone",placeholder:"+1 …"})]})})]})}},O=[{id:"a",label:"Spring tasting",description:"March 12 · 24 guests"},{id:"b",label:"Corporate lunch",description:"April 3 · 60 guests"},{id:"c",label:"Wedding reception",description:"May 20 · 120 guests"}],i={name:"04 · List picker",render:function(){const[o,t]=l.useState(!0),[h,x]=l.useState(new Set(["b"])),[b,y]=l.useState("all"),g=s=>{x(v=>{const m=new Set(v);return m.has(s)?m.delete(s):m.add(s),m})};return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(c,{size:"small",onClick:()=>t(!0),children:"Open picker modal"}),e.jsx(d,{open:o,onClose:()=>t(!1),size:"select-campaign",titleSize:"large",title:"Choose events",footer:e.jsx(f,{primaryLabel:"Apply",onPrimary:()=>t(!1),onSecondary:()=>t(!1),secondaryLabel:"Cancel",secondaryVariant:"outline"}),children:e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx("div",{className:"shrink-0 border-b border-mirage-100 bg-white",children:e.jsx(k,{variant:"outline",size:"sm",compact:!0,showContent:!1,tabs:[{id:"all",label:"All"},{id:"upcoming",label:"Upcoming"},{id:"past",label:"Past"}],activeTabId:b,onTabChange:y})}),e.jsx("div",{className:"-mt-px min-h-0 flex-1 flex flex-col overflow-auto bg-white [&>*:not(:first-child)]:-mt-px",children:O.map(s=>e.jsx(C,{icon:e.jsx(j,{width:24,height:24,className:"text-text-body"}),label:s.label,description:s.description,checked:h.has(s.id),onChange:()=>g(s.id)},s.id))})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '01 · Inform',
  render: function InformRender() {
    const [open, setOpen] = React.useState(true);
    return <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open inform modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm" title="Updates published" description="Customers can now see these updates on your storefront." footer={<div className="flex justify-end gap-3">
              <Button variant="ghost" size="small" type="button" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button variant="primary" size="small" type="button" onClick={() => setOpen(false)}>
                Got it
              </Button>
            </div>}>
          <p className="font-body text-[14px] leading-[150%] text-text-subtitle">
            You can unpublish or edit these details anytime from Settings.
          </p>
        </Modal>
      </div>;
  }
}`,...n.parameters?.docs?.source},description:{story:"Pattern 1 — Acknowledgement or lightweight message; primary acknowledgement + optional dismiss.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '02 · Confirm',
  render: function ConfirmRender() {
    const [open, setOpen] = React.useState(true);
    return <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" variant="outline" onClick={() => setOpen(true)}>
          Open confirm modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm" title="Remove this item?" description="This removes the item from the order. You can add it again later." footer={<ModalPrimaryActions primaryLabel="Remove" onPrimary={() => setOpen(false)} onSecondary={() => setOpen(false)} secondaryLabel="Keep item" secondaryVariant="outline" />} />
      </div>;
  }
}`,...a.parameters?.docs?.source},description:{story:"Pattern 2 — Decision with explicit cancel; use for destructive or irreversible actions.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '03 · Task / Form',
  render: function TaskRender() {
    const [open, setOpen] = React.useState(true);
    return <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open task modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} size="md" title="Edit venue details" description="Update the basics buyers see on your profile." footer={<ModalPrimaryActions primaryLabel="Save" onPrimary={() => setOpen(false)} onSecondary={() => setOpen(false)} secondaryVariant="outline" />}>
          <div className="flex flex-col gap-4">
            <InputField label="Display name *" placeholder="Northside Kitchen" />
            <InputField label="Contact email *" placeholder="hello@example.com" />
            <InputField label="Phone" placeholder="+1 …" />
          </div>
        </Modal>
      </div>;
  }
}`,...r.parameters?.docs?.source},description:{story:"Pattern 3 — Forms or longer content; scrollable body with standard footer.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '04 · List picker',
  render: function PickerRender() {
    const [open, setOpen] = React.useState(true);
    const [picked, setPicked] = React.useState<Set<string>>(new Set(['b']));
    const [tab, setTab] = React.useState('all');
    const toggle = (id: string) => {
      setPicked(prev => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);else next.add(id);
        return next;
      });
    };
    return <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open picker modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} size="select-campaign" titleSize="large" title="Choose events" footer={<ModalPrimaryActions primaryLabel="Apply" onPrimary={() => setOpen(false)} onSecondary={() => setOpen(false)} secondaryLabel="Cancel" secondaryVariant="outline" />}>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="shrink-0 border-b border-mirage-100 bg-white">
              <TabGroup variant="outline" size="sm" compact showContent={false} tabs={[{
              id: 'all',
              label: 'All'
            }, {
              id: 'upcoming',
              label: 'Upcoming'
            }, {
              id: 'past',
              label: 'Past'
            }]} activeTabId={tab} onTabChange={setTab} />
            </div>
            <div className="-mt-px min-h-0 flex-1 flex flex-col overflow-auto bg-white [&>*:not(:first-child)]:-mt-px">
              {pickerItems.map(item => <CheckboxGroupItem key={item.id} icon={<Speaker2 width={24} height={24} className="text-text-body" />} label={item.label} description={item.description} checked={picked.has(item.id)} onChange={() => toggle(item.id)} />)}
            </div>
          </div>
        </Modal>
      </div>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Pattern 4 — Optional filters + scrollable selectable list; footer confirms selection.",...i.parameters?.docs?.description}}};const w=["Inform","Confirm","Task","Picker"],A=Object.freeze(Object.defineProperty({__proto__:null,Confirm:a,Inform:n,Picker:i,Task:r,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{a as C,n as I,A as M,i as P,r as T};
