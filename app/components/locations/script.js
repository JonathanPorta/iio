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
			console.log("SHowing alll");
			$scope.locations = tStore.get("Location");
			$scope.showingAllClass = "ui-btn-active";
			$scope.showingOpenClass = ""
		};

		$scope.showOpen();

	};
	angular.module('iio').controller('Locations', ['$scope', '$filter', 'JEFRi', 'TempStore', LocationsController]);

//Location Filter Controller
	var LocationAdd = function($scope,  $filter, JEFRi, tStore){
		$scope.name="";
		$scope.isOpen=false;

		$scope.exceptions = [{weekday:"", from:"", to:""}];

		$scope.save = function(){
			var l = {name:function(){ return $scope.name}, isOpen:$scope.isOpen};
			tStore.add("Location", l);
			console.log("New: ", l);
		};

		$scope.addException = function(){
			var e = {weekday:"", from:"", to:""};
			$scope.exceptions.push(e);
			console.log("New exception hours: ", e);
		};

	};
	angular.module('iio').controller('LocationsAdd', ['$scope', '$filter',  'JEFRi', 'TempStore', LocationAdd]);

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
