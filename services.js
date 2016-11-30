function ServicioREST( config, utils, $http,$q, $rootScope) {
	
	var url = config.url;
    /*          LLamada general           */
    
    function llamadaHTTP(conf){
        
	   var defered = $q.defer();
	   var promise = defered.promise;
	   $http(conf)
	   .success(function(data, status, headers, config) {
		defered.resolve(data);
	   })
	   .error(function(data, status, headers, config) {
           tratarError(data, status, defered);
	   });

	   return promise;
    }
	
	/* ---------- GESTION DE ERRORES DE SERVICIOS ---------- */
	function tratarError(data, status, defered) {
		if (status === 404 || status === 0) {
			defered.reject("Servicio no disponible");
        }else if (data == null){
            //$rootScope.error="";
            utils.popupInfo('',"Error. Servidor no disponible")
        } else if (data === undefined || data.message === undefined) {
			defered.reject("Error: " + status);
		} else {
			defered.reject(data.message);
		}
	}
    
    
    /* ---------- SERVICIOS LOGIN ---------- */
    
    function cogerPizzas() {
        
		  return llamadaHTTP({
            method: 'GET',
			 url: url + '/pizza ',
          });
	}
    
    function guardarPizza(pizza) {
        
		  return llamadaHTTP({
            method: 'POST',
			 url: url + '/pizza ',
			 data: pizza
          });
	}
    
    function borrarPizza(pizza) {
        
		  return llamadaHTTP({
            method: 'DELETE',
			 url: url + '/pizza ',
			 data: pizza
          });
	}
    
    function modificarPizza(pizza) {
        
		  return llamadaHTTP({
            method: 'GET',
			 url: url + '/pizza ',
          });
	}
    
		
	return {
        cogerPizzas: cogerPizzas,
        guardarPizza: guardarPizza,
        borrarPizza: borrarPizza,
        modificarPizza:modificarPizza
	}
}