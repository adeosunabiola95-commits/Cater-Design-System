import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as n,a as d,b as m,c as u,d as p,e as x}from"./ModalHeader-DvvcZNzb.js";import{m as b,a as g}from"./modalHeaderStoryArgs-Bwh4ZHW6.js";const{expect:h,fn:H,userEvent:M,within:y}=__STORYBOOK_MODULE_TEST__;function l({children:t}){return e.jsx("div",{className:"w-full max-w-[720px] overflow-hidden rounded-t-[var(--radius-modal)] border border-dialogue-outline bg-white shadow-lg",children:t})}const f={title:"Molecules/Modal Header",component:d,parameters:{layout:"padded",docs:{description:{component:`Modal header molecule — Figma *Header container* (\`${n.titleOnly}\`) and *Header container with subtext* (\`${n.withSubtext}\`). Composed from title, subtext, close button, and text group atoms.`},source:{type:"dynamic"}}},args:{onClose:H(),closeLabel:"Close dialog"},argTypes:{variant:{control:"select",options:["title-only","with-subtext"]},title:{control:"text"},subtext:{control:"text"}}},a={name:"Header container",args:b,render:t=>e.jsx(l,{children:e.jsx(d,{...t})})},o={name:"Header container with subtext",args:g,render:t=>e.jsx(l,{children:e.jsx(d,{...t})})},r={name:"Molecule breakdown",render:()=>e.jsx(l,{children:e.jsxs("div",{className:"flex flex-col gap-8 p-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle",children:"ModalHeaderTitle"}),e.jsx(m,{children:"Complete payment"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle",children:"ModalHeaderSubtext"}),e.jsx(u,{children:"What would you like to update for this order?"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle",children:"ModalHeaderTextGroup"}),e.jsx(p,{title:"Change request",subtext:"What would you like to update for this order?",titleId:"modal-header-title-demo",subtextId:"modal-header-subtext-demo"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle",children:"ModalHeaderCloseButton"}),e.jsx(x,{"aria-label":"Close dialog",onClick:()=>{}})]})]})})},s={name:"Close interaction",args:{title:"Edit venue details",subtext:"Update the basics buyers see on your profile."},play:async({canvasElement:t,args:i})=>{const c=y(t).getByRole("button",{name:"Close dialog"});await M.click(c),await h(i.onClose).toHaveBeenCalled()},render:t=>e.jsx(l,{children:e.jsx(d,{...t})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Header container',
  args: modalHeaderTitleOnlyStory,
  render: args => <ModalHeaderFrame>
      <ModalHeader {...args} />
    </ModalHeaderFrame>
}`,...a.parameters?.docs?.source},description:{story:"Figma `4684:19909` — padding 24, title only, 32px to close.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Header container with subtext',
  args: modalHeaderWithSubtextStory,
  render: args => <ModalHeaderFrame>
      <ModalHeader {...args} />
    </ModalHeaderFrame>
}`,...o.parameters?.docs?.source},description:{story:"Figma `4684:19918` — title + 12px gap + subtext.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Molecule breakdown',
  render: () => <ModalHeaderFrame>
      <div className="flex flex-col gap-8 p-6">
        <div>
          <p className="mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle">
            ModalHeaderTitle
          </p>
          <ModalHeaderTitle>Complete payment</ModalHeaderTitle>
        </div>
        <div>
          <p className="mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle">
            ModalHeaderSubtext
          </p>
          <ModalHeaderSubtext>What would you like to update for this order?</ModalHeaderSubtext>
        </div>
        <div>
          <p className="mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle">
            ModalHeaderTextGroup
          </p>
          <ModalHeaderTextGroup title="Change request" subtext="What would you like to update for this order?" titleId="modal-header-title-demo" subtextId="modal-header-subtext-demo" />
        </div>
        <div>
          <p className="mb-2 font-body text-[12px] font-semibold uppercase tracking-wide text-text-subtle">
            ModalHeaderCloseButton
          </p>
          <ModalHeaderCloseButton aria-label="Close dialog" onClick={() => {}} />
        </div>
      </div>
    </ModalHeaderFrame>
}`,...r.parameters?.docs?.source},description:{story:"Atoms composed without the full header shell (documentation / testing).",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Close interaction',
  args: {
    title: 'Edit venue details',
    subtext: 'Update the basics buyers see on your profile.'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const close = canvas.getByRole('button', {
      name: 'Close dialog'
    });
    await userEvent.click(close);
    await expect(args.onClose).toHaveBeenCalled();
  },
  render: args => <ModalHeaderFrame>
      <ModalHeader {...args} />
    </ModalHeaderFrame>
}`,...s.parameters?.docs?.source}}};const w=["TitleOnly","WithSubtext","MoleculeBreakdown","CloseInteraction"],k=Object.freeze(Object.defineProperty({__proto__:null,CloseInteraction:s,MoleculeBreakdown:r,TitleOnly:a,WithSubtext:o,__namedExportsOrder:w,default:f},Symbol.toStringTag,{value:"Module"}));export{k as M,a as T,o as W,r as a};
