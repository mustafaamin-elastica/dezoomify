!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){async function r(e){return console.error(e),new Response(e.toString(),{status:500})}addEventListener("fetch",e=>{const t=e.request;console.log(t.url);let n=async function(e){const t=new URL(e.url);let r=t.searchParams.get("url"),n=new Request(r,e);try{n.headers.set("Origin",new URL(r).origin)}catch(e){console.log("Invalid URL: "+r,e)}n.headers.set("Referer",r.toString());const o=t.searchParams.get("cookies");o&&n.headers.set("Cookie",o),console.log(`Making request to ${n.url} with headers ${JSON.stringify(Object.fromEntries(n.headers.entries()))}`);let s=await fetch(n),i=s.headers.get("Location");for(let e=0;e<3&&i;e++)s=await fetch(i,n),i=s.headers.get("Location");i&&(s.headers.set("X-Disabled-Location",i),s.headers.set("Location","")),s=new Response(s.body,s);const a=s.headers.get("Set-Cookie");return a&&s.headers.set("X-Set-Cookie",a),s.headers.delete("Set-Cookie"),s}(t).catch(r);e.respondWith(n)})}]);