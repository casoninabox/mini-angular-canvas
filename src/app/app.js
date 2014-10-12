angular.module( 'app', [
  'templates-app',
  'templates-common',
  'ui.router.state',
  'app.home',
  'canvas'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
})

.controller('AppCtrl', ["$http", "$scope", "$rootScope",  function($http, $scope, $rootScope) {

}])
;