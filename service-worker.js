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
    "revision": "1bb4fa8483c7db5d6289fb8e4a07d019"
  },
  {
    "url": "assets/css/0.styles.8d3d0b90.css",
    "revision": "3f8303cbf4c86f4204aa8c1d648e9278"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e3aeae2e.js",
    "revision": "80153aba03dd320638a5455c259a78c0"
  },
  {
    "url": "assets/js/11.20fafff6.js",
    "revision": "d266dd290fa90237a34b19aa143d3a8c"
  },
  {
    "url": "assets/js/12.2d2be461.js",
    "revision": "44f4cf837487ef12e070ea25c9f5158d"
  },
  {
    "url": "assets/js/13.59444823.js",
    "revision": "291d56f84f381d098a33d89ac0d5e195"
  },
  {
    "url": "assets/js/14.0ed80e03.js",
    "revision": "3af3827c41ad2c1d1a93c2b786af0ec6"
  },
  {
    "url": "assets/js/15.c12419fb.js",
    "revision": "e1621340c17306a6ef64621f9545a111"
  },
  {
    "url": "assets/js/16.9b04103d.js",
    "revision": "5a7a619e8df4bd470fed594192f9eb0b"
  },
  {
    "url": "assets/js/17.9bd3f8a0.js",
    "revision": "980124bcf788aafa8617fcf2fd9027fa"
  },
  {
    "url": "assets/js/18.4d532618.js",
    "revision": "2a5332d2339691aab855a2679978fe26"
  },
  {
    "url": "assets/js/19.ebf00301.js",
    "revision": "8134260d997681dfd268a50706cda2f1"
  },
  {
    "url": "assets/js/2.69437053.js",
    "revision": "5bb7c1eb7e856ce466b822dceac253ca"
  },
  {
    "url": "assets/js/20.0f6782b3.js",
    "revision": "6edd3b7a0800606fda1023589086063e"
  },
  {
    "url": "assets/js/21.f2868efa.js",
    "revision": "c1afe25732885f55985cfcb66cd5c716"
  },
  {
    "url": "assets/js/22.45dcc29f.js",
    "revision": "cd5f372d4ee34c6a636dfdc09f215113"
  },
  {
    "url": "assets/js/23.dcf4caaa.js",
    "revision": "10bd192339a0b003b601035d44e27ecc"
  },
  {
    "url": "assets/js/24.4358ddc7.js",
    "revision": "fb77bbf4ebdd2a503b69c832b7bfe9c0"
  },
  {
    "url": "assets/js/25.8112af71.js",
    "revision": "2f80550bf04bd3cdad22484f25438d9a"
  },
  {
    "url": "assets/js/3.c13baa4b.js",
    "revision": "62c857b9362938e13911f1d85eafccec"
  },
  {
    "url": "assets/js/4.cc0af660.js",
    "revision": "db602458cee02953b755d0787d7e2deb"
  },
  {
    "url": "assets/js/5.4a2ef5b4.js",
    "revision": "09fb81c843e7dbaa2be21c796c32d7d4"
  },
  {
    "url": "assets/js/6.444aa72a.js",
    "revision": "cdb0467517772acaa28745de5edf6834"
  },
  {
    "url": "assets/js/7.66301828.js",
    "revision": "fd8e416652013a4055612067f79e7b9f"
  },
  {
    "url": "assets/js/8.dfdc81a4.js",
    "revision": "a5bf31b016fbba7ec8c16c0b50063633"
  },
  {
    "url": "assets/js/9.f7038d8f.js",
    "revision": "0fc114194d9fdc195509a0b0f43dac33"
  },
  {
    "url": "assets/js/app.88d13dee.js",
    "revision": "ddf4f18c4e9aff9620ce3681c3e1807d"
  },
  {
    "url": "fr/help/faq/index.html",
    "revision": "112b37dd9d3cd65419e5f69d3a35f31c"
  },
  {
    "url": "fr/help/guides/getting-started/index.html",
    "revision": "206a2ad0ad4edfc7a92d9a6e495ff6a6"
  },
  {
    "url": "fr/help/index.html",
    "revision": "dfba5231741865e9ab98bd26f70b0dc2"
  },
  {
    "url": "fr/index.html",
    "revision": "804d5d07323c05ad02d6e15de327c801"
  },
  {
    "url": "help/faq/index.html",
    "revision": "6e7a83eb39cade08ca5f63453c28abe6"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "4c5976f5f8a4587828a56440d241ef9d"
  },
  {
    "url": "help/index.html",
    "revision": "c229efa820c94f8486eb4416a1f90e25"
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
    "revision": "3afd41a392a1b2a620be0c6387a2eda3"
  },
  {
    "url": "it/help/faq/index.html",
    "revision": "1f8760326e02f2e1fd680d2f636d65eb"
  },
  {
    "url": "it/help/guides/getting-started/index.html",
    "revision": "917a5d6dcb5853ebc73e489ab3231a97"
  },
  {
    "url": "it/help/index.html",
    "revision": "e95f0776ce2b3919c26746b1ae3c6dc7"
  },
  {
    "url": "it/index.html",
    "revision": "2b5b861ded8ed678a6a0b9eb6b6d0d61"
  },
  {
    "url": "nl/help/faq/index.html",
    "revision": "13ef22c0e0270d1b8e265516d8378fd2"
  },
  {
    "url": "nl/help/guides/getting-started/index.html",
    "revision": "0cd4befc73be7ff921876d8f43713c14"
  },
  {
    "url": "nl/help/index.html",
    "revision": "5e1e0e821556399556b8938aa9879ede"
  },
  {
    "url": "nl/index.html",
    "revision": "5d99a963249a47ea0dfca1f49f969045"
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
