(()=>{"use strict";var n={639:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),a=t.n(o),r=t(314),i=t.n(r)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap);"]),i.push([n.id,':root{\n    --primary-color:rgb(253, 164, 3);\n    --secondary-color:rgb(232, 117, 26);\n    --tertiary-color:rgb(137, 129, 33);\n    --forth-color:rgb(229, 194, 135);\n    font-family: "Noto Sans", sans-serif;\n}\n\nbody{\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    background-color: var(--primary-color);\n}\n\nheader{\n    margin: 0;\n    padding: 0;\n    background-color: var(--secondary-color);\n    height: 100px;\n    display: flex;\n    align-items: center;\n}\n\np{\n    margin: 0;\n}\n\n.companyName{\n    font-size: 2.5rem;\n    margin-left: 75px;\n    font-weight: 600;\n}\n\nnav{\n    position: absolute;\n    left: 40%;\n    display: flex;\n    gap: 50px;\n}\n\nnav button{\n    cursor: pointer;\n    width: 100px;\n    height: 50px;\n    background-color: var(--tertiary-color);\n    font-size: 1.2rem;\n    color: white;\n    border-radius: 15px;\n    /* border: 2px white solid; */\n}\n\n.homeTab{\n    padding: 50px 0px 0px 75px;\n    display: flex;\n    justify-content: center;\n    gap: 45px;\n}\n\n.homeTab > div:nth-child(1){\n    width: max(40%,200px);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.homeTab > div:nth-child(2){\n    flex: 1;\n}\n\n.homeTab > div:nth-child(2) img{\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.homeTab > div:nth-child(1) > div:nth-child(1) h1{\n    font-size: 3rem;\n    margin-bottom: 10px;\n}\n\n.homeTab > div:nth-child(1) > div:nth-child(1) p{\n    font-size: 3.5rem;\n}\n\n.homeTab > div:nth-child(1) > div:nth-child(2) p{\n    font-size: 1.5rem;\n    margin-bottom: 30px;\n}\n\n.reservation{\n    width: max(20%,50px);\n    height: 50px;\n    font-size: 1.3rem;\n    cursor: pointer;\n    background-color: var(--tertiary-color);\n    color: white;\n    border-radius: 10px;\n}\n\n/*css for menu tab*/\n\n.menuTab > ul{\n    /* list-style: none; */\n    margin: 0;\n    padding: 0;\n    padding-top: 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n\n.menuTab > ul > li{\n    width: 45%;\n    display: flex;\n    gap: 25px;\n    border: 3px black solid;\n    border-radius: 10px;\n    padding: 20px;\n    cursor: pointer;\n}\n\n.menuTab > ul > li h2{\n    font-size: 2.5rem;\n    margin: 0;\n}\n\n.menuTab > ul > li p{\n    font-size: 1.3rem;\n    margin: 0;\n}\n\n.dishImg{\n    align-self: flex-end;\n}\n\n.dishImg > img{\n    width: 200px;\n    height: 175px;\n}\n\n\n/*css for contact */\n\n.contactTab{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 80vh;\n}\n\n.contactTab ul{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    list-style: none;\n    border: 2px black solid;\n    border-radius: 10px;\n    gap: 20px;\n    padding-top: 20px;\n}\n\n.contactTab ul li:not(.contactImgs){\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.contactTab h2,p{\n    margin: 0;\n}\n\n.contactTab h2{\n    font-size: 2rem;\n}\n\n.contactTab p{\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n.contactImgs{\n    display: flex;\n    margin-top: 15px;\n    margin-bottom:  10px;\n    padding-bottom: 10px;\n}\n\n.contactTab img{\n    width: 75px;\n    height: 75px;\n    cursor: pointer;\n}\n\n\n\n\n',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&i[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],p=r[l]||0,d="".concat(l," ").concat(p);r[l]=p+1;var u=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=a(m,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=o(n,a),l=0;l<r.length;l++){var p=t(r[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),a=t.n(o),r=t(659),i=t.n(r),c=t(56),s=t.n(c),l=t(540),p=t.n(l),d=t(113),u=t.n(d),m=t(639),h={};function f(n="",e=""){const t=document.createElement("p");return t.textContent=`${n}`,""!==e&&(t.className=`${e}`),t}function g(n="",e=""){const t=document.createElement("h2");return t.textContent=`${n}`,""!==e&&(t.className=`${e}`),t}function v(n,e,t,o){const a=document.createElement("div");a.className="dish";const r=document.createElement("li"),i=f(t),c=g(e);a.append(c,i);const s=document.createElement("div");s.className="dishImg";const l=function(n){const e=new Image;return e.src=n,e}(o);s.append(l),r.append(a,s),n.append(r)}function b(n,e,t){const o=document.createElement("li"),a=g(`${e}`),r=f(`${t}`);o.append(a,r),n.append(o)}h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),e()(m.A,h),m.A&&m.A.locals&&m.A.locals,t.p;const x=document.querySelector("#content"),y=document.querySelector(".homeButton"),w=document.querySelector(".menuButton"),T=document.querySelector(".aboutButton"),E=function(){const n=document.createElement("div"),e=document.createElement("div");e.innerHTML='\n    <div>\n    <h1 class="name">Restaurant Name</h1>\n    <p>Savor the authentic tastes of India, crafted with love and served with a side of warmth and hospitality.</p>\n    </div>\n    <div>\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eligendi labore quod quam laboriosam vero cupiditate .</p>\n    <button class="reservation">Reservation</button>\n    </div>';const t=document.createElement("div"),o=new Image;return o.src="https://statics.vinpearl.com/Indian-Restaurants-In-Phu-Quoc-01_1702657085.jpg",t.append(o),n.append(e,t),n}(),I=function(){const n=document.createElement("div"),e=document.createElement("ul");return n.append(e),v(e,"Dal Makhani","Dal makhani is a popular North Indian dish made with black lentils, lots of butter, cream and it is mildly spiced. It is one of the popular lentil dishes that you'll find in any North Indian restaurant or dhaba (roadside stalls).","https://images1.livehindustan.com/uploadimage/library/2020/07/01/16_9/16_9_1/punjabi_dhaba_style_dal_makhani_1593592001.jpg"),v(e,"Panner butter masala","Perhaps one of the premium north Indian or Punjabi curries if not the king of the paneer curries. \n    It is known for its mildly sweet and spicy taste with the goodness of fresh cream and butter topping with moist paneer.","https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg"),v(e,"Butter roti","Tandoori roti are unleavened whole wheat flat breads. Traditionally these are made in a tandoor, which is a pot-shaped clay oven and not on a skillet or flat pan.","https://spicesnflavors.com/wp-content/uploads/2020/06/tandoori-roti-2-1-300x300.jpg"),v(e,"Vegetable raita","Vegetable Raita is one of the most common accompaniments that is often served with Indian meals. It is primarily a thick and creamy curd-based sauce which complements our meals in flavor, texture and also adds more nutrition to it.","https://1.bp.blogspot.com/-hkoOpfsbQbA/XaW6J0SisdI/AAAAAAAABrw/vOwpuV8z0hs3aozEZOBaFmBDs0DsZLePwCLcBGAsYHQ/s1600/Mix%2BVeg%2BRaita%2BRecipe.jpg"),n}(),k=function(){const n=document.createElement("div"),e=document.createElement("ul");b(e,"Phone Number","+91-9847257314"),b(e,"E-mail","pajeetSwadishKhana@gmail.com"),b(e,"Google map","https://maps.app.goo.gl/yVAkMvW1YLRbyJxCA");const t=document.createElement("li");return t.className="contactImgs",function(n,e){for(let t=0;t<e.length;t++){const o=new Image;o.src=`${e[t]}`,n.append(o)}}(t,["https://www.svgrepo.com/show/452229/instagram-1.svg","https://www.svgrepo.com/show/303113/facebook-icon-logo.svg","https://www.svgrepo.com/show/448234/linkedin.svg","https://www.svgrepo.com/show/349391/google-maps-old.svg","https://www.svgrepo.com/show/475689/twitter-color.svg"]),e.append(t),n.append(e),n}();let A=1;E.className="homeTab",x.append(E),y.addEventListener("click",(()=>{1!=A&&(x.textContent="",E.className="homeTab",x.append(E),A=1)})),w.addEventListener("click",(()=>{2!=A&&(x.textContent="",I.className="menuTab",x.append(I),A=2)})),T.addEventListener("click",(()=>{3!=A&&(x.textContent="",k.className="contactTab",x.append(k),A=3)}))})()})();