"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[5587],{84765:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(67294),s=t(34673);function m(e){let{children:a}=e;return n.createElement(s.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},a)}},45140:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(67294),s=t(40667),m=t(86886),p=t(15861),r=t(93193),l=t(26126),i=t(74005),o=t(62288),c=t(17440),N=t(1849),k=t(3018),h=t(98034);function u(e,a,t){const n=function(e,a,t){let n=0;for(let s=a-1;s<=a+1;s++)for(let a=t-1;a<=t+1;a++)0<=s&&s<e.length&&0<=a&&a<e[0].length&&(n+=Number(e[s][a]));return n-Number(e[a][t])}(e,a,t);return e[a][t]&&2===n||3===n}function d(e){let{data:a=Array(100).fill().map((()=>Array(100).fill(!1)))}=e;const[t,d]=(0,n.useState)(a),[y,x]=(0,n.useState)(4),[w,f]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const e=setInterval((()=>{w&&d(function(e){const a=e.map((e=>e.map((e=>e))));for(let t=0;t<e.length;t++)for(let n=0;n<e[0].length;n++)a[t][n]=u(e,t,n);return a}(t))}),4e3/y);return()=>{clearInterval(e)}}),[w,t]),n.createElement(n.Fragment,null,n.createElement(l.d$,{initialScale:7},(e=>{let{zoomIn:a,zoomOut:m,resetTransform:p}=e;return n.createElement(n.Fragment,null,n.createElement(s.Z,{onClick:()=>{a()}},n.createElement(i.Z,null)),n.createElement(s.Z,{onClick:()=>{m()}},n.createElement(o.Z,null)),n.createElement(s.Z,{onClick:()=>{p()}},n.createElement(c.Z,null)),n.createElement(l.Uv,null,n.createElement(g,{board:t,setBoard:d})))})),n.createElement(m.ZP,{container:!0,direction:"row",spacing:2,alignItems:"center"},n.createElement(m.ZP,{item:!0},n.createElement(s.Z,{onClick:()=>{f(!w)}},w?n.createElement(h.Z,null):n.createElement(k.Z,null))),n.createElement(m.ZP,{item:!0},n.createElement(s.Z,{onClick:()=>{d(a)}},n.createElement(N.Z,null))),n.createElement(m.ZP,{item:!0},n.createElement(p.Z,{gutterBottom:!0},"\u901f\u3055")),n.createElement(m.ZP,{item:!0,xs:!0},n.createElement(r.ZP,{value:y,onChange:e=>{x(e.target.value)},min:1,step:1,max:100,valueLabelDisplay:"auto"}))))}function g(e){let{board:a,setBoard:t}=e;const s=52*a.length+2,m=52*a[0].length+2;return n.createElement(n.Fragment,null,n.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${s} ${m}`},n.createElement("defs",null),n.createElement("g",null,n.createElement("rect",{x:"0",y:"0",width:s,height:m,fill:"#808080"}),a.map(((e,s)=>e.map(((e,m)=>n.createElement("rect",{key:`${s},${m}`,x:52*m+2,y:52*s+2,width:"50",height:"50",fill:e?"#000000":"#ffffff",onClick:()=>{const e=[...a];e[s][m]=!a[s][m],t(e)}}))))))))}},41089:(e,a,t)=>{t.d(a,{Z:()=>h});var n=t(67294),s=t(7174),m=t.n(s),p=t(31413),r=t(35993);const l="root_frVT";function i(e){let{path:a}=e;return n.createElement(n.Fragment,null,n.createElement("div",{className:l},n.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${a}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}const o="iframe-wrapper_kRL9";function c(e,a){const t=new(m())({newline:!0});switch(e){case"text":return t.toHtml(a);case"html":return a;case"png":return`<img src="data:image/png;base64,${a}"></img>`;case"js":return`<script>${a}<\/script>`}}function N(e){const a=[];let t="normal";for(const n of e)switch(n.output_type){case"stream":a.push(c("text",n.text.join("")));break;case"execute_result":{const e=[];null!=n.data["text/plain"]&&e.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(c("html",n.data["text/html"].join(""))),a.push(e.join(""));break}case"error":a.push(c("text",n.traceback.join(""))),t="error";break;case"display_data":{const e=[];null!=n.data["text/plain"]&&e.push(c("text",n.data["text/plain"].join(""))),null!=n.data["text/html"]&&e.push(c("html",n.data["text/html"].join(""))),null!=n.data["application/javascript"]&&e.push(c("js",n.data["application/javascript"])),null!=n.data["image/png"]&&e.push(c("png",n.data["image/png"])),a.push(e.join(""));break}}return{result:a.join(""),cellType:t}}function k(e){let{children:a,cellColor:t,title:s}=e;return n.createElement("div",{className:o,style:{backgroundColor:t}},n.createElement("iframe",{height:"40px",width:"100%",style:{minHeight:"40px",maxHeight:"620px"},srcDoc:a,onLoad:e=>{const a=e.target;a.height=a.contentDocument.documentElement.scrollHeight+"px"},title:s}))}function h(e){let{path:a,noOutput:t=!1}=e;const[s,m]=(0,n.useState)([]);return(0,n.useEffect)((()=>{fetch(a).then((e=>e.json())).then((e=>{m(function(e){const a=[];for(const t of e.cells)switch(t.cell_type){case"markdown":a.push({cell_type:"markdown",source:0===t.source.length?null:t.source.join("")});break;case"code":{const{result:e,cellType:n}=N(t.outputs);a.push({cell_type:"code",source:0===t.source.length?null:t.source.join(""),output:0===t.outputs.length?null:e,cellColor:"normal"===n?"#eee":"#ffdddc"});break}}return a}(e))}))}),[]),n.createElement(n.Fragment,null,s.map(((e,a)=>n.createElement(n.Fragment,{key:a},"markdown"===e.cell_type&&null!=e.source&&n.createElement(k,{cellColor:"#f8f8f8",title:"Markdown Code"},(0,r.Z)(e.source)),"code"===e.cell_type&&n.createElement(n.Fragment,null,null!=e.source&&n.createElement(p.Z,{language:"python"},e.source),!t&&null!=e.output&&n.createElement(k,{cellColor:e.cellColor,title:"Code Output"},e.output))))),n.createElement(i,{path:a}))}},56922:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(67294),s=t(45140);const m={React:n,...n,LifeGame:function(){return n.createElement(n.Fragment,null,n.createElement("div",{style:{maxWidth:"200px"}},n.createElement(s.Z,null)))}}},15413:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(87462),s=(t(67294),t(3905)),m=t(41089),p=t(84765);const r={sidebar_position:3},l="\u7b97\u8853\u6f14\u7b97\u5b50",i={unversionedId:"python/expressions/index",id:"python/expressions/index",title:"\u7b97\u8853\u6f14\u7b97\u5b50",description:"\u3053\u3053\u3067\u306f\u3001Python \u3067\u69d8\u3005\u306a\u8a08\u7b97\u3092\u884c\u3063\u3066\u3044\u304d\u307e\u3059\u3002",source:"@site/docs/02-python/03-expressions/index.mdx",sourceDirName:"02-python/03-expressions",slug:"/python/expressions/",permalink:"/docs/python/expressions/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/02-python/03-expressions/index.mdx",tags:[],version:"current",lastUpdatedAt:1675730680,formattedLastUpdatedAt:"2023\u5e742\u67087\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u306f\u3058\u3081\u3066\u306e Python",permalink:"/docs/python/getting-started/"},next:{title:"\u5909\u6570",permalink:"/docs/python/variables/"}},o={},c=[{value:"\u7b97\u8853\u6f14\u7b97\u5b50",id:"\u7b97\u8853\u6f14\u7b97\u5b50-1",level:2},{value:"\u7df4\u7fd2\u554f\u984c",id:"\u7df4\u7fd2\u554f\u984c",level:3}],N={toc:c};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u7b97\u8853\u6f14\u7b97\u5b50"},"\u7b97\u8853\u6f14\u7b97\u5b50"),(0,s.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001Python \u3067\u69d8\u3005\u306a\u8a08\u7b97\u3092\u884c\u3063\u3066\u3044\u304d\u307e\u3059\u3002"),(0,s.kt)("h2",{id:"\u7b97\u8853\u6f14\u7b97\u5b50-1"},"\u7b97\u8853\u6f14\u7b97\u5b50"),(0,s.kt)("p",null,"Python \u3092\u4f7f\u3063\u3066\u6f14\u7b97\u3092\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u6b21\u306e\u3088\u3046\u306b\u66f8\u304f\u3068\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1+1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," \u3092 Python \u306b\u8a08\u7b97\u3055\u305b\u3066\u3001\u305d\u306e\u7d50\u679c\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/expressions/sum.ipynb",mdxType:"ViewSource"}),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Python \u3067\u306f\u3001\u591a\u304f\u306e\u5834\u5408\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002(\u305f\u3060\u3057\u3001\u5358\u8a9e\u306e\u9014\u4e2d\u306a\u3069\u306b\u5165\u308c\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002)\u305d\u306e\u305f\u3081\u3001\u8aad\u307f\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u534a\u89d2\u30b9\u30da\u30fc\u30b9\u3092\u5165\u308c\u3066\u3044\u307e\u3059\u304c\u306a\u304f\u3066\u3082\u540c\u3058\u3088\u3046\u306b\u52d5\u304d\u307e\u3059\u3002"),(0,s.kt)("p",{parentName:"admonition"},"\u305f\u3060\u3057\u3001\u5168\u89d2\u30b9\u30da\u30fc\u30b9\u304c\u5165\u3063\u3066\u3044\u308b\u3068\u30a8\u30e9\u30fc\u304c\u51fa\u3066\u3057\u307e\u3046\u306e\u3067\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u304f\u3068\u304d\u306b\u306f\u7d76\u5bfe\u306b\u5168\u89d2\u30b9\u30da\u30fc\u30b9\u3092\u5165\u308c\u306a\u3044\u3088\u3046\u306b\u6c17\u3092\u3064\u3051\u307e\u3057\u3087\u3046\u3002")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u4e0a\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u3082\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306b\u306f\u3001\u5c11\u3057\u9055\u3044\u304c\u3042\u308b\u3088\u3046\u3067\u3059\u304c\u6c17\u306b\u3057\u306a\u304f\u3066\u5927\u4e08\u592b\u3067\u3057\u3087\u3046\u3002"),(0,s.kt)("p",{parentName:"admonition"},"Google Colaboratory \u4ee5\u5916\u3067\u5b9f\u884c\u3059\u308b\u3068\u304d\u306a\u3069\u4e0a\u306e\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3046\u307e\u304f\u52d5\u304b\u306a\u3044\u3068\u304d\u306f\u3001\u4e0b\u306e\u3088\u3046\u306b\u66f8\u3044\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,s.kt)(m.Z,{path:"/expressions/sum2.ipynb",mdxType:"ViewSource"})),(0,s.kt)("p",null,"Python \u3067\u306f\u8db3\u3057\u7b97\u4ee5\u5916\u306b\u3082\u6b21\u306e\u3088\u3046\u306b\u69d8\u3005\u306a\u6f14\u7b97\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u6f14\u7b97\u5b50"),(0,s.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"),(0,s.kt)("th",{parentName:"tr",align:null},"\u4f8b"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"+")),(0,s.kt)("td",{parentName:"tr",align:null},"\u8db3\u3059"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/expressions/sum.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"-")),(0,s.kt)("td",{parentName:"tr",align:null},"\u5f15\u304f"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/expressions/sub.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"*")),(0,s.kt)("td",{parentName:"tr",align:null},"\u639b\u3051\u308b"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/expressions/multi.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"/")),(0,s.kt)("td",{parentName:"tr",align:null},"\u5272\u308b"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/expressions/div.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"**")),(0,s.kt)("td",{parentName:"tr",align:null},"\u3079\u304d\u4e57"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/expressions/exp.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"//")),(0,s.kt)("td",{parentName:"tr",align:null},"\u5546"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/expressions/quotient.ipynb",mdxType:"ViewSource"}))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"%")),(0,s.kt)("td",{parentName:"tr",align:null},"\u5270\u4f59"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)(m.Z,{path:"/expressions/remainder.ipynb",mdxType:"ViewSource"}))))),(0,s.kt)("p",null,"\u62ec\u5f27 ",(0,s.kt)("inlineCode",{parentName:"p"},"("),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},")")," \u3092\u7528\u3044\u308b\u3053\u3068\u3067\u3001\u8907\u96d1\u306a\u8a08\u7b97\u3092\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n\u9ec4\u91d1\u6bd4\u3092\u8a08\u7b97\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u9ec4\u91d1\u6bd4\u306f\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"mfrac"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("msqrt",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msqrt"},"5"))),(0,s.kt)("mn",{parentName:"mfrac"},"2"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{1+\\sqrt{5}}{2}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.383em",verticalAlign:"-0.345em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.038em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.399em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,s.kt)("span",{parentName:"span",className:"mord sqrt mtight"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9128em"}},(0,s.kt)("span",{parentName:"span",className:"svg-align",style:{top:"-3em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mtight",style:{paddingLeft:"0.833em"}},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"5"))),(0,s.kt)("span",{parentName:"span",style:{top:"-2.8728em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"hide-tail mtight",style:{minWidth:"0.853em",height:"1.08em"}},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},(0,s.kt)("path",{parentName:"svg",d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1272em"}},(0,s.kt)("span",{parentName:"span"}))))))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))," \u3067\u4e0e\u3048\u3089\u308c\u307e\u3059\u3002"),(0,s.kt)(m.Z,{path:"/expressions/golden_ratio.ipynb",mdxType:"ViewSource"}),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u5e73\u65b9\u6839\u306f 0.5 \u4e57\u3068\u3059\u308b\u3053\u3068\u3067\u8a08\u7b97\u3067\u304d\u307e\u3059\u3002")),(0,s.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c"},"\u7df4\u7fd2\u554f\u984c"),(0,s.kt)("p",null,"20\xb0C \u3067\u306e\u83ef\u6c0f\u6e29\u5ea6\u3092\u6c42\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u83ef\u6c0f\u6e29\u5ea6\u306f\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"F")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," \u3092\u83ef\u6c0f\u6e29\u5ea6\u3001",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"C")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"C")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C")))))," \u3092\u6442\u6c0f\u6e29\u5ea6\u3068\u3057\u3066\u6b21\u306e\u3088\u3046\u306a\u5f0f\u3067\u6c42\u3081\u3089\u308c\u307e\u3059\u3002"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"F"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mfrac",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"mfrac"},"9"),(0,s.kt)("mn",{parentName:"mfrac"},"5")),(0,s.kt)("mi",{parentName:"mrow"},"C"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"32")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F=\\frac{9}{5}C+32")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0074em",verticalAlign:"-0.686em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,s.kt)("span",{parentName:"span",className:"mfrac"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3214em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"5"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,s.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"9")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,s.kt)("span",{parentName:"span"}))))),(0,s.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"32")))))),(0,s.kt)(p.Z,{mdxType:"Answer"},(0,s.kt)(m.Z,{path:"/expressions/to_fahrenheit.ipynb",mdxType:"ViewSource"})))}k.isMDXComponent=!0}}]);