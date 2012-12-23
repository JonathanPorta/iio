
(function(){
angular.module('iio').
	directive('jqm', function() {
		return {
//			scope : { delException : '&delException' },
			link : function($scope, el, attr) {
				console.log("JQM::Watching: ", attr['jqm']);
				$scope.$watch(attr['jqm'], function(){
					console.log("Update for ", attr['jqm']);
					el.trigger('create');
				});
			}
		}
	});
}).call(this);
