const staticStates = "states-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/scripts/app.js",
  "/images/ap.jpg",
  "/images/guj.jpg",
  "/images/kar.jpg",
  "/images/ke.jpg",
  "/images/mah.jpg",
  "/images/mp.jpg",
  "/images/raj.jpg",
  "/images/tl.jpg",
  "/images/tn.jpg",
  "/images/up.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticStates).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
