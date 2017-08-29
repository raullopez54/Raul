app.controller('ng-app-controller-template2', ["$scope", function ($scope)
  {
    console.log('2');
    $scope.prueba = "Texto cargado desde el controlador Pagina2Controller";
    
    $scope.info = "Sale bien la prueba";
  }]);