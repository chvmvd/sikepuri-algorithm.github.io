"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[216],{84765:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(67294),r=n(34673);function a(e){let{children:t}=e;return l.createElement(r.Z,{summary:l.createElement("summary",null,"\u89e3\u7b54")},t)}},45140:(e,t,n)=>{n.d(t,{Z:()=>k});var l=n(67294),r=n(40667),a=n(86886),o=n(15861),i=n(93193),c=n(26126),s=n(74005),u=n(62288),m=n(17440),p=n(1849),d=n(3018),h=n(98034);function g(e,t,n){const l=function(e,t,n){let l=0;for(let r=t-1;r<=t+1;r++)for(let t=n-1;t<=n+1;t++)0<=r&&r<e.length&&0<=t&&t<e[0].length&&(l+=Number(e[r][t]));return l-Number(e[t][n])}(e,t,n);return e[t][n]&&2===l||3===l}function k(e){let{data:t=Array(100).fill().map((()=>Array(100).fill(!1)))}=e;const[n,k]=(0,l.useState)(t),[y,E]=(0,l.useState)(4),[x,b]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=setInterval((()=>{x&&k(function(e){const t=e.map((e=>e.map((e=>e))));for(let n=0;n<e.length;n++)for(let l=0;l<e[0].length;l++)t[n][l]=g(e,n,l);return t}(n))}),4e3/y);return()=>{clearInterval(e)}}),[x,n]),l.createElement(l.Fragment,null,l.createElement(c.d$,{initialScale:7},(e=>{let{zoomIn:t,zoomOut:a,resetTransform:o}=e;return l.createElement(l.Fragment,null,l.createElement(r.Z,{onClick:()=>{t()}},l.createElement(s.Z,null)),l.createElement(r.Z,{onClick:()=>{a()}},l.createElement(u.Z,null)),l.createElement(r.Z,{onClick:()=>{o()}},l.createElement(m.Z,null)),l.createElement(c.Uv,null,l.createElement(f,{board:n,setBoard:k})))})),l.createElement(a.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},l.createElement(a.ZP,{item:!0},l.createElement(r.Z,{onClick:()=>{b(!x)}},x?l.createElement(h.Z,null):l.createElement(d.Z,null))),l.createElement(a.ZP,{item:!0},l.createElement(r.Z,{onClick:()=>{k(t)}},l.createElement(p.Z,null))),l.createElement(a.ZP,{item:!0},l.createElement(o.Z,{gutterBottom:!0},"\u901f\u3055")),l.createElement(a.ZP,{item:!0,xs:!0},l.createElement(i.ZP,{value:y,onChange:e=>{E(e.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function f(e){let{board:t,setBoard:n}=e;const r=52*t.length+2,a=52*t[0].length+2;return l.createElement(l.Fragment,null,l.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${a}`},l.createElement("defs",null),l.createElement("g",null,l.createElement("rect",{x:"0",y:"0",width:r,height:a,fill:"#808080"}),t.map(((e,r)=>e.map(((e,a)=>l.createElement("rect",{key:`${r},${a}`,x:52*a+2,y:52*r+2,width:"50",height:"50",fill:e?"#000000":"#ffffff",onClick:()=>{const e=[...t];e[r][a]=!t[r][a],n(e)}}))))))))}},41089:(e,t,n)=>{n.d(t,{Z:()=>h});var l=n(67294),r=n(7174),a=n.n(r),o=n(31413),i=n(35993);const c="root_frVT";function s(e){let{path:t}=e;return l.createElement(l.Fragment,null,l.createElement("div",{className:c},l.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${t}`,target:"_blank",rel:"noreferrer"},l.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const u="iframe-wrapper_kRL9";function m(e,t){const n=new(a())({newline:!0});switch(e){case"text":return n.toHtml(t);case"html":return t;case"png":return`<img src="data:image/png;base64,${t}"></img>`;case"js":return`<script>${t}<\/script>`}}function p(e){const t=[];let n="normal";for(const l of e)switch(l.output_type){case"stream":t.push(m("text",l.text.join("")));break;case"execute_result":{const e=[];null!=l.data["text/plain"]&&e.push(m("text",l.data["text/plain"].join(""))),null!=l.data["text/html"]&&e.push(m("html",l.data["text/html"].join(""))),t.push(e.join(""));break}case"error":t.push(m("text",l.traceback.join(""))),n="error";break;case"display_data":{const e=[];null!=l.data["text/plain"]&&e.push(m("text",l.data["text/plain"].join(""))),null!=l.data["text/html"]&&e.push(m("html",l.data["text/html"].join(""))),null!=l.data["application/javascript"]&&e.push(m("js",l.data["application/javascript"])),null!=l.data["image/png"]&&e.push(m("png",l.data["image/png"])),t.push(e.join(""));break}}return{result:t.join(""),cellType:n}}function d(e){let{children:t,cellColor:n,title:r}=e;return l.createElement("div",{className:u,style:{backgroundColor:n}},l.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:t,onLoad:e=>{const t=e.target;t.height=t.contentDocument.documentElement.scrollHeight+"px"},title:r}))}function h(e){let{path:t,noOutput:n=!1}=e;const[r,a]=(0,l.useState)([]);return(0,l.useEffect)((()=>{fetch(t).then((e=>e.json())).then((e=>{a(function(e){const t=[];for(const n of e.cells)switch(n.cell_type){case"markdown":t.push({cell_type:"markdown",source:0===n.source.length?null:n.source.join("")});break;case"code":{const{result:e,cellType:l}=p(n.outputs);t.push({cell_type:"code",source:0===n.source.length?null:n.source.join(""),output:0===n.outputs.length?null:e,cellColor:"normal"===l?"#eee":"#ffdddc"});break}}return t}(e))}))}),[]),l.createElement(l.Fragment,null,r.map(((e,t)=>l.createElement(l.Fragment,{key:t},"markdown"===e.cell_type&&null!=e.source&&l.createElement(d,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,i.Z)(e.source)),"code"===e.cell_type&&l.createElement(l.Fragment,null,null!=e.source&&l.createElement(o.Z,{language:"python"},e.source),!n&&null!=e.output&&l.createElement(d,{cellColor:e.cellColor,title:"Code Output"},e.output))))),l.createElement(s,{path:t}))}},56922:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(67294),r=n(45140);const a={React:l,...l,LifeGame:function(){return l.createElement(l.Fragment,null,l.createElement("div",{style:{maxWidth:"200px"}},l.createElement(r.Z,null)))}}},65230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var l=n(87462),r=(n(67294),n(3905)),a=n(41089),o=n(84765);const i={sidebar_position:2},c="\u306f\u3058\u3081\u3066\u306e Python",s={unversionedId:"python/getting-started/index",id:"python/getting-started/index",title:"\u306f\u3058\u3081\u3066\u306e Python",description:"\u306f\u3058\u3081\u3066\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002",source:"@site/docs/02-python/02-getting-started/index.mdx",sourceDirName:"02-python/02-getting-started",slug:"/python/getting-started/",permalink:"/docs/python/getting-started/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/02-python/02-getting-started/index.mdx",tags:[],version:"current",lastUpdatedAt:1676680599,formattedLastUpdatedAt:"2023\u5e742\u670818\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u74b0\u5883\u69cb\u7bc9\uff08Google Colaboratory\uff09",permalink:"/docs/python/google-colaboratory/"},next:{title:"\u7b97\u8853\u6f14\u7b97\u5b50",permalink:"/docs/python/expressions/"}},u={},m=[{value:"Hello World",id:"hello-world",level:2},{value:"\u7df4\u7fd2\u554f\u984c",id:"\u7df4\u7fd2\u554f\u984c",level:3},{value:"\u30b3\u30e1\u30f3\u30c8",id:"\u30b3\u30e1\u30f3\u30c8",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u306f\u3058\u3081\u3066\u306e-python"},"\u306f\u3058\u3081\u3066\u306e Python"),(0,r.kt)("p",null,"\u306f\u3058\u3081\u3066\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("h2",{id:"hello-world"},"Hello World"),(0,r.kt)("p",null,"\u306f\u3058\u3081\u3066\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u4e16\u754c\u3067\u306f\u3001\u307e\u305a\u753b\u9762\u4e0a\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3055\u305b\u308b\u306e\u304c\u6163\u4f8b\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u304c\u753b\u9762\u4e0a\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092 Google Colaboratory \u4e0a\u3067\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(a.Z,{path:"/getting-started/hello_world.ipynb",mdxType:"ViewSource"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3055\u308c\u305f\u3089\u6210\u529f\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"print")," \u306f\u753b\u9762\u306b\u6587\u5b57\u5217\u3092\u8868\u793a\u3055\u305b\u308b\u547d\u4ee4\u3067\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"p"},'"')," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," \u3067\u62ec\u3063\u305f\u6587\u5b57\u5217\u304c\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c"},"\u7df4\u7fd2\u554f\u984c"),(0,r.kt)("p",null,"\u5148\u7a0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5c11\u3057\u5909\u3048\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Hello from Python!")," \u3068\u51fa\u529b\u3059\u308b\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)(o.Z,{mdxType:"Answer"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"')," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},'"')," \u3067\u62ec\u3089\u308c\u305f\u6587\u5b57\u5217\u3092 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u304b\u3089\u6b21\u306e\u3088\u3046\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello from Python!")," \u306b\u5909\u3048\u308c\u3070\u3001\u5b8c\u6210\u3067\u3059\u3002"),(0,r.kt)(a.Z,{path:"/getting-started/hello_from_python.ipynb",mdxType:"ViewSource"})),(0,r.kt)("h2",{id:"\u30b3\u30e1\u30f3\u30c8"},"\u30b3\u30e1\u30f3\u30c8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#")," \u304b\u3089\u6587\u672b\u307e\u3067\u306f\u30b3\u30e1\u30f3\u30c8\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002\n\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u8aad\u307f\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u8aac\u660e\u3092\u66f8\u304f\u3068\u304d\u3084\u4e00\u6642\u7684\u306b\u3042\u308b\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3068\u304d\u306a\u3069\u306b\u3088\u304f\u4f7f\u308f\u308c\u307e\u3059\u3002"),(0,r.kt)(a.Z,{path:"/getting-started/comment.ipynb",mdxType:"ViewSource"}),(0,r.kt)(a.Z,{path:"/getting-started/comment2.ipynb",mdxType:"ViewSource"}))}d.isMDXComponent=!0}}]);