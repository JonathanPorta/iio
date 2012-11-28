(function(){
	angular.module('iio').directive('listview', ['$rootScope', 'jQuery', function($rootScope, $) {
		return {
			restrict : 'A',
			link     : function ($scope, elem, attr, ctrl) {
				$scope.$watch(attr['listview'], function(value, old){
					try {
						if($(elem).data("listview"))
							elem.listview("refresh");
						else
						{
							elem.listview();
						}
					}
					catch(e){}
				});
			}
		};
	}]);
}).call(this);
