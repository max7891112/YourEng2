parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ol5M":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n(r.key),r)}}function r(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(t){var o=i(t,"string");return"symbol"===e(o)?o:String(o)}function i(t,o){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,o||"default");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var c=function(){function e(){t(this,e)}return r(e,[{key:"addEventListennerFilter",value:function(){for(var e=document.querySelectorAll(".course-list__item-solo-header"),t=document.querySelectorAll(".course-list__items-checkbox"),o=document.querySelectorAll(".course-list__img"),r=function(r){e[r].addEventListener("click",function(){t[r].classList.toggle("animation-left-block"),o[r].classList.toggle("animation-rotate")})},n=0;n<e.length;n++)r(n)}},{key:"addEventListenner",value:function(){for(var e=[document.querySelector(".choose-course__choose-method"),document.querySelector(".choose-course__list-methods"),document.querySelector(".choose-course__list-img")],t=document.querySelector(".sort-menu"),o=document.querySelector(".choose-course__list-img"),r=0,n=e;r<n.length;r++){n[r].addEventListener("click",function(){o.classList.toggle("animation-rotate"),t.classList.toggle("super-animation")})}}}]),e}(),u=new c;u.addEventListennerFilter(),u.addEventListenner();var l=new c;exports.default=l;
},{}]},{},["ol5M"], null)