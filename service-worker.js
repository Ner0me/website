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
    "revision": "971d518ce1bdd789b6c68e7d45fd8991"
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
    "url": "assets/js/19.090f3e22.js",
    "revision": "6872aec57f149329132434b653d51fd8"
  },
  {
    "url": "assets/js/2.e8957698.js",
    "revision": "aee0fcd4254c5d2631d6860e2f0e008e"
  },
  {
    "url": "assets/js/20.c2475e81.js",
    "revision": "6ec5652f1dd3657c3dd6400573077a78"
  },
  {
    "url": "assets/js/3.95731423.js",
    "revision": "375c7e21265bfc1851d7f8cce7f6a410"
  },
  {
    "url": "assets/js/4.8935151b.js",
    "revision": "9226bde7d57188bae4fcef8fdec7793c"
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
    "url": "assets/js/app.9188e49c.js",
    "revision": "fa679509da6a8b66559807372d935634"
  },
  {
    "url": "fr/help/faq/index.html",
    "revision": "c2d917bc62f9282634c886521721b520"
  },
  {
    "url": "fr/help/guides/getting-started/index.html",
    "revision": "90966a40720ac09cad2fd0eddc63e920"
  },
  {
    "url": "fr/help/index.html",
    "revision": "a10b9a0e95d8e7fb6c8cad066ad170d2"
  },
  {
    "url": "fr/index.html",
    "revision": "4658636e2a768a2bc94eefd920d4209c"
  },
  {
    "url": "help/faq/index.html",
    "revision": "817661f0092aa2effd226a394c206383"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "834dda8aaa9de81535d464f575277e04"
  },
  {
    "url": "help/index.html",
    "revision": "c8c928388576ae2ebaec0eaeda4b1a82"
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
    "revision": "42ad35670f4647bd92804ea61479f8d5"
  },
  {
    "url": "it/help/faq/index.html",
    "revision": "82320916e89d54c6295811e6f3d71418"
  },
  {
    "url": "it/help/guides/getting-started/index.html",
    "revision": "3325503d3dcefa917a5c141abcb990c2"
  },
  {
    "url": "it/help/index.html",
    "revision": "3ba656cb52203505038d8769771c5ab5"
  },
  {
    "url": "it/index.html",
    "revision": "6dadfe9517e5069c2d7c7c68f6998efa"
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
