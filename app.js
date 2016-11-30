'use strict';
var app = angular.module('creadorPizzas', ['ngRoute','ngMaterial','ngMessages','ui.bootstrap','ngSanitize']);



app.run(function(servicioRest, $rootScope, $http, $location, $mdDialog) {
    
   
    //inicializacion de la aplicacion
    $rootScope.pizzas = [];
    $rootScope.mock=true;
    if(!$rootScope.mock){
        
        servicioRest.cogerPizzas()
					   .then(function(data) {
            
                            $rootScope.pizzas = data;
					   })
					   .catch(function(err) {
                            utils.popupInfo('','Ocurrio un problema y no se pudieron cargar las pizzas guardadas');
					   });
    }
    
	// Establecemos las cabeceras por defecto.
	$http.defaults.headers.common['Accept'] = 'application/json, text/javascript';
	$http.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
     
});

app.config(function($routeProvider) {

	$routeProvider
    .when('/', {
		templateUrl: 'modulos/creadorPizza/creadorPizza.html',
        controller: 'controladorCreadorPizza'
	})
    .when('/Creacion', {
		templateUrl: 'modulos/creadorPizza/creadorPizza.html',
        controller: 'controladorCreadorPizza'
	})
    .when('/Modificacion', {
		templateUrl: 'modulos/modificacionPizza/modificacionPizza.html',
        controller: 'controladorModificacionPizza'
	})
    .when('/Eliminacion', {
		templateUrl: 'modulos/eliminacionPizza/eliminacionPizza.html',
        controller: 'controladorEliminacionPizza'
	})
    .when('/Catalogo', {
		templateUrl: 'modulos/catalogoPizza/catalogoPizza.html',
        controller: 'controladorCatalogoPizza'
	})
	.otherwise({
		redirectTo: "/pageNotFound"
	});
});

app.service('utils', utils);
//Incluimos el servicio ServicioRest. Nocesitamos meter las dependencias que usa para que espere a que confid y utils se carguen
app.service('servicioRest', ['utils','config', '$http','$q', '$rootScope' ,ServicioREST])



