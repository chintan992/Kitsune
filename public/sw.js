if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const r=e=>s(e,n),f={module:{uri:n},exports:t,require:r};a[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"70c1ac8c574dad231e48872ec666993b"},{url:"/_next/static/chunks/119-9696391401a3936d.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/119-9696391401a3936d.js.map",revision:"2fdbad42e90c21e82a0ab26a033026bc"},{url:"/_next/static/chunks/2-eb5b5ca5b8c785ef.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/2-eb5b5ca5b8c785ef.js.map",revision:"5674f53c31c4fb6014388516f267dba4"},{url:"/_next/static/chunks/220-174178a8d537be02.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/220-174178a8d537be02.js.map",revision:"40f5936e8851576576c7c7c5c0e204dd"},{url:"/_next/static/chunks/291-14fbc8346b760f67.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/291-14fbc8346b760f67.js.map",revision:"127dc779b800c12b8282f692ba084487"},{url:"/_next/static/chunks/33-d1c6a7660a145e22.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/33-d1c6a7660a145e22.js.map",revision:"abf0d589aa8bda052f52afad4d86dd50"},{url:"/_next/static/chunks/333-0dd5a8df4368a4cb.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/333-0dd5a8df4368a4cb.js.map",revision:"6e0e8b3a68bbeb845d681f856208a945"},{url:"/_next/static/chunks/369.02e3e02e5816cb42.js",revision:"02e3e02e5816cb42"},{url:"/_next/static/chunks/369.02e3e02e5816cb42.js.map",revision:"5be067729f083fafe5cf12f305289db1"},{url:"/_next/static/chunks/382-c195a3b47f64961b.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/382-c195a3b47f64961b.js.map",revision:"668230f1d8ba70cfa2a6f0a341c4d04b"},{url:"/_next/static/chunks/405.8e31f79040c14009.js",revision:"8e31f79040c14009"},{url:"/_next/static/chunks/405.8e31f79040c14009.js.map",revision:"d8b078013ad60d2b754b3d2b4dac8a7c"},{url:"/_next/static/chunks/416.f1a9f58959ca5fee.js",revision:"f1a9f58959ca5fee"},{url:"/_next/static/chunks/416.f1a9f58959ca5fee.js.map",revision:"f20dc09dbe81179bc910af9ed118cf7c"},{url:"/_next/static/chunks/517-bd26e49318ef2177.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/517-bd26e49318ef2177.js.map",revision:"5987e186bcc48a22c6a723a6008f17ae"},{url:"/_next/static/chunks/533-7c9cd5b5443033aa.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/533-7c9cd5b5443033aa.js.map",revision:"1e604705848210cdee342d84a8d2db80"},{url:"/_next/static/chunks/562-914432399a749f5a.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/562-914432399a749f5a.js.map",revision:"1e622443a87c2bb44879d774597a21fc"},{url:"/_next/static/chunks/726-3aa28f8aba4943ef.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/726-3aa28f8aba4943ef.js.map",revision:"ef29de14731623ad229f08ffb1681ec0"},{url:"/_next/static/chunks/739.932f05634aadc23b.js",revision:"932f05634aadc23b"},{url:"/_next/static/chunks/739.932f05634aadc23b.js.map",revision:"bf2c6fc2888ec8b97fcc37ab708aa16c"},{url:"/_next/static/chunks/764-c6262373514e393f.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/764-c6262373514e393f.js.map",revision:"a34c00e44abf480374fd6f2b8e2b0ab2"},{url:"/_next/static/chunks/785-13f410f5210e58a5.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/785-13f410f5210e58a5.js.map",revision:"7606c3c131a00997ccaf0f3823a48d52"},{url:"/_next/static/chunks/878-0213c3c0c365f63b.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/878-0213c3c0c365f63b.js.map",revision:"d0a6094c957b98484d039fe52844a2d3"},{url:"/_next/static/chunks/897.af86e71a94cf95a8.js",revision:"af86e71a94cf95a8"},{url:"/_next/static/chunks/897.af86e71a94cf95a8.js.map",revision:"44271f9ac2477db19b915e54dc166c87"},{url:"/_next/static/chunks/9-3eb66855484c4586.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/9-3eb66855484c4586.js.map",revision:"1057b0ea3dc956a66a1c07dffbaa33be"},{url:"/_next/static/chunks/967-0434792d8d8c32fd.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/967-0434792d8d8c32fd.js.map",revision:"5dfee25f4724b7032f0fcfd3adc88380"},{url:"/_next/static/chunks/app/_not-found/page-ff3485fe4d84a9e7.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/_not-found/page-ff3485fe4d84a9e7.js.map",revision:"b3d0a985ec50f6b79e90242d12494d64"},{url:"/_next/static/chunks/app/anime/%5Bslug%5D/page-3765fc12e9434f28.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/anime/%5Bslug%5D/page-3765fc12e9434f28.js.map",revision:"de4f2754ad2f119ec0fb8251f7ddec19"},{url:"/_next/static/chunks/app/anime/watch/layout-129f09a49e35b587.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/anime/watch/layout-129f09a49e35b587.js.map",revision:"90c1e726609fa3c2a679a491feca1f75"},{url:"/_next/static/chunks/app/anime/watch/page-587ec9f01041f9dd.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/anime/watch/page-587ec9f01041f9dd.js.map",revision:"d2a4e68cf188418c3c42ad5e04c25a5b"},{url:"/_next/static/chunks/app/error-f6ddecaddf2ee808.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/error-f6ddecaddf2ee808.js.map",revision:"f35d5f24793d8ad3e97135cb34e122bf"},{url:"/_next/static/chunks/app/global-error-73c341b17c6715fd.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/global-error-73c341b17c6715fd.js.map",revision:"988d1073e434e46effdac7fe350f64b1"},{url:"/_next/static/chunks/app/layout-bd66954e2f289d27.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/layout-bd66954e2f289d27.js.map",revision:"e076ea4b332f489891648d55ad143487"},{url:"/_next/static/chunks/app/loading-45c6bc8b642af97e.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/loading-45c6bc8b642af97e.js.map",revision:"6d128d49c44b5059f8651a06c8bb7d54"},{url:"/_next/static/chunks/app/page-056839c5ac608f1c.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/page-056839c5ac608f1c.js.map",revision:"9f1cde0f76c424e725fd2d251cef890f"},{url:"/_next/static/chunks/app/search/page-203fecae2b233eeb.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/app/search/page-203fecae2b233eeb.js.map",revision:"fd06ff311d495ce3d968a2354c294106"},{url:"/_next/static/chunks/main-aa716c6135f16fae.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/main-app-bb4448aba38b63e6.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/main-app-bb4448aba38b63e6.js.map",revision:"671154fc0f3f9ef43754d40c4bdce7f4"},{url:"/_next/static/chunks/pages/_app-a293d4d82d733f23.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/pages/_app-a293d4d82d733f23.js.map",revision:"9403408f06c03b1dfc9c02f024447a79"},{url:"/_next/static/chunks/pages/_error-e37c92bd0de04b6f.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/pages/_error-e37c92bd0de04b6f.js.map",revision:"fc0ffafbeca0c61b1fc37d3b0da03ec2"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-73fa0b4c8f687b93.js",revision:"rKjNEwlVmXOikQpDJ_kSX"},{url:"/_next/static/chunks/webpack-73fa0b4c8f687b93.js.map",revision:"b6c3075f75f7fd700e690c8b7668c8cc"},{url:"/_next/static/css/3eee55511af91d97.css",revision:"3eee55511af91d97"},{url:"/_next/static/css/3eee55511af91d97.css.map",revision:"9193f5256e3039b8fa9d51138ade276d"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/_next/static/media/error.a893477b.gif",revision:"c6ee19d8a999e730174659f53b8a6362"},{url:"/_next/static/media/ff5f2bfa9f5e9f73-s.p.ttf",revision:"26d04666c283b77dca840f6c52ab81a3"},{url:"/_next/static/media/genkai.5a287965.gif",revision:"2988df7c3fc6ac8bd8403bf041f08405"},{url:"/_next/static/rKjNEwlVmXOikQpDJ_kSX/_buildManifest.js",revision:"6f5fb9a1319e20fc77ab8d7940d950bf"},{url:"/_next/static/rKjNEwlVmXOikQpDJ_kSX/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon-192x192.png",revision:"c499877ad8aaf2113b6092420d3cda6a"},{url:"/icon-256x256.png",revision:"4f7ee5634768717473258c9223248a09"},{url:"/icon-384x384.png",revision:"aca61b63dbf5139ca1eb5819142cee5a"},{url:"/icon-512x512.png",revision:"60e7c7e3033ebc42852db77930f98089"},{url:"/icon.png",revision:"ae55038c109136f74927c8ec0056cc7b"},{url:"/loader.gif",revision:"072709b3a6aff27a3b328b0d1a43dcb0"},{url:"/manifest.json",revision:"96ac18979432db425438bc44fb283bba"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
