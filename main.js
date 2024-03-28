(()=>{"use strict";var e={639:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(601),o=n.n(a),r=n(314),i=n.n(r)()(o());i.push([e.id,"body{\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\nheader{\n    margin: 0;\n    padding: 0;\n    background-color: orange;\n    height: 100px;\n    display: flex;\n}\n\np{\n    margin: 0;\n    align-self: center;\n}\n\nnav{\n    margin-left: auto;\n    margin-right: auto;\n    left: 45%;\n    align-self: center;\n}\n\n.homeTab{\n    padding: 50px 0px 0px 75px;\n    \n    display: flex;\n    justify-content: center;\n    gap: 45px;\n}\n\n.homeTab div:nth-child(1){\n    width: max(40%,200px);\n    display: flex;\n    flex-direction: column;\n}\n\n.homeTab div:nth-child(2){\n    flex: 1;\n}\n\n.homeTab div:nth-child(2) img{\n    max-width: 100%;\n    max-height: 100%;\n}\n",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],p=a.base?s[0]+a.base:s[0],l=r[p]||0,d="".concat(p," ").concat(l);r[p]=l+1;var u=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,a);a.byIndex=c,t.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var s=a(e,o),p=0;p<r.length;p++){var l=n(r[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),a=n(825),o=n.n(a),r=n(659),i=n.n(r),c=n(56),s=n.n(c),p=n(540),l=n.n(p),d=n(113),u=n.n(d),m=n(639),h={};function f(e="",t=""){const n=document.createElement("p");return n.textContent=`${e}`,""!==t&&(n.className=`${t}`),n}function v(e="",t=""){const n=document.createElement("h2");return n.textContent=`${e}`,""!==t&&(n.className=`${t}`),n}function g(e,t,n,a){const o=document.createElement("li"),r=f(n),i=v(t),c=function(e){const t=new Image;return t.src=e,t}(a);o.append(r,i,c),e.append(o)}function b(e,t,n){const a=document.createElement("li"),o=v(`${t}`),r=f(`${n}`);a.append(o,r),e.append(a)}h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals,n.p;const y=document.querySelector("#content"),w=document.querySelector(".homeButton"),x=document.querySelector(".menuButton"),k=document.querySelector(".aboutButton"),E=function(){const e=document.createElement("div"),t=document.createElement("div");t.innerHTML='\n    <h1 class="name">Restaurant Name</h1>\n    <h1>Savor the authentic tastes of India, crafted with love and served with a side of warmth and hospitality.</h1>\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eligendi labore quod quam laboriosam vero cupiditate .</p>\n    <button>Reservation</button>';const n=document.createElement("div"),a=new Image;return a.src="https://statics.vinpearl.com/Indian-Restaurants-In-Phu-Quoc-01_1702657085.jpg",n.append(a),e.append(t,n),e}(),A=function(){const e=document.createElement("div"),t=document.createElement("ul");return e.append(t),g(t,"Dal Makhani","Dal makhani is a popular North Indian dish made with black lentils, lots of butter, cream and it is mildly spiced. It is one of the popular lentil dishes that you'll find in any North Indian restaurant or dhaba (roadside stalls).","https://images1.livehindustan.com/uploadimage/library/2020/07/01/16_9/16_9_1/punjabi_dhaba_style_dal_makhani_1593592001.jpg"),g(t,"Panner butter masala","Perhaps one of the premium north Indian or Punjabi curries if not the king of the paneer curries. \n    It is known for its mildly sweet and spicy taste with the goodness of fresh cream and butter topping with moist paneer.","https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg"),g(t,"Butter roti","Tandoori roti are unleavened whole wheat flat breads. Traditionally these are made in a tandoor, which is a pot-shaped clay oven and not on a skillet or flat pan.","https://spicesnflavors.com/wp-content/uploads/2020/06/tandoori-roti-2-1-300x300.jpg"),g(t,"vegetable raita","Vegetable Raita is one of the most common accompaniments that is often served with Indian meals. It is primarily a thick and creamy curd-based sauce which complements our meals in flavor, texture and also adds more nutrition to it.","https://1.bp.blogspot.com/-hkoOpfsbQbA/XaW6J0SisdI/AAAAAAAABrw/vOwpuV8z0hs3aozEZOBaFmBDs0DsZLePwCLcBGAsYHQ/s1600/Mix%2BVeg%2BRaita%2BRecipe.jpg"),e}(),T=function(){const e=document.createElement("div"),t=document.createElement("ul");b(t,"Phone Number","+91-9847257314"),b(t,"E-mail","xyz@gmail.com"),b(t,"Google map","https://maps.app.goo.gl/yVAkMvW1YLRbyJxCA");const n=document.createElement("li");return function(e,t){for(let n=0;n<t.length;n++){const a=new Image;a.src=`${t[n]}`,e.append(a)}}(n,["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346","https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Linkedln-icon-voltrans.png/640px-Linkedln-icon-voltrans.png","https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/640px-Google_Maps_icon_%282020%29.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Web-icon-voltrans.png/640px-Web-icon-voltrans.png"]),t.append(n),e.append(t),e}();let _=1;E.className="homeTab",y.append(E),w.addEventListener("click",(()=>{1!=_&&(y.textContent="",E.className="homeTab",y.append(E),_=1)})),x.addEventListener("click",(()=>{2!=_&&(y.textContent="",A.className="menuTab",y.append(A),_=2)})),k.addEventListener("click",(()=>{3!=_&&(y.textContent="",T.className="contactTab",y.append(T),_=3)}))})()})();