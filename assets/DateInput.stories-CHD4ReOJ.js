import{D as o}from"./DateInput-B2az3GYW.js";const d={title:"Components/DateInput",component:o,parameters:{layout:"centered",docs:{description:{component:"Date input field that opens the single-date calendar in a popover when clicked. Combines InputField with DatePicker for date selection."},source:{type:"dynamic"}}},argTypes:{label:{control:"text"},hint:{control:"text"},size:{control:"select",options:["sm","md"],table:{defaultValue:{summary:"md"}}},placeholder:{control:"text"},disabled:{control:"boolean"}}},e={args:{label:"Due Date *",hint:"Click the field to open the calendar.",placeholder:"Select date"}},a={args:{label:"Due Date *",hint:"Pre-selected date.",defaultValue:new Date(2025,11,19)}},t={args:{label:"Due Date *",hint:"Weekends are disabled.",isDateDisabled:n=>{const l=n.getDay();return l===0||l===6}}},r={args:{label:"Due Date *",size:"sm",placeholder:"Select date"}},s={args:{label:"Due Date *",defaultValue:new Date(2025,11,19),disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Due Date *',
    hint: 'Click the field to open the calendar.',
    placeholder: 'Select date'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Due Date *',
    hint: 'Pre-selected date.',
    defaultValue: new Date(2025, 11, 19)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Due Date *',
    hint: 'Weekends are disabled.',
    isDateDisabled: date => {
      const d = date.getDay();
      return d === 0 || d === 6;
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Due Date *',
    size: 'sm',
    placeholder: 'Select date'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Due Date *',
    defaultValue: new Date(2025, 11, 19),
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const c=["Default","WithDefaultValue","WithDisabledDates","Small","Disabled"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:s,Small:r,WithDefaultValue:a,WithDisabledDates:t,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{u as D,r as S,a as W,e as a,t as b,s as c};
