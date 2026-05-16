import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as i}from"./iframe-DAe-cY6O.js";import{D as n}from"./Modal-BLu9InBk.js";import{B as a}from"./Button-Cuy8_dW9.js";const o={title:"Examples/Header Text Drawer",component:n,parameters:{layout:"centered",docs:{description:{component:"Add Header Text Drawer pattern from Figma (node 486:2140). Slide-in panel with title, centered content, and Save action."},source:{type:"dynamic"}}}},t={render:function(){const[s,r]=i.useState(!1);return e.jsxs("div",{className:"flex min-h-screen w-full items-center justify-center",children:[e.jsx(a,{size:"small",variant:"secondary-color",onClick:()=>r(!0),children:"Open Add Header Text Drawer"}),e.jsx(n,{open:s,onClose:()=>r(!1),title:"Add Title",width:"sm",children:e.jsxs("div",{className:"flex flex-col items-center gap-5",children:[e.jsx("h3",{className:"font-body font-bold text-[20px] leading-[120%] text-center text-text-title",children:"Add header text here"}),e.jsx("p",{className:"font-body text-[14px] leading-[150%] text-center text-text-subtitle max-w-[333px]",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."}),e.jsx(a,{variant:"secondary-color",size:"medium",onClick:()=>r(!1),children:"Save"})]})})]})},parameters:{docs:{description:{story:"Drawer pattern with centered content: title, description text, and Save button. Maps to Figma node 486:2140. Width sm (381px)."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function AddHeaderTextDrawerRender() {
    const [open, setOpen] = React.useState(false);
    return <div className="flex min-h-screen w-full items-center justify-center">
        <Button size="small" variant="secondary-color" onClick={() => setOpen(true)}>
          Open Add Header Text Drawer
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Drawer pattern with centered content: title, description text, and Save button. Maps to Figma node 486:2140. Width sm (381px).'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const d=["AddHeaderTextDrawer"],u=Object.freeze(Object.defineProperty({__proto__:null,AddHeaderTextDrawer:t,__namedExportsOrder:d,default:o},Symbol.toStringTag,{value:"Module"}));export{t as A,u as H};
