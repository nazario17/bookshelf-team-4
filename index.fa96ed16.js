function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n),n.register("kyEFX",(function(t,o){var r,n;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("kyEFX").register(JSON.parse('{"5ZPII":"index.fa96ed16.js","ktvVD":"save-the-children.164cf59f.png","6WPez":"project-hope.ac2f4725.png","iseSk":"united24.eb8f4e7c.png","1RFEd":"international-medical-corps.f83b1230.png","lwHwo":"medecins-sans-frontires.ce9fd46e.png","5qiK4":"razom.9be8270a.png","8kDgw":"action-against-hunger.21fd0d2d.png","6gslC":"world-vision.aa02aa90.png","hVrDK":"sergiy-prytula.ffd42f47.png"}'));const i=document.querySelector(".js-scroll-up");function s(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(i.style.opacity="1",i.addEventListener("click",s)):i.style.opacity="0"},(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=document.querySelector(".header-nav"),n=document.querySelector(".user-wrap.authorized"),i=()=>{const i="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open"),t.classList.toggle("is-open"),o.classList.toggle("is-open"),r.classList.toggle("mobile"),n.classList.toggle("mobile")};t.addEventListener("click",i),o.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(i=>{i.matches&&(e.classList.remove("is-open"),t.classList.remove("is-open"),o.classList.remove("is-open"),r.classList.remove("mobile"),n.classList.remove("mobile"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();const l=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(n("kyEFX").resolve("ktvVD"),import.meta.url).toString()},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(n("kyEFX").resolve("6WPez"),import.meta.url).toString()},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(n("kyEFX").resolve("iseSk"),import.meta.url).toString()},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(n("kyEFX").resolve("1RFEd"),import.meta.url).toString()},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL(n("kyEFX").resolve("lwHwo"),import.meta.url).toString()},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(n("kyEFX").resolve("5qiK4"),import.meta.url).toString()},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(n("kyEFX").resolve("8kDgw"),import.meta.url).toString()},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(n("kyEFX").resolve("6gslC"),import.meta.url).toString()},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(n("kyEFX").resolve("hVrDK"),import.meta.url).toString()}],a=document.querySelector(".support-wrapper"),c=document.querySelector(".support-btn");let u=0;a.insertAdjacentHTML("beforeend",l.map((({title:e,url:t,img:o},r)=>`<div class="support-item">\n            <p class="support-number">${(r+1).toString().padStart(2,0)}</p>\n            <a class="support-link" href="${t}">\n              <img src="${o}" alt="${e}" />\n            </a>\n        </div>`)).join("")),c.addEventListener("click",(function(){const e=document.querySelectorAll(".support-item");u+=4,u>=e.length&&(u=0);a.style.transform=`translateY(-${11.2*u}%)`}));const d=document.querySelector(".bestsellers");(async function(){const e=await fetch("https://books-backend.p.goit.global/books/top-books");if(!e.ok)throw new Error(console.log("Oops, there is no country with that name"));return await e.json()})().then((e=>{d.insertAdjacentHTML("beforeend",function(e){return e.map((({list_name:e,books:t})=>`<div class="bestsellers-card">\n            <h2 class="bestsellers-title-book">${e}</h2>\n            <ul class="bestsellers-list">\n            ${t.map((({book_image:e,title:t,author:o,book_image_width:r,book_image_height:n})=>` <li class="bestsellers-card-item">\n                                <a href="" class="bestsellers-link project-transit">\n                                \x3c!-- box-menu --\x3e\n                                <div class="box">\n                                    <p class = "overlay">Quick View</p>  \n                                    <img class="gallery__image" src="${e}" >\n                                    </div>\n                                 \x3c!-- box-menu --\x3e\n                                 <div class="text-box">\n                                  <h3 class="book-name">${t}</h3>\n                                \n                                  <p class="author">${o}</p>\n                                  </div>\n                                   </a>\n                                 \n                         </li>`)).join("")}\n                </ul>\n                <button class="bestsellers-btn" type="button" data-action="click">See more</button>\n            </div>`)).join("")}(e))})).catch((e=>console.log(e)));const m=document.querySelector("body"),p=document.querySelector(".js-switch-theme");p.addEventListener("click",(function(){if(m.classList.toggle("dark-theme"),"true"===localStorage.getItem("dark-theme"))return void localStorage.removeItem("dark-theme");localStorage.setItem("dark-theme",!0)})),localStorage.getItem("dark-theme")&&(m.classList.add("dark-theme"),p.setAttribute("checked",!0));
//# sourceMappingURL=index.fa96ed16.js.map
