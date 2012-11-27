(function(){

	var directive = function($rootScope, $) {
	
//		$rootScope.$on("listview-updated", function(e){
//			console.log('lvu!',e);
//		});



		return {
			restrict : 'A',
			link     : function ($scope, elem, attr, ctrl) {
				console.log($scope, elem, attr, ctrl);
//				elem.trigger("create");

				$scope.$watch(attr['listview'], function(value, old){
					console.log('listview-updated watch triggered',value,old);
try{
					if($(elem).data("listview"))
						elem.listview("refresh");
					else
					{
//						elem.trigger("create");
						elem.listview();
					}
}
catch(e){console.log("Oopsies!", e);}
				});

			}
		};
	};
	angular.module('iio').directive('listview', ['$rootScope', 'jQuery', directive]);

}).call(this);
