app.controller('controladorEliminacionPizza', function(servicioRest, utils, config, $scope, $http, $location, $rootScope, $mdDialog) {
    
    inicializacion = function() {
        
        $scope.seleccionado = false ;
        $scope.pizza = {};
    };
    
    inicializacion();
    
    $scope.mostrar = function(pizza) {
         
            $scope.pizza = pizza;
            $scope.seleccionado = true ;
        
    };
    $scope.remove = function(indice) {
         
            if($rootScope.mock){
            
                    $rootScope.pizzas.splice(indice,1);
                    utils.toast("Pizza borrada con exito");
                    inicializacion();
         
            }else{
                servicioRest.borrarPizza($scope.pizza)
					   .then(function(data) {
                            utils.toast("Pizza borrada con exito");
                            inicializacion();
					   })
					   .catch(function(err) {
                            utils.popupInfo('','Ocurrio un problema y no se pudo borrar la pizza');
					   });
            }
        
    };
    
});



