!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),o("iE7OH").register(JSON.parse('{"eMUNn":"shoping-list.4c3c39e4.js","eowje":"save-the-children.164cf59f.png","k2QCw":"project-hope.ac2f4725.png","3pzU3":"united24.eb8f4e7c.png","2ZqlM":"international-medical-corps.f83b1230.png","3xLZe":"medecins-sans-frontires.ce9fd46e.png","bq97V":"razom.9be8270a.png","itrRW":"action-against-hunger.21fd0d2d.png","fdDmm":"world-vision.aa02aa90.png","hYh3p":"sergiy-prytula.ffd42f47.png"}'));var i,l,a,c,s,u,d=document.querySelector(".js-scroll-up");function p(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(d.style.opacity="1",d.addEventListener("click",p)):d.style.opacity="0"},i=document.querySelector(".js-menu-container"),l=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),c=document.querySelector(".header-nav"),s=document.querySelector(".user-wrap.authorized"),u=function(){var e="true"===l.getAttribute("aria-expanded")||!1;l.setAttribute("aria-expanded",!e),i.classList.toggle("is-open"),l.classList.toggle("is-open"),a.classList.toggle("is-open"),c.classList.toggle("mobile"),s.classList.toggle("mobile")},l.addEventListener("click",u),a.addEventListener("click",u),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(i.classList.remove("is-open"),l.classList.remove("is-open"),a.classList.remove("is-open"),c.classList.remove("mobile"),s.classList.remove("mobile"),l.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var g=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:o("aNJCr").getBundleURL("eMUNn")+o("iE7OH").resolve("eowje")},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:o("aNJCr").getBundleURL("eMUNn")+o("iE7OH").resolve("k2QCw")},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:o("aNJCr").getBundleURL("eMUNn")+o("iE7OH").resolve("3pzU3")},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:o("aNJCr").getBundleURL("eMUNn")+o("iE7OH").resolve("2ZqlM")},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:o("aNJCr").getBundleURL("eMUNn")+o("iE7OH").resolve("3xLZe")},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:o("aNJCr").getBundleURL("eMUNn")+o("iE7OH").resolve("bq97V")},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:o("aNJCr").getBundleURL("eMUNn")+o("iE7OH").resolve("itrRW")},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:o("aNJCr").getBundleURL("eMUNn")+o("iE7OH").resolve("fdDmm")},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:o("aNJCr").getBundleURL("eMUNn")+o("iE7OH").resolve("hYh3p")}],m=document.querySelector(".support-wrapper"),f=document.querySelector(".support-btn"),h=0;m.insertAdjacentHTML("beforeend",g.map((function(e,t){var n=e.title,r=e.url,o=e.img;return'<div class="support-item">\n            <p class="support-number">'.concat((t+1).toString().padStart(2,0),'</p>\n            <a class="support-link" href="').concat(r,'">\n              <img src="').concat(o,'" alt="').concat(n,'" />\n            </a>\n        </div>')})).join("")),f.addEventListener("click",(function(){var e=document.querySelectorAll(".support-item");(h+=4)>=e.length&&(h=0);m.style.transform="translateY(-".concat(11.2*h,"%)")}))}();
//# sourceMappingURL=shoping-list.4c3c39e4.js.map
