"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[7501],{34673:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),l=a(67294),r=a(86010),i=a(72389),s=a(86043);const c="details_lb9f",u="isBrowser_bmU9",o="collapsibleContent_i85q";function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function m(e,t){return!!e&&(e===t||m(e.parentElement,t))}function p(e){let{summary:t,children:a,...p}=e;const h=(0,i.Z)(),v=(0,l.useRef)(null),{collapsed:g,setCollapsed:f}=(0,s.u)({initialState:!p.open}),[b,k]=(0,l.useState)(p.open);return l.createElement("details",(0,n.Z)({},p,{ref:v,open:b,"data-collapsed":g,className:(0,r.Z)(c,h&&u,p.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&m(t,v.current)&&(e.preventDefault(),g?(f(!1),k(!0)):f(!0))}}),t??l.createElement("summary",null,"Details"),l.createElement(s.z,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),k(!e)}},l.createElement("div",{className:o},a)))}const h="details_b_Ee";function v(e){let{...t}=e;return l.createElement(p,(0,n.Z)({},t,{className:(0,r.Z)("alert alert--info",h,t.className)}))}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),l=a(67294),r=a(86010),i=a(12466),s=a(16550),c=a(91980),u=a(67392),o=a(50012);function d(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,u]=h({queryString:a,groupId:n}),[d,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,o.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=c??d;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var g=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=o.indexOf(t),n=u[a].value;n!==s&&(d(t),c(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>o.push(e),onKeyDown:p,onClick:m},i,{className:(0,r.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":s===t})}),a??t)})))}function S(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=v(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f)},l.createElement(k,(0,n.Z)({},e,t)),l.createElement(S,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return l.createElement(E,(0,n.Z)({key:String(t)},e))}},84765:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(34673);function r(e){let{children:t}=e;return n.createElement(l.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},t)}},26811:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),l=a(86010);const r="browserWindow_my1Q",i="browserWindowHeader_jXSR",s="buttons_uHc7",c="browserWindowAddressBar_Pd8y",u="dot_giz1",o="browserWindowMenuIcon_Vhuh",d="bar_rrRL",m="browserWindowBody_Idgs";function p(e){let{children:t,minHeight:a,height:p,url:h="http://localhost:3000"}=e;return n.createElement("div",{className:r,style:{minHeight:a,height:p}},n.createElement("div",{className:i},n.createElement("div",{className:s},n.createElement("span",{className:u,style:{background:"#f25f58"}}),n.createElement("span",{className:u,style:{background:"#fbbe3c"}}),n.createElement("span",{className:u,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,l.Z)(c,"text--truncate")},h),n.createElement("div",{className:o},n.createElement("div",null,n.createElement("span",{className:d}),n.createElement("span",{className:d}),n.createElement("span",{className:d})))),n.createElement("div",{className:m,style:{height:"90%"}},t))}function h(e){let{children:t,height:a}=e;return n.createElement(n.Fragment,null,n.createElement(p,{height:void 0!==a&&a,minHeight:void 0===a&&"200px"},n.createElement("iframe",{width:"100%",height:"100%",srcDoc:t,title:"Live Code",onLoad:e=>{setInterval((e=>{if(null==a){const t=e.target;t.height="100%",t.height=t.contentDocument.documentElement.scrollHeight+"px"}}),3e3,e)}})))}},24701:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),l=a(74866),r=a(85162),i=a(19604),s=a(26811),c=a(35993),u=a(37403);const o="playgroundContainer_dc2C",d="playgroundHeader_gfqA",m="playgroundEditor_bEFE",p="playgroundPreview_I95C";function h(e){let{defaultHTML:t,setHTML:a,defaultCSS:s,setCSS:c,defaultJavaScript:u,setJS:o}=e;return n.createElement(n.Fragment,null,n.createElement(l.Z,{groupId:"editor"},n.createElement(r.Z,{value:"html",label:"HTML"},n.createElement(i.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),n.createElement(r.Z,{value:"css",label:"CSS"},n.createElement(i.ZP,{height:"400px",defaultLanguage:"css",defaultValue:s,onChange:e=>{c(e)}})),n.createElement(r.Z,{value:"js",label:"JavaScript"},n.createElement(i.ZP,{height:"400px",defaultLanguage:"javascript",defaultValue:u,onChange:e=>{o(e)}}))))}function v(e){let{defaultHTML:t,setHTML:a,defaultCSS:s,setCSS:c}=e;return n.createElement(n.Fragment,null,n.createElement(l.Z,{groupId:"editor"},n.createElement(r.Z,{value:"html",label:"HTML"},n.createElement(i.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),n.createElement(r.Z,{value:"css",label:"CSS"},n.createElement(i.ZP,{height:"400px",defaultLanguage:"css",defaultValue:s,onChange:e=>{c(e)}}))))}function g(e){let{defaultHTML:t,setHTML:a,defaultJavaScript:s,setJS:c}=e;return n.createElement(n.Fragment,null,n.createElement(l.Z,{groupId:"editor"},n.createElement(r.Z,{value:"html",label:"HTML"},n.createElement(i.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),n.createElement(r.Z,{value:"js",label:"JavaScript"},n.createElement(i.ZP,{height:"400px",defaultLanguage:"javascript",defaultValue:s,onChange:e=>{c(e)}}))))}function f(e){let{language:t,children:a,defaultCSS:l,defaultJavaScript:r}=e;const[f,b]=(0,n.useState)(a),[k,S]=(0,n.useState)(l),[E,w]=(0,n.useState)(r);return n.createElement(n.Fragment,null,n.createElement("div",{className:o},n.createElement("div",{className:d},"\u30e9\u30a4\u30d6\u30a8\u30c7\u30a3\u30bf\u30fc"),n.createElement("div",{className:m},"html-css-javascript"===t?n.createElement(h,{defaultHTML:a,setHTML:b,defaultCSS:l,setCSS:S,defaultJavaScript:r,setJS:w}):"html-css"===t?n.createElement(v,{defaultHTML:a,setHTML:b,defaultCSS:l,setCSS:S}):"html-javascript"===t?n.createElement(g,{defaultHTML:a,setHTML:b,defaultJavaScript:r,setJS:w}):n.createElement(i.ZP,{height:"400px",defaultLanguage:t,defaultValue:a,onChange:e=>{b(e)}})),n.createElement("div",{className:d},"\u7d50\u679c"),n.createElement("div",{className:p},n.createElement(s.Z,null,"html"===t?f:"markdown"===t?(0,c.Z)(f):"latex"===t?(0,u.Z)(f):"html-css"===t?`<style>${k}</style>${f}`:"html-javascript"===t?`${f}<script>${E}<\/script>`:`<style>${k}</style>${f}<script>${E}<\/script>`))))}},37403:(e,t,a)=>{function n(e){return'  <!DOCTYPE html>\n  <html lang="ja">\n    <head>\n      <meta charset="UTF-8" />\n      <script type="module">\n        import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs";\n        customElements.define("latex-js", LaTeXJSComponent);\n      <\/script>\n    </head>\n    <body>\n      <latex-js baseURL="https://cdn.jsdelivr.net/npm/latex.js/dist/">'+e+"      </latex-js>\n    </body>\n  </html>"}a.d(t,{Z:()=>n})},23966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=a(87462),l=(a(67294),a(3905)),r=a(24701);a(84765);const i={sidebar_position:3},s="JavaScript",c={unversionedId:"extras/website/html/javascript/index",id:"extras/website/html/javascript/index",title:"JavaScript",description:"JavaScript \u3068\u306f",source:"@site/docs/07-extras/04-website/01-html/03-javascript/index.mdx",sourceDirName:"07-extras/04-website/01-html/03-javascript",slug:"/extras/website/html/javascript/",permalink:"/pr-preview/pr-250/docs/extras/website/html/javascript/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/07-extras/04-website/01-html/03-javascript/index.mdx",tags:[],version:"current",lastUpdatedAt:1682825542,formattedLastUpdatedAt:"2023\u5e744\u670830\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/pr-preview/pr-250/docs/extras/website/html/css/"},next:{title:"Docusaurus \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9",permalink:"/pr-preview/pr-250/docs/extras/website/docusaurus/"}},u={},o=[{value:"JavaScript \u3068\u306f",id:"javascript-\u3068\u306f",level:2},{value:"\u306f\u3058\u3081\u3066\u306e JavaScript",id:"\u306f\u3058\u3081\u3066\u306e-javascript",level:2},{value:"JavaScript \u306e\u57fa\u672c\u6587\u6cd5",id:"javascript-\u306e\u57fa\u672c\u6587\u6cd5",level:2},{value:"<code>document.write</code>",id:"documentwrite",level:3},{value:"\u30b3\u30e1\u30f3\u30c8",id:"\u30b3\u30e1\u30f3\u30c8",level:3},{value:"\u6f14\u7b97",id:"\u6f14\u7b97",level:3},{value:"\u5909\u6570",id:"\u5909\u6570",level:3},{value:"\u6761\u4ef6\u5206\u5c90",id:"\u6761\u4ef6\u5206\u5c90",level:3},{value:"\u7e70\u308a\u8fd4\u3057",id:"\u7e70\u308a\u8fd4\u3057",level:3},{value:"\u95a2\u6570",id:"\u95a2\u6570",level:3},{value:"DOM",id:"dom",level:3},{value:"JavaScript \u3092\u4f7f\u3063\u305f\u4f8b",id:"javascript-\u3092\u4f7f\u3063\u305f\u4f8b",level:2}],d={toc:o};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"javascript"},"JavaScript"),(0,l.kt)("h2",{id:"javascript-\u3068\u306f"},"JavaScript \u3068\u306f"),(0,l.kt)("p",null,"HTML \u3084 CSS \u3092\u4f7f\u3063\u3066\u69d8\u3005\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002\u3057\u304b\u3057\u3001\u52d5\u304d\u3092\u6301\u3063\u305f\u8868\u73fe\u3092\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u3067\u3042\u308b JavaScript \u3092\u7528\u3044\u308b\u3053\u3068\u3067\u3001Web \u30b5\u30a4\u30c8\u3067\u52d5\u304d\u306e\u3042\u308b\u8868\u73fe\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u306f\u3058\u3081\u3066\u306e-javascript"},"\u306f\u3058\u3081\u3066\u306e JavaScript"),(0,l.kt)("p",null,"\u5b9f\u969b\u306b JavaScript \u3092\u4f7f\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u4ee5\u4e0b\u304c JavaScript \u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=index.html",title:"index.html"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="./script.js"><\/script>\n  </body>\n</html>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},'document.write("Hello World!");\n')),(0,l.kt)("p",null,"\u4e0a\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"script.js")," \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u306b\u8cbc\u308a\u4ed8\u3051\u3066\u304f\u3060\u3055\u3044\u30022 \u3064\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u30d5\u30a9\u30eb\u30c0\u306e\u540c\u3058\u968e\u5c64\u306b\u5165\u308c\u3066\u304f\u3060\u3055\u3044\u3002\u3082\u3057\u304f\u306f\u3001\u3053\u306e\u30b5\u30a4\u30c8\u306e ",(0,l.kt)("a",{parentName:"p",href:"/javascript-playground"},"JavaScript \u306e\u30d7\u30ec\u30a4\u30b0\u30e9\u30a6\u30f3\u30c9"),"\u304b\u3089\u7de8\u96c6\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(r.Z,{language:"html-javascript",defaultCSS:"",defaultJavaScript:'document.write("Hello World!");',mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="./script.js"><\/script>\n  </body>\n</html>'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," \u3067\u5909\u308f\u3063\u305f\u3068\u3053\u308d\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},'<script src="./script.js"><\/script>')," \u3068\u3044\u3046\u3068\u3053\u308d\u3060\u3051\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u540c\u3058\u968e\u5c64\u306b\u3042\u308b ",(0,l.kt)("inlineCode",{parentName:"p"},"script.js")," \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u3068\u3044\u3046\u547d\u4ee4\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u6b21\u306b\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"script.js")," \u30d5\u30a1\u30a4\u30eb\u3092\u898b\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002\u6b21\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u304c\u66f8\u3044\u3066\u3042\u308a\u307e\u3059\u306d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},'document.write("Hello World!");\n')),(0,l.kt)("p",null,"\u3053\u308c\u306f\u3001\u753b\u9762\u4e0a\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3059\u308b\u3068\u3044\u3046\u547d\u4ee4\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u3067\u306f\u3001JavaScript \u306e\u57fa\u672c\u6587\u6cd5\u3092\u7c21\u5358\u306b\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306f\u3001\u3069\u308c\u3082\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9\u306f\u540c\u3058\u306a\u306e\u3067 Python \u3092\u52c9\u5f37\u3057\u3066\u3044\u308c\u3070\u3001\u3059\u3050\u306b\u7406\u89e3\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"javascript-\u306e\u57fa\u672c\u6587\u6cd5"},"JavaScript \u306e\u57fa\u672c\u6587\u6cd5"),(0,l.kt)("p",null,"\u3067\u306f\u3001JavaScript \u306e\u57fa\u672c\u6587\u6cd5\u3092\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"JavaScript \u306f\u306a\u304b\u306a\u304b\u5965\u304c\u6df1\u304f\u3053\u3053\u3067\u8aac\u660e\u3057\u304d\u308c\u306a\u3044\u306e\u3067\u3001\u7d39\u4ecb\u3059\u308b\u306e\u306f\u6982\u8981\u3060\u3051\u306b\u3057\u307e\u3059\u3002\nWeb \u306e\u6280\u8853\u306b\u3064\u3044\u3066\u8a73\u3057\u3044\u3053\u3068\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://learn.utcode.net/"},"\u3053\u3061\u3089"),"\u306b\u307e\u3068\u307e\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"documentwrite"},(0,l.kt)("inlineCode",{parentName:"h3"},"document.write")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'document.write("hoge");')," \u3068\u3059\u308b\u3053\u3068\u3067\u3001\u753b\u9762\u4e0a\u306b\u4efb\u610f\u306e\u6587\u5b57\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4e00\u3064\u6ce8\u610f\u70b9\u3068\u3057\u3066\u306f\u3001\u3053\u308c\u306f\u3059\u3067\u306b\u66f8\u304b\u308c\u3066\u3044\u308b HTML \u30bf\u30b0\u306a\u3069\u3092\u3059\u3079\u3066\u6d88\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u3053\u306e\u547d\u4ee4\u306f\u5b9f\u969b\u306b\u306f\u3042\u307e\u308a\u4f7f\u308f\u308c\u307e\u305b\u3093\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},'document.write("Hello World!");\n')),(0,l.kt)(r.Z,{language:"html-javascript",defaultCSS:"",defaultJavaScript:'document.write("Hello World!");',mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="./script.js"><\/script>\n  </body>\n</html>'),(0,l.kt)("h3",{id:"\u30b3\u30e1\u30f3\u30c8"},"\u30b3\u30e1\u30f3\u30c8"),(0,l.kt)("p",null,"\u30b3\u30e1\u30f3\u30c8\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},"// \u30b3\u30e1\u30f3\u30c8\u3092\u66f8\u3051\u307e\u3059\u3002\n")),(0,l.kt)(r.Z,{language:"html-javascript",defaultCSS:"",defaultJavaScript:"// \u30b3\u30e1\u30f3\u30c8\u3092\u66f8\u3051\u307e\u3059\u3002",mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="./script.js"><\/script>\n  </body>\n</html>'),(0,l.kt)("h3",{id:"\u6f14\u7b97"},"\u6f14\u7b97"),(0,l.kt)("p",null,"\u69d8\u3005\u306a\u8a08\u7b97\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},"document.write((1 + 1) * 2);\n")),(0,l.kt)(r.Z,{language:"html-javascript",defaultCSS:"",defaultJavaScript:"document.write((1 + 1) * 2);",mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="./script.js"><\/script>\n  </body>\n</html>'),(0,l.kt)("h3",{id:"\u5909\u6570"},"\u5909\u6570"),(0,l.kt)("p",null,"\u5909\u6570\u3082\u4f7f\u3048\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},"let a = 1;\ndocument.write(a);\n")),(0,l.kt)(r.Z,{language:"html-javascript",defaultCSS:"",defaultJavaScript:"let a = 1;\ndocument.write(a);",mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="./script.js"><\/script>\n  </body>\n</html>'),(0,l.kt)("h3",{id:"\u6761\u4ef6\u5206\u5c90"},"\u6761\u4ef6\u5206\u5c90"),(0,l.kt)("p",null,"\u6761\u4ef6\u5206\u5c90\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},'let age = 19;\nif (age >= 20) {\n  document.write("\u98f2\u9152\u53ef\u80fd\u3067\u3059\u3002");\n} else {\n  document.write("\u304a\u9152\u306f\u4e8c\u5341\u6b73\u306b\u306a\u3063\u3066\u304b\u3089\uff01");\n}\n')),(0,l.kt)(r.Z,{language:"html-javascript",defaultCSS:"",defaultJavaScript:'let age = 19;\nif (age >= 20) {\n  document.write("\u98f2\u9152\u53ef\u80fd\u3067\u3059\u3002");\n} else {\n  document.write("\u304a\u9152\u306f\u4e8c\u5341\u6b73\u306b\u306a\u3063\u3066\u304b\u3089\uff01");\n}',mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="./script.js"><\/script>\n  </body>\n</html>'),(0,l.kt)("h3",{id:"\u7e70\u308a\u8fd4\u3057"},"\u7e70\u308a\u8fd4\u3057"),(0,l.kt)("p",null,"\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},"let sum = 0;\nfor (let i = 1; i <= 10; i++) {\n  sum += i;\n}\ndocument.write(sum);\n")),(0,l.kt)(r.Z,{language:"html-javascript",defaultCSS:"",defaultJavaScript:"let sum = 0;\nfor (let i = 1; i <= 10; i++) {\n  sum += i;\n}\ndocument.write(sum);",mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="./script.js"><\/script>\n  </body>\n</html>'),(0,l.kt)("h3",{id:"\u95a2\u6570"},"\u95a2\u6570"),(0,l.kt)("p",null,"\u95a2\u6570\u3082\u4f7f\u3048\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},"function factorial(n) {\n  product = 1;\n  for (let i = 1; i <= n; i++) {\n    product *= i;\n  }\n  return product;\n}\ndocument.write(factorial(6));\n")),(0,l.kt)(r.Z,{language:"html-javascript",defaultCSS:"",defaultJavaScript:"function factorial(n) {\n  product = 1;\n  for (let i = 1; i <= n; i++) {\n    product *= i;\n  }\n  return product;\n}\ndocument.write(factorial(6));",mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <script src="./script.js"><\/script>\n  </body>\n</html>'),(0,l.kt)("h3",{id:"dom"},"DOM"),(0,l.kt)("p",null,"JavaScript \u306b\u306f HTML \u3092\u5236\u5fa1\u3059\u308b\u4ed5\u7d44\u307f\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'document.getElementById("hoge")')," \u306e\u3088\u3046\u306b\u3057\u3066\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"hoge")," \u3068\u3044\u3046 id \u3092\u6301\u3064\u8981\u7d20\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u4f7f\u3046\u3068\u6b21\u306e\u3088\u3046\u306a\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=index.html",title:"index.html"},'<div id="greeting"></div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=script.js",title:"script.js"},'const greeting = document.getElementById("greeting");\ngreeting.textContent = "Hello Dom";\n')),(0,l.kt)(r.Z,{language:"html-javascript",defaultCSS:"",defaultJavaScript:'const greeting = document.getElementById("greeting");\ngreeting.textContent = "Hello Dom";',mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="greeting"></div>\n    <script src="./script.js"><\/script>\n  </body>\n</html>'),(0,l.kt)("h2",{id:"javascript-\u3092\u4f7f\u3063\u305f\u4f8b"},"JavaScript \u3092\u4f7f\u3063\u305f\u4f8b"),(0,l.kt)("p",null,"JavaScript \u3092\u4f7f\u3046\u3068\u6b21\u306e\u3088\u3046\u306a\u30ab\u30a6\u30f3\u30bf\u3092\u4f5c\u308b\u3053\u3068\u3082\u7c21\u5358\u306b\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(r.Z,{language:"html-css-javascript",defaultCSS:"#container {\n  display: flex;\n}\n#plus-button,\n#minus-button,\n#counter {\n  height: 100px;\n  width: 150px;\n  font-size: 50px;\n  text-align: center;\n  line-height: 100px;\n  border: 2px solid #aaa;\n  border-radius: 10px;\n  margin: 0px 1px;\n}",defaultJavaScript:'let count = 0;\nconst plusButton = document.getElementById("plus-button");\nconst minusButton = document.getElementById("minus-button");\nconst counter = document.getElementById("counter");\nplusButton.onclick = () => {\n    count++;\n    counter.textContent = count;\n};\nminusButton.onclick = () => {\n    count--;\n    counter.textContent = count;\n};',mdxType:"InteractiveCodeEditor"},'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n    <link rel="stylesheet" href="./style.css" />\n  </head>\n  <body>\n    <div id="container">\n      <div id="minus-button">-</div>\n      <div id="counter">0</div>\n      <div id="plus-button">+</div>\n    </div>\n  </body>\n  <script src="./script.js"><\/script>\n</html>'),(0,l.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001JavaScript \u306e\u6a5f\u80fd\u306e\u307b\u3093\u306e\u4e00\u90e8\u3057\u304b\u7d39\u4ecb\u3057\u3066\u3044\u307e\u305b\u3093\u3002\nJavaScript \u306b\u3064\u3044\u3066\u3055\u3089\u306b\u8a73\u3057\u3044\u3053\u3068\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://learn.utcode.net/"},"\u3053\u3061\u3089"),"\u3067\u5b66\u3093\u3067\u304f\u3060\u3055\u3044\u3002"))}m.isMDXComponent=!0}}]);