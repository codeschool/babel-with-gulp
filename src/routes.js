import angular from 'angular'
import 'angular-ui-router'
import getApp from './app-module'

var app = getApp();
app.config(['$stateProvider', function($stateProvider){
  $stateProvider

  .state('about', {
    views: {
      'contents': {
        controller: require('./controllers/AboutCtrl').inject(app),
        templateUrl: '/views/home.html'
      }
    }
  });
}]);
