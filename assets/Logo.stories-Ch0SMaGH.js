import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as r,l as h,a as v}from"./Logo-qTqEifie.js";const f={title:"Components/Logo",component:r,parameters:{docs:{description:{component:"wecater wordmark — Cater Design System / Figma Logo group `4344:3496` (~172×36 in Top Bar `4664:14355`). Sherwood Green `#073D30`. Five height-based sizes aligned to instances in the Figma file."},source:{type:"dynamic"}},layout:"padded"},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Wordmark size token.",table:{defaultValue:{summary:"lg"}}},alt:{control:"text"}}},n={args:{size:"lg"}},c={args:{size:"xs"}},m={args:{size:"sm"}},p={args:{size:"md"}},x={args:{size:"lg"}},g={args:{size:"xl"}};function z(){const l=Object.values(h);return e.jsx("div",{className:"font-body text-text-title",children:e.jsx("div",{className:"flex flex-col gap-6",children:l.map(s=>e.jsxs("div",{className:"flex flex-col gap-3 border-b border-mirage-100 pb-6 last:border-0",children:[e.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-2",children:[e.jsx("div",{className:"text-[16px] font-semibold capitalize",children:s.size}),e.jsxs("div",{className:"text-[13px] text-text-subtle",children:[s.width,"×",s.height,"px · Figma ",s.figmaFrame]})]}),e.jsx(r,{size:s.size}),e.jsx("div",{className:"text-[14px] leading-[150%] text-text-subtle",children:s.useCase})]},s.size))})})}const a={render:()=>e.jsx(z,{})};function j(){const l=Object.values(v);return e.jsx("div",{className:"overflow-x-auto font-body text-[14px] text-text-title",children:e.jsxs("table",{className:"w-full min-w-[520px] border-collapse text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-mirage-200",children:[e.jsx("th",{className:"py-3 pr-4 font-semibold",children:"Breakpoint"}),e.jsx("th",{className:"py-3 pr-4 font-semibold",children:"Viewport"}),e.jsx("th",{className:"py-3 pr-4 font-semibold",children:"Logo size"}),e.jsx("th",{className:"py-3 font-semibold",children:"Guidance"})]})}),e.jsx("tbody",{children:l.map(s=>{const b=h[s.recommendedSize];return e.jsxs("tr",{className:"border-b border-mirage-100 align-top",children:[e.jsx("td",{className:"py-3 pr-4 font-medium capitalize",children:s.recommendedSize==="sm"?"Mobile":s.recommendedSize==="md"?"Tablet":"Desktop"}),e.jsx("td",{className:"py-3 pr-4 text-text-subtle",children:s.viewport}),e.jsxs("td",{className:"py-3 pr-4",children:[e.jsx(r,{size:s.recommendedSize}),e.jsxs("div",{className:"mt-2 text-[12px] text-text-subtle",children:[b.width,"×",b.height,"px · ",e.jsxs("code",{className:"text-[12px]",children:['size="',s.recommendedSize,'"']})]})]}),e.jsx("td",{className:"py-3 text-text-subtle",children:s.notes})]},s.viewport)})})]})})}const o={render:()=>e.jsx(j,{})};function u({label:l,children:s}){return e.jsxs("div",{className:"w-full max-w-[720px]",children:[e.jsx("div",{className:"mb-2 text-[13px] font-medium text-text-subtle",children:l}),e.jsx("header",{className:"flex h-[60px] items-center gap-4 border-b border-mirage-100 bg-white px-4",children:s})]})}const t={parameters:{viewport:{defaultViewport:"mobile"}},render:()=>e.jsxs(u,{label:'Mobile header (≤767px) — size="sm"',children:[e.jsx(r,{size:"sm"}),e.jsx("div",{className:"h-9 flex-1 rounded-full border border-mirage-200 bg-mirage-50","aria-hidden":!0})]})},i={parameters:{viewport:{defaultViewport:"desktop"}},render:()=>e.jsxs(u,{label:'Desktop header (≥1024px) — size="lg"',children:[e.jsx(r,{size:"lg"}),e.jsx("div",{className:"h-9 max-w-[420px] flex-1 rounded-full border border-mirage-200 bg-mirage-50","aria-hidden":!0})]})},d={render:()=>e.jsxs(u,{label:"Responsive — sm default, lg from 640px (matches ExploreTopBar)",children:[e.jsx(r,{size:"sm",className:"sm:hidden"}),e.jsx(r,{size:"lg",className:"hidden sm:block"}),e.jsx("div",{className:"h-9 flex-1 rounded-full border border-mirage-200 bg-mirage-50","aria-hidden":!0})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...g.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SizeScalePanel />
}`,...a.parameters?.docs?.source},description:{story:"All five wordmark sizes with dimensions and use-case notes.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <BreakpointGuidanceTable />
}`,...o.parameters?.docs?.source},description:{story:"Recommended logo token per viewport (mobile / tablet / desktop).",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  },
  render: () => <NavPreview label="Mobile header (≤767px) — size=&quot;sm&quot;">
      <Logo size="sm" />
      <div className="h-9 flex-1 rounded-full border border-mirage-200 bg-mirage-50" aria-hidden />
    </NavPreview>
}`,...t.parameters?.docs?.source},description:{story:"Mobile top bar — `sm` wordmark (140×32).",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  render: () => <NavPreview label="Desktop header (≥1024px) — size=&quot;lg&quot;">
      <Logo size="lg" />
      <div className="h-9 max-w-[420px] flex-1 rounded-full border border-mirage-200 bg-mirage-50" aria-hidden />
    </NavPreview>
}`,...i.parameters?.docs?.source},description:{story:"Desktop top bar — `lg` wordmark (172×36), matches Figma Top Bar.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <NavPreview label="Responsive — sm default, lg from 640px (matches ExploreTopBar)">
      <Logo size="sm" className="sm:hidden" />
      <Logo size="lg" className="hidden sm:block" />
      <div className="h-9 flex-1 rounded-full border border-mirage-200 bg-mirage-50" aria-hidden />
    </NavPreview>
}`,...d.parameters?.docs?.source},description:{story:"Responsive nav pattern: `sm` below `sm:` breakpoint, `lg` at `sm` and up (WeCater Explore).",...d.parameters?.docs?.description}}};const N=["Default","ExtraSmall","Small","Medium","Large","ExtraLarge","SizeScale","BreakpointGuidance","MobileNavigation","DesktopNavigation","ResponsiveNavigation"],k=Object.freeze(Object.defineProperty({__proto__:null,BreakpointGuidance:o,Default:n,DesktopNavigation:i,ExtraLarge:g,ExtraSmall:c,Large:x,Medium:p,MobileNavigation:t,ResponsiveNavigation:d,SizeScale:a,Small:m,__namedExportsOrder:N,default:f},Symbol.toStringTag,{value:"Module"}));export{o as B,i as D,k as L,t as M,d as R,a as S,n as a};
