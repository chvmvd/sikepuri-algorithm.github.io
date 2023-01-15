"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[1498,7918],{5140:(e,t,l)=>{l.d(t,{Z:()=>k});var n=l(7294),o=l(667),r=l(6886),a=l(5861),i=l(225),c=l(6126),u=l(4005),s=l(2288),p=l(7440),m=l(1849),d=l(3018),h=l(8034);function g(e,t,l){const n=function(e,t,l){let n=0;for(let o=t-1;o<=t+1;o++)for(let t=l-1;t<=l+1;t++)0<=o&&o<e.length&&0<=t&&t<e[0].length&&(n+=Number(e[o][t]));return n-Number(e[t][l])}(e,t,l);return e[t][l]&&2===n||3===n}function k(e){let{data:t=Array(100).fill().map((()=>Array(100).fill(!1)))}=e;const[l,k]=(0,n.useState)(t),[y,E]=(0,n.useState)(4),[x,b]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=setInterval((()=>{x&&k(function(e){const t=e.map((e=>e.map((e=>e))));for(let l=0;l<e.length;l++)for(let n=0;n<e[0].length;n++)t[l][n]=g(e,l,n);return t}(l))}),4e3/y);return()=>{clearInterval(e)}}),[x,l]),n.createElement(n.Fragment,null,n.createElement(c.d$,{initialScale:7},(e=>{let{zoomIn:t,zoomOut:r,resetTransform:a}=e;return n.createElement(n.Fragment,null,n.createElement(o.Z,{onClick:()=>{t()}},n.createElement(u.Z,null)),n.createElement(o.Z,{onClick:()=>{r()}},n.createElement(s.Z,null)),n.createElement(o.Z,{onClick:()=>{a()}},n.createElement(p.Z,null)),n.createElement(c.Uv,null,n.createElement(f,{board:l,setBoard:k})))})),n.createElement(r.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(r.ZP,{item:!0},n.createElement(o.Z,{onClick:()=>{b(!x)}},x?n.createElement(h.Z,null):n.createElement(d.Z,null))),n.createElement(r.ZP,{item:!0},n.createElement(o.Z,{onClick:()=>{k(t)}},n.createElement(m.Z,null))),n.createElement(r.ZP,{item:!0},n.createElement(a.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(r.ZP,{item:!0,xs:!0},n.createElement(i.ZP,{value:y,onChange:e=>{E(e.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function f(e){let{board:t,setBoard:l}=e;const o=52*t.length+2,r=52*t[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:o,height:r,fill:"#808080"}),t.map(((e,o)=>e.map(((e,r)=>n.createElement("rect",{key:`${o},${r}`,x:52*r+2,y:52*o+2,width:"50",height:"50",fill:e?"#000000":"#ffffff",onClick:()=>{const e=[...t];e[o][r]=!t[o][r],l(e)}}))))))))}},1089:(e,t,l)=>{l.d(t,{Z:()=>h});var n=l(7294),o=l(7174),r=l.n(o),a=l(5614),i=l(5993);const c="root_frVT";function u(e){let{path:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:c},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const s="iframe-wrapper_kRL9";function p(e,t){const l=new(r())({newline:!0});switch(e){case"text":return l.toHtml(t);case"html":return t;case"png":return`<img src="data:image/png;base64,${t}"></img>`;case"js":return`<script>${t}<\/script>`}}function m(e){const t=[];let l="normal";for(const n of e)switch(n.output_type){case"stream":t.push(p("text",n.text.join("")));break;case"execute_result":{const e=[];null!=n.data["text/plain"]&&e.push(p("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(p("html",n.data["text/html"].join(""))),t.push(e.join(""));break}case"error":t.push(p("text",n.traceback.join(""))),l="error";break;case"display_data":{const e=[];null!=n.data["text/plain"]&&e.push(p("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(p("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&e.push(p("js",n.data["application/javascript"])),null!=n.data["image/png"]&&e.push(p("png",n.data["image/png"])),t.push(e.join(""));break}}return{result:t.join(""),cellType:l}}function d(e){let{children:t,cellColor:l,title:o}=e;return n.createElement("div",{className:s,style:{backgroundColor:l}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:t,onLoad:e=>{const t=e.target;t.height=t.contentDocument.documentElement.scrollHeight+"px"},title:o}))}function h(e){let{path:t,noOutput:l=!1}=e;const[o,r]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(t).then((e=>e.json())).then((e=>{r(function(e){const t=[];for(const l of e.cells)switch(l.cell_type){case"markdown":t.push({cell_type:"markdown",source:0===l.source.length?null:l.source.join("")});break;case"code":{const{result:e,cellType:n}=m(l.outputs);t.push({cell_type:"code",source:0===l.source.length?null:l.source.join(""),output:0===l.outputs.length?null:e,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return t}(e))}))}),[]),n.createElement(n.Fragment,null,o.map(((e,t)=>n.createElement(n.Fragment,{key:t},"markdown"===e.cell_type&&null!=e.source&&n.createElement(d,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,i.Z)(e.source)),"code"===e.cell_type&&n.createElement(n.Fragment,null,null!=e.source&&n.createElement(a.Z,{language:"python"},e.source),!l&&null!=e.output&&n.createElement(d,{cellColor:e.cellColor,title:"Code Output"},e.output))))),n.createElement(u,{path:t}))}},6922:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(7294),o=l(5140);const r={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(o.Z,null)))}}},5827:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=l(7462),o=(l(7294),l(3905)),r=l(1089),a=l(4765);const i={sidebar_position:2},c="\u306f\u3058\u3081\u3066\u306e Python",u={unversionedId:"01python/02hello-world/index",id:"01python/02hello-world/index",title:"\u306f\u3058\u3081\u3066\u306e Python",description:"Hello World",source:"@site/docs/01python/02hello-world/index.mdx",sourceDirName:"01python/02hello-world",slug:"/01python/02hello-world/",permalink:"/docs/01python/02hello-world/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/01python/02hello-world/index.mdx",tags:[],version:"current",lastUpdatedAt:1673762339,formattedLastUpdatedAt:"2023\u5e741\u670815\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u74b0\u5883\u69cb\u7bc9\uff08Google Colaboratory\uff09",permalink:"/docs/01python/01google-colaboratory/"},next:{title:"\u7b97\u8853\u6f14\u7b97\u5b50",permalink:"/docs/01python/03expressions/"}},s={},p=[{value:"Hello World",id:"hello-world",level:2},{value:"\u7df4\u7fd2\u554f\u984c",id:"\u7df4\u7fd2\u554f\u984c",level:3},{value:"\u30b3\u30e1\u30f3\u30c8",id:"\u30b3\u30e1\u30f3\u30c8",level:2}],m={toc:p};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u306f\u3058\u3081\u3066\u306e-python"},"\u306f\u3058\u3081\u3066\u306e Python"),(0,o.kt)("h2",{id:"hello-world"},"Hello World"),(0,o.kt)("p",null,"\u306f\u3058\u3081\u3066\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u4e16\u754c\u3067\u306f\u3001\u307e\u305a\u753b\u9762\u4e0a\u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3055\u305b\u308b\u306e\u304c\u6163\u4f8b\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u304c\u753b\u9762\u4e0a\u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092 Google Colaboratory \u4e0a\u3067\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)(r.Z,{path:"/hello-world/hello-world.ipynb",mdxType:"ViewSource"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3055\u308c\u305f\u3089\u6210\u529f\u3067\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"print")," \u306f\u753b\u9762\u306b\u6587\u5b57\u5217\u3092\u8868\u793a\u3055\u305b\u308b\u547d\u4ee4\u3067\u3059\u3002",(0,o.kt)("inlineCode",{parentName:"p"},'"')," \u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},'"')," \u3067\u62ec\u3063\u305f\u6587\u5b57\u5217\u304c\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c"},"\u7df4\u7fd2\u554f\u984c"),(0,o.kt)("p",null,"\u5148\u7a0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5c11\u3057\u5909\u3048\u3066\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Hello from Python!")," \u3068\u51fa\u529b\u3059\u308b\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)(a.Z,{mdxType:"Answer"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'"')," \u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},'"')," \u3067\u62ec\u3089\u308c\u305f\u6587\u5b57\u5217\u3092 ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u304b\u3089\u6b21\u306e\u3088\u3046\u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello from Python!")," \u306b\u5909\u3048\u308c\u3070\u3001\u5b8c\u6210\u3067\u3059\u3002"),(0,o.kt)(r.Z,{path:"/hello-world/hello-from-python.ipynb",mdxType:"ViewSource"})),(0,o.kt)("h2",{id:"\u30b3\u30e1\u30f3\u30c8"},"\u30b3\u30e1\u30f3\u30c8"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#")," \u304b\u3089\u6587\u672b\u307e\u3067\u306f\u30b3\u30e1\u30f3\u30c8\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002\n\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u8aad\u307f\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u8aac\u660e\u3092\u66f8\u304f\u3068\u304d\u3084\u4e00\u6642\u7684\u306b\u3042\u308b\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3068\u304d\u306a\u3069\u306b\u3088\u304f\u4f7f\u308f\u308c\u307e\u3059\u3002"),(0,o.kt)(r.Z,{path:"/hello-world/comment.ipynb",mdxType:"ViewSource"}),(0,o.kt)(r.Z,{path:"/hello-world/comment2.ipynb",mdxType:"ViewSource"}))}d.isMDXComponent=!0}}]);