function utils($rootScope, $mdDialog, $mdToast){
    
    function toast(texto) {
		$mdToast.show(
			$mdToast.simple().content(texto).position('bottom').hideDelay(750)
		);
	}
    
    function popupInfo(ev,descripcion){    
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title("")
            .htmlContent(descripcion)
            .ariaLabel('Alert Dialog')
            .ok('Aceptar')
            .targetEvent(ev)
        );
    }
    
    function isEmptyObject (objeto){
        return angular.equals( {} , objeto );
    };
    
    Array.prototype.clean = function( deleteValue ) {
        for ( var i = 0, j = this.length ; i < j; i++ ) {
            if ( this[ i ] == deleteValue ) {
            this.splice( i, 1 );
            i--;
            }
        }
        return this;
    };
    
    
     return {
         popupInfo: popupInfo,
         toast:toast,
         isEmptyObject: isEmptyObject
    }
}