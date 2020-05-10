/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d0784f5578a464f863e6fcc72ef23cb"
  },
  {
    "url": "assets/css/0.styles.4016d96a.css",
    "revision": "fa469ce64a83dc4ec9331884d085bfb8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d304ef69.js",
    "revision": "104c080aafb36cb04bdc6e112df98984"
  },
  {
    "url": "assets/js/11.87143ed4.js",
    "revision": "8b36a38b574c7186af8a5ba11c10bbb4"
  },
  {
    "url": "assets/js/12.d6d0d35b.js",
    "revision": "38c34ac6e342a729a2bd4dcca26fd0f0"
  },
  {
    "url": "assets/js/13.63d876b3.js",
    "revision": "889150a56648b692d621382cdbdbc9d2"
  },
  {
    "url": "assets/js/14.c35ffcc8.js",
    "revision": "c13776da71914ace3f821d221cb45b11"
  },
  {
    "url": "assets/js/15.4a31f8cf.js",
    "revision": "48ebc817ab3ba72f47cc0c8342b337b3"
  },
  {
    "url": "assets/js/16.917b1b94.js",
    "revision": "124d6af307aed753aef396a5b57e9677"
  },
  {
    "url": "assets/js/17.1e984734.js",
    "revision": "1c466f85fa15e2e7dd98c6c7bfeb5bdf"
  },
  {
    "url": "assets/js/18.73a61b70.js",
    "revision": "7e62e54535d37954eccf53a74862311c"
  },
  {
    "url": "assets/js/19.5cb2b6b7.js",
    "revision": "093393a5405a5af9bece8c8f004891cc"
  },
  {
    "url": "assets/js/2.57e16f76.js",
    "revision": "4c65b8a0ffd49071b62cc93d12edb8c2"
  },
  {
    "url": "assets/js/20.3425a38c.js",
    "revision": "3c0c795aa4617559ad7e178834e71eb8"
  },
  {
    "url": "assets/js/21.ead94b1f.js",
    "revision": "8a0159c78d854ea0c4122aceb7b829ba"
  },
  {
    "url": "assets/js/22.0bd7181d.js",
    "revision": "f1ea3e6b9ebb215464a2bc2f5a022f56"
  },
  {
    "url": "assets/js/23.a8c70b2b.js",
    "revision": "f03f5d375e406ec427bbbd47d8681ff1"
  },
  {
    "url": "assets/js/24.0a567cd8.js",
    "revision": "b9d1af320524d6a2e413fc7601034b7b"
  },
  {
    "url": "assets/js/25.50f035bd.js",
    "revision": "9fd61825506a5962d4bdafbf4d5b2417"
  },
  {
    "url": "assets/js/3.d04390a2.js",
    "revision": "0523ef18a48c096b1c7a6629f1d17070"
  },
  {
    "url": "assets/js/4.c9285847.js",
    "revision": "976f96e98ae8dd93a615d46a706410c0"
  },
  {
    "url": "assets/js/5.f577c617.js",
    "revision": "d8a0c2f4aeb293eb88c89f8ad254a86a"
  },
  {
    "url": "assets/js/6.718dbe03.js",
    "revision": "4f38dc9575858c8fe8e0141287895a2b"
  },
  {
    "url": "assets/js/7.16dc5ef4.js",
    "revision": "6508bed81145067468c7c91f73c9e799"
  },
  {
    "url": "assets/js/8.778eff97.js",
    "revision": "1870bfc7dd13f62f01afe145d4a649d1"
  },
  {
    "url": "assets/js/9.014e5a0e.js",
    "revision": "d88c520e5c6e191efca05abb32e43e4a"
  },
  {
    "url": "assets/js/app.5d0653a1.js",
    "revision": "8596170535a585e28c8847b356281dbc"
  },
  {
    "url": "fr/help/faq/index.html",
    "revision": "cafdbf629398d3295f2844d713eb14cc"
  },
  {
    "url": "fr/help/guides/getting-started/index.html",
    "revision": "f85c2776a09a4dadfcc6fb954bcb8b17"
  },
  {
    "url": "fr/help/index.html",
    "revision": "ba77d8e1635a4ec105c128ba842d7f67"
  },
  {
    "url": "fr/index.html",
    "revision": "86cac6469f01153a756b4515029627e5"
  },
  {
    "url": "help/faq/index.html",
    "revision": "9948d72ba67ec6ee6165cc362dc3af93"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "9050623e3fe0b8d168cf05930c928694"
  },
  {
    "url": "help/index.html",
    "revision": "e2677ae3e226f9e7fa6255b6b5460ae2"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "c97e8a691df9abf97f4c668ecbda9768"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "c085c496019127c205aa7d0352e55313"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dea7d9c89fb1d9b6d7e08f4cc4d68f08"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4d9597730f63ad914bf0d15e0869e325"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "d56847c010ba76b4bb63e2ee48bc1df4"
  },
  {
    "url": "icons/logo-alt.png",
    "revision": "8e10c91f77baa73fca38cd7625b70742"
  },
  {
    "url": "icons/logo-alt.svg",
    "revision": "3c194ed627157351fb069caa66d2e592"
  },
  {
    "url": "icons/logo.png",
    "revision": "ee7b1e17796076ddade3958468ac80e7"
  },
  {
    "url": "icons/logo.svg",
    "revision": "db61fee2726ef37f62fe2a49e3b361f9"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "495484cfed365e313c750934d8882ea6"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "78dcd70d566ee7b0d9d9b6b659d425e4"
  },
  {
    "url": "index.html",
    "revision": "05bec417f86c0dfd18987ae52fa7edb4"
  },
  {
    "url": "it/help/faq/index.html",
    "revision": "766b15ab9d2d68b2da342b1c360690e1"
  },
  {
    "url": "it/help/guides/getting-started/index.html",
    "revision": "18513916c8c3a9c86603cd8950671383"
  },
  {
    "url": "it/help/index.html",
    "revision": "d3b39d00517bc06b3405524124f9e0ad"
  },
  {
    "url": "it/index.html",
    "revision": "63bdc63568be332f0b214b84a9b018f0"
  },
  {
    "url": "nl/help/faq/index.html",
    "revision": "a8320f042151a9f30427f2af74bf7c91"
  },
  {
    "url": "nl/help/guides/getting-started/index.html",
    "revision": "5e57099e4ceca0f0b9a60c80f0d0ea8b"
  },
  {
    "url": "nl/help/index.html",
    "revision": "fd857070f0daa0916165a39f915fde0b"
  },
  {
    "url": "nl/index.html",
    "revision": "2e16e0bf9a229051f8d7c7da1f8682c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
