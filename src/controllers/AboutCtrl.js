exports.inject = function(app) {
  app.controller('AboutCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function AboutCtrl($scope) {
  $scope.greeting = 'Hello!';
};
