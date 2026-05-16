import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-DAe-cY6O.js";import{B as d}from"./Button-Cuy8_dW9.js";import{I as n}from"./InputField-BUTCwuFN.js";import{a as m,M as c,m as f}from"./modalHeaderStoryArgs-Bwh4ZHW6.js";import{M as p,a as u}from"./Modal-BLu9InBk.js";import"./preload-helper-QhaUMbJ9.js";import"./proxy-DCy2txyG.js";import"./ModalHeader-DvvcZNzb.js";import"./Icon-hv7FGtLB.js";import"./Cancel-1sRoDiDj.js";import"./Chat-D1LP0BQV.js";import"./use-reduced-motion-DLMRVVQc.js";const T={title:"Components/Modal",component:p,parameters:{layout:"fullscreen",viewport:{defaultViewport:"desktop"},docs:{description:{component:"Centered dialog — **header** (`ModalHeader`), **body** (`ModalBody`), **actions** (`ModalActions`). Header copy and layout match **Molecules → Modal Header** (Figma `4684:19909` / `4684:19918`)."},story:{iframeHeight:800},source:{type:"dynamic"}}}};function i({children:y,...h}){const[x,l]=b.useState(!0);return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(d,{size:"small",onClick:()=>l(!0),children:"Open modal"}),e.jsx(p,{...h,open:x,onClose:()=>l(!1),children:y})]})}const t={name:"Header · Title only",render:()=>e.jsx(i,{size:c,title:f.title})},a={name:"Header · With subtext",render:()=>e.jsx(i,{size:c,title:m.title,description:m.subtext})},r={name:"01 · Inform",render:()=>e.jsx(i,{size:"sm",title:"Updates published",description:"Customers can now see these updates on your storefront.",actions:e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(d,{variant:"ghost",size:"small",type:"button",children:"Close"}),e.jsx(d,{variant:"primary",size:"small",type:"button",children:"Got it"})]}),children:e.jsx("p",{className:"font-body text-[14px] leading-[150%] text-text-subtitle",children:"You can unpublish or edit these details anytime from Settings."})})},o={name:"02 · Confirm",render:()=>e.jsx(i,{size:"sm",title:"Remove this item?",description:"This removes the item from the order. You can add it again later.",actions:e.jsx(u,{primaryLabel:"Remove",onPrimary:()=>{},onSecondary:()=>{},secondaryLabel:"Keep item",secondaryVariant:"outline"})})},s={name:"03 · Task / Form",render:()=>e.jsx(i,{size:"md",title:"Edit venue details",description:"Update the basics buyers see on your profile.",actions:e.jsx(u,{primaryLabel:"Save",onPrimary:()=>{},onSecondary:()=>{},secondaryVariant:"outline"}),children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{label:"Display name *",inputKind:"name",placeholder:"Northside Kitchen"}),e.jsx(n,{label:"Contact email *",inputKind:"email"}),e.jsx(n,{label:"Phone number *",inputKind:"phone"})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Header · Title only',
  render: () => <ModalDemo size={MODAL_HEADER_PREVIEW_SIZE} title={modalHeaderTitleOnlyStory.title} />
}`,...t.parameters?.docs?.source},description:{story:"Same header as Molecules → Modal Header → Header container.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Header · With subtext',
  render: () => <ModalDemo size={MODAL_HEADER_PREVIEW_SIZE} title={modalHeaderWithSubtextStory.title} description={modalHeaderWithSubtextStory.subtext} />
}`,...a.parameters?.docs?.source},description:{story:"Same header as Molecules → Modal Header → Header container with subtext.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '01 · Inform',
  render: () => <ModalDemo size="sm" title="Updates published" description="Customers can now see these updates on your storefront." actions={<div className="flex justify-end gap-3">
          <Button variant="ghost" size="small" type="button">
            Close
          </Button>
          <Button variant="primary" size="small" type="button">
            Got it
          </Button>
        </div>}>
      <p className="font-body text-[14px] leading-[150%] text-text-subtitle">
        You can unpublish or edit these details anytime from Settings.
      </p>
    </ModalDemo>
}`,...r.parameters?.docs?.source},description:{story:"Acknowledgement — subtext in header, optional body copy.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '02 · Confirm',
  render: () => <ModalDemo size="sm" title="Remove this item?" description="This removes the item from the order. You can add it again later." actions={<ModalPrimaryActions primaryLabel="Remove" onPrimary={() => {}} onSecondary={() => {}} secondaryLabel="Keep item" secondaryVariant="outline" />} />
}`,...o.parameters?.docs?.source},description:{story:"Decision — header subtext only, no body.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '03 · Task / Form',
  render: () => <ModalDemo size="md" title="Edit venue details" description="Update the basics buyers see on your profile." actions={<ModalPrimaryActions primaryLabel="Save" onPrimary={() => {}} onSecondary={() => {}} secondaryVariant="outline" />}>
      <div className="flex flex-col gap-4">
        <InputField label="Display name *" inputKind="name" placeholder="Northside Kitchen" />
        <InputField label="Contact email *" inputKind="email" />
        <InputField label="Phone number *" inputKind="phone" />
      </div>
    </ModalDemo>
}`,...s.parameters?.docs?.source},description:{story:"Form — scrollable body between header and actions.",...s.parameters?.docs?.description}}};const A=["TitleOnlyHeader","HeaderWithSubtext","Inform","Confirm","Task"];export{o as Confirm,a as HeaderWithSubtext,r as Inform,s as Task,t as TitleOnlyHeader,A as __namedExportsOrder,T as default};
