self.addEventListener('install', function(event) {
    console.log('Service Worker installato.');
});

self.addEventListener('fetch', function(event) {
    // Puoi aggiungere logica di cache, ma anche lasciarlo vuoto
});
