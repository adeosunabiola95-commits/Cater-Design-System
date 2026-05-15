import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./iframe-M8wFrZyQ.js";import{M as m,a as h}from"./Modal-Cir4IY21.js";import{B as x}from"./Button-BUJifrcg.js";import{I as i}from"./InputField-CapBl8WK.js";import{B as S}from"./Banner-Dlwn7l0e.js";import{T as w}from"./TabGroup-C9YLKNn0.js";import{a as C}from"./CheckboxGroupItem-CbPb5ryf.js";import{f,D as j,c as A}from"./Icon-Cxj4HwRQ.js";import"./Chat-E4RI8uD8.js";import{C as k}from"./CopySuffix-DjEcot35.js";const I={title:"Examples/Modal",component:m,parameters:{layout:"fullscreen",viewport:{defaultViewport:"desktop"},docs:{description:{component:"Longer composed examples (forms, link entry, list picker). Same `Modal` implementation as the pattern stories; use these when you need a reference implementation to copy."},story:{iframeHeight:800},source:{type:"dynamic"}}}},l={name:"Add Business Modal",render:function(){const[n,t]=s.useState(!1);return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(x,{size:"small",onClick:()=>t(!0),children:"Open Add business"}),e.jsx(m,{open:n,onClose:()=>t(!1),title:"Add Business Info",description:"Connect a new restaurant or catering brand. You can update these details later.",footer:e.jsx(h,{primaryLabel:"Save changes",onPrimary:()=>t(!1),onSecondary:()=>t(!1),secondaryVariant:"outline"}),children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(S,{state:"info",title:"Before you add a business",description:"We’ll send a verification link to confirm ownership of this business. Make sure the details below match your catering brand."}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(i,{label:"Business name *",hint:"This is a hint text to help user.",placeholder:"Acme Catering",trailingIcon:e.jsx(f,{width:20,height:20})}),e.jsx(i,{label:"Customer name *",hint:"This is a hint text to help user.",placeholder:"Select customer",trailingIcon:e.jsx(f,{width:20,height:20})}),e.jsx(i,{label:"Due date *",hint:"This is a hint text to help user.",defaultValue:"Dec 19, 2025",trailingIcon:e.jsx(j,{width:20,height:20})}),e.jsx(i,{label:"Amount *",hint:"This is a hint text to help user.",defaultValue:"$5.00",suffix:e.jsxs("div",{className:"flex items-center gap-[4px]",children:[e.jsx("span",{className:"font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-subtitle",children:"USD"}),e.jsx(f,{width:20,height:20,className:"text-text-subtitle"})]})})]})]})})]})}},o={name:"Add Link Modal",render:function(){const[n,t]=s.useState(!0),[d,p]=s.useState("https://www.cateringrewards.io");return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(x,{size:"small",variant:"outline",onClick:()=>t(!0),children:"Open Add link"}),e.jsx(m,{open:n,onClose:()=>t(!1),size:"md",title:"Add Link",footer:e.jsx(h,{primaryLabel:"Add link",onPrimary:()=>t(!1),onSecondary:()=>t(!1),secondaryVariant:"outline"}),children:e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(i,{label:"URL",placeholder:"https://…",value:d,onChange:u=>p(u.target.value),suffixVariant:"subtle",suffix:e.jsx(k,{textToCopy:d})})})})]})}},O=[{id:"pizza-fest",label:"Pizza Fest Campaign",description:"Boost sales with festive rewards, ready in minutes!"},{id:"summer-promo",label:"Summer Promo",description:"Seasonal offers and discounts for the summer."},{id:"holiday-sale",label:"Holiday Sale",description:"End-of-year promotions and bundles."}],r={name:"Select Campaign Modal",render:function(){const[n,t]=s.useState(!1),[d,p]=s.useState(new Set(["summer-promo"])),[u,b]=s.useState("all"),v=a=>{p(y=>{const c=new Set(y);return c.has(a)?c.delete(a):c.add(a),c})};return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(x,{size:"small",onClick:()=>t(!0),children:"Open Select campaign"}),e.jsx(m,{open:n,onClose:()=>t(!1),size:"select-campaign",titleSize:"large",title:"Select campaign ",footer:e.jsx(h,{primaryLabel:"Select",onPrimary:()=>t(!1),onSecondary:()=>t(!1),secondaryLabel:"Cancel",secondaryVariant:"outline"}),children:e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx("div",{className:"shrink-0 border-b border-mirage-100 bg-white",children:e.jsx(w,{variant:"outline",size:"sm",compact:!0,showContent:!1,tabs:[{id:"all",label:"All"},{id:"active",label:"Active"},{id:"archived",label:"Archived"}],activeTabId:u,onTabChange:b})}),e.jsx("div",{className:"-mt-px min-h-0 flex-1 flex flex-col overflow-auto bg-white [&>*:not(:first-child)]:-mt-px",children:O.map(a=>e.jsx(C,{icon:e.jsx(A,{width:24,height:24,className:"text-text-body"}),label:a.label,description:a.description,checked:d.has(a.id),onChange:()=>v(a.id)},a.id))})]})})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Add Business Modal',
  render: function AddBusinessRender() {
    const [open, setOpen] = React.useState(false);
    return <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open Add business
        </Button>

        <Modal open={open} onClose={() => setOpen(false)} title="Add Business Info" description="Connect a new restaurant or catering brand. You can update these details later." footer={<ModalPrimaryActions primaryLabel="Save changes" onPrimary={() => setOpen(false)} onSecondary={() => setOpen(false)} secondaryVariant="outline" />}>
          <div className="flex flex-col gap-6">
            <Banner state="info" title="Before you add a business" description="We’ll send a verification link to confirm ownership of this business. Make sure the details below match your catering brand." />

            <div className="flex flex-col gap-3">
              <InputField label="Business name *" hint="This is a hint text to help user." placeholder="Acme Catering" trailingIcon={<ArrowDown02 width={20} height={20} />} />

              <InputField label="Customer name *" hint="This is a hint text to help user." placeholder="Select customer" trailingIcon={<ArrowDown02 width={20} height={20} />} />

              <InputField label="Due date *" hint="This is a hint text to help user." defaultValue="Dec 19, 2025" trailingIcon={<DateIcon width={20} height={20} />} />

              <InputField label="Amount *" hint="This is a hint text to help user." defaultValue="$5.00" suffix={<div className="flex items-center gap-[4px]">
                    <span className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-subtitle">
                      USD
                    </span>
                    <ArrowDown02 width={20} height={20} className="text-text-subtitle" />
                  </div>} />
            </div>
          </div>
        </Modal>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Add Link Modal',
  render: function AddLinkRender() {
    const [open, setOpen] = React.useState(true);
    const [url, setUrl] = React.useState('https://www.cateringrewards.io');
    return <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" variant="outline" onClick={() => setOpen(true)}>
          Open Add link
        </Button>

        <Modal open={open} onClose={() => setOpen(false)} size="md" title="Add Link" footer={<ModalPrimaryActions primaryLabel="Add link" onPrimary={() => setOpen(false)} onSecondary={() => setOpen(false)} secondaryVariant="outline" />}>
          <div className="flex flex-col gap-4">
            <InputField label="URL" placeholder="https://…" value={url} onChange={e => setUrl(e.target.value)} suffixVariant="subtle" suffix={<CopySuffix textToCopy={url} />} />
          </div>
        </Modal>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Select Campaign Modal',
  render: function SelectCampaignRender() {
    const [open, setOpen] = React.useState(false);
    const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set(['summer-promo']));
    const [activeTab, setActiveTab] = React.useState('all');
    const toggleCampaign = (id: string) => {
      setSelectedIds(prev => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);else next.add(id);
        return next;
      });
    };
    return <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" onClick={() => setOpen(true)}>
          Open Select campaign
        </Button>

        <Modal open={open} onClose={() => setOpen(false)} size="select-campaign" titleSize="large" title="Select campaign " footer={<ModalPrimaryActions primaryLabel="Select" onPrimary={() => setOpen(false)} onSecondary={() => setOpen(false)} secondaryLabel="Cancel" secondaryVariant="outline" />}>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="shrink-0 border-b border-mirage-100 bg-white">
              <TabGroup variant="outline" size="sm" compact showContent={false} tabs={[{
              id: 'all',
              label: 'All'
            }, {
              id: 'active',
              label: 'Active'
            }, {
              id: 'archived',
              label: 'Archived'
            }]} activeTabId={activeTab} onTabChange={setActiveTab} />
            </div>
            <div className="-mt-px min-h-0 flex-1 flex flex-col overflow-auto bg-white [&>*:not(:first-child)]:-mt-px">
              {campaignListItems.map(item => <CheckboxGroupItem key={item.id} icon={<Speaker2 width={24} height={24} className="text-text-body" />} label={item.label} description={item.description} checked={selectedIds.has(item.id)} onChange={() => toggleCampaign(item.id)} />)}
            </div>
          </div>
        </Modal>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const M=["AddBusiness","AddLink","SelectCampaign"],_=Object.freeze(Object.defineProperty({__proto__:null,AddBusiness:l,AddLink:o,SelectCampaign:r,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{l as A,_ as M,r as S,o as a};
