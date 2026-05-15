import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as n}from"./iframe-M8wFrZyQ.js";import{D as a}from"./Modal-Cir4IY21.js";import{B as s}from"./Button-BUJifrcg.js";const o={title:"Components/Drawer",component:a,parameters:{layout:"fullscreen",viewport:{defaultViewport:"desktop"},docs:{description:{component:"Slide-in panel from the left or right for secondary flows. Reuses the same `Drawer` implementation as before (Figma node 486:2140). Width presets: sm 381px, md 420px."},story:{iframeHeight:720},source:{type:"dynamic"}}}},t={name:"Add header text",render:function(){const[i,r]=n.useState(!0);return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(s,{size:"small",variant:"secondary-color",onClick:()=>r(!0),children:"Open drawer"}),e.jsx(a,{open:i,onClose:()=>r(!1),title:"Add Title",width:"sm",children:e.jsxs("div",{className:"flex flex-col items-center gap-5",children:[e.jsx("h3",{className:"font-body font-bold text-[20px] leading-[120%] text-center text-text-title",children:"Add header text here"}),e.jsx("p",{className:"font-body text-[14px] leading-[150%] text-center text-text-subtitle max-w-[333px]",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."}),e.jsx(s,{variant:"secondary-color",size:"medium",onClick:()=>r(!1),children:"Save"})]})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Add header text',
  render: function AddHeaderTextRender() {
    const [open, setOpen] = React.useState(true);
    return <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" variant="secondary-color" onClick={() => setOpen(true)}>
          Open drawer
        </Button>

        <Drawer open={open} onClose={() => setOpen(false)} title="Add Title" width="sm">
          <div className="flex flex-col items-center gap-5">
            <h3 className="font-body font-bold text-[20px] leading-[120%] text-center text-text-title">
              Add header text here
            </h3>
            <p className="font-body text-[14px] leading-[150%] text-center text-text-subtitle max-w-[333px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </p>
            <Button variant="secondary-color" size="medium" onClick={() => setOpen(false)}>
              Save
            </Button>
          </div>
        </Drawer>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const d=["AddHeaderText"],u=Object.freeze(Object.defineProperty({__proto__:null,AddHeaderText:t,__namedExportsOrder:d,default:o},Symbol.toStringTag,{value:"Module"}));export{t as A,u as D};
