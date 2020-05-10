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
    "revision": "f4342eed024532003369677018db67ce"
  },
  {
    "url": "assets/css/0.styles.5d11f605.css",
    "revision": "02b0d9dd2af4c96c7eb13e005682bd50"
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
    "url": "assets/js/14.d7399fa1.js",
    "revision": "73dc142487963438388c19fc82427684"
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
    "url": "assets/js/22.69ff470f.js",
    "revision": "11d81fa6875fb84e9da6568597a66fb2"
  },
  {
    "url": "assets/js/23.d4e8ffb4.js",
    "revision": "15c3c14a807f50492f3983fd1b5ecd4b"
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
    "url": "assets/js/app.1bf09a6b.js",
    "revision": "ed118aebcbef5684603b71b4e72e355b"
  },
  {
    "url": "fr/help/faq/index.html",
    "revision": "c10faaed0514e2a4a9eb5e689150f1e3"
  },
  {
    "url": "fr/help/guides/getting-started/index.html",
    "revision": "88a0f358508849378b849f4850819524"
  },
  {
    "url": "fr/help/index.html",
    "revision": "d5605471d08dd41358e12686013e7260"
  },
  {
    "url": "fr/index.html",
    "revision": "65464d39dcc0c875947199814e9e8806"
  },
  {
    "url": "help/faq/index.html",
    "revision": "f8981e9d24cc500f08dad2337cba53be"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "c02da53413f212d04d7daded39086d87"
  },
  {
    "url": "help/index.html",
    "revision": "5000d7026d3702b92bedb3f99a9eafbc"
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
    "revision": "d23448161a0b8b76bf0f55b369496104"
  },
  {
    "url": "it/help/faq/index.html",
    "revision": "80d000738de6a7db172c841279ef9c72"
  },
  {
    "url": "it/help/guides/getting-started/index.html",
    "revision": "ed2dd510e3c0ff8c89ee944d728fc81a"
  },
  {
    "url": "it/help/index.html",
    "revision": "4dfa6c42433b27bfb687a21116f170f7"
  },
  {
    "url": "it/index.html",
    "revision": "8d2f6803b96904909fe1f533a0f8fed9"
  },
  {
    "url": "nl/help/faq/index.html",
    "revision": "a42870cd8979a457e680f4382657b008"
  },
  {
    "url": "nl/help/guides/getting-started/index.html",
    "revision": "7e5b9e153e725014d4d04c6d74851501"
  },
  {
    "url": "nl/help/index.html",
    "revision": "fa5931365278e130e1bd801ea8cafe50"
  },
  {
    "url": "nl/index.html",
    "revision": "7a9a2aed0cabffe8ab29966a63d96311"
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
