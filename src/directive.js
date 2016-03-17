import angular from 'angular';

export default function(){

  angular.module('myApp',[])
  .directive('myApp', function() {
    return {
      restrict: 'A',
      template: '{{greeting}}',
      controller: function($scope) {
        $scope.greeting = 'Hola!';
      },
      link: function($scope){
        console.log('ZE SCOPE',  $scope)
      }
    };
  });

}
