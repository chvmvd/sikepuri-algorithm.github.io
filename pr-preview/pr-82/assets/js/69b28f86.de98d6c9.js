"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[2423],{68160:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(67294),r=n(65488),i=n(85162),l=n(19604),s=n(9980),c=n.n(s),o=n(26649),d=n.n(o),u=n(86010);const m="browserWindow_my1Q",p="browserWindowHeader_jXSR",h="buttons_uHc7",g="browserWindowAddressBar_Pd8y",f="dot_giz1",b="browserWindowMenuIcon_Vhuh",k="bar_rrRL",y="browserWindowBody_Idgs";function x(e){let{children:t,minHeight:n,url:r="http://localhost:3000"}=e;return a.createElement("div",{className:m,style:{minHeight:n}},a.createElement("div",{className:p},a.createElement("div",{className:h},a.createElement("span",{className:f,style:{background:"#f25f58"}}),a.createElement("span",{className:f,style:{background:"#fbbe3c"}}),a.createElement("span",{className:f,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,u.Z)(g,"text--truncate")},r),a.createElement("div",{className:b},a.createElement("div",null,a.createElement("span",{className:k}),a.createElement("span",{className:k}),a.createElement("span",{className:k})))),a.createElement("div",{className:y},t))}const v="playgroundContainer_dc2C",E="playgroundHeader_gfqA",w="playgroundEditor_bEFE",C="playgroundPreview_I95C";function S(e){let{language:t,defaultValue:n,defaultHTML:s,defaultCSS:o,defaultJavaScript:u}=e;const[m,p]=(0,a.useState)(n),[h,g]=(0,a.useState)(s),[f,b]=(0,a.useState)(o),[k,y]=(0,a.useState)(u),S=new(c())({html:!0,linkify:!0,typographer:!0});S.use(d());return a.createElement(a.Fragment,null,a.createElement("div",{className:v},a.createElement("div",{className:E},"\u30e9\u30a4\u30d6\u30a8\u30c7\u30a3\u30bf\u30fc"),a.createElement("div",{className:w},"HTML-CSS-JavaScript"===t?a.createElement(r.Z,{groupId:"editor"},a.createElement(i.Z,{value:"html",label:"HTML"},a.createElement(l.ZP,{height:"200px",defaultLanguage:"html",defaultValue:s,onChange:e=>{g(e)}})),a.createElement(i.Z,{value:"css",label:"CSS"},a.createElement(l.ZP,{height:"200px",defaultLanguage:"css",defaultValue:o,onChange:e=>{b(e)}})),a.createElement(i.Z,{value:"js",label:"JavaScript"},a.createElement(l.ZP,{height:"200px",defaultLanguage:"javascript",defaultValue:u,onChange:e=>{y(e)}}))):a.createElement(l.ZP,{height:"200px",defaultLanguage:t,defaultValue:n,onChange:e=>{p(e)}})),a.createElement("div",{className:E},"\u7d50\u679c"),a.createElement("div",{className:C},a.createElement(x,{minHeight:200},a.createElement("iframe",{width:"100%",height:"100%",srcDoc:"html"===t?m:"markdown"===t?'\n<style>\n  blockquote {\n    margin: 0;\n  }\n\n  blockquote p {\n    padding: 15px;\n    background: #eee;\n    border-radius: 5px;\n  }\n\n  blockquote p::before {\n    content: \'\\201C\';\n  }\n\n  blockquote p::after {\n    content: \'\\201D\';\n  }\n\n  code {\n    background-color: #eee;\n    border-radius: 3px;\n    font-family: courier, monospace;\n    padding: 0 3px;\n  }\n  pre code {\n    padding: 20px 5px;\n  }\n</style>\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"/>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>\n'+S.render(m):`<style>${f}</style>${h}<script>${k}<\/script>`,title:"Live Code"})))))}},63736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>w,default:()=>Z,frontMatter:()=>E,metadata:()=>C,toc:()=>N});var a=n(87462),r=n(67294),i=n(3905),l=n(86010),s=n(53438),c=n(39960),o=n(13919),d=n(95999);const u="cardContainer_fWXF",m="cardTitle_rnsV",p="cardDescription_PWke";function h(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,l.Z)("card padding--lg",u)},n)}function g(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(h,{href:t},r.createElement("h2",{className:(0,l.Z)("text--truncate",m),title:a},n," ",a),i&&r.createElement("p",{className:(0,l.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const n=(0,s.Wl)(t);return n?r.createElement(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.xz)(t.docId??void 0);return r.createElement(g,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(b,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,s.jA)();return r.createElement(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const a=(0,s.MN)(t);return r.createElement("section",{className:(0,l.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(k,{item:e})))))}var v=n(68160);const E={sidebar_position:4},w="\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u3089\u308c\u65b9",C={unversionedId:"03extras/04website/index",id:"03extras/04website/index",title:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u3089\u308c\u65b9",description:"Visual Studio Code \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805\u3092\u53c2\u8003\u306b VSCode \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/docs/03extras/04website/index.mdx",sourceDirName:"03extras/04website",slug:"/03extras/04website/",permalink:"/docs/03extras/04website/",draft:!1,editUrl:"https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/tree/main/docs/03extras/04website/index.mdx",tags:[],version:"current",lastUpdatedAt:1669601660,formattedLastUpdatedAt:"2022\u5e7411\u670828\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Python \u3092\u30ed\u30fc\u30ab\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/docs/03extras/03python/"},next:{title:"npm \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5",permalink:"/docs/03extras/04website/01npm/"}},S={},N=[{value:"HTML",id:"html",level:2},{value:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u3089\u308c\u65b9",id:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u3089\u308c\u65b9-1",level:2}],T={toc:N};function Z(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u3089\u308c\u65b9"},"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u3089\u308c\u65b9"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/03extras/02vscode/"},"Visual Studio Code \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805"),"\u3092\u53c2\u8003\u306b VSCode \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"Windows \u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"/docs/03extras/01wsl/"},"WSL \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u9805"),"\u3092\u53c2\u8003\u306b WSL \u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u308a\u65b9\u3092\u7d39\u4ecb\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"html"},"HTML"),(0,i.kt)("p",null,"Web \u30b5\u30a4\u30c8\u306f\u3001HTML \u3092\u7528\u3044\u3066\u4f5c\u308b\u306e\u304c\u4e00\u822c\u7684\u3067\u3059\u3002\u4ee5\u4e0b\u306b HTML \u3092\u7528\u3044\u305f ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World!")," \u306e\u4f8b\u3092\u8f09\u305b\u307e\u3059\u3002"),(0,i.kt)(v.Z,{language:"html",defaultValue:'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <p>Hello World!</p>\n  </body>\n</html>',mdxType:"InteractiveCodeEditor"}),(0,i.kt)("p",null,"\u3082\u3046\u5c11\u3057\u304a\u307e\u3058\u306a\u3044\u3092\u5531\u3048\u308c\u3070\u3001\u6570\u5f0f\u3082\u8868\u793a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)(v.Z,{language:"html",defaultValue:'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css" integrity="sha384-Juol1FqnotbkyZUT5Z7gUPjQ9gzlwCENvUZTpQBAPxtusdwFLRy382PSDx5UUJ4/" crossorigin="anonymous">\n    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.js" integrity="sha384-97gW6UIJxnlKemYavrqDHSX3SiygeOwIZhwyOKRfSaf0JWKRVj9hLASHgFTzT+0O" crossorigin="anonymous"><\/script>\n    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous" onload="renderMathInElement(document.body);"><\/script>\n  </head>\n  <body>\n    <p> \\(a^2 + b^2 = c^2\\) </p>\n    <p>\n      $$\n      \\frac{\\pi}{2} =\n        \\left( \\int_{0}^{\\infty} \\frac{\\sin x}{\\sqrt{x}} dx \\right)^2 =\n        \\sum_{k=0}^{\\infty} \\frac{(2k)!}{2^{2k}(k!)^2} \\frac{1}{2k+1} =\n        \\prod_{k=1}^{\\infty} \\frac{4k^2}{4k^2 - 1}\n      $$\n    </p>\n  </body>\n</html>',mdxType:"InteractiveCodeEditor"}),(0,i.kt)("p",null,"\u3055\u3089\u306b\u3001\u898b\u305f\u76ee\u3092\u6574\u3048\u308b\u3053\u3068\u306e\u3067\u304d\u308b CSS \u3068\u52d5\u304d\u3092\u4e0e\u3048\u308b\u3053\u3068\u306e\u3067\u304d\u308b JavaScript \u3092\u4f7f\u3046\u3068\u6b21\u306e\u3088\u3046\u306a\u8868\u73fe\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,i.kt)(v.Z,{language:"HTML-CSS-JavaScript",defaultHTML:'<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n    <link rel="stylesheet" href="./style.css" />\n  </head>\n  <body>\n    <div id="container">\n      <div id="minus-button">-</div>\n      <div id="counter">0</div>\n      <div id="plus-button">+</div>\n    </div>\n  </body>\n  <script src="./script.js"><\/script>\n</html>',defaultCSS:"#container {\n  display: flex;\n}\n#plus-button,\n#minus-button,\n#counter {\n  height: 100px;\n  width: 150px;\n  font-size: 50px;\n  text-align: center;\n  line-height: 100px;\n  border: 2px solid #aaa;\n  margin: 0px 1px;\n}",defaultJavaScript:'let count = 0;\nconst plusButton = document.getElementById("plus-button");\nconst minusButton = document.getElementById("minus-button");\nconst counter = document.getElementById("counter");\nplusButton.onclick = () => {\n    count++;\n    counter.textContent = count;\n};\nminusButton.onclick = () => {\n    count--;\n    counter.textContent = count;\n};',mdxType:"InteractiveCodeEditor"}),(0,i.kt)("h2",{id:"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u3089\u308c\u65b9-1"},"\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u306e\u4f5c\u3089\u308c\u65b9"),(0,i.kt)("p",null,"\u5148\u7a0b\u306e\u3088\u3046\u306b\u3059\u308c\u3070\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u3042\u307e\u308a\u306b\u3082\u5927\u5909\u306a\u306e\u3067\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3067\u306f\u3088\u308a\u7c21\u5358\u306b Web \u30b5\u30a4\u30c8\u3092\u4f5c\u308c\u308b Docusaurus \u3092\u4f7f\u3044\u307e\u3057\u305f\u3002"),(0,i.kt)("p",null,"\u4ee5\u964d\u306e\u624b\u9806\u306b\u6cbf\u3046\u3053\u3068\u3067\u3001\u3053\u306e\u30b7\u30b1\u30d7\u30ea\u3068\u5168\u304f\u540c\u3058\u3088\u3046\u306a\u3082\u306e\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)(x,{mdxType:"DocCardList"}),(0,i.kt)("p",null,"\u5b8c\u6210\u54c1\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("iframe",{width:"100%",height:"400vw",src:"https://docusaurus-sample.onrender.com/docs/intro"}))}Z.isMDXComponent=!0}}]);