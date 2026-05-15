import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as D}from"./iframe-M8wFrZyQ.js";import{I as i}from"./InputField-CapBl8WK.js";import{D as A}from"./DateInput-C-VVgufs.js";import{f as a,S as T}from"./Icon-Cxj4HwRQ.js";import{C as V}from"./Chat-E4RI8uD8.js";import{C as S}from"./CopySuffix-DjEcot35.js";const j={title:"Components/Input Field",component:i,parameters:{docs:{description:{component:"Input fields allow users to enter text. Available in 2 sizes (sm, md), 5 types (name, company, amount, date, copy), and 2 action states (default, error). Extracted pixel-for-pixel from the Cater Design Systems Figma."},source:{type:"dynamic"}}},argTypes:{label:{control:"text"},hint:{control:"text"},size:{control:"select",options:["sm","md"],table:{defaultValue:{summary:"md"}}},action:{control:"select",options:["default","error"],table:{defaultValue:{summary:"default"}}},placeholder:{control:"text"},disabled:{control:"boolean"}}},n={args:{label:"Business name *",hint:"This is a hint text to help user.",placeholder:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})}},s={name:"With Value",args:{label:"Business name *",hint:"This is a hint text to help user.",defaultValue:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})}},r={args:{label:"Business name *",hint:"This is a hint text to help user.",action:"error",defaultValue:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})}},o={args:{label:"Business name *",hint:"This is a hint text to help user.",size:"sm",placeholder:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})}},l={args:{label:"Business name *",hint:"This is a hint text to help user.",size:"md",placeholder:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})}},c={name:"Type: Name",args:{label:"Business name *",hint:"This is a hint text to help user.",defaultValue:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})}},u={name:"Type: Company",render:()=>{const[t,b]=D.useState("Mubarak Alumn");return e.jsx("div",{style:{width:331},children:e.jsx(i,{label:"Customer name *",hint:"This is a hint text to help user.",value:t,onChange:w=>b(w.target.value),leadingIcon:e.jsx(T,{width:20,height:20}),clearIcon:e.jsx(V,{width:20,height:20}),onClear:()=>b("")})})}},p={name:"Type: Amount",render:()=>e.jsx("div",{style:{width:331},children:e.jsx(i,{label:"Amount *",hint:"This is a hint text to help user.",defaultValue:"$5.00",suffix:e.jsxs("div",{className:"flex items-center gap-[4px]",children:[e.jsx("span",{className:"font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-subtitle",children:"USD"}),e.jsx(a,{width:20,height:20,className:"text-text-subtitle"})]})})})},d={name:"Type: Date",render:()=>e.jsx("div",{style:{width:331},children:e.jsx(A,{label:"Due Date *",hint:"Click the field to open the calendar.",defaultValue:new Date(2025,11,19)})})},m={name:"Type: Copy",render:()=>e.jsx("div",{style:{width:331},children:e.jsx(i,{label:"Website *",hint:"This is a hint text to help user.",defaultValue:"www.cateringrewards.io",suffixVariant:"subtle",suffix:e.jsx(S,{})})})},h={name:"Copy Animation Playground",argTypes:{iconStiffness:{control:{type:"range",min:50,max:1e3,step:10},description:"Spring stiffness for the icon swap",table:{defaultValue:{summary:"500"}}},iconDamping:{control:{type:"range",min:5,max:60,step:1},description:"Spring damping for the icon swap",table:{defaultValue:{summary:"25"}}},iconBounce:{control:{type:"range",min:0,max:1,step:.05},description:"Bounce for icon (0 = no overshoot, 1 = very bouncy)",table:{defaultValue:{summary:"0.25"}}},iconRotation:{control:{type:"range",min:0,max:180,step:5},description:"Rotation angle (degrees) on icon enter/exit",table:{defaultValue:{summary:"45"}}},iconExitScale:{control:{type:"range",min:0,max:1,step:.05},description:"Scale the icon shrinks to on exit",table:{defaultValue:{summary:"0.5"}}},textStiffness:{control:{type:"range",min:50,max:1e3,step:10},description:"Spring stiffness for the text slide",table:{defaultValue:{summary:"400"}}},textDamping:{control:{type:"range",min:5,max:60,step:1},description:"Spring damping for the text slide",table:{defaultValue:{summary:"22"}}},textBounce:{control:{type:"range",min:0,max:1,step:.05},description:"Bounce for text (0 = no overshoot, 1 = very bouncy)",table:{defaultValue:{summary:"0.2"}}},textSlideDistance:{control:{type:"range",min:0,max:40,step:1},description:"Vertical slide distance (px) for text",table:{defaultValue:{summary:"12"}}},textBlur:{control:{type:"range",min:0,max:12,step:.5},description:"Blur amount (px) during text transition",table:{defaultValue:{summary:"4"}}},resetDelay:{control:{type:"range",min:500,max:5e3,step:100},description:'How long "Copied" stays before reverting (ms)',table:{defaultValue:{summary:"2000"}}}},args:{iconStiffness:80,iconDamping:8,iconBounce:.05,iconRotation:15,iconExitScale:.1,textStiffness:140,textDamping:9,textBounce:.2,textSlideDistance:12,textBlur:1.5,resetDelay:600},render:t=>e.jsx("div",{style:{width:331},children:e.jsx(i,{label:"Website *",hint:"Adjust the controls in the panel below, then click Copy to preview.",defaultValue:"www.cateringrewards.io",suffixVariant:"subtle",suffix:e.jsx(S,{iconStiffness:t.iconStiffness,iconDamping:t.iconDamping,iconBounce:t.iconBounce,iconRotation:t.iconRotation,iconExitScale:t.iconExitScale,textStiffness:t.textStiffness,textDamping:t.textDamping,textBounce:t.textBounce,textSlideDistance:t.textSlideDistance,textBlur:t.textBlur,resetDelay:t.resetDelay})})})};function I({hint:t="This is a hint text to help user."}){const[b,w]=D.useState("Mubarak Alumn");return e.jsx(i,{label:"Customer name *",hint:t,value:b,onChange:v=>w(v.target.value),leadingIcon:e.jsx(T,{width:20,height:20}),clearIcon:e.jsx(V,{width:20,height:20}),onClear:()=>w("")})}const x={name:"All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"flex-start"},children:[e.jsx("div",{style:{width:331},children:e.jsx(i,{label:"Small",hint:"This is a hint text to help user.",size:"sm",placeholder:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})})}),e.jsx("div",{style:{width:331},children:e.jsx(i,{label:"Medium",hint:"This is a hint text to help user.",size:"md",placeholder:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})})})]})},g={name:"All Actions",render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"flex-start"},children:[e.jsx("div",{style:{width:331},children:e.jsx(i,{label:"Default",hint:"This is a hint text to help user.",defaultValue:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})})}),e.jsx("div",{style:{width:331},children:e.jsx(i,{label:"Error",hint:"This field is required.",action:"error",defaultValue:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})})})]})},f={name:"All Types",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 331px)",gap:32},children:[e.jsx(i,{label:"Business name *",hint:"Type: Name",defaultValue:"Acme Shop",trailingIcon:e.jsx(a,{width:20,height:20})}),e.jsx(I,{hint:"Type: Company"}),e.jsx(i,{label:"Amount *",hint:"Type: Amount",defaultValue:"$5.00",suffix:e.jsxs("div",{className:"flex items-center gap-[4px]",children:[e.jsx("span",{className:"font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-subtitle",children:"USD"}),e.jsx(a,{width:20,height:20,className:"text-text-subtitle"})]})}),e.jsx(A,{label:"Due Date *",hint:"Type: Date (click to open calendar)",defaultValue:new Date(2025,11,19)}),e.jsx(i,{label:"Website *",hint:"Type: Copy",defaultValue:"www.cateringrewards.io",suffixVariant:"subtle",suffix:e.jsx(S,{})})]})},y={args:{label:"Business name *",hint:"This is a hint text to help user.",placeholder:"Acme Shop",disabled:!0,trailingIcon:e.jsx(a,{width:20,height:20})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    placeholder: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Value',
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    defaultValue: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    action: 'error',
    defaultValue: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    size: 'sm',
    placeholder: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    size: 'md',
    placeholder: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Type: Name',
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    defaultValue: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Type: Company',
  render: () => {
    const [value, setValue] = React.useState('Mubarak Alumn');
    return <div style={{
      width: 331
    }}>
        <InputField label="Customer name *" hint="This is a hint text to help user." value={value} onChange={e => setValue(e.target.value)} leadingIcon={<Search width={20} height={20} />} clearIcon={<Cancel width={20} height={20} />} onClear={() => setValue('')} />
      </div>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Type: Amount',
  render: () => <div style={{
    width: 331
  }}>
      <InputField label="Amount *" hint="This is a hint text to help user." defaultValue="$5.00" suffix={<div className="flex items-center gap-[4px]">
            <span className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-subtitle">
              USD
            </span>
            <ArrowDown02 width={20} height={20} className="text-text-subtitle" />
          </div>} />
    </div>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Type: Date',
  render: () => <div style={{
    width: 331
  }}>
      <DateInput label="Due Date *" hint="Click the field to open the calendar." defaultValue={new Date(2025, 11, 19)} />
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Type: Copy',
  render: () => <div style={{
    width: 331
  }}>
      <InputField label="Website *" hint="This is a hint text to help user." defaultValue="www.cateringrewards.io" suffixVariant="subtle" suffix={<CopySuffix />} />
    </div>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Copy Animation Playground',
  argTypes: {
    iconStiffness: {
      control: {
        type: 'range',
        min: 50,
        max: 1000,
        step: 10
      },
      description: 'Spring stiffness for the icon swap',
      table: {
        defaultValue: {
          summary: '500'
        }
      }
    },
    iconDamping: {
      control: {
        type: 'range',
        min: 5,
        max: 60,
        step: 1
      },
      description: 'Spring damping for the icon swap',
      table: {
        defaultValue: {
          summary: '25'
        }
      }
    },
    iconBounce: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.05
      },
      description: 'Bounce for icon (0 = no overshoot, 1 = very bouncy)',
      table: {
        defaultValue: {
          summary: '0.25'
        }
      }
    },
    iconRotation: {
      control: {
        type: 'range',
        min: 0,
        max: 180,
        step: 5
      },
      description: 'Rotation angle (degrees) on icon enter/exit',
      table: {
        defaultValue: {
          summary: '45'
        }
      }
    },
    iconExitScale: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.05
      },
      description: 'Scale the icon shrinks to on exit',
      table: {
        defaultValue: {
          summary: '0.5'
        }
      }
    },
    textStiffness: {
      control: {
        type: 'range',
        min: 50,
        max: 1000,
        step: 10
      },
      description: 'Spring stiffness for the text slide',
      table: {
        defaultValue: {
          summary: '400'
        }
      }
    },
    textDamping: {
      control: {
        type: 'range',
        min: 5,
        max: 60,
        step: 1
      },
      description: 'Spring damping for the text slide',
      table: {
        defaultValue: {
          summary: '22'
        }
      }
    },
    textBounce: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.05
      },
      description: 'Bounce for text (0 = no overshoot, 1 = very bouncy)',
      table: {
        defaultValue: {
          summary: '0.2'
        }
      }
    },
    textSlideDistance: {
      control: {
        type: 'range',
        min: 0,
        max: 40,
        step: 1
      },
      description: 'Vertical slide distance (px) for text',
      table: {
        defaultValue: {
          summary: '12'
        }
      }
    },
    textBlur: {
      control: {
        type: 'range',
        min: 0,
        max: 12,
        step: 0.5
      },
      description: 'Blur amount (px) during text transition',
      table: {
        defaultValue: {
          summary: '4'
        }
      }
    },
    resetDelay: {
      control: {
        type: 'range',
        min: 500,
        max: 5000,
        step: 100
      },
      description: 'How long "Copied" stays before reverting (ms)',
      table: {
        defaultValue: {
          summary: '2000'
        }
      }
    }
  },
  args: {
    iconStiffness: 80,
    iconDamping: 8,
    iconBounce: 0.05,
    iconRotation: 15,
    iconExitScale: 0.1,
    textStiffness: 140,
    textDamping: 9,
    textBounce: 0.2,
    textSlideDistance: 12,
    textBlur: 1.5,
    resetDelay: 600
  },
  render: args => <div style={{
    width: 331
  }}>
      <InputField label="Website *" hint="Adjust the controls in the panel below, then click Copy to preview." defaultValue="www.cateringrewards.io" suffixVariant="subtle" suffix={<CopySuffix iconStiffness={args.iconStiffness as number} iconDamping={args.iconDamping as number} iconBounce={args.iconBounce as number} iconRotation={args.iconRotation as number} iconExitScale={args.iconExitScale as number} textStiffness={args.textStiffness as number} textDamping={args.textDamping as number} textBounce={args.textBounce as number} textSlideDistance={args.textSlideDistance as number} textBlur={args.textBlur as number} resetDelay={args.resetDelay as number} />} />
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'flex-start'
  }}>
      <div style={{
      width: 331
    }}>
        <InputField label="Small" hint="This is a hint text to help user." size="sm" placeholder="Acme Shop" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      </div>
      <div style={{
      width: 331
    }}>
        <InputField label="Medium" hint="This is a hint text to help user." size="md" placeholder="Acme Shop" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'All Actions',
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'flex-start'
  }}>
      <div style={{
      width: 331
    }}>
        <InputField label="Default" hint="This is a hint text to help user." defaultValue="Acme Shop" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      </div>
      <div style={{
      width: 331
    }}>
        <InputField label="Error" hint="This field is required." action="error" defaultValue="Acme Shop" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'All Types',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 331px)',
    gap: 32
  }}>
      <InputField label="Business name *" hint="Type: Name" defaultValue="Acme Shop" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      <CompanyInput hint="Type: Company" />
      <InputField label="Amount *" hint="Type: Amount" defaultValue="$5.00" suffix={<div className="flex items-center gap-[4px]">
            <span className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-subtitle">
              USD
            </span>
            <ArrowDown02 width={20} height={20} className="text-text-subtitle" />
          </div>} />
      <DateInput label="Due Date *" hint="Type: Date (click to open calendar)" defaultValue={new Date(2025, 11, 19)} />
      <InputField label="Website *" hint="Type: Copy" defaultValue="www.cateringrewards.io" suffixVariant="subtle" suffix={<CopySuffix />} />
    </div>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    placeholder: 'Acme Shop',
    disabled: true,
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...y.parameters?.docs?.source}}};const B=["Default","WithValue","Error","Small","Medium","NameType","CompanyType","AmountType","DateType","CopyType","CopyAnimationPlayground","AllSizes","AllActions","AllTypes","Disabled"],W=Object.freeze(Object.defineProperty({__proto__:null,AllActions:g,AllSizes:x,AllTypes:f,AmountType:p,CompanyType:u,CopyAnimationPlayground:h,CopyType:m,DateType:d,Default:n,Disabled:y,Error:r,Medium:l,NameType:c,Small:o,WithValue:s,__namedExportsOrder:B,default:j},Symbol.toStringTag,{value:"Module"}));export{x as A,u as C,n as D,r as E,W as I,c as N,s as W,p as a,d as b,m as c,f as d,g as e,y as f};
