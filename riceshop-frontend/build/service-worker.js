"use strict";var precacheConfig=[["/index.html","31d5cd73507a8ddd3a7c7940b361833b"],["/static/css/app.0eb778ea.css","9c3ff3941ad9a7d95c1f238f9ebedb60"],["/static/js/0.6acdd9ce.chunk.js","af15bfada6979e057a0f281d290bd8f4"],["/static/js/1.cd6b24f1.chunk.js","237d582f7e8f6ca4e0fa7e832f538a97"],["/static/js/10.e74c7fb5.chunk.js","b31e57b939196e2661e1a0f61545d409"],["/static/js/11.cc23e597.chunk.js","830c1aad4ec397f0515f7d9f7d42d480"],["/static/js/12.6012fb41.chunk.js","cbcdd00ae8e5a9b4df114056069c4856"],["/static/js/13.6df0b03b.chunk.js","d003b2b8ce0385d093aef6c2d9803260"],["/static/js/14.a28725ba.chunk.js","aea384d1238c59a45dbf5af7b15ce749"],["/static/js/15.209eb931.chunk.js","cd610790deaf59805af744aac1f0036c"],["/static/js/16.6ec7709a.chunk.js","2a57e71eef4090ad192bb86274404d16"],["/static/js/17.c1d16c6f.chunk.js","26ebd7cdccc040fbce083753cf86371b"],["/static/js/18.4aa74182.chunk.js","f3c1eb4ada05d9704d1de578fe9810d9"],["/static/js/19.d1749419.chunk.js","867e5f027097b3617e5d857d99a5f072"],["/static/js/2.7f08e478.chunk.js","e693762fcf4aabd97c5d87e8df4c84f2"],["/static/js/20.53760f23.chunk.js","31647420868d5ed318d69afd4a715ce5"],["/static/js/21.60c97199.chunk.js","e197566d150c1179d4e42f710fa23376"],["/static/js/22.a0675f97.chunk.js","697cfc5768b9199a621475a29ce2a502"],["/static/js/23.3b1a2233.chunk.js","dae1d9b3606b62517385d379381d0efa"],["/static/js/3.90f29e70.chunk.js","bc2156943881ac67275789b74768bc3c"],["/static/js/4.c5bd9f0d.chunk.js","771d9f0b019771ae278ab530cf9d0cad"],["/static/js/5.839cb872.chunk.js","4e38d6a74ddf0e0e17cca41c243c8459"],["/static/js/6.3d102264.chunk.js","0c02ba21905d2befa430a97fa3beedb0"],["/static/js/7.037ddea8.chunk.js","890c7f3f541a754105dfb184fd07ddc1"],["/static/js/8.3f9e5746.chunk.js","fb0adaae308b7a29362a8b5a385daa29"],["/static/js/9.5afe8f54.chunk.js","99eca02ddd65e820d17a2152dda074df"],["/static/js/app.d8f5ce52.js","4c4b9e224d2c87d5453d351bf0bfaa5c"],["/static/js/vendor.e543ff77.js","fb5097ba692f18797ffac6e1812ff696"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});