

document.writeln('<link rel="stylesheet" type="text/css" href="cincoysiete.css" />');

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
     
