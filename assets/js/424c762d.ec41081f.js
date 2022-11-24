/*! For license information please see 424c762d.ec41081f.js.LICENSE.txt */
"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[9667],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},25162:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),r=a(66521),l=a(79072),o=a(29630),i=a(33477),p=a(26126),u=a(74005),m=a(62288),s=a(17440),c=a(1849),d=a(3018),k=a(98034);function N(e,t,a){const n=function(e,t,a){let n=0;for(let r=t-1;r<=t+1;r++)for(let t=a-1;t<=a+1;t++)0<=r&&r<e.length&&0<=t&&t<e[0].length&&(n+=Number(e[r][t]));return n-Number(e[t][a])}(e,t,a);return e[t][a]&&2===n||3===n}function f(e){let{data:t=Array(100).fill().map((()=>Array(100).fill(!1)))}=e;const[a,f]=(0,n.useState)(t),[b,h]=(0,n.useState)(4),[y,w]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=setInterval((()=>{y&&f(function(e){const t=e.map((e=>e.map((e=>e))));for(let a=0;a<e.length;a++)for(let n=0;n<e[0].length;n++)t[a][n]=N(e,a,n);return t}(a))}),4e3/b);return()=>{clearInterval(e)}}),[y,a]),n.createElement(n.Fragment,null,n.createElement(p.d$,{initialScale:7},(e=>{let{zoomIn:t,zoomOut:l,resetTransform:o}=e;return n.createElement(n.Fragment,null,n.createElement(r.Z,{onClick:()=>{t()}},n.createElement(u.Z,null)),n.createElement(r.Z,{onClick:()=>{l()}},n.createElement(m.Z,null)),n.createElement(r.Z,{onClick:()=>{o()}},n.createElement(s.Z,null)),n.createElement(p.Uv,null,n.createElement(g,{board:a,setBoard:f})))})),n.createElement(l.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(l.ZP,{item:!0},n.createElement(r.Z,{onClick:()=>{w(!y)}},y?n.createElement(k.Z,null):n.createElement(d.Z,null))),n.createElement(l.ZP,{item:!0},n.createElement(r.Z,{onClick:()=>{f(t)}},n.createElement(c.Z,null))),n.createElement(l.ZP,{item:!0},n.createElement(o.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(l.ZP,{item:!0,xs:!0},n.createElement(i.ZP,{value:b,onChange:e=>{h(e.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function g(e){let{board:t,setBoard:a}=e;const r=52*t.length+2,l=52*t[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${l}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:r,height:l,fill:"#808080"}),t.map(((e,r)=>e.map(((e,l)=>n.createElement("rect",{key:`${r},${l}`,x:52*l+2,y:52*r+2,width:"50",height:"50",fill:e?"#000000":"#ffffff",onClick:()=>{const e=[...t];e[r][l]=!t[r][l],a(e)}}))))))))}},23698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l=a.p+"assets/medias/install_docusaurus-f63f643b787bb132f2d6bbd43a9d53cb.mp4",o=a.p+"assets/medias/edit_docusaurus-6db0655bb3a0b774a7c6c40234e7078a.mp4";var i=a(25162);const p={sidebar_position:2},u="Docusaurus \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",m={unversionedId:"03extras/04website/02docusaurus/index",id:"03extras/04website/02docusaurus/index",title:"Docusaurus \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",description:"Docusaurus \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",source:"@site/docs/03extras/04website/02docusaurus/index.mdx",sourceDirName:"03extras/04website/02docusaurus",slug:"/03extras/04website/02docusaurus/",permalink:"/docs/03extras/04website/02docusaurus/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/03extras/04website/02docusaurus/index.mdx",tags:[],version:"current",lastUpdatedAt:1669282339,formattedLastUpdatedAt:"2022\u5e7411\u670824\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"npm \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",permalink:"/docs/03extras/04website/01npm/"},next:{title:"GitHub \u3078\u4fdd\u5b58",permalink:"/docs/03extras/04website/03GitHub/"}},s={},c=[{value:"Docusaurus \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",id:"docusaurus-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5-1",level:2},{value:"Docusaurus \u306e\u7de8\u96c6\u65b9\u6cd5",id:"docusaurus-\u306e\u7de8\u96c6\u65b9\u6cd5",level:2}],d={toc:c};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docusaurus-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"},"Docusaurus \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,r.kt)("h2",{id:"docusaurus-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5-1"},"Docusaurus \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Docusaurus \u3068\u3044\u3046\u9759\u7684\u30b5\u30a4\u30c8\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u3092\u4f7f\u3063\u3066\u5b9f\u969b\u306b\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u4f5c\u3063\u3066\u307f\u307e\u3059\u3002Docusaurus \u306f\u3001\u3055\u304d\u307b\u3069\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f npm \u3092\u4f7f\u3046\u3068\u30b3\u30de\u30f3\u30c9\u4e00\u3064\u3067\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5b9f\u306f\u3001npm \u3092\u4f7f\u3048\u3070\u3001Docusaurus \u4ee5\u5916\u306b\u3082\u69d8\u3005\u306a\u3082\u306e\u3092\u30b3\u30de\u30f3\u30c9\u4e00\u3064\u3067\u7c21\u5358\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002\u4e0b\u306e\u52d5\u753b\u3092\u898b\u306a\u304c\u3089\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4ee5\u4e0b\u306b\u6982\u8981\u3092\u8a18\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u307e\u305a\u3001\u9069\u5f53\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"projects")," \u30d5\u30a1\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u3066\u3001\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u8d77\u52d5\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3053\u3053\u3067\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001Docusaurus \u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"my-website")," \u306e\u3068\u3053\u308d\u3092\u4efb\u610f\u306e\u6587\u5b57\u306b\u3059\u308b\u3053\u3068\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u3092\u6c7a\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\uff09"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-docusaurus@latest my-website classic\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Ok to proceed? (y)")," \u3068\u805e\u304b\u308c\u308b\u306e\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \u3068\u5165\u529b\u3057\u3066 ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter\u30ad\u30fc")," \u3092\u62bc\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u9806\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002\u3059\u308b\u3068\u3001\u30d6\u30e9\u30a6\u30b6\u304c\u81ea\u52d5\u7684\u306b\u958b\u304d\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304c\u73fe\u308c\u307e\u3059\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n")),(0,r.kt)("video",{src:l,controls:!0,width:"100%"}),(0,r.kt)("h2",{id:"docusaurus-\u306e\u7de8\u96c6\u65b9\u6cd5"},"Docusaurus \u306e\u7de8\u96c6\u65b9\u6cd5"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Docusaurus \u3092\u5b9f\u969b\u306b\u7de8\u96c6\u3057\u3066\u307f\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u307e\u305a\u3001\u30bf\u30fc\u30df\u30ca\u30eb\u4e0a\u3067 ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl\u30ad\u30fc")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," \u3092\u540c\u6642\u306b\u62bc\u3057\u3066\u3001\u5148\u7a0b\u8d77\u52d5\u3057\u305f Docusaurus \u306e\u30b5\u30fc\u30d0\u30fc\u3092\u7d42\u4e86\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6b21\u306b\u3001\u5148\u7a0b\u4f5c\u6210\u3057\u305f Docusaurus \u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092 VSCode \u3067\u958b\u304d\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u3082\u3046\u4e00\u5ea6\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001Docusaurus \u306e\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002\u5148\u7a0b\u306e\u3088\u3046\u306b\u30d6\u30e9\u30a6\u30b6\u304c\u81ea\u52d5\u7684\u306b\u958b\u304d\u307e\u3059\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u3067\u306f\u3001\u5b9f\u969b\u306b\u7de8\u96c6\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u4eca\u56de\u306f\u3001\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u306f\u3058\u3081\u306e\u30da\u30fc\u30b8\u3092\u7de8\u96c6\u3057\u3066\u307f\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"docs")," \u30d5\u30a1\u30eb\u30c0\u306e\u4e2d\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"intro.md")," \u3068\u3044\u3046\u30d5\u30a9\u30eb\u30c0\u3092\u958b\u3044\u3066\u3001\u4e0a\u304b\u3089 5 \u884c\u76ee\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"# Tutorial Intro")," \u3068\u3044\u3046\u3068\u3053\u308d\u3092 ",(0,r.kt)("inlineCode",{parentName:"li"},"# Hello from Docusaurus")," \u3068\u66f8\u304d\u63db\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002\uff08\u5148\u982d\u306b ",(0,r.kt)("inlineCode",{parentName:"li"},"#")," \u3068\u66f8\u3044\u3066\u3042\u308b\u306e\u306f\u3001\u3053\u3053\u306f\u898b\u51fa\u3057\u3060\u3068\u3044\u3046\u547d\u4ee4\u3067\u3059\u3002\u5b9f\u306f\u3001Docusaurus \u306f Markdown \u3068\u3044\u3046\u975e\u5e38\u306b\u7c21\u5358\u306a\u5f62\u5f0f\u3067\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\uff09\u30d6\u30e9\u30a6\u30b6\u3092\u898b\u308b\u3068\u3001\u81ea\u52d5\u3067\u7de8\u96c6\u3057\u305f\u5185\u5bb9\u304c\u30d7\u30ec\u30d3\u30e5\u30fc\u3055\u308c\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002")),(0,r.kt)("video",{src:o,controls:!0,width:"100%"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5148\u7a0b\u3001Docusaurus \u306f Markdown \u3068\u3044\u3046\u5f62\u5f0f\u3067\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u3068\u66f8\u304d\u307e\u3057\u305f\u3002\u3053\u3053\u3067\u3001Markdown \u8a18\u6cd5\u306b\u3064\u3044\u3066\u5c11\u3057\u7d39\u4ecb\u3057\u3066\u304a\u304d\u307e\u3059\u3002\u8a73\u3057\u3044\u3053\u3068\u306f\u3001\u81ea\u5206\u3067\u8abf\u3079\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"#")," \u3068\u66f8\u304f\u3053\u3068\u3067\u898b\u51fa\u3057\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"# \u30ec\u30d9\u30eb 1 \u306e\u898b\u51fa\u3057\n")),(0,r.kt)("h1",{parentName:"li",id:"\u30ec\u30d9\u30eb-1-\u306e\u898b\u51fa\u3057"},"\u30ec\u30d9\u30eb 1 \u306e\u898b\u51fa\u3057")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"##")," \u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," \u306e\u4e00\u500b\u4e0b\u306e\u898b\u51fa\u3057\u3067\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"## \u30ec\u30d9\u30eb 2 \u306e\u898b\u51fa\u3057\n")),(0,r.kt)("h2",{parentName:"li",id:"\u30ec\u30d9\u30eb-2-\u306e\u898b\u51fa\u3057"},"\u30ec\u30d9\u30eb 2 \u306e\u898b\u51fa\u3057")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"**")," \u3067\u5f37\u8abf\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"**\u5f37\u8abf**\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5f37\u8abf"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},">")," \u3068\u3059\u308b\u3053\u3068\u3067\u5f15\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"> hoge\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"hoge"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7b87\u6761\u66f8\u304d\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u66f8\u3051\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"- \u30a2\u30a4\u30c6\u30e0 1\n- \u30a2\u30a4\u30c6\u30e0 2\n- \u30a2\u30a4\u30c6\u30e0 3\n")),(0,r.kt)("ul",{style:{listStyleType:"disc"}},(0,r.kt)("li",null,"\u30a2\u30a4\u30c6\u30e0 1"),(0,r.kt)("li",null,"\u30a2\u30a4\u30c6\u30e0 2"),(0,r.kt)("li",null,"\u30a2\u30a4\u30c6\u30e0 3"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u756a\u53f7\u4ed8\u304d\u7b87\u6761\u66f8\u304d\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u66f8\u3051\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"1. \u30a2\u30a4\u30c6\u30e0 1\n1. \u30a2\u30a4\u30c6\u30e0 2\n1. \u30a2\u30a4\u30c6\u30e0 3\n")),(0,r.kt)("ol",{style:{listStyleType:"decimal"}},(0,r.kt)("li",null,"\u30a2\u30a4\u30c6\u30e0 1"),(0,r.kt)("li",null,"\u30a2\u30a4\u30c6\u30e0 2"),(0,r.kt)("li",null,"\u30a2\u30a4\u30c6\u30e0 3"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30d0\u30c3\u30af\u30af\u30a9\u30fc\u30c8\uff08 ",(0,r.kt)("inlineCode",{parentName:"p"},"`")," \uff09\u3067\u56f2\u3080\u3053\u3068\u3067\u30a4\u30f3\u30e9\u30a4\u30f3\u30b3\u30fc\u30c9\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"`\u30b3\u30fc\u30c9\u30c6\u30ad\u30b9\u30c8`\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\u30b3\u30fc\u30c9\u30c6\u30ad\u30b9\u30c8"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30d0\u30c3\u30af\u30af\u30a9\u30fc\u30c8 3 \u3064\u3067\u3001\u30b3\u30fc\u30c9\u30d6\u30ed\u30c3\u30af\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'```python\nprint("Hello World!")\n```\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print("Hello World!")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30ea\u30f3\u30af\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"[Introduction to Algorithms](https://sikepuri-algorithm.github.io/)\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://sikepuri-algorithm.github.io/"},"Introduction to Algorithms"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u753b\u50cf\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3082\u3061\u308d\u3093\u76f8\u5bfe\u30d1\u30b9\u3082\u4f7f\u3048\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"![Introduction to Algorithms](https://sikepuri-algorithm.github.io/img/logo.svg)\n")),(0,r.kt)("div",{style:{maxWidth:"200px"}},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://sikepuri-algorithm.github.io/img/logo.svg",alt:"Introduction toAlgorithms"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b9f\u306f\u3001Markdown \u306e\u4e2d\u306b\u306f HTML \u3082\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'<button type="button">\u30dc\u30bf\u30f3</button>\n')),(0,r.kt)("button",{type:"button"},"\u30dc\u30bf\u30f3")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5b9f\u306f\u3001Docusaurus \u306f Markdown \u3060\u3051\u3067\u306a\u304f MDX \u3067\u3082\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002MDX \u306f\u3001Markdown \u306e\u4e2d\u3067 JSX \u8a18\u6cd5 \u3092\u4f7f\u3048\u308b\u3082\u306e\u3067\u3059\u3002JSX \u8a18\u6cd5 \u306f\u3001JavaScript \u306e\u4e2d\u306b HTML \u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u3082\u306e\u3067\u3059\u304c\u3001\u306a\u304b\u306a\u304b\u5965\u304c\u6df1\u304f\u3053\u3053\u3067\u306f\u8aac\u660e\u3067\u304d\u306a\u3044\u306e\u3067\u3001\u81ea\u5206\u3067\u8abf\u3079\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u3061\u306a\u307f\u306b\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3067\u306f\u30e9\u30a4\u30d5\u30b2\u30fc\u30e0\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f5c\u3063\u305f\u306e\u3067\u3001\u305d\u308c\u3092\u4f7f\u3046\u3068\u304d\u306f\u30d5\u30a1\u30a4\u30eb\u306e\u5148\u982d\u3067\u6b21\u306e\u3088\u3046\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u304b\u3089\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304f\u3060\u3051\u3067\u30e9\u30a4\u30d5\u30b2\u30fc\u30e0\u3092\u8868\u793a\u3067\u304d\u307e\u3059 w"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'import LifeGame from "@site/src/components/LifeGame/LifeGame";\n')),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-mdx"},"<LifeGame />\n")),(0,r.kt)("div",{style:{maxWidth:"200px"}},(0,r.kt)(i.Z,{mdxType:"LifeGame"}))))}k.isMDXComponent=!0},75251:(e,t,a)=>{a(27418);var n=a(67294),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;r=l("react.element"),t.Fragment=l("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,a){var n,l={},u=null,m=null;for(n in void 0!==a&&(u=""+a),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(m=t.ref),t)i.call(t,n)&&!p.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:r,type:e,key:u,ref:m,props:l,_owner:o.current}}t.jsx=u,t.jsxs=u},85893:(e,t,a)=>{e.exports=a(75251)},97326:(e,t,a)=>{function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,{Z:()=>n})}}]);