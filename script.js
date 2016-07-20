var GOOGLE_MAPS_API_KEY = "AIzaSyAqC35pe9DRE5Tr883yw_jy22PbsLo6eYI";

var app = angular.module('escapeApp', ['ngRoute','ngMaps']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MarketingCtrl',
		templateUrl: '/templates/marketing.html'
	}).when('/mytrips', {
		controller: 'TripsCtrl',
		templateUrl: '/templates/mytrips.html'
	}).when('/explore', {
		controller: 'ExploreCtrl',
		templateUrl: '/templates/explore.html'
	})
});

app.controller('MarketingCtrl', function($scope) { 
});

app.controller('TripsCtrl', function($scope) {
});

app.controller('ExploreCtrl', function($scope, $http, $route) {
	$http({
		url: "http://ec2-52-33-4-120.us-west-2.compute.amazonaws.com:8000/hello",
		method:"POST",
		params: {
			subtypes: "shopping, entertainment, dinning, nightlife, sightsee", 
			// lat:18.41, 
			// long:-33.910,
		},
		}).then(function(response){
			console.log(response.data);
			$scope.newItinerary = response.data;
			
		}).catch(function(response) {
      		$scope.error = response.data.message;
    	});
});
