var GOOGLE_MAPS_API_KEY = "AIzaSyAqC35pe9DRE5Tr883yw_jy22PbsLo6eYI";

var app = angular.module('escapeApp', ['ngRoute','ngMaps']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MarketingCtrl',
		templateUrl: '/templates/marketing.html'
	}).when('/mytrips', {
		controller: 'TripsCtrl',
		templateUrl: '/templates/mytrips.html'
	}).when('/newtrip', {
		controller: 'NewTripCtrl',
		templateUrl: '/templates/newtrip.html'
	}).when('/page', {
		controller: 'PageCtrl',
		templateUrl: '/templates/page.html'
	})
});

app.controller('MarketingCtrl', function($scope) { 
});
app.controller('PageCtrl', function($scope) {
	 
});

app.controller('TripsCtrl', function($scope, $http) {
	      $scope.map = {
  center: [-33, 18],
  options: function() {
      return {
        streetViewControl: false,
        scrollwheel: false
      }
  }
};
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

app.controller('NewTripCtrl', function($scope, $http, $route) {
	$scope.currDate = new Date();
});
app.controller('Main', function($scope) {

      $scope.map = {
  center: [-33, 18],
  options: function() {
      return {
        streetViewControl: false,
        scrollwheel: false
      }
  }
};

$scope.points = {
  coords: [
    [47,-122],
    [48,-123],
    [47,-123],
    [48,-122]
  ],
  options: function(coords, properties, i, map) {
    return {
      draggable: true
    }
  },
  events: {
    click: function(e, point, map, points) {
      alert(point)
    }
  },
  decimals: 3
};
});
