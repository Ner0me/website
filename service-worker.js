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
    "revision": "429216bfa9ade57d060e61384c2187cc"
  },
  {
    "url": "assets/AltServer.png",
    "revision": "fbbbdbd262f994bfd4d05a070c9ca7b1"
  },
  {
    "url": "assets/AppStore/AppStore_en-US_Black.svg",
    "revision": "2928664fe1fc6aca88583a6f606d60ba"
  },
  {
    "url": "assets/AppStore/AppStore_en-US_White.svg",
    "revision": "0f3514a45d51f95167e5fe8b6a03bb60"
  },
  {
    "url": "assets/AppStore/AppStore_fr-FR_Black.svg",
    "revision": "2cfdd0a74cd257a00a1821b968acfa92"
  },
  {
    "url": "assets/AppStore/AppStore_fr-FR_White.svg",
    "revision": "9d51a4305acf499f55276445860eba56"
  },
  {
    "url": "assets/css/0.styles.68f7189f.css",
    "revision": "9b4440bf9b5d0653bfd1a10a9ca2213a"
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
    "url": "assets/iCloud.gif",
    "revision": "c1dd8928a541115ee11389aaca5fab13"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8d3e0f58.js",
    "revision": "3b42b2d055ae092740f5159af23d6910"
  },
  {
    "url": "assets/js/10.de47a80d.js",
    "revision": "88bc274834bd98b2c5fb89197d9d5a3f"
  },
  {
    "url": "assets/js/11.92af830f.js",
    "revision": "48ee723c8f728ec3d5d9ebdfb35a0fe2"
  },
  {
    "url": "assets/js/12.2a0cc4c8.js",
    "revision": "4761fa14cf81ddf42f4f82feeafed72a"
  },
  {
    "url": "assets/js/13.ec2016cc.js",
    "revision": "47691349c483fb06f7c0aac7142f0e92"
  },
  {
    "url": "assets/js/14.466fa7ee.js",
    "revision": "59a62247077c7574d45faa706b058f52"
  },
  {
    "url": "assets/js/15.e48ee5dd.js",
    "revision": "fbe25627eb95e8650cfaffadb471f909"
  },
  {
    "url": "assets/js/16.dba209e2.js",
    "revision": "2d7e185672461dcab28dcbfb1f79b74a"
  },
  {
    "url": "assets/js/17.ba002567.js",
    "revision": "15e03fd0f76d6829aa0c832d8f611c03"
  },
  {
    "url": "assets/js/18.524d97b6.js",
    "revision": "1f1a433f39cd0f02e3c52c3ffcb1091b"
  },
  {
    "url": "assets/js/19.13645f57.js",
    "revision": "aab019d27cf5dc3809bfdc9a1b09a176"
  },
  {
    "url": "assets/js/20.84ffa9c0.js",
    "revision": "1433a3a20fbdb68b8c09aec0cc368781"
  },
  {
    "url": "assets/js/21.e8cbf288.js",
    "revision": "48c87ddce59cf98e918bc97ee3531994"
  },
  {
    "url": "assets/js/22.5aa07f80.js",
    "revision": "2b46253526e56bb79faf1dfa39a876aa"
  },
  {
    "url": "assets/js/23.0145162a.js",
    "revision": "768afc769ce57a85e06521e97a97c505"
  },
  {
    "url": "assets/js/24.9b857f1d.js",
    "revision": "e346d3242ebaa8340a1bb24cbceb986f"
  },
  {
    "url": "assets/js/25.59b86346.js",
    "revision": "22effc3eeb5a00474bfbc4b5a0b374a0"
  },
  {
    "url": "assets/js/26.8ecfdb98.js",
    "revision": "8efa31ee3f5324aa52d3da28cd9c56fc"
  },
  {
    "url": "assets/js/27.0d1c81ce.js",
    "revision": "7c22c9f91a85dc3b7b4650aa97e0f6e1"
  },
  {
    "url": "assets/js/28.6d600ea1.js",
    "revision": "8bc323dceed6283920fc47c21b3be198"
  },
  {
    "url": "assets/js/29.55fbd999.js",
    "revision": "932eb20d638938fb1e9cab81c6989ec8"
  },
  {
    "url": "assets/js/3.5ede2cd4.js",
    "revision": "04fc0bdefe51f5617bc0f398cd763277"
  },
  {
    "url": "assets/js/30.c58b0fda.js",
    "revision": "b095706064e0d3ab0919b92ec39eab03"
  },
  {
    "url": "assets/js/31.5cc3d0a1.js",
    "revision": "52546e91ee4ad16cea95a327a29ec6ab"
  },
  {
    "url": "assets/js/32.6e67f24b.js",
    "revision": "71404d60563b65eb159aa45cd6e9e48c"
  },
  {
    "url": "assets/js/33.33a39a34.js",
    "revision": "0359fccad9b88470914bb54c16b75791"
  },
  {
    "url": "assets/js/4.0378e3f2.js",
    "revision": "1469b563ed34bd2e1728855878663e1e"
  },
  {
    "url": "assets/js/5.4b961424.js",
    "revision": "28c046573e7866d27c3d3bffebda9417"
  },
  {
    "url": "assets/js/6.12b26f88.js",
    "revision": "6699fa026082a99a7ca819c77a26a532"
  },
  {
    "url": "assets/js/7.b83fd89e.js",
    "revision": "8030047cdf02903b606b3cecb1cd4679"
  },
  {
    "url": "assets/js/8.df1c1c8a.js",
    "revision": "9d6c57716a6b923a098d5aa88e6c3561"
  },
  {
    "url": "assets/js/9.8eb99305.js",
    "revision": "70bca4efe920dbce77ee1edb23d3b002"
  },
  {
    "url": "assets/js/app.a3891921.js",
    "revision": "9b55e5777a3ec6634ca61108b64e6f25"
  },
  {
    "url": "bg/help/faq/index.html",
    "revision": "ed5d9e2d69f0f5ddcec48fc4894ad69f"
  },
  {
    "url": "bg/help/guides/getting-started/index.html",
    "revision": "fa7a2a9d41f063e6f44c5f6c78772fe8"
  },
  {
    "url": "bg/help/index.html",
    "revision": "a016a731d82354183539ab05bd35ae65"
  },
  {
    "url": "bg/index.html",
    "revision": "dd52b1338f64f43da733a4a6f875ae21"
  },
  {
    "url": "fr/help/faq/index.html",
    "revision": "b2311a88da756795aa18ce2b405ecf77"
  },
  {
    "url": "fr/help/guides/getting-started/index.html",
    "revision": "1c9d3f9f1208d6bd77dbb75014313df4"
  },
  {
    "url": "fr/help/index.html",
    "revision": "a6deeeb72db2bfaa7562082787bb4a45"
  },
  {
    "url": "fr/index.html",
    "revision": "c1a96121b4959f292eb43e11b8acd4c7"
  },
  {
    "url": "help/faq/index.html",
    "revision": "ec4a30f14fb1dfe774020e5ac52d8ae7"
  },
  {
    "url": "help/guides/adding-repos/index.html",
    "revision": "8e9adfd17666dba4f07a482325e01b88"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "cb252b336709d883eff4214174a28195"
  },
  {
    "url": "help/index.html",
    "revision": "d67716daba89cdf831f3b5ef02944dc1"
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
    "revision": "8e6eb779d764dd1ecac64b0b991caa26"
  },
  {
    "url": "it/help/faq/index.html",
    "revision": "52dd8f12aca78a4d8d7a5f612f5e6af1"
  },
  {
    "url": "it/help/guides/getting-started/index.html",
    "revision": "c1bb5324996044e89ec435f21846731a"
  },
  {
    "url": "it/help/index.html",
    "revision": "e09dbca9106920e8b4d1c637cacd05b4"
  },
  {
    "url": "it/index.html",
    "revision": "8459197b2ae92577f7df6fb65035ad39"
  },
  {
    "url": "nl/help/faq/index.html",
    "revision": "4f7a4ac701a790783a883a8dabe83251"
  },
  {
    "url": "nl/help/guides/getting-started/index.html",
    "revision": "6de047e3396e2b40219ab15a0f9a2212"
  },
  {
    "url": "nl/help/index.html",
    "revision": "a1bc04eee79515874b43c67afa6fe392"
  },
  {
    "url": "nl/index.html",
    "revision": "c05b81d2f79afcdc7add2dafe175048c"
  },
  {
    "url": "privacy_policy/index.html",
    "revision": "7ea20d4e6080be6abdda8945a67ddc36"
  },
  {
    "url": "scripts/remove_service_worker.js",
    "revision": "5883d971498a169e98375b8c20ff3238"
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
