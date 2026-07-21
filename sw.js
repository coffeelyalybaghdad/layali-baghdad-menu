const CACHE_NAME = "layali-baghdad-v2";

const urlsToCache = [
  "/layali-baghdad-menu/",
  "/layali-baghdad-menu/index.html",
  "/layali-baghdad-menu/style.css",
  "/layali-baghdad-menu/script.js",
  "/layali-baghdad-menu/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
