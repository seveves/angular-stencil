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
 * See https://goo.gl/YYPcyY
 */


importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js");









/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/build/app.global.js",
    "revision": "874fca11d857bb2de14f9b0d097c39c6"
  },
  {
    "url": "assets/build/app.js",
    "revision": "99165c3a997d99cddcdcdee585cf4fea"
  },
  {
    "url": "assets/build/app.registry.json",
    "revision": "64bde8a0bbfe19a61039044c4a4f96cd"
  },
  {
    "url": "assets/build/app/2tlvz7ue.js",
    "revision": "4acc73208963d0c1a8f9eabe17b8cdb6"
  },
  {
    "url": "assets/build/app/app.a11spwg7.js",
    "revision": "788ef400097ab5e8e8464746de2599a9"
  },
  {
    "url": "assets/build/app/app.aysob2df.pf.js",
    "revision": "096df62626f17d447d0854f778cbaf36"
  },
  {
    "url": "assets/build/app/if0opbrp.js",
    "revision": "921a0f2053ba0a1728845286a22d9e61"
  },
  {
    "url": "assets/build/app/imd9xidt.js",
    "revision": "2286d47e08db8815a3d1046e6f67975d"
  },
  {
    "url": "assets/build/app/wzflf8ma.css",
    "revision": "5c7aa5b95da3e8f5aaf0afe29e300895"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "c04aa2dc47a5d31d1cb6e83f2869dc3b"
  },
  {
    "url": "manifest.json",
    "revision": "7f958ca5432ddd771183989b1c015833"
  },
  {
    "url": "workbox-sw.prod.v2.0.1.js",
    "revision": "679d4e73dc756b21e46ee8f1bb52c882"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
