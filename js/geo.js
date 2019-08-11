               if (navigator.geolocation) {
                              navigator.geolocation.getCurrentPosition(mostrarUbicacion, errorCallback, {enableHighAccurace: true, timeout: 5000, maximumAge:0});
               } else {alert("Error! Aquest navegador no suporta la Geolocalització <br> Instal·la altre.");}
               
      function mostrarUbicacion(position) {
      ///         var times = position.timestamp;
               var latitud = position.coords.latitude;
               var longitud = position.coords.longitude;

              var div = document.getElementById("acces");
              div.innerHTML = "<form name = 'formu' method='post' align='center' action='http://fatimasueca.es/apps/geo/paso.php'><input style='visibility:hidden' type='text' name='latitud' value='"+latitud+"'><input style='visibility:hidden' type='text' name='longitud' value="+longitud+"><br><input type='text' name='usuari' placeholder='Nom usuari' width=25%><br><br><input type='password' name='pass' placeholder='Contrasenya' width=25%><br><br><button type='submit' class='boton0'><a>I N I C I</a></button></form>";}

      function refrescarUbicacion() {
               navigator.geolocation.watchPosition(mostrarUbicacion);}
                                 
     function errorCallback(error) {
      alert("Error! Ha fallat l'app,\n o tal vegada no funciona en el servidor.\n Surt i torna a entrar.");
    }            