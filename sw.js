self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Apenas repassa as requisições normais de rede
  e.respondWith(fetch(e.request));
});