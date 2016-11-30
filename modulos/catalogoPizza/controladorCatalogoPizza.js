app.controller('controladorCatalogoPizza', function(servicioRest, config, $scope, $http, $location, $rootScope, $mdDialog) {
  
    inicializacion = function() {
        
        $scope.seleccionado = false ;
        $scope.pizza = {};
    };
    
    inicializacion();
    
    $scope.mostrar = function(pizza) {
         
            $scope.pizza = pizza;
            $scope.seleccionado = true ;
        
    };
    
});



