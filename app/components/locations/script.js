(function(){

//Location List Controller
	var LocationsController = function($scope, $filter, JEFRi, iio){
		$scope.showOpen = function(){
			console.log("Showing open!");
			$scope.locations = $filter('isOpen')(iio.locations);
			$scope.showingAllClass = "";
			$scope.showingOpenClass = "ui-btn-active"
		};

		$scope.showAll = function(){
			console.log("Showing alll");
			$scope.locations = iio.locations;
			$scope.showingAllClass = "ui-btn-active";
			$scope.showingOpenClass = ""
		};

		$scope.showOpen();

	};
	angular.module('iio').controller('Locations', ['$scope', '$filter', 'JEFRi', 'iio', LocationsController]);

//Location Add Controller
	var LocationAdd = function($scope,  $filter, JEFRi, iio){
		$scope.name = "";
		$scope.exceptions = [];

		$scope.save = function(){
			var l = iio.create("Location", {"name":$scope.name});
			for(i in $scope.exceptions)
			{
				$scope.exceptions[i].location(l);
			}
			console.log("Savedish: ", l);
		};

		$scope.addException = function(){
			var e = iio.create("Exception", {});
			$scope.exceptions.push(e);
			console.log("New exception hours: ", e);
		};

		$scope.delException = function(exception_id){
			console.log("Going to delete id: ", exception_id);
			for(i in $scope.exceptions)
			{
				if($scope.exceptions[i].id() == exception_id)
				{
					$scope.exceptions[i].location(null);
					$scope.exceptions.splice(i, 1);
				}
			}
		};

	};
	angular.module('iio').controller('LocationsAdd', ['$scope', '$filter',  'JEFRi', 'iio', LocationAdd]);

//Location List Directive
	directive = function($) {
		return {
			restrict: 'E',
			replace: true,
			controller: "Locations",
			template: $.template('.locations')
		};
	};
	angular.module('iio').directive('locations', ['jQuery', directive]);

//Location Details View Controller
	var LocationDetailsController = function($scope, $filter, JEFRi, iio, $routeParams){

		$scope.show = function(){
			$scope.locationId = $routeParams.locationId;
			$scope.location = iio.lookup("Location", $scope.locationId).pop();
			console.log("Showing one:", $scope.locationId, $scope.location);
		};

		$scope.show();

	};
	angular.module('iio').controller('LocationDetails', ['$scope', '$filter', 'JEFRi', 'iio', '$routeParams', LocationDetailsController]);

//Location Detail Directive
	directive = function($) {
		return {
			restrict: 'A',
			replace: true,
			controller: "LocationDetails",
			template: $.template('.locationDetails')
		};
	};
	angular.module('iio').directive('locationDetails', ['jQuery', directive]);

}).call(this);
