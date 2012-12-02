
(function(){
angular.module('iio').
	directive('jqm', function() {
		return {
//			scope : { delException : '&$parent.delException' },
			link : function($scope, el, attr) {
				console.log("JQM::Watching: ", attr['jqm']);
				$scope.$watch(attr['jqm'], function(){
					console.log("added one!");
					el.trigger('create');
				});
			}
		}
	});
}).call(this);
