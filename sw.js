const CACHE_NAME = 'heraclee-v1';
const urlsToCache = [
  '/Heraclee/heraclee-search.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Toujours aller sur le réseau en priorité (pas de cache offline)
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request)
    )
  );
});
