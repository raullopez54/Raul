app.controller('ng-app-controller-template1', ['$scope', '$http', function ($scope,
  $http)
  {
    console.log('1')
    $scope.info = 'Texto cargado desde el controlador Pagina1Controller';

    //******SIEMPRE ES IGUAL *******************************************
        
    $http.post('/test', //Nombre del controlador JAVA
    {
      propiedad: 'hello',
      table: 'vero'
    })
    .then(function (response)
    {
      //console.log(response.data)
      var data = response.data;
      for(var i=0, max = data.length; i<max; i++)
          {
                $scope.info += data[i].table;
            }
    });
    
    //*************************************************************

  }]);