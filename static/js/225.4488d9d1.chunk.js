/*! For license information please see 225.4488d9d1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[225],{520:function(t,r,e){e.r(r),e.d(r,{default:function(){return y}});var n=e(885),o=e(689),i=e(791),a=e.p+"static/media/defaultActorImage.202f550d3617883f5a78.png",c="CastItem_castItem__fW-Sh",u="CastItem_castDescription__dvRQz",s="CastItem_castName__VXgo9",f="CastItem_castImg__6fxLg",h=e(184),l=function(t){var r=t.name,e=t.profile,n=t.character;return(0,h.jsxs)("li",{className:c,children:[e?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:"actor",width:120,className:f}):(0,h.jsx)("img",{src:a,alt:"actor",width:120,className:f}),(0,h.jsxs)("div",{className:u,children:[(0,h.jsxs)("p",{className:s,children:["Name: ",r," "]}),(0,h.jsxs)("p",{children:["Character: ",n]})]})]})},p="CastList_cast__zZp6c",d="CastList_sorry__ZW-76",v=function(t){var r=t.credits;return(0,h.jsx)("ul",{className:p,children:r.length>0?r.map((function(t){var r=t.id,e=t.name,n=t.profile_path,o=t.character;return(0,h.jsx)(l,{id:r,name:e,profile:n,character:o},r)})):(0,h.jsx)("p",{className:d,children:"Sorry, something went wrong."})})},m=e(502);function y(){var t=(0,o.UO)(),r=Number(t.movieId),e=(0,i.useState)([]),a=(0,n.Z)(e,2),c=a[0],u=a[1],s=(0,i.useState)(null),f=(0,n.Z)(s,2),l=f[0],p=f[1];return(0,i.useEffect)((function(){m.kP(r).then((function(t){return u(t.cast)})).catch((function(t){return p(t)}))}),[r]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{credits:c}),l&&(0,h.jsxs)("h2",{children:["Sorry, something went wrong: ",l.message]})]})}},502:function(t,r,e){e.d(r,{JS:function(){return s},Jh:function(){return l},ef:function(){return f},kP:function(){return h},v9:function(){return p}});var n=e(165),o=e(861),i="https://api.themoviedb.org/3",a="api_key=221ed015def0321f18a85f3fc7b4d6fa";function c(){return u.apply(this,arguments)}function u(){return u=(0,o.Z)((0,n.Z)().mark((function t(){var r,e,o,i=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:"",e=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,fetch(r,e);case 4:if(!(o=t.sent).ok){t.next=11;break}return t.next=8,o.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("404 Page not found :("));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function s(t){return c("".concat(i,"/trending/movie/day?").concat(a,"&page=").concat(t))}function f(t){return c("".concat(i,"/movie/").concat(t,"?").concat(a))}function h(t){return c("".concat(i,"/movie/").concat(t,"/credits?").concat(a))}function l(t){return c("".concat(i,"/movie/").concat(t,"/reviews?").concat(a))}function p(t,r){return c("".concat(i,"/search/movie?").concat(a,"&language=en-US&query=").concat(t,"&page=").concat(r,"&include_adult=false"))}},861:function(t,r,e){function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(2);function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(S){s=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=h(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var l={};function p(){}function d(){}function v(){}var m={};s(m,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==r&&e.call(g,a)&&(m=g);var w=v.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,n.Z)(l)&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function b(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=v,s(w,"constructor",v),s(v,"constructor",d),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(_.prototype),s(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}}}]);
//# sourceMappingURL=225.4488d9d1.chunk.js.map