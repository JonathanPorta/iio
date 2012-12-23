(function(){

//Location List Controller
	var LocationsController = function($scope, $filter, JEFRi, iio, herald){
		$scope.showOpen = function(){
			console.log("Showing open!");
			$scope.locations = $filter('isOpen')(iio.locations);
			$scope.showingAllClass = "";
			$scope.showingOpenClass = "ui-btn-active"
		};

		$scope.showAll = function(){
			console.log("Showing all");
			$scope.locations = iio.locations;
			$scope.showingAllClass = "ui-btn-active";
			$scope.showingOpenClass = ""
		};

		herald.listen("load", function(){
			$scope.showOpen();
			if(!$scope.$$phase)
				$scope.$apply();
		});
		$scope.showOpen();

	};
	angular.module('iio').controller('Locations', ['$scope', '$filter', 'JEFRi', 'iio', 'herald', LocationsController]);

//Location Add Controller
	var LocationAdd = function($scope,  $filter, JEFRi, iio){
		$scope.name = "";
		$scope.exceptions = [];

		$scope.save = function(){
			var l = iio.create("Location", {"name":$scope.name, "open":$scope.open, "close":$scope.close});
			for(i in $scope.exceptions)
			{
				var e = iio.create("Exception", $scope.exceptions[i]);
				console.log("real cept", e);
				e.location(l);
			}
			console.log("Savedish: ", l, $scope.exceptions);
		};

		$scope.addException = function(){
			var e = {day:null, open:null, close:null}
			$scope.exceptions.push(e);
			console.log("New exception hours: ", e);
			console.log("Scopey", $scope);
		};

		$scope.delException = function(exception_id){
			console.log("Going to delete id: ", exception_id);
			for(i in $scope.exceptions)
			{
				if($scope.exceptions[i].id() == exception_id)
				{
//					$scope.exceptions[i].location(null);
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

		$scope.remaining = null;
		$scope.sortOn="day()";

		$scope.show = function(){
			$scope.locationId = $routeParams.locationId;
			$scope.location = iio.lookup("Location", $scope.locationId).pop();
			console.log("Showing one:", $scope.locationId, $scope.location);
		};

		$scope.isOpen = function(){
			var loc = $scope.location;
			$scope.openDetails = $filter("isOpen")(loc);
			return $scope.openDetails.open;
		};

		//If open, returns time until closed. If closed, returns false;
		$scope.timeLeft = function(){
			if(!$scope.isOpen())
				return false;
			console.log("time remaining:", $scope)
			var closingTime = new Date();
			closingTime.setHours($scope.openDetails.closing);
			closingTime.setMinutes(0);
			closingTime.setSeconds(0);
			return $filter("countdown")(new Date(), closingTime);
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
