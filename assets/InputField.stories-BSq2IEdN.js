import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as E}from"./iframe-DAe-cY6O.js";import{i as X,I as t}from"./InputField-BUTCwuFN.js";import{D as $}from"./DateInput-B2az3GYW.js";import{T as Y,C as Z,c as i,d as _}from"./Icon-hv7FGtLB.js";import{C as G}from"./Cancel-1sRoDiDj.js";import{A as M,m as k}from"./proxy-DCy2txyG.js";import{u as ee}from"./use-reduced-motion-DLMRVVQc.js";function p({state:a="filled",textToCopy:n="www.cateringrewards.io",iconStiffness:s=500,iconDamping:K=25,iconBounce:U=.25,iconRotation:P=45,iconExitScale:C=.5,textStiffness:L=400,textDamping:O=22,textBounce:H=.2,textSlideDistance:B=12,textBlur:F=4,resetDelay:J=2e3}){const[N,R]=E.useState(!1),l=ee(),q=X(a),Q=()=>{navigator.clipboard?.writeText(n),R(!0),setTimeout(()=>R(!1),J)},z={type:"spring",stiffness:s,damping:K,bounce:U},W={type:"spring",stiffness:L,damping:O,bounce:H};return e.jsxs("button",{type:"button","aria-label":N?"Copied":"Copy to clipboard",onClick:Q,className:"flex items-center gap-[8px] cursor-pointer overflow-hidden",children:[e.jsx("div",{style:{position:"relative",width:20,height:20},children:e.jsx(M,{mode:"popLayout",children:N?e.jsx(k.span,{initial:l?!1:{opacity:0,scale:C,rotate:-P},animate:{opacity:1,scale:1,rotate:0},exit:{opacity:0,scale:C,rotate:P},transition:z,style:{display:"inline-flex",position:"absolute",inset:0},children:e.jsx(Y,{width:20,height:20,className:"text-salem-600"})},"tick"):e.jsx(k.span,{initial:l?!1:{opacity:0,scale:C},animate:{opacity:1,scale:1},exit:{opacity:0,scale:C},transition:z,style:{display:"inline-flex",position:"absolute",inset:0},children:e.jsx(Z,{width:20,height:20,className:q})},"copy")})}),e.jsx("div",{style:{position:"relative",overflow:"hidden"},children:e.jsx(M,{mode:"popLayout",children:N?e.jsx(k.span,{initial:l?!1:{opacity:0,y:B,filter:`blur(${F}px)`},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:l?void 0:{opacity:0,y:-B,filter:`blur(${F}px)`},transition:W,className:"font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-salem-600",children:"Copied"},"copied-text"):e.jsx(k.span,{initial:l?!1:{opacity:0,y:B,filter:`blur(${F}px)`},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:l?void 0:{opacity:0,y:-B,filter:`blur(${F}px)`},transition:W,className:`font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] ${q}`,children:"Copy"},"copy-text")})})]})}p.__docgenInfo={description:"",methods:[],displayName:"CopySuffix",props:{state:{required:!1,tsType:{name:"union",raw:"'default' | 'ghost' | 'filled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'filled'"}]},description:"Matches parent InputField Figma state for label/icon color.",defaultValue:{value:"'filled'",computed:!1}},textToCopy:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'www.cateringrewards.io'",computed:!1}},iconStiffness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"500",computed:!1}},iconDamping:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"25",computed:!1}},iconBounce:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.25",computed:!1}},iconRotation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"45",computed:!1}},iconExitScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.5",computed:!1}},textStiffness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"400",computed:!1}},textDamping:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"22",computed:!1}},textBounce:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.2",computed:!1}},textSlideDistance:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}},textBlur:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},resetDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2000",computed:!1}}}};const te={title:"Components/Input Field",component:t,parameters:{docs:{description:{component:"Input fields — Figma `99:960`. Use **`inputKind`** for practical, accessible contexts (`email`, `phone`, `url`, `amount`, etc.) — correct keyboard, autocomplete, and character filtering. States: default, ghost, filled."},source:{type:"dynamic"}}},argTypes:{label:{control:"text"},hint:{control:"text"},size:{control:"select",options:["sm","md"],table:{defaultValue:{summary:"md"}}},inputKind:{control:"select",options:["text","name","email","phone","url","search","amount","number"],description:"Semantic context — type, keyboard, autocomplete, and input filtering."},state:{control:"select",options:["default","ghost","filled"],description:"Figma State. Omit to use filled when a value is present."},action:{control:"select",options:["default","error"],table:{defaultValue:{summary:"default"}}},placeholder:{control:"text"},disabled:{control:"boolean"}}},c={args:{label:"Business name *",hint:"This is a hint text to help user.",placeholder:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})}},r={name:"State · Filled",args:{label:"Business name *",hint:"This is a hint text to help user.",defaultValue:"Acme Shop",state:"filled",trailingIcon:e.jsx(i,{width:20,height:20})}},o={name:"State · Filled (auto)",args:{label:"Business name *",hint:"This is a hint text to help user.",defaultValue:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})}},d={name:"State · Ghost",render:()=>e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Website *",hint:"Copy type — text-caption (#B2B8C1)",defaultValue:"www.cateringrewards.io",state:"ghost",suffixVariant:"subtle",suffix:e.jsx(p,{state:"ghost"})})})},u={args:{label:"Business name *",hint:"This is a hint text to help user.",action:"error",defaultValue:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})}},m={args:{label:"Business name *",hint:"This is a hint text to help user.",size:"sm",placeholder:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})}},h={args:{label:"Business name *",hint:"This is a hint text to help user.",size:"md",placeholder:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})}},x={name:"Type: Name",args:{label:"Business name *",hint:"This is a hint text to help user.",inputKind:"name",defaultValue:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})}},f={name:"Type: Email",args:{label:"Contact email *",hint:"We will send order updates to this address.",inputKind:"email",placeholder:"hello@example.com"}},g={name:"Type: Phone",args:{label:"Phone number *",hint:"Digits and + only — mobile shows telephone keypad.",inputKind:"phone"}},y={name:"Type: Company",render:()=>{const[a,n]=E.useState("Mubarak Alumn");return e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Customer name *",hint:"This is a hint text to help user.",inputKind:"search",value:a,onChange:s=>n(s.target.value),leadingIcon:e.jsx(_,{width:20,height:20}),clearIcon:e.jsx(G,{width:20,height:20}),onClear:()=>n("")})})}},b={name:"Type: Amount",render:()=>e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Amount *",hint:"This is a hint text to help user.",inputKind:"amount",defaultValue:"$5.00",suffix:e.jsxs("div",{className:"flex items-center gap-[4px]",children:[e.jsx("span",{className:"font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-body",children:"USD"}),e.jsx(i,{width:20,height:20,className:"text-text-subtitle"})]})})})},w={name:"Type: Date",render:()=>e.jsx("div",{style:{width:331},children:e.jsx($,{label:"Due Date *",hint:"Click the field to open the calendar.",defaultValue:new Date(2025,11,19)})})},S={name:"Type: Copy",render:()=>e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Website *",hint:"This is a hint text to help user.",inputKind:"url",defaultValue:"www.cateringrewards.io",state:"ghost",suffixVariant:"subtle",suffix:e.jsx(p,{state:"ghost"})})})},v={name:"Practical input kinds",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:331},children:[e.jsx(t,{label:"Email *",hint:"Email keyboard and validation.",inputKind:"email"}),e.jsx(t,{label:"Phone number *",hint:"Telephone keypad; digits and + only.",inputKind:"phone"}),e.jsx(t,{label:"Website *",hint:"URL keyboard on mobile.",inputKind:"url"}),e.jsx(t,{label:"Amount *",hint:"Decimal keypad; currency characters only.",inputKind:"amount"})]})},T={name:"Copy Animation Playground",argTypes:{iconStiffness:{control:{type:"range",min:50,max:1e3,step:10},description:"Spring stiffness for the icon swap",table:{defaultValue:{summary:"500"}}},iconDamping:{control:{type:"range",min:5,max:60,step:1},description:"Spring damping for the icon swap",table:{defaultValue:{summary:"25"}}},iconBounce:{control:{type:"range",min:0,max:1,step:.05},description:"Bounce for icon (0 = no overshoot, 1 = very bouncy)",table:{defaultValue:{summary:"0.25"}}},iconRotation:{control:{type:"range",min:0,max:180,step:5},description:"Rotation angle (degrees) on icon enter/exit",table:{defaultValue:{summary:"45"}}},iconExitScale:{control:{type:"range",min:0,max:1,step:.05},description:"Scale the icon shrinks to on exit",table:{defaultValue:{summary:"0.5"}}},textStiffness:{control:{type:"range",min:50,max:1e3,step:10},description:"Spring stiffness for the text slide",table:{defaultValue:{summary:"400"}}},textDamping:{control:{type:"range",min:5,max:60,step:1},description:"Spring damping for the text slide",table:{defaultValue:{summary:"22"}}},textBounce:{control:{type:"range",min:0,max:1,step:.05},description:"Bounce for text (0 = no overshoot, 1 = very bouncy)",table:{defaultValue:{summary:"0.2"}}},textSlideDistance:{control:{type:"range",min:0,max:40,step:1},description:"Vertical slide distance (px) for text",table:{defaultValue:{summary:"12"}}},textBlur:{control:{type:"range",min:0,max:12,step:.5},description:"Blur amount (px) during text transition",table:{defaultValue:{summary:"4"}}},resetDelay:{control:{type:"range",min:500,max:5e3,step:100},description:'How long "Copied" stays before reverting (ms)',table:{defaultValue:{summary:"2000"}}}},args:{iconStiffness:80,iconDamping:8,iconBounce:.05,iconRotation:15,iconExitScale:.1,textStiffness:140,textDamping:9,textBounce:.2,textSlideDistance:12,textBlur:1.5,resetDelay:600},render:a=>e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Website *",hint:"Adjust the controls in the panel below, then click Copy to preview.",defaultValue:"www.cateringrewards.io",state:"ghost",suffixVariant:"subtle",suffix:e.jsx(p,{state:"ghost",iconStiffness:a.iconStiffness,iconDamping:a.iconDamping,iconBounce:a.iconBounce,iconRotation:a.iconRotation,iconExitScale:a.iconExitScale,textStiffness:a.textStiffness,textDamping:a.textDamping,textBounce:a.textBounce,textSlideDistance:a.textSlideDistance,textBlur:a.textBlur,resetDelay:a.resetDelay})})})};function ae({hint:a="This is a hint text to help user."}){const[n,s]=E.useState("Mubarak Alumn");return e.jsx(t,{label:"Customer name *",hint:a,inputKind:"search",value:n,onChange:K=>s(K.target.value),leadingIcon:e.jsx(_,{width:20,height:20}),clearIcon:e.jsx(G,{width:20,height:20}),onClear:()=>s("")})}const A={name:"All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"flex-start"},children:[e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Small",hint:"This is a hint text to help user.",size:"sm",placeholder:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})})}),e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Medium",hint:"This is a hint text to help user.",size:"md",placeholder:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})})})]})},D={name:"All States",render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Default",hint:"Empty — text-subtitle (#68707C)",placeholder:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})})}),e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Filled",hint:"Typed — text-body (#29344A)",defaultValue:"Acme Shop",state:"filled",trailingIcon:e.jsx(i,{width:20,height:20})})}),e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Ghost",hint:"Copy — text-caption (#B2B8C1)",defaultValue:"www.cateringrewards.io",state:"ghost",suffixVariant:"subtle",suffix:e.jsx(p,{state:"ghost"})})})]})},V={name:"All Actions",render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"flex-start"},children:[e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Default action",hint:"Filled value with default border",defaultValue:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})})}),e.jsx("div",{style:{width:331},children:e.jsx(t,{label:"Error",hint:"This field is required.",action:"error",defaultValue:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})})})]})},j={name:"All Types",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 331px)",gap:32},children:[e.jsx(t,{label:"Business name *",hint:"Type: Name",inputKind:"name",defaultValue:"Acme Shop",trailingIcon:e.jsx(i,{width:20,height:20})}),e.jsx(ae,{hint:"Type: Company"}),e.jsx(t,{label:"Amount *",hint:"Type: Amount",inputKind:"amount",defaultValue:"$5.00",suffix:e.jsxs("div",{className:"flex items-center gap-[4px]",children:[e.jsx("span",{className:"font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-body",children:"USD"}),e.jsx(i,{width:20,height:20,className:"text-text-subtitle"})]})}),e.jsx($,{label:"Due Date *",hint:"Type: Date (click to open calendar)",defaultValue:new Date(2025,11,19)}),e.jsx(t,{label:"Website *",hint:"Type: Copy",inputKind:"url",defaultValue:"www.cateringrewards.io",state:"ghost",suffixVariant:"subtle",suffix:e.jsx(p,{state:"ghost"})})]})},I={args:{label:"Business name *",hint:"This is a hint text to help user.",placeholder:"Acme Shop",disabled:!0,trailingIcon:e.jsx(i,{width:20,height:20})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    placeholder: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'State · Filled',
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    defaultValue: 'Acme Shop',
    state: 'filled',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...r.parameters?.docs?.source},description:{story:"Figma State=Filled — typed value uses `text-text-body` (`#29344A`).",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'State · Filled (auto)',
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    defaultValue: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...o.parameters?.docs?.source},description:{story:"Auto-filled when `defaultValue` / `value` is set (no explicit state).",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'State · Ghost',
  render: () => <div style={{
    width: 331
  }}>
      <InputField label="Website *" hint="Copy type — text-caption (#B2B8C1)" defaultValue="www.cateringrewards.io" state="ghost" suffixVariant="subtle" suffix={<CopySuffix state="ghost" />} />
    </div>
}`,...d.parameters?.docs?.source},description:{story:"Figma State=ghost — copy type; lighter `#B2B8C1` text.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    action: 'error',
    defaultValue: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    size: 'sm',
    placeholder: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    size: 'md',
    placeholder: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Type: Name',
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    inputKind: 'name',
    defaultValue: 'Acme Shop',
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Type: Email',
  args: {
    label: 'Contact email *',
    hint: 'We will send order updates to this address.',
    inputKind: 'email',
    placeholder: 'hello@example.com'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Type: Phone',
  args: {
    label: 'Phone number *',
    hint: 'Digits and + only — mobile shows telephone keypad.',
    inputKind: 'phone'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Type: Company',
  render: () => {
    const [value, setValue] = React.useState('Mubarak Alumn');
    return <div style={{
      width: 331
    }}>
        <InputField label="Customer name *" hint="This is a hint text to help user." inputKind="search" value={value} onChange={e => setValue(e.target.value)} leadingIcon={<Search width={20} height={20} />} clearIcon={<Cancel width={20} height={20} />} onClear={() => setValue('')} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Type: Amount',
  render: () => <div style={{
    width: 331
  }}>
      <InputField label="Amount *" hint="This is a hint text to help user." inputKind="amount" defaultValue="$5.00" suffix={<div className="flex items-center gap-[4px]">
            <span className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-body">
              USD
            </span>
            <ArrowDown02 width={20} height={20} className="text-text-subtitle" />
          </div>} />
    </div>
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Type: Date',
  render: () => <div style={{
    width: 331
  }}>
      <DateInput label="Due Date *" hint="Click the field to open the calendar." defaultValue={new Date(2025, 11, 19)} />
    </div>
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Type: Copy',
  render: () => <div style={{
    width: 331
  }}>
      <InputField label="Website *" hint="This is a hint text to help user." inputKind="url" defaultValue="www.cateringrewards.io" state="ghost" suffixVariant="subtle" suffix={<CopySuffix state="ghost" />} />
    </div>
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Practical input kinds',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 331
  }}>
      <InputField label="Email *" hint="Email keyboard and validation." inputKind="email" />
      <InputField label="Phone number *" hint="Telephone keypad; digits and + only." inputKind="phone" />
      <InputField label="Website *" hint="URL keyboard on mobile." inputKind="url" />
      <InputField label="Amount *" hint="Decimal keypad; currency characters only." inputKind="amount" />
    </div>
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      <InputField label="Website *" hint="Adjust the controls in the panel below, then click Copy to preview." defaultValue="www.cateringrewards.io" state="ghost" suffixVariant="subtle" suffix={<CopySuffix state="ghost" iconStiffness={args.iconStiffness as number} iconDamping={args.iconDamping as number} iconBounce={args.iconBounce as number} iconRotation={args.iconRotation as number} iconExitScale={args.iconExitScale as number} textStiffness={args.textStiffness as number} textDamping={args.textDamping as number} textBounce={args.textBounce as number} textSlideDistance={args.textSlideDistance as number} textBlur={args.textBlur as number} resetDelay={args.resetDelay as number} />} />
    </div>
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }}>
      <div style={{
      width: 331
    }}>
        <InputField label="Default" hint="Empty — text-subtitle (#68707C)" placeholder="Acme Shop" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      </div>
      <div style={{
      width: 331
    }}>
        <InputField label="Filled" hint="Typed — text-body (#29344A)" defaultValue="Acme Shop" state="filled" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      </div>
      <div style={{
      width: 331
    }}>
        <InputField label="Ghost" hint="Copy — text-caption (#B2B8C1)" defaultValue="www.cateringrewards.io" state="ghost" suffixVariant="subtle" suffix={<CopySuffix state="ghost" />} />
      </div>
    </div>
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'All Actions',
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'flex-start'
  }}>
      <div style={{
      width: 331
    }}>
        <InputField label="Default action" hint="Filled value with default border" defaultValue="Acme Shop" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      </div>
      <div style={{
      width: 331
    }}>
        <InputField label="Error" hint="This field is required." action="error" defaultValue="Acme Shop" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      </div>
    </div>
}`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'All Types',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 331px)',
    gap: 32
  }}>
      <InputField label="Business name *" hint="Type: Name" inputKind="name" defaultValue="Acme Shop" trailingIcon={<ArrowDown02 width={20} height={20} />} />
      <CompanyInput hint="Type: Company" />
      <InputField label="Amount *" hint="Type: Amount" inputKind="amount" defaultValue="$5.00" suffix={<div className="flex items-center gap-[4px]">
            <span className="font-body font-semibold text-[16px] leading-[150%] tracking-[0.16px] text-text-body">
              USD
            </span>
            <ArrowDown02 width={20} height={20} className="text-text-subtitle" />
          </div>} />
      <DateInput label="Due Date *" hint="Type: Date (click to open calendar)" defaultValue={new Date(2025, 11, 19)} />
      <InputField label="Website *" hint="Type: Copy" inputKind="url" defaultValue="www.cateringrewards.io" state="ghost" suffixVariant="subtle" suffix={<CopySuffix state="ghost" />} />
    </div>
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business name *',
    hint: 'This is a hint text to help user.',
    placeholder: 'Acme Shop',
    disabled: true,
    trailingIcon: <ArrowDown02 width={20} height={20} />
  }
}`,...I.parameters?.docs?.source}}};const ie=["Default","Filled","FilledAuto","Ghost","Error","Small","Medium","NameType","EmailType","PhoneType","CompanyType","AmountType","DateType","CopyType","PracticalKinds","CopyAnimationPlayground","AllSizes","AllStates","AllActions","AllTypes","Disabled"],ue=Object.freeze(Object.defineProperty({__proto__:null,AllActions:V,AllSizes:A,AllStates:D,AllTypes:j,AmountType:b,CompanyType:y,CopyAnimationPlayground:T,CopyType:S,DateType:w,Default:c,Disabled:I,EmailType:f,Error:u,Filled:r,FilledAuto:o,Ghost:d,Medium:h,NameType:x,PhoneType:g,PracticalKinds:v,Small:m,__namedExportsOrder:ie,default:te},Symbol.toStringTag,{value:"Module"}));export{D as A,y as C,c as D,u as E,r as F,d as G,ue as I,x as N,v as P,o as a,A as b,b as c,w as d,f as e,g as f,S as g,j as h,V as i,I as j};
