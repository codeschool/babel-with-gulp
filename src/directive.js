import angular from 'angular';

export default function(){

angular.module('myApp', [])
.controller('AboutCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  console.log("HOWDY");
}]);

  console.log("HOWDY");
}
