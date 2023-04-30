"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[3907],{84765:(t,a,e)=>{e.d(a,{Z:()=>r});var n=e(67294),m=e(34673);function r(t){let{children:a}=t;return n.createElement(m.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},a)}},45140:(t,a,e)=>{e.d(a,{Z:()=>u});var n=e(67294),m=e(40667),r=e(86886),p=e(15861),s=e(93193),l=e(26126),i=e(74005),o=e(62288),c=e(17440),k=e(1849),N=e(3018),h=e(98034);function d(t,a,e){const n=function(t,a,e){let n=0;for(let m=a-1;m<=a+1;m++)for(let a=e-1;a<=e+1;a++)0<=m&&m<t.length&&0<=a&&a<t[0].length&&(n+=Number(t[m][a]));return n-Number(t[a][e])}(t,a,e);return t[a][e]&&2===n||3===n}function u(t){let{data:a=Array(100).fill().map((()=>Array(100).fill(!1)))}=t;const[e,u]=(0,n.useState)(a),[y,x]=(0,n.useState)(4),[w,b]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const t=setInterval((()=>{w&&u(function(t){const a=t.map((t=>t.map((t=>t))));for(let e=0;e<t.length;e++)for(let n=0;n<t[0].length;n++)a[e][n]=d(t,e,n);return a}(e))}),4e3/y);return()=>{clearInterval(t)}}),[w,e]),n.createElement(n.Fragment,null,n.createElement(l.d$,{initialScale:7},(t=>{let{zoomIn:a,zoomOut:r,resetTransform:p}=t;return n.createElement(n.Fragment,null,n.createElement(m.Z,{onClick:()=>{a()}},n.createElement(i.Z,null)),n.createElement(m.Z,{onClick:()=>{r()}},n.createElement(o.Z,null)),n.createElement(m.Z,{onClick:()=>{p()}},n.createElement(c.Z,null)),n.createElement(l.Uv,null,n.createElement(g,{board:e,setBoard:u})))})),n.createElement(r.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(r.ZP,{item:!0},n.createElement(m.Z,{onClick:()=>{b(!w)}},w?n.createElement(h.Z,null):n.createElement(N.Z,null))),n.createElement(r.ZP,{item:!0},n.createElement(m.Z,{onClick:()=>{u(a)}},n.createElement(k.Z,null))),n.createElement(r.ZP,{item:!0},n.createElement(p.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(r.ZP,{item:!0,xs:!0},n.createElement(s.ZP,{value:y,onChange:t=>{x(t.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function g(t){let{board:a,setBoard:e}=t;const m=52*a.length+2,r=52*a[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${m} ${r}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:m,height:r,fill:"#808080"}),a.map(((t,m)=>t.map(((t,r)=>n.createElement("rect",{key:`${m},${r}`,x:52*r+2,y:52*m+2,width:"50",height:"50",fill:t?"#000000":"#ffffff",onClick:()=>{const t=[...a];t[m][r]=!a[m][r],e(t)}}))))))))}},41089:(t,a,e)=>{e.d(a,{Z:()=>h});var n=e(67294),m=e(7174),r=e.n(m),p=e(31413),s=e(35993);const l="root_frVT";function i(t){let{path:a}=t;return n.createElement(n.Fragment,null,n.createElement("div",{className:l},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${a}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const o="iframe-wrapper_kRL9";function c(t,a){const e=new(r())({newline:!0});switch(t){case"text":return e.toHtml(a);case"html":return a;case"png":return`<img src="data:image/png;base64,${a}"></img>`;case"js":return`<script>${a}<\/script>`}}function k(t){const a=[];let e="normal";for(const n of t)switch(n.output_type){case"stream":a.push(c("text",n.text.join("")));break;case"execute_result":{const t=[];null!=n.data["text/plain"]&&t.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&t.push(c("html",n.data["text/html"].join(""))),a.push(t.join(""));break}case"error":a.push(c("text",n.traceback.join(""))),e="error";break;case"display_data":{const t=[];null!=n.data["text/plain"]&&t.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&t.push(c("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&t.push(c("js",n.data["application/javascript"])),null!=n.data["image/png"]&&t.push(c("png",n.data["image/png"])),a.push(t.join(""));break}}return{result:a.join(""),cellType:e}}function N(t){let{children:a,cellColor:e,title:m}=t;return n.createElement("div",{className:o,style:{backgroundColor:e}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:a,onLoad:t=>{const a=t.target;a.height=a.contentDocument.documentElement.scrollHeight+"px"},title:m}))}function h(t){let{path:a,noOutput:e=!1}=t;const[m,r]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(a).then((t=>t.json())).then((t=>{r(function(t){const a=[];for(const e of t.cells)switch(e.cell_type){case"markdown":a.push({cell_type:"markdown",source:0===e.source.length?null:e.source.join("")});break;case"code":{const{result:t,cellType:n}=k(e.outputs);a.push({cell_type:"code",source:0===e.source.length?null:e.source.join(""),output:0===e.outputs.length?null:t,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return a}(t))}))}),[]),n.createElement(n.Fragment,null,m.map(((t,a)=>n.createElement(n.Fragment,{key:a},"markdown"===t.cell_type&&null!=t.source&&n.createElement(N,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,s.Z)(t.source)),"code"===t.cell_type&&n.createElement(n.Fragment,null,null!=t.source&&n.createElement(p.Z,{language:"python"},t.source),!e&&null!=t.output&&n.createElement(N,{cellColor:t.cellColor,title:"Code Output"},t.output))))),n.createElement(i,{path:a}))}},56922:(t,a,e)=>{e.d(a,{Z:()=>r});var n=e(67294),m=e(45140);const r={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(m.Z,null)))}}},94857:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>N,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=e(87462),m=(e(67294),e(3905)),r=e(41089),p=e(84765);const s={sidebar_position:6},l="\u30e9\u30a4\u30d6\u30e9\u30ea",i={unversionedId:"python/library/index",id:"python/library/index",title:"\u30e9\u30a4\u30d6\u30e9\u30ea",description:"\u3053\u3053\u3067\u306f\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f7f\u3044\u65b9\u3092\u5b66\u3073\u307e\u3059\u3002",source:"@site/docs/02-python/06-library/index.mdx",sourceDirName:"02-python/06-library",slug:"/python/library/",permalink:"/docs/python/library/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/02-python/06-library/index.mdx",tags:[],version:"current",lastUpdatedAt:1675730680,formattedLastUpdatedAt:"2023\u5e742\u67087\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u95a2\u6570",permalink:"/docs/python/function/"},next:{title:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/docs/python/pip/"}},o={},c=[{value:"\u30e9\u30a4\u30d6\u30e9\u30ea",id:"\u30e9\u30a4\u30d6\u30e9\u30ea-1",level:2},{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u7df4\u7fd2\u554f\u984c 2",id:"\u7df4\u7fd2\u554f\u984c-2",level:3}],k={toc:c};function N(t){let{components:a,...e}=t;return(0,m.kt)("wrapper",(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea"},"\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,m.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f7f\u3044\u65b9\u3092\u5b66\u3073\u307e\u3059\u3002"),(0,m.kt)("h2",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea-1"},"\u30e9\u30a4\u30d6\u30e9\u30ea"),(0,m.kt)("p",null,"Python \u3067\u306f\u3001\u81ea\u5206\u3067\u3044\u3061\u3044\u3061\u95a2\u6570\u3092\u4f5c\u3089\u306a\u304f\u3066\u3082\u3001\u3059\u3067\u306b\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u8c4a\u5bcc\u306a\u95a2\u6570\u7fa4\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002(\u7d20\u6674\u3089\u3057\u3044\uff01)"),(0,m.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u6570\u5b66\u306b\u95a2\u3059\u308b\u8a08\u7b97\u3092\u3059\u308b\u306e\u306b\u4fbf\u5229\u306a ",(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u3042\u308a\u307e\u3059\u3002",(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u3046\u3068\u3001\u69d8\u3005\u306a\u8a08\u7b97\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,m.kt)("p",null,"\u4f8b\u3048\u3070\u3001\u7d76\u5bfe\u5024\u3092\u6c42\u3081\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,m.kt)(r.Z,{path:"/library/fabs.ipynb",mdxType:"ViewSource"}),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306b\u3001\u4e00\u884c\u76ee\u3067\u3001"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"import math\n")),(0,m.kt)("p",null,"\u3068\u5165\u529b\u3057\u307e\u3059\u3002\u3059\u308b\u3068\u3001",(0,m.kt)("inlineCode",{parentName:"p"},"math.\u95a2\u6570\u540d")," \u306e\u3088\u3046\u306b\u3057\u3066\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u306f\u3053\u308c\u4ee5\u5916\u306b\u3082\u591a\u304f\u306e\u95a2\u6570\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u4e00\u90e8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,m.kt)("admonition",{type:"caution"},(0,m.kt)("p",{parentName:"admonition"},"\u4e0b\u306b\u793a\u3057\u305f ",(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u95a2\u6570\u3092\u3059\u3079\u3066\u899a\u3048\u3088\u3046\u3068\u3057\u306a\u304f\u3066\u69cb\u3044\u307e\u305b\u3093\u3002\u5fc5\u8981\u306a\u3068\u304d\u306b\u3001\u8abf\u3079\u308c\u3070\u5341\u5206\u3067\u3059\u3002",(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f",(0,m.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/library/math.html"},"\u3053\u3061\u3089"),"\u306b\u3042\u308a\u307e\u3059\u3002\u3088\u304f\u4f7f\u3046\u95a2\u6570\u306f\u81ea\u7136\u306b\u899a\u3048\u307e\u3059\u3002")),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"\u95a2\u6570\u540d"),(0,m.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,m.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.pi")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0")))))," \u3092\u8fd4\u3059\u3002"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/pi.ipynb",mdxType:"ViewSource"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.ceil(x)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"x")," \u306e\u5207\u308a\u4e0a\u3052\u3092\u8fd4\u3059\u3002"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/ceil.ipynb",mdxType:"ViewSource"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.floor(x)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"x")," \u306e\u5207\u308a\u6368\u3066\u3092\u8fd4\u3059\u3002"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/floor.ipynb",mdxType:"ViewSource"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.fabs(x)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"x")," \u306e\u7d76\u5bfe\u5024\u3092\u8fd4\u3059\u3002"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/fabs.ipynb",mdxType:"ViewSource"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.sqrt(x)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"x")," \u306e\u5e73\u65b9\u6839\u3092\u8fd4\u3059\u3002"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/sqrt.ipynb",mdxType:"ViewSource"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.log(x,base)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"base")," \u3092\u5e95\u3068\u3059\u308b ",(0,m.kt)("inlineCode",{parentName:"td"},"x")," \u306e\u5bfe\u6570\u3092\u8fd4\u3059\u3002"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/log.ipynb",mdxType:"ViewSource"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.exp(x)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"e"),(0,m.kt)("mi",{parentName:"msup"},"x"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e^x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6644em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))))))))))," \u3092\u8fd4\u3059\u3002"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/exp.ipynb",mdxType:"ViewSource"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.sin(x)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"sin"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sin x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6679em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," \u3092\u8fd4\u3059\u3002",(0,m.kt)("inlineCode",{parentName:"td"},"x")," \u306f\u30e9\u30b8\u30a2\u30f3"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/sin.ipynb",mdxType:"ViewSource"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.cos(x)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"cos"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cos x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"cos"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," \u3092\u8fd4\u3059\u3002",(0,m.kt)("inlineCode",{parentName:"td"},"x")," \u306f\u30e9\u30b8\u30a2\u30f3"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/cos.ipynb",mdxType:"ViewSource"}))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("inlineCode",{parentName:"td"},"math.tan(x)")),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"tan"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\tan x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"tan"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," \u3092\u8fd4\u3059\u3002",(0,m.kt)("inlineCode",{parentName:"td"},"x")," \u306f\u30e9\u30b8\u30a2\u30f3"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)(r.Z,{path:"/library/tan.ipynb",mdxType:"ViewSource"}))))),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u306f\u3001\u3053\u306e\u4ed6\u306b\u3082\u3055\u307e\u3056\u307e\u306a\u4f7f\u3044\u65b9\u304c\u3042\u308b\u306e\u3067\u8abf\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,m.kt)("p",null,"\u307e\u305f\u3001",(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u4ee5\u5916\u306b\u3082\u4fbf\u5229\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u305f\u304f\u3055\u3093\u3042\u308b\u306e\u3067\u3001\u305d\u308c\u306b\u3064\u3044\u3066\u3082\u8abf\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,m.kt)("admonition",{title:"\u8abf\u3079\u65b9",type:"note"},(0,m.kt)("p",{parentName:"admonition"},"\u307e\u305a\u3001\u3084\u308a\u305f\u3044\u3053\u3068\u3092",(0,m.kt)("a",{parentName:"p",href:"https://www.google.co.jp/"},"Google"),"\u3084",(0,m.kt)("a",{parentName:"p",href:"https://www.yahoo.co.jp/"},"Yahoo! Japan"),"\u3001",(0,m.kt)("a",{parentName:"p",href:"https://www.bing.com/?cc=jp"},"Bing"),"\u306a\u3069\u306e\u691c\u7d22\u30a8\u30f3\u30b8\u30f3\u3092\u7528\u3044\u3066\u8abf\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002Python \u306b\u95a2\u3059\u308b\u60c5\u5831\u306f\u8c4a\u5bcc\u306b\u3042\u308b\u306e\u3067\u3001\u304d\u3063\u3068\u898b\u3064\u304b\u308b\u306f\u305a\u3067\u3059\u3002\u305d\u3053\u3067\u3001\u3069\u306e\u3088\u3046\u306a\u65b9\u6cd5\u3092\u4f7f\u3048\u3070\u826f\u3044\u306e\u304b\u308f\u304b\u3063\u305f\u3089\u3001\u516c\u5f0f\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3093\u3067\u8a73\u3057\u3044\u4f7f\u3044\u65b9\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u306f\u53e4\u3044\u60c5\u5831\u3084\u9593\u9055\u3063\u305f\u60c5\u5831\u3082\u591a\u304f\u3042\u308b\u306e\u3067\u3001\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3080\u3068\u3088\u304f\u5206\u304b\u308b\u3053\u3068\u3082\u591a\u3044\u3067\u3059\u3002"),(0,m.kt)("p",{parentName:"admonition"},"Python \u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001",(0,m.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/"},"https://docs.python.org/ja/3/"),"\u3092\u898b\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002")),(0,m.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"sin"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"\u03c0"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sin (\\pi/2)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0"),(0,m.kt)("span",{parentName:"span",className:"mord"},"/2"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u306e\u5024\u3092\u8a08\u7b97\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,m.kt)(p.Z,{mdxType:"Answer"},(0,m.kt)(r.Z,{path:"/library/sin_90.ipynb",mdxType:"ViewSource"})),(0,m.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-2"},"\u7df4\u7fd2\u554f\u984c 2"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001\u81ea\u7136\u5bfe\u6570\u306e\u5e95 ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"e")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e")))))," \u306e\u5024\u3092\u51fa\u529b\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,m.kt)("p",null,"\u30d2\u30f3\u30c8\uff1a\u3053\u306e\u8cc7\u6599\u306e\u8aac\u660e\u3060\u3051\u3067\u306f\u4f5c\u308c\u307e\u305b\u3093\u3002\u81ea\u5206\u3067\u8abf\u3079\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,m.kt)(p.Z,{mdxType:"Answer"},(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"math")," \u30e9\u30a4\u30d6\u30e9\u30ea\u306e",(0,m.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/library/math.html#constants"},"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u306b\u4f7f\u3044\u65b9\u304c\u8f09\u3063\u3066\u3044\u307e\u3059\u3002\n",(0,m.kt)("inlineCode",{parentName:"p"},"math.e")," \u3068\u3059\u308c\u3070\u3001\u81ea\u7136\u5bfe\u6570\u306e\u5e95\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,m.kt)(r.Z,{path:"/library/calc_e.ipynb",mdxType:"ViewSource"}),(0,m.kt)("admonition",{type:"note"},(0,m.kt)("p",{parentName:"admonition"},(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"e"),(0,m.kt)("mn",{parentName:"msup"},"1")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"e")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e^1 = e")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e")))))," \u3067\u3042\u308b\u3053\u3068\u3092\u5229\u7528\u3057\u3066\u4e0b\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u8abf\u3079\u306a\u304f\u3066\u3082\u3067\u304d\u307e\u3059\u304c(\u7b11)\u3001\u4e0a\u306e\u3088\u3046\u306b\u3057\u305f\u65b9\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,m.kt)(r.Z,{path:"/library/calc_e_2.ipynb",mdxType:"ViewSource"}))))}N.isMDXComponent=!0}}]);