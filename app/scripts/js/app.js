(function(){
	angular.module('iio', ["jefri", "jquery", "ui"]).
		config(['$routeProvider', function($routeProvider, $) {
		$routeProvider.
			when('/add',       {templateUrl: 'views/add.html', controller: "LocationsAdd"}).
			when('/locations', {templateUrl: 'views/location_list.html', controller: "Locations"}).
			when('/users',     {templateUrl: 'views/user_list.html',     controller: "Users"}).
			otherwise({redirectTo: '/users'});
	}]);
}).call(this);
