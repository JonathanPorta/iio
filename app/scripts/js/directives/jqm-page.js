
(function(){
angular.module('iio').
	directive('applyJqMobile', function() {
		console.log("here");
		return function($scope, el) {
//			setTimeout(function(){
				$scope.$on('$viewContentLoaded', function(){
					console.log("jqm::view content loaded!");
					el.trigger("create");
				});
//			}, 1);
		};
	});
}).call(this);
