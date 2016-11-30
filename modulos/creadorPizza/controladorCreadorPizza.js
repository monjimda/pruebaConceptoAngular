app.controller('controladorCreadorPizza', function(servicioRest, utils, config, $scope, $http, $location, $rootScope, $mdDialog) {
    
    //inicializamos objetos y valores estaticos para esta vista
    
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
  
    $scope.guardar = function() {
        
        nombreValido=true; 
        $scope.pizza.ingredientes.clean("");
        
        if($scope.pizza.nombre == "" || $scope.pizza.tipoMasa == undefined || $scope.pizza.ingredientes.length == 0 ){
         
            utils.popupInfo('','Debes rellenar todos los campos');
            $scope.pizza.ingredientes.push("");
            
        }else{
        
            for(pizza in $rootScope.pizzas){
                
                if($rootScope.pizzas[pizza].nombre == $scope.pizza.nombre){
                    utils.popupInfo('','Nombre de pizza en uso');
                    nombreValido=false; 
                }
                
            }
            
            if(nombreValido){
                
                if($rootScope.mock){
            
                    $rootScope.pizzas.push($scope.pizza);
                    utils.toast("Pizza creada con exito");
                    inicializacion();
            
               
                }else{
                    servicioRest.guardarPizza($scope.pizza)
                        .then(function(data) {
                            utils.toast("Pizza creada con exito");
                            inicializacion();
                        })
                        .catch(function(err) {
                            utils.popupInfo('','Ocurrio un problema y no se pudo crear la pizza');
                        });
                }
            }
        }
    };
  
    
});



