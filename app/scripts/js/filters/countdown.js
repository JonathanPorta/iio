(function(){
	angular.module('iio').filter('countdown', function() {
		//Accepts two date objects and returns a formatted string, hh:mm, between the two.
		return function(d1, d2) {
			//If we are passed only one Date obj, then we will assume we are finding the difference between now and that Date.
			var d2 = d2 || d1;
			var d1 = new Date();
			console.log(d1, d2);
			var minDiff = parseInt((d2 - d1)/60000);
			var hours = parseInt(minDiff/60);
			var mins = parseInt(minDiff%60);
			return { bigHand : hours, littleHand : mins };
		};
	});
}).call(this);
