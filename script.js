var GOOGLE_MAPS_API_KEY = "AIzaSyAqC35pe9DRE5Tr883yw_jy22PbsLo6eYI";

var app = angular.module('escapeApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MarketingCtrl',
		templateUrl: '/templates/marketing.html'
	}).when('/mytrips', {
		controller: 'MytripsCtrl',
		templateUrl: '/templates/mytrips.html'
	}).when('/explore', {
		controller: 'ExploreCtrl',
		templateUrl: '/templates/explore.html'
	})
});

app.controller('MarketingCtrl', function($scope) { 
});

app.controller('MytripsCtrl', function($scope) {
});

app.controller('ExploreCtrl', function($scope) {

});
