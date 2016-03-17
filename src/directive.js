import angular from 'angular';

export default function(){

angular.module('myApp',[])
.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  console.log("HOWDY");
}]);

}
