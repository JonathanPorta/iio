(function(){

//Location List Controller
	var LocationsController = function($scope, $filter, JEFRi, tStore){
		$scope.showOpen = function(){
			console.log("Showing open!");
			$scope.locations = $filter('isOpen')(tStore.get("Location"));
			$scope.showingAllClass = "";
			$scope.showingOpenClass = "ui-btn-active"
		};

		$scope.showAll = function(){
			console.log("Showing alll");
			$scope.locations = tStore.get("Location");
			$scope.showingAllClass = "ui-btn-active";
			$scope.showingOpenClass = ""
		};

		$scope.showOpen();

	};
	angular.module('iio').controller('Locations', ['$scope', '$filter', 'JEFRi', 'TempStore', LocationsController]);

//Location Add Controller
	var LocationAdd = function($scope,  $filter, JEFRi, tStore){
		$scope.locations = tStore.get("Location");
		$scope.name="";
		$scope.isOpen=false;

		$scope.exceptions = [];

		$scope.save = function(){
			var l = {id:$scope.exceptions.length, name:function(){ return $scope.name}, isOpen:$scope.isOpen};
			tStore.add("Location", l);
			console.log("New: ", l);
		};

		$scope.addException = function(){
			var e = {id:$scope.exceptions.length, weekday:"", from:"", to:"", delException:function(){console.log('sdfsdf');}};
			$scope.exceptions.push(e);
			console.log("New exception hours: ", e);
		};

		$scope.delException = function(exception_id){
			console.log("Going to delete id: ", exception_id);
			for(i in $scope.exceptions)
			{
				if($scope.exceptions[i].id == exception_id)
				{
					$scope.exceptions[i]["deleted"] = true;
					$scope.exceptions.splice(i, 1);
				}
			}
		};

	};
	angular.module('iio').controller('LocationsAdd', ['$scope', '$filter',  'JEFRi', 'TempStore', LocationAdd]);

//Exception Delete Controller
	var ExceptionDelete = function($scope,  $filter, JEFRi, tStore, $routeParams){


	};
	angular.module('iio').controller('ExceptionDelete', ['$scope', '$filter',  'JEFRi', 'TempStore', ExceptionDelete]);

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
	var LocationDetailsController = function($scope, $filter, JEFRi, tStore, $routeParams){

		$scope.locationId = $routeParams.locationId;

		$scope.show = function(){
			console.log("Showing one:", $scope.locationId);
			$scope.locations = tStore.get("Location");
			$scope.location = {};
			for(i in $scope.locations)
			{
				if($scope.locations[i].id == $scope.locationId)
				{
					$scope.location = $scope.locations[i];
					console.log('found location', $scope.location);
				}
			}
		};

		$scope.show();

	};
	angular.module('iio').controller('LocationDetails', ['$scope', '$filter', 'JEFRi', 'TempStore', '$routeParams', LocationDetailsController]);

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
