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
    "revision": "d97e8fe46068e46d583bcc3cf4c387b7"
  },
  {
    "url": "assets/css/0.styles.6b16b533.css",
    "revision": "6d3207045d6876cd17a9b644879d6b17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c7a179cd.js",
    "revision": "76c2e182f6b72396a66dfef1ec7c900c"
  },
  {
    "url": "assets/js/11.ba9aebb7.js",
    "revision": "2505fe546720cfb3f96cb2f3624d2167"
  },
  {
    "url": "assets/js/12.467da90b.js",
    "revision": "a2307c2b4a0d4ba234bad5bb8c4d85c6"
  },
  {
    "url": "assets/js/13.7da355c2.js",
    "revision": "9834e135eb48df4169e7022c99e83c4e"
  },
  {
    "url": "assets/js/14.a3c3d6f0.js",
    "revision": "16afe7452358b14e1fc17811f046cfde"
  },
  {
    "url": "assets/js/15.8ae72691.js",
    "revision": "07845f0d01063770eb8e70d532e87303"
  },
  {
    "url": "assets/js/16.1ab214a4.js",
    "revision": "0ec36eaf860ceb94a09212b8d34720b9"
  },
  {
    "url": "assets/js/17.2d8c99c2.js",
    "revision": "9286c0e2af7057260da092f73762ef71"
  },
  {
    "url": "assets/js/18.28ac9912.js",
    "revision": "6e7d0d4274fffb18a1728b266b27e4db"
  },
  {
    "url": "assets/js/19.43d26e92.js",
    "revision": "41a79a638048bf7b6bda529bba9dbdc1"
  },
  {
    "url": "assets/js/2.e8957698.js",
    "revision": "aee0fcd4254c5d2631d6860e2f0e008e"
  },
  {
    "url": "assets/js/20.f207aa7c.js",
    "revision": "4d091c9483bb5200150268002c465727"
  },
  {
    "url": "assets/js/21.0f186c22.js",
    "revision": "8c724a02d8050562796c17e956950090"
  },
  {
    "url": "assets/js/22.a25e7d26.js",
    "revision": "4cca855eb869dd80dc361dc8ac553c0a"
  },
  {
    "url": "assets/js/23.be0c57d3.js",
    "revision": "a3d03ffa7f6b43d2be32a0f63dcfb0f7"
  },
  {
    "url": "assets/js/24.7f5757da.js",
    "revision": "433eae57df9153984401c6a7b290fd08"
  },
  {
    "url": "assets/js/3.95731423.js",
    "revision": "375c7e21265bfc1851d7f8cce7f6a410"
  },
  {
    "url": "assets/js/4.bc3fd049.js",
    "revision": "1eb1d6b971cc0a13749b1ec6ae29c013"
  },
  {
    "url": "assets/js/5.1c3e379c.js",
    "revision": "b84e5f6f95637cf9988af721b7faaf65"
  },
  {
    "url": "assets/js/6.cce38dd6.js",
    "revision": "d4b1fbe076377dfb32c7f7ee4e56ab70"
  },
  {
    "url": "assets/js/7.d7b4027b.js",
    "revision": "ceef13b502253554745e222264f31961"
  },
  {
    "url": "assets/js/8.51b76508.js",
    "revision": "0b6f506bf6df7fea141c58750ac52097"
  },
  {
    "url": "assets/js/9.0a9ba8d8.js",
    "revision": "7d58913ec667099be4c52e62dc1a9822"
  },
  {
    "url": "assets/js/app.f15e2233.js",
    "revision": "2ae4ccb0088c6b05b9104b927b73e5e5"
  },
  {
    "url": "fr/help/faq/index.html",
    "revision": "cbd40ce6a5b662f6df8905b41d094385"
  },
  {
    "url": "fr/help/guides/getting-started/index.html",
    "revision": "7c7898ddc1cc90e74a393fe1843e5245"
  },
  {
    "url": "fr/help/index.html",
    "revision": "a5305c0043738f5c102c593b12b6d36e"
  },
  {
    "url": "fr/index.html",
    "revision": "2b85d1ec057ac13aef8a6e103fdebd4b"
  },
  {
    "url": "help/faq/index.html",
    "revision": "98763901cc4a0a568facce706d44a16f"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "3035031c2ac73943bd4dfc1847aceada"
  },
  {
    "url": "help/index.html",
    "revision": "141fcc4c1a2f7f118cc4def6c0a35739"
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
    "url": "icons/logo.png",
    "revision": "ee7b1e17796076ddade3958468ac80e7"
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
    "revision": "9e035c3c9446807dc07e637560e40b47"
  },
  {
    "url": "it/help/faq/index.html",
    "revision": "be948fa96b8827a32a36f7d147fd751b"
  },
  {
    "url": "it/help/guides/getting-started/index.html",
    "revision": "24070456a95ebed90b790cf2edddd568"
  },
  {
    "url": "it/help/index.html",
    "revision": "276a1e7a0917735e68903063e16785be"
  },
  {
    "url": "it/index.html",
    "revision": "5399110d86df4bd9f5b70fe7b31d6af3"
  },
  {
    "url": "nl/help/faq/index.html",
    "revision": "33cb68ed86ffed5095c3143b8121789e"
  },
  {
    "url": "nl/help/guides/getting-started/index.html",
    "revision": "84bff2af12a475e961ab60d5c5fadbf1"
  },
  {
    "url": "nl/help/index.html",
    "revision": "dbfc9ab30a1f6d5fced2f70832b42780"
  },
  {
    "url": "nl/index.html",
    "revision": "a6e71b44d4cf43087cad9521125831f7"
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
