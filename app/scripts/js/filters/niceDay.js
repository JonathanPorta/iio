(function(){
	angular.module('iio').filter('niceDay', function() {
		//Converts 24hr time to AM/PM
		return function(day){
			var map = {0 : "Sunday", 1 : "Monday", 2 : "Tuesday", 3 : "Wednesday", 4 : "Thursday", 5 : "Friday", 6 : "Caturday"};
			return map[day];
		};
	});
}).call(this);
