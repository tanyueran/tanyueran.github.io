(function(e){function t(t){for(var o,a,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-2d22d746":"f01bec7a"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"4e72":function(e,t){e.exports=antd},5880:function(e,t){e.exports=Vuex},6389:function(e,t){e.exports=VueRouter},"8bbf":function(e,t){e.exports=Vue},"8e1f":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("8bbf"),r=n("4e72"),c=n.n(r),a={class:"fixed top-4 right-4"};function u(e,t,n,r,c,u){var i=Object(o["resolveComponent"])("layout"),l=Object(o["resolveComponent"])("a-switch"),s=Object(o["resolveComponent"])("a-config-provider");return Object(o["openBlock"])(),Object(o["createBlock"])(s,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i),Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(l,{checked:e.isDark,"onUpdate:checked":t[0]||(t[0]=function(t){return e.isDark=t}),"checked-children":"暗","un-checked-children":"亮",onChange:e.switchHandler},null,8,["checked","onChange"])])]})),_:1})}function i(e,t,n,r,c,a){var u=Object(o["resolveComponent"])("nav-header-comp"),i=Object(o["resolveComponent"])("a-layout-header"),l=Object(o["resolveComponent"])("router-view"),s=Object(o["resolveComponent"])("a-layout-content"),d=Object(o["resolveComponent"])("a-layout");return Object(o["openBlock"])(),Object(o["createBlock"])(d,{class:"flex flex-column h-screen"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{class:"p-0"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u)]})),_:1}),Object(o["createVNode"])(s,{class:"flex-1 m-4"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l)]})),_:1})]})),_:1})}var l=Object(o["createTextVNode"])(" 首页 "),s=Object(o["createTextVNode"])(" 关于 ");function d(e,t,n,r,c,a){var u=Object(o["resolveComponent"])("a-menu-item"),i=Object(o["resolveComponent"])("a-menu");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{class:"w-full",theme:e.theme,selectedKeys:e.current,"onUpdate:selectedKeys":t[2]||(t[2]=function(t){return e.current=t}),mode:"horizontal"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{key:"Home",onClick:t[0]||(t[0]=function(t){return e.clickHandler("Home")})},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),Object(o["createVNode"])(u,{key:"About",onClick:t[1]||(t[1]=function(t){return e.clickHandler("About")})},{default:Object(o["withCtx"])((function(){return[s]})),_:1})]})),_:1},8,["theme","selectedKeys"])}n("b0c0");var f=n("6389"),p=Object(o["defineComponent"])({name:"navHeaderComp",setup:function(){var e=Object(o["inject"])("theme"),t=Object(f["useRoute"])(),n=Object(f["useRouter"])(),r=Object(o["ref"])([]);return Object(o["watchEffect"])((function(){r.value=[t.name]})),{current:r,theme:e,clickHandler:function(e){t.name!==e&&n.push({name:e})}}}}),b=n("6b0d"),m=n.n(b);const h=m()(p,[["render",d]]);var j=h,v=Object(o["defineComponent"])({name:"LayoutComponent",components:{NavHeaderComp:j},setup:function(){return{}}});const O=m()(v,[["render",i]]);var y=O,g=function(e){e?(document.body.classList.remove("dark"),k("/css/antd.min.css")):(document.body.classList.add("dark"),k("css/antd.dark.min.css"))};function k(e){for(var t=document.getElementsByTagName("head")[0],n=t.getElementsByTagName("link"),o=null,r=0;r<n.length;r++){var c=n[r];"theme"===c.getAttribute("data-type")&&(o=c)}var a=document.createElement("link");a.dataset.type="theme",a.href=e,a.rel="stylesheet",a.onload=function(){o.parentNode.removeChild(o)},t.insertBefore(a,t.children[0])}var C=Object(o["defineComponent"])({name:"APP",components:{Layout:y},setup:function(){var e=Object(o["ref"])(!1),t=function(e){g(!e)},n=Object(o["computed"])((function(){return e.value?"dark":"light"}));return Object(o["provide"])("theme",n),{switchHandler:t,isDark:e}}});const w=m()(C,[["render",u]]);var x=w,N=n("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var V=Object(o["createTextVNode"])("HOME PAGE"),_=Object(o["createTextVNode"])("tanyueran");function H(e,t,n,r,c,a){var u=Object(o["resolveComponent"])("a-typography-title"),i=Object(o["resolveComponent"])("a-card");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{class:"text-center"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{level:1},{default:Object(o["withCtx"])((function(){return[V]})),_:1}),Object(o["createVNode"])(u,{level:2},{default:Object(o["withCtx"])((function(){return[_]})),_:1})]})),_:1})}var B=Object(o["defineComponent"])({name:"Home"});const P=m()(B,[["render",H]]);var A=P,E=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],T=Object(f["createRouter"])({history:Object(f["createWebHistory"])("/"),routes:E}),S=T,L=n("5880"),M=Object(L["createStore"])({state:{},mutations:{},actions:{},modules:{}}),R=(n("8e1f"),n("b972"),Object(o["createApp"])(x));R.use(M).use(S).use(c.a).mount("#app")}});
//# sourceMappingURL=app-legacy.9eeb5833.js.map