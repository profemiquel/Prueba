               if (navigator.geolocation) {
                              navigator.geolocation.getCurrentPosition(mostrarUbicacion, errorCallback, {enableHighAccurace: true, timeout: 5000, maximumAge:0});
               } else {alert("Error! Aquest navegador no suporta la Geolocalització <br> Instal·la altre.");}
               
      function mostrarUbicacion(position) {
      ///         var times = position.timestamp;
               var latitud = position.coords.latitude;
               var longitud = position.coords.longitude;

              var div = document.getElementById("acces");
              div.innerHTML = "<form name = 'formu' method='post' align='center' action='http://fatimasueca.es/apps/geo/paso.php'><input style='visibility:hidden' type='text' name='latitud' value='"+latitud+"'><input style='visibility:hidden' type='text' name='longitud' value="+longitud+"><br><button id='b1' type='submit'><strong><p>REGISTRE D'HORES <br><br>COL·LEGI NTRA. SRA. DE FÀTIMA</p></strong> </button</form>";}

      function refrescarUbicacion() {
               navigator.geolocation.watchPosition(mostrarUbicacion);}
                                 
     function errorCallback(error) {
      alert("Error! Ha fallat l'app,\no tal vegada no funciona en el servidor.\n Surt i torna a entrar.");
    }