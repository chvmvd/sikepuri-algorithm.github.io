"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[3572],{85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),u=a(91980),s=a(67392),c=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=g({queryString:a,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=u??m;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var h=a(72389);const f="tabList__CuJ",v="tabItem_LNqP";function E(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==i&&(m(t),u(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},o,{className:(0,l.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(E,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},26811:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),r=a(86010);const l="browserWindow_my1Q",o="browserWindowHeader_jXSR",i="buttons_uHc7",u="browserWindowAddressBar_Pd8y",s="dot_giz1",c="browserWindowMenuIcon_Vhuh",m="bar_rrRL",d="browserWindowBody_Idgs";function p(e){let{children:t,minHeight:a,height:p,url:g="http://localhost:3000"}=e;return n.createElement("div",{className:l,style:{minHeight:a,height:p}},n.createElement("div",{className:o},n.createElement("div",{className:i},n.createElement("span",{className:s,style:{background:"#f25f58"}}),n.createElement("span",{className:s,style:{background:"#fbbe3c"}}),n.createElement("span",{className:s,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(u,"text--truncate")},g),n.createElement("div",{className:c},n.createElement("div",null,n.createElement("span",{className:m}),n.createElement("span",{className:m}),n.createElement("span",{className:m})))),n.createElement("div",{className:d,style:{height:"90%"}},t))}function g(e){let{children:t,height:a}=e;return n.createElement(n.Fragment,null,n.createElement(p,{height:void 0!==a&&a,minHeight:void 0===a&&"200px"},n.createElement("iframe",{width:"100%",height:"100%",srcDoc:t,title:"Live Code",onLoad:e=>{setInterval((e=>{if(null==a){const t=e.target;t.height="100%",t.height=t.contentDocument.documentElement.scrollHeight+"px"}}),3e3,e)}})))}},24701:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),r=a(74866),l=a(85162),o=a(19604),i=a(26811),u=a(35993),s=a(37403);const c="playgroundContainer_dc2C",m="playgroundHeader_gfqA",d="playgroundEditor_bEFE",p="playgroundPreview_I95C";function g(e){let{defaultHTML:t,setHTML:a,defaultCSS:i,setCSS:u,defaultJavaScript:s,setJS:c}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,{groupId:"editor"},n.createElement(l.Z,{value:"html",label:"HTML"},n.createElement(o.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),n.createElement(l.Z,{value:"css",label:"CSS"},n.createElement(o.ZP,{height:"400px",defaultLanguage:"css",defaultValue:i,onChange:e=>{u(e)}})),n.createElement(l.Z,{value:"js",label:"JavaScript"},n.createElement(o.ZP,{height:"400px",defaultLanguage:"javascript",defaultValue:s,onChange:e=>{c(e)}}))))}function k(e){let{defaultHTML:t,setHTML:a,defaultCSS:i,setCSS:u}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,{groupId:"editor"},n.createElement(l.Z,{value:"html",label:"HTML"},n.createElement(o.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),n.createElement(l.Z,{value:"css",label:"CSS"},n.createElement(o.ZP,{height:"400px",defaultLanguage:"css",defaultValue:i,onChange:e=>{u(e)}}))))}function h(e){let{defaultHTML:t,setHTML:a,defaultJavaScript:i,setJS:u}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,{groupId:"editor"},n.createElement(l.Z,{value:"html",label:"HTML"},n.createElement(o.ZP,{height:"400px",defaultLanguage:"html",defaultValue:t,onChange:e=>{a(e)}})),n.createElement(l.Z,{value:"js",label:"JavaScript"},n.createElement(o.ZP,{height:"400px",defaultLanguage:"javascript",defaultValue:i,onChange:e=>{u(e)}}))))}function f(e){let{language:t,children:a,defaultCSS:r,defaultJavaScript:l}=e;const[f,v]=(0,n.useState)(a),[E,b]=(0,n.useState)(r),[w,N]=(0,n.useState)(l);return n.createElement(n.Fragment,null,n.createElement("div",{className:c},n.createElement("div",{className:m},"\u30e9\u30a4\u30d6\u30a8\u30c7\u30a3\u30bf\u30fc"),n.createElement("div",{className:d},"html-css-javascript"===t?n.createElement(g,{defaultHTML:a,setHTML:v,defaultCSS:r,setCSS:b,defaultJavaScript:l,setJS:N}):"html-css"===t?n.createElement(k,{defaultHTML:a,setHTML:v,defaultCSS:r,setCSS:b}):"html-javascript"===t?n.createElement(h,{defaultHTML:a,setHTML:v,defaultJavaScript:l,setJS:N}):n.createElement(o.ZP,{height:"400px",defaultLanguage:t,defaultValue:a,onChange:e=>{v(e)}})),n.createElement("div",{className:m},"\u7d50\u679c"),n.createElement("div",{className:p},n.createElement(i.Z,null,"html"===t?f:"markdown"===t?(0,u.Z)(f):"latex"===t?(0,s.Z)(f):"html-css"===t?`<style>${E}</style>${f}`:"html-javascript"===t?`${f}<script>${w}<\/script>`:`<style>${E}</style>${f}<script>${w}<\/script>`))))}},45140:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),r=a(40667),l=a(86886),o=a(15861),i=a(93193),u=a(26126),s=a(74005),c=a(62288),m=a(17440),d=a(1849),p=a(3018),g=a(98034);function k(e,t,a){const n=function(e,t,a){let n=0;for(let r=t-1;r<=t+1;r++)for(let t=a-1;t<=a+1;t++)0<=r&&r<e.length&&0<=t&&t<e[0].length&&(n+=Number(e[r][t]));return n-Number(e[t][a])}(e,t,a);return e[t][a]&&2===n||3===n}function h(e){let{data:t=Array(100).fill().map((()=>Array(100).fill(!1)))}=e;const[a,h]=(0,n.useState)(t),[v,E]=(0,n.useState)(4),[b,w]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=setInterval((()=>{b&&h(function(e){const t=e.map((e=>e.map((e=>e))));for(let a=0;a<e.length;a++)for(let n=0;n<e[0].length;n++)t[a][n]=k(e,a,n);return t}(a))}),4e3/v);return()=>{clearInterval(e)}}),[b,a]),n.createElement(n.Fragment,null,n.createElement(u.d$,{initialScale:7},(e=>{let{zoomIn:t,zoomOut:l,resetTransform:o}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,{onClick:()=>{t()}},n.createElement(s.Z,null)),n.createElement(r.Z,{onClick:()=>{l()}},n.createElement(c.Z,null)),n.createElement(r.Z,{onClick:()=>{o()}},n.createElement(m.Z,null)),n.createElement(u.Uv,null,n.createElement(f,{board:a,setBoard:h})))})),n.createElement(l.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(l.ZP,{item:!0},n.createElement(r.Z,{onClick:()=>{w(!b)}},b?n.createElement(g.Z,null):n.createElement(p.Z,null))),n.createElement(l.ZP,{item:!0},n.createElement(r.Z,{onClick:()=>{h(t)}},n.createElement(d.Z,null))),n.createElement(l.ZP,{item:!0},n.createElement(o.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(l.ZP,{item:!0,xs:!0},n.createElement(i.ZP,{value:v,onChange:e=>{E(e.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function f(e){let{board:t,setBoard:a}=e;const r=52*t.length+2,l=52*t[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${l}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:r,height:l,fill:"#808080"}),t.map(((e,r)=>e.map(((e,l)=>n.createElement("rect",{key:`${r},${l}`,x:52*l+2,y:52*r+2,width:"50",height:"50",fill:e?"#000000":"#ffffff",onClick:()=>{const e=[...t];e[r][l]=!t[r][l],a(e)}}))))))))}},37403:(e,t,a)=>{function n(e){return'  <!DOCTYPE html>\n  <html lang="ja">\n    <head>\n      <meta charset="UTF-8" />\n      <script type="module">\n        import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs";\n        customElements.define("latex-js", LaTeXJSComponent);\n      <\/script>\n    </head>\n    <body>\n      <latex-js baseURL="https://cdn.jsdelivr.net/npm/latex.js/dist/">'+e+"      </latex-js>\n    </body>\n  </html>"}a.d(t,{Z:()=>n})},10507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,defaultMathValue:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(24701);a(45140);const o={sidebar_position:1},i="Markdown",u={unversionedId:"extras/website/docusaurus/markdown/index",id:"extras/website/docusaurus/markdown/index",title:"Markdown",description:"Markdown \u3068\u306f",source:"@site/docs/07-extras/04-website/02-docusaurus/01-markdown/index.mdx",sourceDirName:"07-extras/04-website/02-docusaurus/01-markdown",slug:"/extras/website/docusaurus/markdown/",permalink:"/pr-preview/pr-253/docs/extras/website/docusaurus/markdown/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/07-extras/04-website/02-docusaurus/01-markdown/index.mdx",tags:[],version:"current",lastUpdatedAt:1682825910,formattedLastUpdatedAt:"2023\u5e744\u670830\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docusaurus \u3092\u7528\u3044\u305f Web \u30b5\u30a4\u30c8\u306e\u4f5c\u308a\u65b9",permalink:"/pr-preview/pr-253/docs/extras/website/docusaurus/"},next:{title:"npm \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",permalink:"/pr-preview/pr-253/docs/extras/website/docusaurus/npm/"}},s={},c=[{value:"Markdown \u3068\u306f",id:"markdown-\u3068\u306f",level:2},{value:"\u306f\u3058\u3081\u3066\u306e Markdown",id:"\u306f\u3058\u3081\u3066\u306e-markdown",level:2},{value:"Markdown \u306e\u8a18\u6cd5",id:"markdown-\u306e\u8a18\u6cd5",level:2}],m="$a^2 + b^2 = c^2$\n$$\n  x = \\frac{-b\\pm \\sqrt{b^2 - 4ac}}{2a}\n$$",d={toc:c,defaultMathValue:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"markdown"},"Markdown"),(0,r.kt)("h2",{id:"markdown-\u3068\u306f"},"Markdown \u3068\u306f"),(0,r.kt)("p",null,"Markdown \u306f\u3001\u6587\u66f8\u306e\u66f8\u304d\u65b9\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u975e\u5e38\u306b\u7c21\u5358\u306a\u6587\u6cd5\u306a\u306e\u3067\u3001Markdown \u3092\u77e5\u3089\u306a\u3044\u4eba\u3067\u3082\u3060\u3044\u305f\u3044\u306e\u610f\u5473\u304c\u7406\u89e3\u3067\u304d\u307e\u3059\u3002\n\u6700\u8fd1\u3067\u306f\u3001\u591a\u304f\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c HTML \u3067\u306f\u306a\u304f\u3001Markdown \u3067\u66f8\u304b\u308c\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u304d\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u7b87\u6761\u66f8\u304d\u306f\u6b21\u306e\u3088\u3046\u306b\u5165\u529b\u3059\u308b\u3060\u3051\u3067\u3059\u3002\u975e\u5e38\u306b\u7c21\u5358\u3067\u3059\u306d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"- \u30a2\u30a4\u30c6\u30e0 1\n- \u30a2\u30a4\u30c6\u30e0 2\n- \u30a2\u30a4\u30c6\u30e0 3\n")),(0,r.kt)("h2",{id:"\u306f\u3058\u3081\u3066\u306e-markdown"},"\u306f\u3058\u3081\u3066\u306e Markdown"),(0,r.kt)("p",null,"Markdown \u3067\u6587\u7ae0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.md")," \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066 VSCode \u3067\u958b\u3044\u3066\u304f\u3060\u3055\u3044\u3002\u305d\u306e\u4e2d\u306b\u6b21\u306e\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"K")," \u3092\u540c\u6642\u306b\u62bc\u3057\u3066\u304b\u3089\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"V")," \u3092\u62bc\u3059\u3068\u3001\u53f3\u5074\u306b\u30d7\u30ec\u30d3\u30e5\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3082\u3057\u304f\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"/markdown-playground"},"\u3053\u306e\u30b5\u30a4\u30c8\u306e Markdown \u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u7de8\u96c6\u3057\u3066\u30d7\u30ec\u30d3\u30e5\u30fc\u304c\u3067\u304d\u308b\u30d7\u30ec\u30a4\u30b0\u30e9\u30a6\u30f3\u30c9"),"\u306b\u30b3\u30fc\u30c9\u3092\u66f8\u3044\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"**Hello** World!\n")),(0,r.kt)("h2",{id:"markdown-\u306e\u8a18\u6cd5"},"Markdown \u306e\u8a18\u6cd5"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Markdown \u306e\u8a18\u6cd5\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"#")," \u3068\u66f8\u304f\u3053\u3068\u3067\u898b\u51fa\u3057\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},"# \u30ec\u30d9\u30eb 1 \u306e\u898b\u51fa\u3057")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"##")," \u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," \u306e\u4e00\u500b\u4e0b\u306e\u898b\u51fa\u3057\u3067\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},"## \u30ec\u30d9\u30eb 2 \u306e\u898b\u51fa\u3057")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"**")," \u3067\u5f37\u8abf\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},"**\u5f37\u8abf**")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},">")," \u3068\u3059\u308b\u3053\u3068\u3067\u5f15\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},"> \u5f15\u7528")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7b87\u6761\u66f8\u304d\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u66f8\u3051\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},"- \u30a2\u30a4\u30c6\u30e0 1\n- \u30a2\u30a4\u30c6\u30e0 2\n- \u30a2\u30a4\u30c6\u30e0 3")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u756a\u53f7\u4ed8\u304d\u7b87\u6761\u66f8\u304d\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u66f8\u3051\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},"1.  \u30a2\u30a4\u30c6\u30e0 1\n1.  \u30a2\u30a4\u30c6\u30e0 2\n1.  \u30a2\u30a4\u30c6\u30e0 3")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30d0\u30c3\u30af\u30af\u30a9\u30fc\u30c8\uff08 ",(0,r.kt)("inlineCode",{parentName:"p"},"`")," \uff09\u3067\u56f2\u3080\u3053\u3068\u3067\u30a4\u30f3\u30e9\u30a4\u30f3\u30b3\u30fc\u30c9\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},"`\u30b3\u30fc\u30c9\u30c6\u30ad\u30b9\u30c8`")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30d0\u30c3\u30af\u30af\u30a9\u30fc\u30c8 3 \u3064\u3067\u3001\u30b3\u30fc\u30c9\u30d6\u30ed\u30c3\u30af\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},'```python\nprint("Hello World!")\n```')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30ea\u30f3\u30af\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},"[Introduction to Algorithms](https://sikepuri-algorithm.github.io/)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u753b\u50cf\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3082\u3061\u308d\u3093\u30ed\u30fc\u30ab\u30eb\u4e0a\u306e\u30d5\u30a1\u30a4\u30eb\u3082\u6271\u3048\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},"![Introduction to Algorithms](https://sikepuri-algorithm.github.io/img/favicon.ico)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b9f\u306f\u3001Markdown \u306e\u4e2d\u306b\u306f HTML \u3082\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},'<button type="button">\u30dc\u30bf\u30f3</button>')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u591a\u304f\u306e\u5834\u5408\u3001LaTeX \u306e\u8a18\u6cd5\u3067\u6570\u5f0f\u3092\u66f8\u304f\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.Z,{language:"markdown",mdxType:"InteractiveCodeEditor"},m))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Markdown \u3092\u62e1\u5f35\u3057\u305f MDX \u3068\u3044\u3046\u3082\u306e\u3082\u3042\u308a\u307e\u3059\u3002\u5b9f\u306f\u3001Docusaurus \u3067\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u306f Markdown \u3067\u306f\u306a\u304f MDX \u3067\u3059\u3002MDX \u306f\u3001Markdown \u306e\u4e2d\u3067 JSX \u8a18\u6cd5 \u3092\u4f7f\u3048\u308b\u3082\u306e\u3067\u3059\u3002JSX \u8a18\u6cd5 \u306f\u3001JavaScript \u306e\u4e2d\u306b HTML \u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u3082\u306e\u3067\u3059\u304c\u3001\u8a73\u3057\u3044\u3053\u3068\u306f\u81ea\u5206\u3067\u8abf\u3079\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u3053\u3067\u306f\u3001\u7c21\u5358\u306b\u4f8b\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"JavaScript \u3092\u6587\u66f8\u306e\u4e2d\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3001\u4f8b\u3048\u3070\u6b21\u306e\u3088\u3046\u306a\u8868\u73fe\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"live",live:!0},"<>{2 * Math.PI}</>\n")),(0,r.kt)("p",{parentName:"admonition"},"\u3061\u306a\u307f\u306b\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3067\u306f\u30e9\u30a4\u30d5\u30b2\u30fc\u30e0\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u3063\u305f\u306e\u3067\u3001\u305d\u308c\u3092\u4f7f\u3046\u3068\u304d\u306f\u30d5\u30a1\u30a4\u30eb\u306e\u5148\u982d\u3067\u6b21\u306e\u3088\u3046\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u304b\u3089\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304f\u3060\u3051\u3067\u30e9\u30a4\u30d5\u30b2\u30fc\u30e0\u3092\u8868\u793a\u3067\u304d\u307e\u3059\uff08\u7b11\uff09"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'import LifeGame from "@site/src/components/LifeGame";\n')),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"live",live:!0},"<>\n  <LifeGame />\n  <LifeGame />\n</>\n"))))}p.isMDXComponent=!0}}]);