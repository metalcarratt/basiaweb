(function(t){function e(e){for(var r,c,u=e[0],i=e[1],s=e[2],l=0,p=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-44554e10":"23a2dbf8","chunk-4457a1dc":"f4dca838","chunk-447cd93a":"dc3d8d85","chunk-44826fd0":"54dc2872","chunk-5f978736":"28c78e14"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(t);var s=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"matte"};function o(t,e,n,o,c,u){var i=Object(r["s"])("Heading"),s=Object(r["s"])("router-view"),l=Object(r["s"])("Footer");return Object(r["o"])(),Object(r["c"])("div",a,[Object(r["f"])(i),Object(r["f"])(s),Object(r["f"])(l)])}var c={class:"heading"},u=Object(r["d"])('<span class="heading1">Spot It Proofing</span><span class="heading2">Proofreading &amp; Light Copy Editing <span class="sub">(Dip. Edit)</span></span><span class="blurb">Professional - Fast and Efficient - Communicative - An Eye for Detail - Trustworthy</span><a href="mailto:basgarratt@gmail.com">basgarratt@gmail.com</a> 022 415 2822 ',5);function i(t,e,n,a,o,i){return Object(r["o"])(),Object(r["c"])("div",c,[u])}const s={};s.render=i;var l=s,f={class:"footer"},p=Object(r["e"])(" Made with "),d=Object(r["f"])("a",{href:"https://vuejs.org/",target:"_blank"},"Vue.js",-1),h=Object(r["e"])(" | Built by "),b=Object(r["f"])("a",{href:"https://www.linkedin.com/in/caleb-garratt-5911024a",target:"_blank"},"Caleb Garratt",-1),m=Object(r["e"])(" | Background Image by "),g=Object(r["f"])("a",{href:"https://pixabay.com/users/thoughtcatalog-2926513/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3240766",target:"_blank"},"Thought Catalog",-1),j=Object(r["e"])(" from "),v=Object(r["f"])("a",{href:"https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3240766",target:"_blank"},"Pixabay",-1);function O(t,e,n,a,o,c){return Object(r["o"])(),Object(r["c"])("p",f,[p,d,h,b,m,g,j,v])}const y={};y.render=O;var k=y,w={name:"App",components:{Heading:l,Footer:k}};n("9cdc");w.render=o;var _=w,P=(n("d3b7"),n("6c02")),x=Object(P["a"])({history:Object(P["b"])(),routes:[{path:"/",redirect:"/home.html"},{path:"/home.html",component:function(){return n.e("chunk-44554e10").then(n.bind(null,"bc13"))}},{path:"/about.html",component:function(){return n.e("chunk-4457a1dc").then(n.bind(null,"a1d1"))}},{path:"/services.html",component:function(){return n.e("chunk-447cd93a").then(n.bind(null,"83d7"))}},{path:"/testimonials.html",component:function(){return n.e("chunk-44826fd0").then(n.bind(null,"2049"))}},{path:"/contact.html",component:function(){return n.e("chunk-5f978736").then(n.bind(null,"c3df"))}}]}),E=x;Object(r["b"])(_).use(E).mount("#app")},"9cdc":function(t,e,n){"use strict";n("c701")},c701:function(t,e,n){}});
//# sourceMappingURL=app.edb1f757.js.map