angular.module('SelfAttestationForm', [
  'ngRoute',
  'mobile-angular-ui',
  'SelfAttestationForm.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});