const Ubicador = "localizam";
const assets = [
  "/",
  "/index.html",
  "/elimina.html",
  "/guarda.html",
  "/tabla.html",
  "/ordena.html",
  "/descarga.html",
  "/cincoysiete.css",
  "/js/javascrises.js",
  "img/banner.png",
  "img/cerrar.png",
  "img/compartir.png",
  "img/descargar.png",
  "img/milogo.png",
  "img/mundo.png",
  "img/tabla.png",
  "img/ubicacion.png",
  "img/volver.png",
  "img/mundo.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(Ubicador).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
