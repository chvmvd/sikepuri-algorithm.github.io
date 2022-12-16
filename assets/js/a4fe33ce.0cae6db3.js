"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[161,918],{3665:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(4673);function o(e){let{children:t}=e;return a.createElement(l.Z,{summary:a.createElement("summary",null,"\u89e3\u7b54")},t)}},2320:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7294),l=n(7174),o=n.n(l),p=n(5614),r=n(7184);const i="root_frVT";function s(e){let{path:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:i},a.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${t}`,target:"_blank",rel:"noreferrer"},a.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const c="iframe-wrapper_kRL9";function u(e,t){const n=new(o())({newline:!0});switch(e){case"text":return n.toHtml(t);case"html":return t;case"png":return`<img src="data:image/png;base64,${t}"></img>`;case"js":return`<script>${t}<\/script>`}}function m(e){const t=[];let n="normal";for(const a of e)switch(a.output_type){case"stream":t.push(u("text",a.text.join("")));break;case"execute_result":{const e=[];null!=a.data["text/plain"]&&e.push(u("text",a.data["text/plain"].join(""))),null!=a.data["text/html"]&&e.push(u("html",a.data["text/html"].join(""))),t.push(e.join(""));break}case"error":t.push(u("text",a.traceback.join(""))),n="error";break;case"display_data":{const e=[];null!=a.data["text/plain"]&&e.push(u("text",a.data["text/plain"].join(""))),null!=a.data["text/html"]&&e.push(u("html",a.data["text/html"].join(""))),null!=a.data["application/javascript"]&&e.push(u("js",a.data["application/javascript"])),null!=a.data["image/png"]&&e.push(u("png",a.data["image/png"])),t.push(e.join(""));break}}return{result:t.join(""),cellType:n}}function d(e){let{children:t,cellColor:n,title:l}=e;return a.createElement("div",{className:c,style:{backgroundColor:n}},a.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px"},srcDoc:t,onLoad:e=>{const t=e.target;t.height=t.contentDocument.documentElement.scrollHeight+"px"},title:l}))}function h(e){let{path:t,noOutput:n=!1}=e;const[l,o]=(0,a.useState)([]);return(0,a.useEffect)((()=>{fetch(t).then((e=>e.json())).then((e=>{o(function(e){const t=[];for(const n of e.cells)switch(n.cell_type){case"markdown":t.push({cell_type:"markdown",source:0===n.source.length?null:n.source.join("")});break;case"code":{const{result:e,cellType:a}=m(n.outputs);t.push({cell_type:"code",source:0===n.source.length?null:n.source.join(""),output:0===n.outputs.length?null:e,cellColor:"normal"===a?"#eee":"#ffdddc"});break}}return t}(e))}))}),[]),a.createElement(a.Fragment,null,l.map(((e,t)=>a.createElement(a.Fragment,{key:t},"markdown"===e.cell_type&&null!=e.source&&a.createElement(d,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,r.Z)(e.source)),"code"===e.cell_type&&a.createElement(a.Fragment,null,null!=e.source&&a.createElement(p.Z,{language:"python"},e.source),!n&&null!=e.output&&a.createElement(d,{cellColor:e.cellColor,title:"Code Output"},e.output))))),a.createElement(s,{path:t}))}},6922:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(9832);const o={React:a,...a,LifeGame:function(){return a.createElement(a.Fragment,null,a.createElement("div",{style:{maxWidth:"200px"}},a.createElement(l.Z,null)))}}},5537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=n(7462),l=(n(7294),n(3905)),o=n(2320);n(3665);const p={sidebar_position:7},r="\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",i={unversionedId:"01python/07pip/index",id:"01python/07pip/index",title:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"pip",source:"@site/docs/01python/07pip/index.mdx",sourceDirName:"01python/07pip",slug:"/01python/07pip/",permalink:"/docs/01python/07pip/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/01python/07pip/index.mdx",tags:[],version:"current",lastUpdatedAt:1671205609,formattedLastUpdatedAt:"2022\u5e7412\u670816\u65e5",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u30e9\u30a4\u30d6\u30e9\u30ea",permalink:"/docs/01python/06library/"},next:{title:"\u7e70\u308a\u8fd4\u3057\u51e6\u7406",permalink:"/docs/01python/08for/"}},s={},c=[{value:"pip",id:"pip",level:2},{value:"pip \u306e\u4f7f\u3044\u65b9",id:"pip-\u306e\u4f7f\u3044\u65b9",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("h2",{id:"pip"},"pip"),(0,l.kt)("p",null,"\u524d\u9805\u3067\u3001Python \u3067\u306f\u69d8\u3005\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3068\u66f8\u304d\u307e\u3057\u305f\u3002\u4e00\u90e8\u306e\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u5148\u7a0b\u306e\u3088\u3046\u306b\u305f\u3060\u30d5\u30a1\u30a4\u30eb\u306e\u5148\u982d\u3067 ",(0,l.kt)("inlineCode",{parentName:"p"},"import \u30e9\u30a4\u30d6\u30e9\u30ea\u540d")," \u306e\u3088\u3046\u306b\u66f8\u304f\u3060\u3051\u3067\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u591a\u304f\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u3053\u308c\u3060\u3051\u3067\u306f\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"Python \u3067\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u884c\u3046\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3068\u3057\u3066\u3001pip(Pip Installs Packages, Pip Installs Python) \u304c\u4f7f\u308f\u308c\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"pip-\u306e\u4f7f\u3044\u65b9"},"pip \u306e\u4f7f\u3044\u65b9"),(0,l.kt)("p",null,"Google Colaboratory \u3067 pip \u3092\u4f7f\u3063\u3066\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"!pip install \u30e9\u30a4\u30d6\u30e9\u30ea\u540d")," \u306e\u3088\u3046\u306b\u66f8\u3044\u3066\u304b\u3089\u3001\u524d\u9805\u306e\u3088\u3046\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"import \u30e9\u30a4\u30d6\u30e9\u30ea\u540d")," \u3068\u66f8\u304f\u3053\u3068\u3067\u4efb\u610f\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3068\u3057\u3066\u3001Python \u306e\u4ee3\u8868\u7684\u306a\u30c7\u30fc\u30bf\u89e3\u6790\u3092\u652f\u63f4\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u3042\u308b ",(0,l.kt)("inlineCode",{parentName:"p"},"pandas")," \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306b\u3059\u308b\u3068\u3001\u78ba\u304b\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"pandas")," \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u305f\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"import pandas as pd")," \u3068\u3044\u3046\u306e\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pandas")," \u30d1\u30c3\u30b1\u30fc\u30b8\u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"pd")," \u3068\u3044\u3046\u540d\u524d\u3067\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3068\u3044\u3046\u610f\u5473\u3067\u3059\u3002"),(0,l.kt)(o.Z,{path:"/pip/pandas.ipynb",mdxType:"ViewSource"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Google Colaboratory \u306a\u3069\u306e Jupyter Notebook \u3092\u4f7f\u3063\u305f\u65b9\u6cd5\u3067\u306f\u306a\u304f\u3001\u76f4\u63a5 ",(0,l.kt)("inlineCode",{parentName:"p"},".py")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u3063\u305f\u65b9\u6cd5\u306e\u5834\u5408\u306f\u3001pip \u306e\u4f7f\u3044\u65b9\u304c\u7570\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u30bf\u30fc\u30df\u30ca\u30eb\u306a\u3069\u3067\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install pandas\n")),(0,l.kt)("p",{parentName:"admonition"},"\u305d\u306e\u5f8c\u3001\u6b21\u306e\u3088\u3046\u306a\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=hello_pandas.py",title:"hello_pandas.py"},"import pandas as pd\n\n\ns1 = pd.Series([0, 1, 2])\nprint(s1)\n"))))}m.isMDXComponent=!0}}]);