'use strict';


// Declare app level module which depends on filters, and services
angular.module('icixUICCApp', [
  'ngRoute',
  'icixUICCApp.directives',
  'icixUICCApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
