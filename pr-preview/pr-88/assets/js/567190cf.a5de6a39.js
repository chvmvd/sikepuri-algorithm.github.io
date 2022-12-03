"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[444,918],{3665:(a,e,t)=>{t.d(e,{Z:()=>p});var s=t(67294),n=t(34673);function p(a){let{children:e}=a;return s.createElement(n.Z,{summary:s.createElement("summary",null,"\u89e3\u7b54")},e)}},61263:(a,e,t)=>{t.d(e,{Z:()=>N});var s=t(67294),n=t(1686),p=t(9669),m=t.n(p);const r="root_frVT";function l(a){let{path:e}=a;return s.createElement(s.Fragment,null,s.createElement("div",{className:r},s.createElement("a",{href:`https://colab.research.google.com/github/sikepuri-algorithm/sikepuri-algorithm.github.io/blob/main/static${e}`,target:"_blank",rel:"noreferrer"},s.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}function N(a){let{path:e,noOutput:t=!1}=a;const[p,r]=(0,s.useState)([]),[N,i]=(0,s.useState)();return(0,s.useEffect)((()=>{fetch(e).then((a=>a.json())).then((a=>{r(function(a){return a.cells.filter((a=>"code"===a.cell_type)).map((a=>a.source.join("")))}(a)),i(a)}))}),[]),s.createElement(s.Fragment,null,p.map(((a,e)=>s.createElement(s.Fragment,{key:e},s.createElement(n.Z,{language:"python"},a)))),void 0!==N&&!t&&s.createElement(m(),{rawIpynb:N,language:"python",displaySource:"hide"}),s.createElement(l,{path:e}))}},56922:(a,e,t)=>{t.d(e,{Z:()=>p});var s=t(67294),n=t(43627);const p={React:s,...s,LifeGame:function(){return s.createElement(s.Fragment,null,s.createElement("div",{style:{maxWidth:"200px"}},s.createElement(n.Z,null)))}}},95231:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>N,toc:()=>k});var s=t(87462),n=(t(67294),t(3905)),p=t(61263),m=t(3665);const r={sidebar_position:9},l="\u914d\u5217",N={unversionedId:"01python/09array/index",id:"01python/09array/index",title:"\u914d\u5217",description:"\u914d\u5217",source:"@site/docs/01python/09array/index.mdx",sourceDirName:"01python/09array",slug:"/01python/09array/",permalink:"/docs/01python/09array/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/01python/09array/index.mdx",tags:[],version:"current",lastUpdatedAt:1670030302,formattedLastUpdatedAt:"2022\u5e7412\u67083\u65e5",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u7e70\u308a\u8fd4\u3057\u51e6\u7406",permalink:"/docs/01python/08for/"},next:{title:"\u591a\u6b21\u5143\u914d\u5217",permalink:"/docs/01python/10multi-array/"}},i={},k=[{value:"\u914d\u5217",id:"\u914d\u5217-1",level:2},{value:"\u554f\u984c",id:"\u554f\u984c",level:3},{value:"\u554f\u984c",id:"\u554f\u984c-1",level:3},{value:"\u7df4\u7fd2\u554f\u984c 1",id:"\u7df4\u7fd2\u554f\u984c-1",level:3},{value:"\u7df4\u7fd2\u554f\u984c 2",id:"\u7df4\u7fd2\u554f\u984c-2",level:3}],c={toc:k};function o(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u914d\u5217"},"\u914d\u5217"),(0,n.kt)("h2",{id:"\u914d\u5217-1"},"\u914d\u5217"),(0,n.kt)("p",null,"5 \u4eba\u306e\u751f\u5f92\u306e\u6570\u5b66\u306e\u70b9\u6570\u3092\u305d\u308c\u305e\u308c 96 \u70b9\u300156 \u70b9\u300142 \u70b9\u300174 \u70b9\u300186 \u70b9\u3068\u3057\u307e\u3059\u3002\u3053\u306e\u5e73\u5747\u70b9\u3092\u6c42\u3081\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(p.Z,{path:"/array/average.ipynb",mdxType:"ViewSource"}),(0,n.kt)("p",null,"\u4e00\u5fdc\u3001\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u304c\u3001\u751f\u5f92\u306e\u6570\u304c\u5897\u3048\u3066\u3057\u307e\u3046\u3068\u5927\u5909\u3067\u3059\u3002\u524d\u9805\u306e for \u6587\u3092\u4f7f\u3046\u3068\u7c21\u5358\u306b\u3067\u304d\u305d\u3046\u3067\u3059\u304c\u5909\u6570\u3092 for \u6587\u3067\u306f\u3046\u307e\u304f\u6271\u3048\u306a\u3044\u306e\u3067\u3001\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3092\u7528\u3044\u3066\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002"),(0,n.kt)("p",null,"\u3053\u3053\u3067\u3001\u914d\u5217\u3092\u4f7f\u3044\u307e\u3059\u3002\u914d\u5217\u306f\u3001\u8907\u6570\u306e\u30c7\u30fc\u30bf\u3092\u9806\u756a\u306b\u4e26\u3079\u305f\u3082\u306e\u3067\u3001\u5927\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u6271\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6570\u5b66\u306b\u304a\u3051\u308b\u30d9\u30af\u30c8\u30eb\u3068\u540c\u3058\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u914d\u5217\u3092\u7528\u3044\u308b\u3068\u3001\u5148\u7a0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(p.Z,{path:"/array/average2.ipynb",mdxType:"ViewSource"}),(0,n.kt)("p",null,"\u3055\u3089\u306b\u3001for \u6587\u3092\u7528\u3044\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u3001\u6b21\u306e\u3088\u3046\u306b\u7c21\u5358\u306b\u304b\u3064\u5fdc\u7528\u306e\u5229\u304f\u5f62\u3067\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(p.Z,{path:"/array/average3.ipynb",mdxType:"ViewSource"}),(0,n.kt)("p",null,"\u914d\u5217\u306b\u3064\u3044\u3066\u3001\u8a73\u3057\u304f\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,"\u914d\u5217\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u69cb\u6587\u3067\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\u914d\u5217\u540d = [\u4e00\u3064\u76ee\u306e\u30c7\u30fc\u30bf, \u4e8c\u3064\u76ee\u306e\u30c7\u30fc\u30bf, \u4e09\u3064\u76ee\u306e\u30c7\u30fc\u30bf, \u2026 , n\u3064\u76ee\u306e\u30c7\u30fc\u30bf]\n")),(0,n.kt)("p",null,"\u914d\u5217\u304b\u3089\u3001i \u756a\u76ee\u306e\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u51fa\u3059\u3068\u304d\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u53d6\u308a\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u3053\u3067\u3001i-1 \u3068\u306a\u3063\u3066\u3044\u308b\u306e\u306f\u3001\u914d\u5217\u306e\u6dfb\u5b57\u306f ",(0,n.kt)("strong",{parentName:"p"},"0 \u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u308b"),"\u304b\u3089\u3067\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\u914d\u5217\u540d[i-1]\n")),(0,n.kt)("p",null,"\u914d\u5217\u306e\u9577\u3055\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"len(\u914d\u5217\u540d)\n")),(0,n.kt)("p",null,"\u6b21\u306e\u554f\u984c\u3092\u89e3\u3044\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",{id:"\u554f\u984c"},"\u554f\u984c"),(0,n.kt)("p",null,"\u5148\u7a0b\u306e\u4e00\u4eba\u76ee\u306e\u70b9\u6570\u3092 96 \u70b9\u304b\u3089 37 \u70b9\u306b\u66f8\u304d\u63db\u3048\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(m.Z,{mdxType:"Answer"},(0,n.kt)(p.Z,{path:"/array/change.ipynb",mdxType:"ViewSource"}),(0,n.kt)("p",null,"\u914d\u5217\u3092\u51fa\u529b\u3057\u3066\u307f\u308b\u3068\u3001\u78ba\u304b\u306b\u5909\u66f4\u3067\u304d\u305f\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(p.Z,{path:"/array/change2.ipynb",mdxType:"ViewSource"})),(0,n.kt)("p",null,"\u914d\u5217\u306e\u6dfb\u5b57\u306b\u306f\u3001\u5909\u6570\u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u7528\u3044\u3066\u3001\u3055\u304d\u307b\u3069\u306e\u554f\u984c\u3092\u3055\u3089\u306b\u4e00\u822c\u5316\u3057\u305f\u554f\u984c\u3092\u89e3\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("h3",{id:"\u554f\u984c-1"},"\u554f\u984c"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"i")," \u4eba\u76ee\u306e\u70b9\u6570\u3092 ",(0,n.kt)("inlineCode",{parentName:"p"},"laterScore")," \u306b\u66f8\u304d\u63db\u3048\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f5c\u3063\u3066\u3001\u5b9f\u969b\u306b ",(0,n.kt)("inlineCode",{parentName:"p"},"i")," \u306b 1\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"laterScore")," \u306b 37 \u3092\u5165\u529b\u3057\u3066\u3001\u5148\u7a0b\u3068\u540c\u3058\u3088\u3046\u306b\u306a\u308b\u304b\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(m.Z,{mdxType:"Answer"},(0,n.kt)("p",null,"\u6dfb\u5b57\u304c ",(0,n.kt)("strong",{parentName:"p"},"0 \u304b\u3089\u59cb\u307e\u3063\u3066\u3044\u308b"),"\u3053\u3068\u306b\u6c17\u3092\u3064\u3051\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(p.Z,{path:"/array/change3.ipynb",mdxType:"ViewSource"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5b9f\u306f for \u6587\u3092\u66f8\u304f\u3068\u304d\u306b\u51fa\u3066\u304d\u305f range \u306f\u3001\u914d\u5217\u306e\u3088\u3046\u306a\u3082\u306e\u3092\u4f5c\u308b\u95a2\u6570\u3067\u3059\u3002\u3053\u3053\u3067\u3001\u914d\u5217\u306e\u3088\u3046\u306a\u3082\u306e\u3068\u8a00\u3063\u305f\u306e\u306f\u53b3\u5bc6\u306b\u306f\u914d\u5217\u3067\u306f\u306a\u3044\u304b\u3089\u3067\u3059\u304c\u3001\u3072\u3068\u307e\u305a\u914d\u5217\u3068\u8003\u3048\u3066\u554f\u984c\u306a\u3044\u3067\u3057\u3087\u3046\u3002\u305d\u306e\u305f\u3081\u3001\u4f8b\u3048\u3070 ",(0,n.kt)("inlineCode",{parentName:"p"},"range(1, 11)")," \u306f ",(0,n.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")," \u3092\u751f\u6210\u3057\u307e\u3059\u3002list \u95a2\u6570\u306f range \u95a2\u6570\u306e\u8fd4\u308a\u5024\u3092\u914d\u5217\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)(p.Z,{path:"/array/range.ipynb",mdxType:"ViewSource"}),(0,n.kt)("p",{parentName:"admonition"},"\u524d\u9805\u306e\u7df4\u7fd2\u554f\u984c\u306e\u89e3\u7b54\u3067 ",(0,n.kt)("inlineCode",{parentName:"p"},"sum(range(1, 11))")," \u306e\u3088\u3046\u306a\u5225\u89e3\u304c\u3042\u308a\u307e\u3057\u305f\u304c\u3001sum \u95a2\u6570\u306f\u4e0e\u3048\u3089\u308c\u305f\u914d\u5217\u306e\u548c\u3092\u6c42\u3081\u308b\u95a2\u6570\u306a\u306e\u3067\u3001\u3053\u308c\u306f range \u95a2\u6570\u3067 1 \u304b\u3089 10 \u307e\u3067\u306e\u914d\u5217\u3092\u4f5c\u308a\u3001\u305d\u308c\u306e\u548c\u3092 sum \u95a2\u6570\u3067\u6c42\u3081\u3066\u3044\u305f\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,n.kt)(p.Z,{path:"/array/sum.ipynb",mdxType:"ViewSource"}),(0,n.kt)(p.Z,{path:"/array/sum2.ipynb",mdxType:"ViewSource"})),(0,n.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-1"},"\u7df4\u7fd2\u554f\u984c 1"),(0,n.kt)("p",null,"\u751f\u5f92\u306e\u82f1\u8a9e\u306e\u70b9\u6570\u304c\u66f8\u304b\u308c\u305f\u914d\u5217\u3092\u53d7\u3051\u53d6\u3063\u3066\u3001\u305d\u306e\u5e73\u5747\u70b9\u3092\u8fd4\u3059\u95a2\u6570\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u5b9f\u969b\u306b\u3001\u70b9\u6570\u3092\u305d\u308c\u305e\u308c 26 \u70b9\u300178 \u70b9\u300183 \u70b9\u300120 \u70b9\u300110 \u70b9\u300111 \u70b9\u300122 \u70b9\u300116 \u70b9\u300141 \u70b9\u300195 \u70b9\u3068\u3057\u3066\u8a08\u7b97\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(m.Z,{mdxType:"Answer"},(0,n.kt)(p.Z,{path:"/array/average10.ipynb",mdxType:"ViewSource"}),(0,n.kt)("p",null,"\u5b9f\u306f\u3001\u5e73\u5747\u70b9\u3092\u6c42\u3081\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3082\u3042\u308a\u307e\u3059\u3002",(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/library/statistics.html#statistics.mean"},"statistics \u30e9\u30a4\u30d6\u30e9\u30ea\u306e mean \u95a2\u6570"),"\u3084",(0,n.kt)("a",{parentName:"p",href:"https://numpy.org/doc/stable/reference/generated/numpy.mean.html"},"NumPy \u30e9\u30a4\u30d6\u30e9\u30ea\u306e mean \u95a2\u6570"),"\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(p.Z,{path:"/array/average_statistics.ipynb",mdxType:"ViewSource"}),(0,n.kt)(p.Z,{path:"/array/average_numpy.ipynb",mdxType:"ViewSource"})),(0,n.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c-2"},"\u7df4\u7fd2\u554f\u984c 2"),(0,n.kt)("p",null,"\u4eca\u5ea6\u306f\u3001\u5206\u6563\u3092\u6c42\u3081\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"n")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u500b\u306e\u89b3\u6e2c\u30c7\u30fc\u30bf\u3092 ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mn",{parentName:"msub"},"2")),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("mo",{parentName:"mrow"},"\u22ef"),(0,n.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,n.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mi",{parentName:"msub"},"n"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x_1,x_2,\\cdots,x_n")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},"\u22ef"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mpunct"},","),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," \u3001\u5e73\u5747\u3092 ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("mi",{parentName:"mover"},"x"),(0,n.kt)("mo",{parentName:"mover"},"\u02c9"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\bar{x}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5678em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.5678em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2222em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},"\u02c9")))))))))))," \u3068\u3059\u308b\u3068\u3001\u5206\u6563 ",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"s"),(0,n.kt)("mn",{parentName:"msup"},"2"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s^2")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))))," \u306f\u6b21\u306e\u3088\u3046\u306b\u4e0e\u3048\u3089\u308c\u308b\u3068\u3057\u307e\u3059\u3002"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msup"},"s"),(0,n.kt)("mn",{parentName:"msup"},"2")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("munderover",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"munderover"},"\u2211"),(0,n.kt)("mrow",{parentName:"munderover"},(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"1")),(0,n.kt)("mi",{parentName:"munderover"},"n")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"x"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mover",{parentName:"mrow",accent:"true"},(0,n.kt)("mi",{parentName:"mover"},"x"),(0,n.kt)("mo",{parentName:"mover"},"\u02c9")),(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"msup",stretchy:"false"},")"),(0,n.kt)("mn",{parentName:"msup"},"2"))),(0,n.kt)("mi",{parentName:"mfrac"},"n"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s^2=\\frac{\\sum\\limits_{i=1}^n(x_i-\\bar{x})^2}{n}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8641em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8641em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"3.4051em",verticalAlign:"-0.686em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"2.7191em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.6654em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3514em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.5814em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3514em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-4.7191em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.3514em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mop op-limits"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.1223em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol small-op"},"\u2211"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.95em",marginLeft:"0em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9777em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.5678em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.2222em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},"\u02c9"))))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,n.kt)("p",null,"\u7df4\u7fd2\u554f\u984c 1 \u3068\u540c\u3058\u3088\u3046\u306b\u5177\u4f53\u7684\u306a\u5024\u3092\u5165\u308c\u3066\u78ba\u304b\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)(m.Z,{mdxType:"Answer"},(0,n.kt)(p.Z,{path:"/array/variance.ipynb",mdxType:"ViewSource"}),(0,n.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u3082\u8a08\u7b97\u3067\u304d\u307e\u3059\u304c\uff08 ",(0,n.kt)("inlineCode",{parentName:"p"},"variance")," \u95a2\u6570\u306e\u4e2d\u304c\u5c11\u3057\u5909\u308f\u3063\u3066\u3044\u307e\u3059\u3002\uff09\u3001for \u6587\u306e\u4e2d\u304c\u5b9f\u884c\u3055\u308c\u308b\u5ea6\u306b ",(0,n.kt)("inlineCode",{parentName:"p"},"average")," \u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\u3066\u8a08\u7b97\u91cf\u304c\u591a\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u306e\u3067\u3001\u4e0a\u306e\u3088\u3046\u306b\u3057\u305f\u65b9\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002"),(0,n.kt)(p.Z,{path:"/array/variance2.ipynb",mdxType:"ViewSource"}),(0,n.kt)("p",null,"\u5b9f\u306f\u3001\u5206\u6563\u3092\u8a08\u7b97\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u304c\u3042\u308a\u307e\u3059\u3002",(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/ja/3/library/statistics.html#statistics.pvariance"},"statistics \u30e9\u30a4\u30d6\u30e9\u30ea\u306e pvariance \u95a2\u6570"),"\u3084",(0,n.kt)("a",{parentName:"p",href:"https://numpy.org/doc/stable/reference/generated/numpy.var.html"},"NumPy \u30e9\u30a4\u30d6\u30e9\u30ea\u306e var \u95a2\u6570"),"\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(p.Z,{path:"/array/variance_statistics.ipynb",mdxType:"ViewSource"}),(0,n.kt)(p.Z,{path:"/array/variance_numpy.ipynb",mdxType:"ViewSource"})))}o.isMDXComponent=!0}}]);