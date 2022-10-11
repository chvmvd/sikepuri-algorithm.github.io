(()=>{"use strict";var e,r,t,o,a,f={},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=f,i.c=n,e=[],i.O=(r,t,o,a)=>{if(!t){var f=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],a=e[u][2];for(var n=!0,c=0;c<t.length;c++)(!1&a||f>=a)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(n=!1,a<f&&(f=a));if(n){e.splice(u--,1);var d=o();void 0!==d&&(r=d)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,o,a]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var f={};r=r||[null,t({}),t([]),t(t)];for(var n=2&o&&e;"object"==typeof n&&!~r.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((r=>f[r]=()=>e[r]));return f.default=()=>e,i.d(a,f),a},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>"assets/js/"+({10:"f5e93106",53:"935f2afb",173:"4edc808e",237:"1df93b7f",275:"e5d50711",335:"e40da878",514:"1be78505",592:"common",718:"c5ac2551",756:"30365ac6",771:"5cf1a24f",774:"1f6f3364",918:"17896441"}[e]||e)+"."+{10:"f4a8ec0a",31:"c59284fc",52:"56e79a68",53:"f8197c89",77:"df360537",173:"b92ce451",235:"69a6fdba",237:"ea4c3349",275:"ae85d47b",282:"dac8e432",304:"b3bd85ef",335:"0ddecc9c",354:"8db3e3f2",368:"b465cc1a",427:"f55a9011",450:"4df163a4",514:"8256181d",517:"a7031547",576:"5210aaef",580:"90911884",592:"7c8f405a",691:"22ea7e38",718:"51fa047a",756:"15c433ac",771:"bc6a6ab9",774:"b2e7ac30",791:"e9085776",848:"c12434ac",884:"04d51f83",918:"b8489c62",972:"5df6ef69"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},a="sikepuri-of-algorithm:",i.l=(e,r,t,f)=>{if(o[e])o[e].push(r);else{var n,c;if(void 0!==t)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+t){n=l;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,i.nc&&n.setAttribute("nonce",i.nc),n.setAttribute("data-webpack",a+t),n.src=e),o[e]=[r];var s=(r,t)=>{n.onerror=n.onload=null,clearTimeout(b);var a=o[e];if(delete o[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(t))),r)return r(t)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),c&&document.head.appendChild(n)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/sikepuri-of-algorithm/",i.gca=function(e){return e={17896441:"918",f5e93106:"10","935f2afb":"53","4edc808e":"173","1df93b7f":"237",e5d50711:"275",e40da878:"335","1be78505":"514",common:"592",c5ac2551:"718","30365ac6":"756","5cf1a24f":"771","1f6f3364":"774"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(r,t)=>{var o=i.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var f=i.p+i.u(r),n=new Error;i.l(f,(t=>{if(i.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;n.message="Loading chunk "+r+" failed.\n("+a+": "+f+")",n.name="ChunkLoadError",n.type=a,n.request=f,o[1](n)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,f=t[0],n=t[1],c=t[2],d=0;if(f.some((r=>0!==e[r]))){for(o in n)i.o(n,o)&&(i.m[o]=n[o]);if(c)var u=c(i)}for(r&&r(t);d<f.length;d++)a=f[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},t=self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();