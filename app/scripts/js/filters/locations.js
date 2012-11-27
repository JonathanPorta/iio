(function(){
	angular.module('iio').filter('isOpen', function() {
		return function(locs) {
		console.log("going to sort: ", locs);
			var open = [];
			for(loc in locs){
				if(locs[loc].isOpen)
					open.push(locs[loc]);
			}
			return open;
		};
	});
}).call(this);
