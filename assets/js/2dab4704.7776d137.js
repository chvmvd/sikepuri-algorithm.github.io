"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[595],{3665:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(4673);function r(e){let{children:t}=e;return n.createElement(l.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},t)}},2320:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7294),l=a(7174),r=a.n(l),i=a(1844),p=a(7184);const o="root_frVT";function u(e){let{path:t}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:o},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const d="iframe-wrapper_kRL9";function m(e,t){const a=new(r())({newline:!0});switch(e){case"text":return a.toHtml(t);case"html":return t;case"png":return`<img src="data:image/png;base64,${t}"></img>`;case"js":return`<script>${t}<\/script>`}}function s(e){const t=[];let a="normal";for(const n of e)switch(n.output_type){case"stream":t.push(m("text",n.text.join("")));break;case"execute_result":{const e=[];null!=n.data["text/plain"]&&e.push(m("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(m("html",n.data["text/html"].join(""))),t.push(e.join(""));break}case"error":t.push(m("text",n.traceback.join(""))),a="error";break;case"display_data":{const e=[];null!=n.data["text/plain"]&&e.push(m("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(m("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&e.push(m("js",n.data["application/javascript"])),null!=n.data["image/png"]&&e.push(m("png",n.data["image/png"])),t.push(e.join(""));break}}return{result:t.join(""),cellType:a}}function c(e){let{children:t,cellColor:a,title:l}=e;return n.createElement("div",{className:d,style:{backgroundColor:a}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px"},srcDoc:t,onLoad:e=>{const t=e.target;t.height=t.contentDocument.documentElement.scrollHeight+"px"},title:l}))}function k(e){let{path:t,noOutput:a=!1}=e;const[l,r]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(t).then((e=>e.json())).then((e=>{r(function(e){const t=[];for(const a of e.cells)switch(a.cell_type){case"markdown":t.push({cell_type:"markdown",source:0===a.source.length?null:a.source.join("")});break;case"code":{const{result:e,cellType:n}=s(a.outputs);t.push({cell_type:"code",source:0===a.source.length?null:a.source.join(""),output:0===a.outputs.length?null:e,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return t}(e))}))}),[]),n.createElement(n.Fragment,null,l.map(((e,t)=>n.createElement(n.Fragment,{key:t},"markdown"===e.cell_type&&null!=e.source&&n.createElement(c,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,p.Z)(e.source)),"code"===e.cell_type&&n.createElement(n.Fragment,null,null!=e.source&&n.createElement(i.Z,{language:"python"},e.source),!a&&null!=e.output&&n.createElement(c,{cellColor:e.cellColor,title:"Code Output"},e.output))))),n.createElement(u,{path:t}))}},1032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),r=a(2320),i=a(3665);const p={sidebar_position:11},o="\u6761\u4ef6\u5206\u5c90",u={unversionedId:"01python/11if/index",id:"01python/11if/index",title:"\u6761\u4ef6\u5206\u5c90",description:"\u8ad6\u7406\u5024",source:"@site/docs/01python/11if/index.mdx",sourceDirName:"01python/11if",slug:"/01python/11if/",permalink:"/docs/01python/11if/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/01python/11if/index.mdx",tags:[],version:"current",lastUpdatedAt:1670158367,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u591a\u6b21\u5143\u914d\u5217",permalink:"/docs/01python/10multi-array/"},next:{title:"\u7df4\u7fd2\u554f\u984c",permalink:"/docs/01python/12practice/"}},d={},m=[{value:"\u8ad6\u7406\u5024",id:"\u8ad6\u7406\u5024",level:2},{value:"\u6bd4\u8f03\u6f14\u7b97\u5b50",id:"\u6bd4\u8f03\u6f14\u7b97\u5b50",level:2},{value:"\u8ad6\u7406\u6f14\u7b97\u5b50",id:"\u8ad6\u7406\u6f14\u7b97\u5b50",level:2},{value:"\u6761\u4ef6\u5206\u5c90",id:"\u6761\u4ef6\u5206\u5c90-1",level:2},{value:"if",id:"if",level:3},{value:"if ~ else",id:"if--else",level:3},{value:"if ~ elif ~ else",id:"if--elif--else",level:3},{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u7df4\u7fd2\u554f\u984c 2",id:"\u7df4\u7fd2\u554f\u984c-2",level:3}],s={toc:m};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6761\u4ef6\u5206\u5c90"},"\u6761\u4ef6\u5206\u5c90"),(0,l.kt)("h2",{id:"\u8ad6\u7406\u5024"},"\u8ad6\u7406\u5024"),(0,l.kt)("p",null,"Python \u3067\u306f\u3001\u6587\u5b57\u5217\u3084\u6570\u5b57\u4ee5\u5916\u306b\u3082\u8ad6\u7406\u5024\u3068\u3044\u3046\u771f\u304b\u507d\u304b\u3092\u8868\u3059\u5024\u304c\u3042\u308a\u307e\u3059\u3002\u771f\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"True"),"\u3001\u507d\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," \u3068\u8868\u305b\u3001\u3053\u308c\u306f\u5909\u6570\u306a\u3069\u306b\u3082\u4ee3\u5165\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4e0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"True")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," \u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},'"True"'),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},'"False"')," \u306e\u3088\u3046\u306b\u30c0\u30d6\u30eb\u30af\u30a9\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3\uff08 ",(0,l.kt)("inlineCode",{parentName:"p"},'"')," \uff09\u304c\u3064\u3044\u3066\u3044\u306a\u3044\u3053\u3068\u306b\u6c17\u3092\u3064\u3051\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/if/true.ipynb",mdxType:"ViewSource"}),(0,l.kt)(r.Z,{path:"/if/false.ipynb",mdxType:"ViewSource"}),(0,l.kt)("h2",{id:"\u6bd4\u8f03\u6f14\u7b97\u5b50"},"\u6bd4\u8f03\u6f14\u7b97\u5b50"),(0,l.kt)("p",null,"Python \u3067\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u6bd4\u8f03\u6f14\u7b97\u5b50\u3092\u7528\u3044\u3066\u771f\u507d\u3092\u5224\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6b21\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"age > 20")," \u304c\u507d\u306a\u306e\u3067\u3001\u8ad6\u7406\u5024\u3067\u3042\u308b ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," \u304c\u8fd4\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/if/comparison_operator.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u4ed6\u306b\u3082\u69d8\u3005\u306a\u6bd4\u8f03\u6f14\u7b97\u5b50\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6bd4\u8f03\u6f14\u7b97\u5b50"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"==")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b49\u3057\u3044"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/eq.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!=")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b49\u3057\u304f\u306a\u3044"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/neq.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u306a\u308a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/less_than.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<=")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e0b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/below.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5927\u306a\u308a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/greater.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">=")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5\u4e0a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/over.ipynb",mdxType:"ViewSource"}))))),(0,l.kt)("p",null,"\u5b9f\u306f\u3001Python \u3067\u306f\u6570\u5b66\u306e\u3088\u3046\u306b\u8907\u6570\u306e\u6bd4\u8f03\u6f14\u7b97\u5b50\u3092\u4f7f\u3063\u305f\u6761\u4ef6\u3082\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ed6\u306e\u591a\u304f\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306f\u3053\u306e\u3088\u3046\u306a\u8868\u8a18\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,l.kt)(r.Z,{path:"/if/comparison_operator2.ipynb",mdxType:"ViewSource"}),(0,l.kt)("h2",{id:"\u8ad6\u7406\u6f14\u7b97\u5b50"},"\u8ad6\u7406\u6f14\u7b97\u5b50"),(0,l.kt)("p",null,"\u8ad6\u7406\u5024\u306b\u5bfe\u3057\u3066\u3001\u8ad6\u7406\u6f14\u7b97\u5b50\u3092\u4f7f\u3063\u3066\u3055\u3089\u306b\u8907\u96d1\u306a\u8a08\u7b97\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/if/logical_operator.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},">=")," \u4e00\u3064\u3092\u4f7f\u3063\u3066\u66f8\u304d\u63db\u3048\u305f\u6b21\u3068\u540c\u3058\u3067\u3059\u3002"),(0,l.kt)(r.Z,{path:"/if/logical_operator2.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u4ed6\u306b\u3082\u69d8\u3005\u306a\u8ad6\u7406\u6f14\u7b97\u5b50\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8ad6\u7406\u6f14\u7b97\u5b50"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/not.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"and")),(0,l.kt)("td",{parentName:"tr",align:null},"\u304b\u3064"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/and.ipynb",mdxType:"ViewSource"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"or")),(0,l.kt)("td",{parentName:"tr",align:null},"\u307e\u305f\u306f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.Z,{path:"/if/or.ipynb",mdxType:"ViewSource"}))))),(0,l.kt)("h2",{id:"\u6761\u4ef6\u5206\u5c90-1"},"\u6761\u4ef6\u5206\u5c90"),(0,l.kt)("h3",{id:"if"},"if"),(0,l.kt)("p",null,"\u5e74\u9f62\u306b\u5fdc\u3058\u3066\u3001\u98f2\u9152\u53ef\u80fd\u306a\u5e74\u9f62\u304b\u3092\u5224\u5b9a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002\u3057\u304b\u3057\u3001\u4eca\u307e\u3067\u306b\u5b66\u7fd2\u3057\u305f\u5185\u5bb9\u3067\u306f\u3053\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u308b\u3053\u3068\u306f\u3067\u304d\u305d\u3046\u306b\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u306e\u3088\u3046\u306a\u51e6\u7406\u3092\u3059\u308b\u305f\u3081\u306b\u3001if \u6587\u304c\u4f7f\u3048\u307e\u3059\u3002\u98f2\u9152\u53ef\u80fd\u306a\u5e74\u9f62\u304b\u3092\u5224\u5b9a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/if/alcohol.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"if \u6587\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u6761\u4ef6\u5f0f\u306b\u306f\u3001\u5148\u7a0b\u306e\u6bd4\u8f03\u6f14\u7b97\u5b50\u3084\u8ad6\u7406\u6f14\u7b97\u5b50\u304c\u4f7f\u3048\u307e\u3059\u3002\n\u6761\u4ef6\u5f0f\u3092\u8a55\u4fa1\u3057\u305f\u7d50\u679c\u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," \u3067\u3042\u308c\u3070\u3001\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"if \u6761\u4ef6\u5f0f:\n    \u771f\u306e\u6642\u306e\u51e6\u7406\n")),(0,l.kt)("h3",{id:"if--else"},"if ~ else"),(0,l.kt)("p",null,"\u6761\u4ef6\u304c\u507d\u306e\u6642\u306b\u3082\u884c\u3044\u305f\u3044\u51e6\u7406\u304c\u3042\u308b\u5834\u5408\u306f\u3001if ~ else \u6587\u3092\u7528\u3044\u3066\u3001\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u672a\u6210\u5e74\u304b\u6210\u4eba\u304b\u3092\u5224\u5b9a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/if/legal_age.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"if ~ else \u6587\u306e\u69cb\u6587\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"if \u6761\u4ef6\u5f0f:\n    \u771f\u306e\u6642\u306e\u51e6\u7406\nelse:\n    \u507d\u306e\u6642\u306e\u51e6\u7406\n")),(0,l.kt)("h3",{id:"if--elif--else"},"if ~ elif ~ else"),(0,l.kt)("p",null,"\u6761\u4ef6\u304c\u507d\u306e\u6642\u3067\u3055\u3089\u306b\u6761\u4ef6\u5206\u5c90\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306f\u3001if ~ elif ~ else \u6587\u3092\u7528\u3044\u3066\u3001\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u9078\u6319\u6a29\u3092\u5224\u5b9a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(r.Z,{path:"/if/the_right_to_vote.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"if ~ elif ~ else \u6587\u306e\u69cb\u6587\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"if \u6761\u4ef6\u5f0f1:\n    \u6761\u4ef6\u5f0f1\u304c\u771f\u306e\u6642\u306e\u51e6\u7406\nelif \u6761\u4ef6\u5f0f2:\n    \u6761\u4ef6\u5f0f1\u304c\u507d\u3067\u304b\u3064\u6761\u4ef6\u5f0f2\u304c\u771f\u306e\u6642\u306e\u51e6\u7406\nelse:\n    \u6761\u4ef6\u5f0f1\u3082\u6761\u4ef6\u5f0f2\u3082\u507d\u306e\u6642\u306e\u51e6\u7406\n")),(0,l.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,l.kt)("p",null,"\u7d76\u5bfe\u5024\u3092\u6c42\u3081\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(i.Z,{mdxType:"Answer"},(0,l.kt)(r.Z,{path:"/if/abs.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u5225\u89e3"),(0,l.kt)(r.Z,{path:"/if/abs2.ipynb",mdxType:"ViewSource"}),(0,l.kt)("p",null,"\u5b9f\u306f\u3001\u7d44\u307f\u8fbc\u307f\u95a2\u6570\u3067 abs \u95a2\u6570\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/library/math.html#math.fabs"},"math \u30e9\u30a4\u30d6\u30e9\u30ea\u306e fabs \u95a2\u6570"),"\u3082\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)(r.Z,{path:"/if/abs_default.ipynb",mdxType:"ViewSource"}),(0,l.kt)(r.Z,{path:"/if/abs_math.ipynb",mdxType:"ViewSource"})),(0,l.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-2"},"\u7df4\u7fd2\u554f\u984c 2"),(0,l.kt)("p",null,"\u6570\u5b66\u306e\u5f97\u70b9\u306e\u914d\u5217\u304c\u4e0e\u3048\u3089\u308c\u305f\u6642\u3001\u305d\u306e\u914d\u5217\u4e2d\u3067\u306e\u6700\u5927\u5024\u3092\u6c42\u3081\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u4e0e\u3048\u3089\u308c\u308b\u914d\u5217\u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"[55, 32, 16, 51, 80, 19]")," \u3068\u3057\u3066\u5b9f\u969b\u306b\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)(i.Z,{mdxType:"Answer"},(0,l.kt)(r.Z,{path:"/if/max.ipynb",mdxType:"ViewSource"})))}c.isMDXComponent=!0}}]);