!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},r.parcelRequired7c6=i),i.register("iE7OH",(function(e,r){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,r){var n;t(e.exports,"getBundleURL",(function(){return n}),(function(t){return n=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.5fc0909f.js","eowje":"save-the-children.164cf59f.png","k2QCw":"project-hope.ac2f4725.png","3pzU3":"united24.eb8f4e7c.png","2ZqlM":"international-medical-corps.f83b1230.png","3xLZe":"medecins-sans-frontires.ce9fd46e.png","bq97V":"razom.9be8270a.png","itrRW":"action-against-hunger.21fd0d2d.png","fdDmm":"world-vision.aa02aa90.png","hYh3p":"sergiy-prytula.ffd42f47.png"}'));var a=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("eowje")},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("k2QCw")},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("3pzU3")},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("2ZqlM")},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("3xLZe")},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("bq97V")},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("itrRW")},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("fdDmm")},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("hYh3p")}],c=document.querySelector(".support-wrapper"),u=document.querySelector(".support-btn"),s=0;c.insertAdjacentHTML("beforeend",a.map((function(t,e){var r=t.title,n=t.url,o=t.img;return'<div class="support-item">\n            <p class="support-number">'.concat((e+1).toString().padStart(2,0),'</p>\n            <a class="support-link" href="').concat(n,'">\n              <img src="').concat(o,'" alt="').concat(r,'" />\n            </a>\n        </div>')})).join("")),u.addEventListener("click",(function(){var t=document.querySelectorAll(".support-item");(s+=4)>=t.length&&(s=0);c.style.transform="translateY(-".concat(11.2*s,"%)")}));var l={};function h(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)}))}};var f={},p=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",g={};function v(){}function m(){}function y(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(j([])));E&&E!==r&&n.call(E,i)&&(w=E);var x=y.prototype=v.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function H(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(H,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return m.prototype=y,u(x,"constructor",y),u(y,"constructor",m),m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(f);try{regeneratorRuntime=p}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=p:Function("r","regeneratorRuntime = r")(p)}var d=document.querySelector(".bestsellers");function g(){return(g=e(l)(e(f).mark((function t(){var r;return e(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://books-backend.p.goit.global/books/top-books");case 2:if((r=t.sent).ok){t.next=5;break}throw new Error(console.log("Oops, there is no country with that name"));case 5:return t.next=7,r.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return g.apply(this,arguments)})().then((function(t){d.insertAdjacentHTML("beforeend",function(t){return t.map((function(t){var e=t.list_name,r=t.books;return'<div class="bestsellers-card">\n            <h2 class="bestsellers-title-book">'.concat(e,'</h2>\n            <ul class="bestsellers-list">\n            ').concat(r.map((function(t){var e=t.book_image,r=t.title,n=t.author;t.book_image_width,t.book_image_height;return' <li class="bestsellers-card-item">\n                                <a href="" class="bestsellers-link project-transit">\n                                \x3c!-- box-menu --\x3e\n                                <div class="box">\n                                    <p class = "overlay">Quick View</p>  \n                                    <img class="gallery__image" src="'.concat(e,'" >\n                                    </div>\n                                 \x3c!-- box-menu --\x3e\n                                 <div class="text-box">\n                                  <h3 class="book-name">').concat(r,'</h3>\n                                \n                                  <p class="author">').concat(n,"</p>\n                                  </div>\n                                   </a>\n                                 \n                         </li>")})).join(""),'\n                </ul>\n                <button class="bestsellers-btn" type="button" data-action="click">See more</button>\n            </div>')})).join("")}(t))})).catch((function(t){return console.log(t)}));var v=document.querySelector("body"),m=document.querySelector(".js-switch-theme"),y="dark-theme";m.addEventListener("click",(function(){if(v.classList.toggle("dark-theme"),"true"===localStorage.getItem(y))return void localStorage.removeItem(y);localStorage.setItem(y,!0)})),localStorage.getItem(y)&&(v.classList.add("dark-theme"),m.setAttribute("checked",!0))}();
//# sourceMappingURL=index.5fc0909f.js.map
