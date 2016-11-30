app.controller('controladorModificacionPizza', function(servicioRest, utils, config, $scope, $http, $location, $rootScope, $mdDialog) {
    
    inicializacion = function() {
        
        $scope.pizza = {};
        $scope.pizza.nombre = "";
        $scope.tipoMasa = ["Fina","Original","Pan"];
        $scope.pizza.ingredientes = [""];
        $scope.numeroIngrediente = 0;
    };
    
    inicializacion();
    
    $scope.addingrediente = function() {
        $scope.numeroIngrediente ++;   
        $scope.pizza.ingredientes.push("");
    };
    
    $scope.removeingrediente = function(indice) {
        $scope.numeroIngrediente --;
        $scope.pizza.ingredientes.splice(indice,1);
    };
  
    $scope.mostrar = function(pizza) {
         
            $scope.pizza = angular.copy(pizza);
            $scope.nombreOld = $scope.pizza.nombre;
            $scope.seleccionado = true ;
        
    };
    
    $scope.modificar = function() {
        
            $scope.pizza.ingredientes.clean("");
            for(pizza in $rootScope.pizzas){
                
                if($rootScope.pizzas[pizza].nombre == $scope.nombreOld){
                    
                    if($rootScope.mock){
                    
                        $rootScope.pizzas[pizza] = $scope.pizza;
                        utils.toast("Pizza modificada con exito");
                        inicializacion();
            
               
                    }else{
                        
                    $scope.pizza.nombreOld = $scope.nombreOld;
                    servicioRest.modificarPizza($scope.pizza)
                        .then(function(data) {
                            utils.toast("Pizza modificada con exito");
                            inicializacion();
                        })
                        .catch(function(err) {
                            utils.popupInfo('','Ocurrio un problema y no se pudo modificar la pizza');
                        });
                    }
                   
                }
                
            }
            
    };
  
    
});



