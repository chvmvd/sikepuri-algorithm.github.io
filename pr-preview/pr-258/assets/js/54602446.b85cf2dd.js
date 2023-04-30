"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[4314],{87357:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(87462),r=a(63366),l=a(67294),s=a(86010),u=a(82962),o=a(86523),c=a(39707),i=a(11938),m=a(85893);const d=["className","component"];var h=a(37078);const f=function(e={}){const{defaultTheme:t,defaultClassName:a="MuiBox-root",generateClassName:h}=e,f=(0,u.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(o.Z);return l.forwardRef((function(e,l){const u=(0,i.Z)(t),o=(0,c.Z)(e),{className:p,component:b="div"}=o,g=(0,r.Z)(o,d);return(0,m.jsx)(f,(0,n.Z)({as:b,ref:l,className:(0,s.Z)(p,h?h(a):a),theme:u},g))}))}({defaultTheme:(0,a(21265).Z)(),defaultClassName:"MuiBox-root",generateClassName:h.Z.generate}),p=f},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(87462),r=a(67294),l=a(86010),s=a(12466),u=a(16550),o=a(91980),c=a(67392),i=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,c]=f({queryString:a,groupId:n}),[m,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=o??m;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),p(e)}),[c,p,l]),tabValues:l}}var b=a(72389);const g="tabList__CuJ",v="tabItem_LNqP";function E(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=i.indexOf(t),n=c[a].value;n!==u&&(m(t),o(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;a=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=i[t]??i[i.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>i.push(e),onKeyDown:h,onClick:d},s,{className:(0,l.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=p(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(E,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function Z(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},26811:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),r=a(86010);const l="browserWindow_my1Q",s="browserWindowHeader_jXSR",u="buttons_uHc7",o="browserWindowAddressBar_Pd8y",c="dot_giz1",i="browserWindowMenuIcon_Vhuh",m="bar_rrRL",d="browserWindowBody_Idgs";function h(e){let{children:t,minHeight:a,height:h,url:f="http://localhost:3000"}=e;return n.createElement("div",{className:l,style:{minHeight:a,height:h}},n.createElement("div",{className:s},n.createElement("div",{className:u},n.createElement("span",{className:c,style:{background:"#f25f58"}}),n.createElement("span",{className:c,style:{background:"#fbbe3c"}}),n.createElement("span",{className:c,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(o,"text--truncate")},f),n.createElement("div",{className:i},n.createElement("div",null,n.createElement("span",{className:m}),n.createElement("span",{className:m}),n.createElement("span",{className:m})))),n.createElement("div",{className:d,style:{height:"90%"}},t))}function f(e){let{children:t,height:a}=e;return n.createElement(n.Fragment,null,n.createElement(h,{height:void 0!==a&&a,minHeight:void 0===a&&"200px"},n.createElement("iframe",{width:"100%",height:"100%",srcDoc:t,title:"Live Code",onLoad:e=>{setInterval((e=>{if(null==a){const t=e.target;t.height="100%",t.height=t.contentDocument.documentElement.scrollHeight+"px"}}),3e3,e)}})))}},36323:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(67294),r=a(52263),l=a(16963),s=a(74866),u=a(85162),o=a(19604),c=a(26811),i=a(87357),m=a(86886);const d='<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n    <link rel="stylesheet" href="./style.css" />\n  </head>\n  <body>\n    <p>Hello CSS!</p>\n  </body>\n</html>',h="p {\n  color: red;\n}";function f(){const{siteConfig:e}=(0,r.Z)(),[t,a]=(0,n.useState)(d),[f,p]=(0,n.useState)(h);return n.createElement(l.Z,{title:`Hello from ${e.title}`,description:"This is a playground of CSS"},n.createElement(i.Z,{p:2,mt:2},n.createElement(m.ZP,{container:!0,direction:"row",spacing:2},n.createElement(m.ZP,{item:!0,xs:6},n.createElement(s.Z,{groupId:"editor"},n.createElement(u.Z,{value:"html",label:"HTML"},n.createElement(o.ZP,{height:"80vh",defaultLanguage:"html",defaultValue:d,onChange:e=>{a(e)}})),n.createElement(u.Z,{value:"css",label:"CSS"},n.createElement(o.ZP,{height:"80vh",defaultLanguage:"css",defaultValue:h,onChange:e=>{p(e)}})))),n.createElement(m.ZP,{item:!0,xs:6},n.createElement(c.Z,{height:"80vh"},"<style>"+f+"</style>"+t)))))}}}]);