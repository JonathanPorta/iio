
(function(){
angular.module('iio').
	directive('hourException', function() {
		return {
			link : function($scope, el, attr) {
				console.log("main", $scope);
				$scope.$watch('exceptions', function(){
					console.log("added one!");
					el.trigger('create');
				});
			}
		}
	});
}).call(this);
