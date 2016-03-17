import angular from 'angular'
import 'angular-ui-router'
var app = angular.module('myApp', ['ui.router'])
.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('about', {
    views: {
      'contents': {
        controller: require('./controllers/AboutCtrl').inject(app),
        templateUrl: './views/home.html'
      }
    }
  });
}]);
