(function(){
	angular.module('iio').filter('withinHours', function($filter) {
		//Determines if subj Date obj is between two different Date obj.
		return function(subj, d1, d2) {
			if(subj >= d1 && subj < d2)
				return true;
			return false;
		};
	});
}).call(this);
