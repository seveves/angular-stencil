importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
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
    "revision": "df92394332299d53b11c1315d45b57d0"
  },
  {
    "url": "manifest.json",
    "revision": "7f958ca5432ddd771183989b1c015833"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
