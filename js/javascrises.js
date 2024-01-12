

// document.writeln('<link rel="stylesheet" type="text/css" href="../cincoysiete.css" />');

  // CAPTA LA UBICACION
  function showPosition(position){
    fecha = new Date();
    latitud=position.coords.latitude;
    longitud=position.coords.longitude;
    aproximacion=position.coords.accuracy;
    altitud=position.coords.altitude;
    velocidad=position.coords.speed;
    document.cookie = "latitud=" +latitud;
    document.cookie = "longitud=" + longitud;
    document.cookie = "aproximacion=" + aproximacion;
    document.cookie = "altitud=" + altitud;
    document.cookie = "velocidad=" + velocidad;
    if (fecha.getMonth()<10){elmes="0"+fecha.getMonth();} else {elmes=fecha.getMonth();}
    if (fecha.getDate()<10){eldia="0"+fecha.getDate();} else {eldia=fecha.getDate();}
    lafecha="ubicacion"+","+fecha.getFullYear()+"-"+elmes+"-"+eldia+","+fecha.getHours()+":"+fecha.getMinutes();
    document.cookie="posiactual="+lafecha+","+altitud+","+latitud+","+longitud+","+aproximacion+","+velocidad+","+""+","+""+","+""+","+""+","+""+","+""+","+""+","+""+","+""+","+""+","+""+","+""+","+"";
    }
  
  // LEE Y DEVUELVE LA UBICACION
function geoloc4() {
    d=document.getElementById("demo");
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else {
     d.innerHTML="<p>Lo sentimos, tu dispositivo no admite la geolocalización.</p>";
     }
  }
  
// DEVUELVE LA DIRECCION CORRESPONDIENTE A LAS COORDENADAS
function simpleReverseGeocoding(lon, lat) {
  fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + lon + '&lat=' + lat)
  .then(response => response.json())
  .then(main => {
    let temp = main.display_name;
    document.cookie = "localidad=" + temp;
    var tempot=readCookie('localidad').replaceAll(",","-");
    document.cookie = "localidad=" + tempot;
})
  .catch(error => console.error(error));
}

// MOSTRAR CLIMA
function leeclima(){
const apiKey = 'bfd244f84adaf800648aaa640a0ddf68';
  const lat=readCookie('latitud');
  const lon=readCookie('longitud');
 
fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric'+'&appid='+apiKey)
  .then(response => response.json())
  .then(current => {
    let temp = current.main.temp;
    let presion = current.main.pressure;
    let humedad = current.main.humidity;
    let viento = current.wind.speed;
    document.cookie = "temperatura=" + temp;
    document.cookie = "humedad=" + humedad;
    document.cookie = "presion=" + presion;
    document.cookie = "viento=" + viento;
})
  .catch(error => console.error(error));
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// GENERA PALABRA ALEATORIA PARA NOMBRAR LA UBICACION
function palabrilla(){
// Crea una nueva instancia de XMLHttpRequest
const xhr = new XMLHttpRequest();
// Define la función que se ejecutará cuando se cargue el archivo
xhr.onload = function() {
  // Obtiene el contenido del archivo y lo separa por líneas
  const contenido = xhr.responseText;
  const lineas = contenido.split('\n');
  // Escoge una línea al azar
  const lineaAleatoria = lineas[Math.floor(Math.random() * lineas.length)];
   palabrita=capitalizeFirstLetter(lineaAleatoria)
  document.cookie="palabra="+palabrita;
};
// Abre el archivo
xhr.open('GET', 'spanish.txt');
// Envía la solicitud
xhr.send();
}

// Genera el registro con la ubicacion y demas informacion
function recibir() {
  var nombrem=document.getElementById("nombrem").value;
  var fecham=document.getElementById("fecham").value;
  var horam=document.getElementById("horam").value;
  var altitudm=document.getElementById("altitudm").value;
  var latitudm=document.getElementById("latitudm").value;
  var longitudm=document.getElementById("longitudm").value;
  var aproxm=document.getElementById("aproxm").value;
  var velocim=document.getElementById("velocim").value;
  var notasmn=document.getElementById("notasm").value;
  var notasm=notasmn.replaceAll("\n","·#@");
  var grupom=document.getElementById("grupom").value;
  var localidadm=document.getElementById("localidadm").value;
  var temperaturam=document.getElementById("temperaturam").value;
  var presionm=document.getElementById("presionm").value;
  var humedadm=document.getElementById("humedadm").value;
  var vientom=document.getElementById("vientom").value;
  
if (nombrem.length<1){nombrem="         ";}
if (fecham.length<1){fecham="";}
if (horam.length<1){horam="";}
if (altitudm.length<1){altitudm=" ";}
if (latitudm.length<1){latitudm="";}
if (longitudm.length<1){longitudm="";}
if (aproxm.length<1){aproxm="";}
if (velocim.length<1){velocim="";}
if (notasm.length<1){notasm="";}
if (grupom.length<1){grupom="";}
if (localidadm.length<1){localidadm="";}
if (temperaturam.length<1){temperaturam="";}
if (presionm.length<1){temperaturam="";}
if (humedadm.length<1){humedadm="";}
if (vientom.length<1){vientom="";}

document.cookie="posiactual="+nombrem+","+fecham+","+horam+","+altitudm+","+latitudm+","+longitudm+","+aproxm+","+velocim+","+notasm+","+grupom+","+localidadm+","+temperaturam+","+presionm+","+humedadm+","+vientom+","+""+","+""+","+"";

// Mira si la URL lleva un numero de registro para editar
lineo=window.location.href;
linei=lineo.split("=");
// Guardamos en Local Storage. Si estamos editando el registro
if (linei[1]){
localStorage.setItem(linei[1]+"localiza", readCookie('posiactual'));
} else {
// Guardamos en Local Storage. Si se trata de un nuevo registro
contadordatos = localStorage.getItem("contadordatos");
contadordatos++;
localStorage.setItem("contadordatos", contadordatos);
localStorage.setItem(contadordatos+"localiza", readCookie('posiactual'));
}

// Guarda en la cookie contadordatos el contador de registros
document.cookie="contadordatos="+localStorage.getItem("contadordatos");

if (linei[1]){
  location.href="tabla.html";
} else {
location.href="index.html";
}

}

function alante(){
  recibir();
  if (readCookie("ficha")<localStorage.getItem("contadordatos")){
  fichi=readCookie("ficha");
  fichi++;
  document.cookie="ficha="+fichi;
  location.href="guarda.html?we="+fichi;
  }
}

function atras(){
  recibir();
  if (readCookie("ficha")>1){
  fichi=readCookie("ficha");
  fichi--;
  document.cookie="ficha="+fichi;
  location.href="guarda.html?we="+fichi;
}
}


function quitacookies(){
  // Obtener todas las cookies
var cookies = document.cookie.split(";");
// Eliminar cada cookie
for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
contadordatos = localStorage.getItem("contadordatos");
document.cookie="contadordatos="+localStorage.getItem("contadordatos");
}

  // MUESTRA POSIBLES ERRORES
function showError(error){
    switch(error.code) {
      case error.PERMISSION_DENIED:
        d.innerHTML+="<b><font color='red'>Debes tener activada la ubicación en tu dispositivo y permitir al navegador que la utilice. Consulta la ayuda, gracias.</font></b>"
        break;
      case error.POSITION_UNAVAILABLE:
        d.innerHTML+="<p>La información de la localización no está disponible.</p>"
        break;
      case error.TIMEOUT:
        d.innerHTML+="<p>El tiempo de espera para buscar la localización ha expirado.</p>"
        break;
      case error.UNKNOWN_ERROR:
        d.innerHTML+="<p>Ha ocurrido un error desconocido.</p>"
        break;
      }
    }
  
// SUBE ARCHIVO CON GRUPO DE REGISTROS
function readFile(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
  texto	=reader.result;
  var kaka=texto.split("\n");
  var conta=1;
  kaka.forEach(function() {conta++;}
);

conta--;
localStorage.clear();
contador=0;
  for (i=1;i<=conta;i++) {
    if (kaka[i]){
    localStorage.setItem(i+"localiza", kaka[i]);
    contador++;
}
}

document.cookie="contadordatos="+contador;
localStorage.setItem("contadordatos", contador);

location.href="tabla.html";
};

  reader.onerror = function() {
    console.log(reader.error);
  };

}


  // LEE LAS COOKIES
function readCookie(name) {
    var nameEQ = name + "="; 
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent( c.substring(nameEQ.length,c.length) );
      }
    }
    return null;
    }


        if (/Mobi/.test(navigator.userAgent)) {
          movilise=1;
        } else {
          movilise=0;
        }

        if (movilise==1){} else {document.writeln('<div class="contenedor22">'+'<br>');}
     

        document.write('<div id="demo"></div>');

        