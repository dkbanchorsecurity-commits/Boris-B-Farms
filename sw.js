const CACHE_NAME = 'boris-b-v1';
const urlsToCache = [
  './',
  './index.html',
  './logo.png'
];

// Install the service worker and cache the basic files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached files to make the app load faster, otherwise fetch from the internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});