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
    "revision": "a433e625d02b9f8b713c0a4272586d2c"
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
    "url": "assets/js/13.d93e3d63.js",
    "revision": "686b089dee4f1f0a0660c30fbbe95b7a"
  },
  {
    "url": "assets/js/14.2211e285.js",
    "revision": "d9ecadf98dde5c624342ab724045d538"
  },
  {
    "url": "assets/js/15.19ccb914.js",
    "revision": "8cf66047ea217600ac3db09ca6e8a42b"
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
    "url": "assets/js/22.ec5e64f1.js",
    "revision": "cd3e2cb2192f08f38be6dfa6c61e33c7"
  },
  {
    "url": "assets/js/23.8de9fe08.js",
    "revision": "57cb36c8969c0af8fa4707b6455f6c4e"
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
    "url": "assets/js/app.881d8f04.js",
    "revision": "82d5439f0d57d8d8ed178810385b362f"
  },
  {
    "url": "fr/help/faq/index.html",
    "revision": "e4c439e6f5cee30aca2421da69529afc"
  },
  {
    "url": "fr/help/guides/getting-started/index.html",
    "revision": "b28d80ce68a7ab9867321c89d483d380"
  },
  {
    "url": "fr/help/index.html",
    "revision": "4884c0c397bfe98f5b416b98d7781ce1"
  },
  {
    "url": "fr/index.html",
    "revision": "e0f8173966116ec7c1d3b91d1876a59d"
  },
  {
    "url": "help/faq/index.html",
    "revision": "ad0eb1714deb5387ec3b1f9880c0a057"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "58d5d648ec12f561cb6e8364f2aa694d"
  },
  {
    "url": "help/index.html",
    "revision": "5f00e4cbe5006a8b2acdc54213ce5711"
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
    "revision": "c98e7d313a7a09963cf20a09c5d6446f"
  },
  {
    "url": "it/help/faq/index.html",
    "revision": "65331bba777a18a004a859e4a3ccec11"
  },
  {
    "url": "it/help/guides/getting-started/index.html",
    "revision": "4c8650c2673a6cc1fb3f1b244306e853"
  },
  {
    "url": "it/help/index.html",
    "revision": "6d2bd4d811303f4b8c1f784876f7e931"
  },
  {
    "url": "it/index.html",
    "revision": "5e0fc321feabaf1323c167ca05f4a327"
  },
  {
    "url": "nl/help/faq/index.html",
    "revision": "4b3fa1a8b3e8f29d12ff8ea028bc30b7"
  },
  {
    "url": "nl/help/guides/getting-started/index.html",
    "revision": "1ef572371065a5c62854e7d429ef6016"
  },
  {
    "url": "nl/help/index.html",
    "revision": "98b305210382d9a766fcce6615b42b47"
  },
  {
    "url": "nl/index.html",
    "revision": "9ff9056017f800fa0f92b34b37755b4f"
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
