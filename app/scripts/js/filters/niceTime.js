(function(){
	angular.module('iio').filter('niceTime', function() {
		//Converts 24hr time to AM/PM
		return function(hr) {
			if(parseInt(hr) == 0)
				return "12am";
			if(parseInt(hr) < 12)
				return hr + "am";
			if(parseInt(hr) == 12)
				return hr + "pm";
			if(parseInt(hr) > 12)
				return parseInt(hr - 12) + "pm";
			if(parseInt(hr) == 12)
				return hr + "pm";
		};
	});
}).call(this);
