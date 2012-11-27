(function(){

//Location List Controller
	var LocationsController = function($scope, $filter, JEFRi, tStore){
		console.log("Controller const!");


//		$scope.locations = tStore.get("Location");
$scope.locations =
		[
			{'name':function(){return "Location 1";}, isOpen : true},
			{'name':function(){return "Location 2";}, isOpen : true},
			{'name':function(){return "Location 3";}, isOpen : false},
			{'name':function(){return "Location 4";}, isOpen : true}
		];

		//$scope.locations.push(JEFRi.build("Location", {name:"Opnam"}));

		//$scope.locations = JEFRi.find("Location");
		console.log("Locations: ", $scope.locations);

		$scope.add = function(){
			var l = {name:function(){ return "New!"}};
			//tStore.add("Location", l);
			$scope.locations.push(l);
//			$scope.locations.$apply();
			console.log("New: ", l);
//			$scope.locations.push(l);
		};

		$scope.showOpen = function(){
			$scope.locations = $filter('isOpen')($scope.locations);
		};

		$scope.showAll = function(){
			$scope.locations = 
			[
				{'name':function(){return "Location 1";}, isOpen : true},
				{'name':function(){return "Location 2";}, isOpen : true},
				{'name':function(){return "Location 3";}, isOpen : false},
				{'name':function(){return "Location 4";}, isOpen : true}
			];

		};

	};
	angular.module('iio').controller('Locations', ['$scope', '$filter', 'JEFRi', 'TempStore', LocationsController]);

//Location Filter Controller
	var LocationAdd = function($scope,  $filter, JEFRi, tStore){
	$scope.locations =
		[
			{'name':function(){return "Location 1";}, isOpen : true},
			{'name':function(){return "Location 2";}, isOpen : true},
			{'name':function(){return "Location 3";}, isOpen : false},
			{'name':function(){return "Location 4";}, isOpen : true}
		];
		$scope.locations = $filter('isOpen')($scope.locations);

	};
	angular.module('iio').controller('LocationAdd', ['$scope', '$filter',  'JEFRi', 'TempStore', LocationAdd]);

	directive = function($) {
		return {
			restrict: 'E',
			replace: true,
			controller: "Locations",
			template: $.template('.locations')
		};
	};
	angular.module('iio').directive('locations', ['jQuery', directive]);

}).call(this);
