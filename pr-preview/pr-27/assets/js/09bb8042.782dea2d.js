(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[829],{639:(e,t,o)=>{var n={"./python/02get-started/_samples/comment.json":[8029,29],"./python/02get-started/_samples/hello-from-python.json":[8077,77],"./python/02get-started/_samples/hello-world.json":[5072,72],"./python/03expressions/_samples/cube.json":[6455,455],"./python/03expressions/_samples/div.json":[4283,283],"./python/03expressions/_samples/exp.json":[4611,611],"./python/03expressions/_samples/golden-ratio.json":[6295,295],"./python/03expressions/_samples/multi.json":[8607,607],"./python/03expressions/_samples/quotient.json":[4805,805],"./python/03expressions/_samples/remainder.json":[6860,860],"./python/03expressions/_samples/sub.json":[9503,503],"./python/03expressions/_samples/sum.json":[8236,236],"./python/03expressions/_samples/sum2.json":[1082,82],"./python/04variables/_samples/cube.json":[3989,989],"./python/04variables/_samples/sound-velocity.json":[3672,672],"./python/04variables/_samples/sound-velocity2.json":[8663,663],"./python/04variables/_samples/substitution.json":[2338,338],"./python/04variables/_samples/substitution2.json":[861,861]};function s(e){if(!o.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return o.e(t[1]).then((()=>o.t(s,19)))}s.keys=()=>Object.keys(n),s.id=639,e.exports=s},3665:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(7294),s=o(4673);function l(e){let{children:t}=e;return n.createElement(s.Z,{summary:n.createElement("summary",null,"\u89e3\u7b54")},t)}},5447:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var n=o(7294),s=o(814),l=o(6550),r=o(6809);function a(){return(0,l.TH)().pathname.slice(r.default.baseUrl.length-1)}const i="root_frVT";function p(e){let{path:t}=e;const o=a();return n.createElement(n.Fragment,null,n.createElement("div",{className:i},n.createElement("a",{href:`https://colab.research.google.com/github/chvmvd/sikepuri-of-algorithm/blob/main${o}${t}`,target:"_blank",rel:"noreferrer"},n.createElement("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab",width:"150"}))))}function m(e){let{path:t,nooutput:l=!1}=e;const r=a(),[i,m]=(0,n.useState)([]),[d,u]=(0,n.useState)([]);return(0,n.useEffect)((()=>{!async function(){const e=await o(639)(`./${r.slice(6)}${t.slice(0,-6)}.json`);m(e.cells.filter((e=>"code"===e.cell_type)).map((e=>e.source.join("")))),u(e.cells.filter((e=>"code"===e.cell_type)).map((e=>0!==e.outputs.length?e:{outputs:[{text:[""]}]})).map((e=>e.outputs.map((e=>(void 0===e.text?e.data["text/plain"]:e.text).join(""))))))}()}),[]),n.createElement(n.Fragment,null,i.map(((e,t)=>n.createElement(n.Fragment,{key:t},n.createElement(s.Z,{language:"python"},e),!l&&n.createElement(s.Z,{language:"plaintext"},d[t])))),n.createElement(p,{path:t}))}},6922:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=o(7462),s=(o(7294),o(3905)),l=o(5447),r=o(3665);const a={sidebar_position:2},i="\u306f\u3058\u3081\u3066\u306e Python",p={unversionedId:"python/02get-started/index",id:"python/02get-started/index",title:"\u306f\u3058\u3081\u3066\u306e Python",description:"Hello World",source:"@site/docs/python/02get-started/index.mdx",sourceDirName:"python/02get-started",slug:"/python/02get-started/",permalink:"/sikepuri-of-algorithm/docs/python/02get-started/",draft:!1,editUrl:"https://github.com/chvmvd/sikepuri-of-algorithm/tree/main/docs/python/02get-started/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u74b0\u5883\u69cb\u7bc9\uff08Google Colaboratory\uff09",permalink:"/sikepuri-of-algorithm/docs/python/01google-colaboratory/"},next:{title:"\u5f0f\u3068\u6f14\u7b97\u5b50",permalink:"/sikepuri-of-algorithm/docs/python/03expressions/"}},m={},d=[{value:"Hello World",id:"hello-world",level:2},{value:"\u7df4\u7fd2\u554f\u984c",id:"\u7df4\u7fd2\u554f\u984c",level:3},{value:"\u30b3\u30e1\u30f3\u30c8",id:"\u30b3\u30e1\u30f3\u30c8",level:2}],u={toc:d};function h(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u306f\u3058\u3081\u3066\u306e-python"},"\u306f\u3058\u3081\u3066\u306e Python"),(0,s.kt)("h2",{id:"hello-world"},"Hello World"),(0,s.kt)("p",null,"\u306f\u3058\u3081\u3066\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)("p",null,"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u4e16\u754c\u3067\u306f\u3001\u307e\u305a\u753b\u9762\u4e0a\u306b ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3055\u305b\u308b\u306e\u304c\u6163\u4f8b\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u304c\u753b\u9762\u4e0a\u306b ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092 Google Colaboratory \u4e0a\u3067\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(l.Z,{path:"_samples/hello-world.ipynb",mdxType:"ViewSource"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u3068\u8868\u793a\u3055\u308c\u307e\u3057\u305f\u304b\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"print")," \u306f\u753b\u9762\u306b\u6587\u5b57\u5217\u3092\u8868\u793a\u3055\u305b\u308b\u547d\u4ee4\u3067\u3059\u3002",(0,s.kt)("inlineCode",{parentName:"p"},'"')," \u3067\u62ec\u3063\u305f\u6587\u5b57\u5217\u304c\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,s.kt)("h3",{id:"\u7df4\u7fd2\u554f\u984c"},"\u7df4\u7fd2\u554f\u984c"),(0,s.kt)("p",null,"\u5148\u7a0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5c11\u3057\u5909\u3048\u3066\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"Hello from Python!")," \u3068\u51fa\u529b\u3059\u308b\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,s.kt)(r.Z,{mdxType:"Answer"},(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},'"')," \u3067\u62ec\u3089\u308c\u305f\u6587\u5b57\u5217\u3092 ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u304b\u3089\u6b21\u306e\u3088\u3046\u306b ",(0,s.kt)("inlineCode",{parentName:"p"},"Hello from Python")," \u306b\u5909\u3048\u308c\u3070\u3001\u5b8c\u6210\u3067\u3059\u3002"),(0,s.kt)(l.Z,{path:"_samples/hello-from-python.ipynb",mdxType:"ViewSource"})),(0,s.kt)("h2",{id:"\u30b3\u30e1\u30f3\u30c8"},"\u30b3\u30e1\u30f3\u30c8"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"#")," \u304b\u3089\u6587\u672b\u307e\u3067\u306f\u30b3\u30e1\u30f3\u30c8\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002\n\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u8aad\u307f\u3084\u3059\u304f\u3059\u308b\u305f\u3081\u306b\u8aac\u660e\u3092\u66f8\u304f\u3068\u304d\u3084\u4e00\u6642\u7684\u306b\u3042\u308b\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3068\u304d\u306a\u3069\u306b\u3088\u304f\u4f7f\u308f\u308c\u307e\u3059\u3002"),(0,s.kt)(l.Z,{path:"_samples/comment.ipynb",mdxType:"ViewSource"}))}h.isMDXComponent=!0}}]);