angular.module('swapi', [])

.controller('mainCtrl', function($scope, mainSrv){

  $scope.getData = function(type){
    mainSrv.getData(type)
      .then(function(response){
      $scope.swData = response.data;
      console.log($scope.swData);
    });
  };
})

.service('mainSrv', function($http){

  this.getData = function(type){
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/' + type + '/?format=json'
    });
  };

});
