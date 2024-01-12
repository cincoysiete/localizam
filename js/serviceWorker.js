// Para que la app local se actualice debes cambiar v1 por v2 y así consecutivamente

const Ubicador = "localizam-v1";
const assets = [
  "/",
  "/index.html",
  "/elimina.html",
  "/filtra.html",
  "/nofiltra.html",
  "/carga.html",
  "/guarda.html",
  "/tabla.html",
  "/ordena.html",
  "/descarga.html",
  "/spanish.txt",
  "/cincoysiete.css",
  "/js/javascrises.js",
  "img/abrir.png",
  "img/alante.png",
  "img/alfiler.png",
  "img/anemometro.png",
  "img/atras.png",
  "img/banner.png",
  "img/boton-guardar.png",
  "img/boton-web-de-ayuda.png",
  "img/calendario.png",
  "img/cerrar.png",
  "img/cerrar-sesion.png",
  "img/compartir.png",
  "img/cuadricula.png",
  "img/descargar.png",
  "img/diagrama.gif",
  "img/direccion-de-casa.png",
  "img/editar.png",
  "img/eliminar.png",
  "img/filtrar.png",
  "img/flecha-derecha.png",
  "img/flecha-izquierda.png",
  "img/guardar.png",
  "img/humedad.png",
  "img/localiza01.png",
  "img/localiza02.png",
  "img/localiza03.png",
  "img/logo.png",
  "img/manometro.png",
  "img/mapa.gif",
  "img/mapa.png",
  "img/mesa-de-edicion.png",
  "img/milogo.png",
  "img/montana.png",
  "img/mundo.png",
  "img/nube.png",
  "img/nubebaja.png",
  "img/nubesube.png",
  "img/pasador-de-ubicacion.png",
  "img/presion.png",
  "img/salida.png",
  "img/semejanza.png",
  "img/signo-de-intercalacion.png",
  "img/subir.png",
  "img/tabla.png",
  "img/termometro.png",
  "img/ubicacion.png",
  "img/velocidad.png",
  "img/viajar.png",
  "img/volver.png"
  ];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(Ubicador).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', function(event) {
  var version = 'v1';
  event.waitUntil(
    caches.keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .map(c => c.split('-'))
            .filter(c => c[0] === 'localizam')
            .filter(c => c[1] !== version)
            .map(c => caches.delete(c.join('-')))
        )
      )
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
