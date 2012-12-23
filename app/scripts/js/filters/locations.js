(function(){
	angular.module('iio').filter('isOpen', function($filter) {
		//Determines if one or more Location entities is currently open. If array is passed, will return array of only open locations. If just a Location, will return an obj /open :true/false, closing: closing hour/
		return function(locs){
			if(locs instanceof Array)
			{	//Loop through and call isOpen filter on each.
				var areOpen = [];
				for(var i=0; i<locs.length; i++){
					if($filter("isOpen")(locs[i]).open)
						areOpen.push(locs[i]);
				}
				return areOpen;
			}
			else
			{	//Do actual figurin' here.
				//Just so we don't forget it is just one...
				var loc = locs;
				var cepts = loc.exceptions();
				var now = new Date();
				var open = null;
				var closing = null;

//				Exceptions for today?
//					Do they say we are open?
//						Yes - OPEN!
//						No? Then check reg hours.
//							Do they say we are open?
//								Yes - OPEN!
//								Nope, then we ain't!

				if(cepts.length > 0)
				{	//We have exceptions to check.
					for(i in cepts)
					{
						if(cepts[i].day() == now.getDay())
						{
							var d1 = new Date();
							d1.setHours(cepts[i].open());
							d1.setMinutes(0);
							d1.setMilliseconds(0);

							var d2 = new Date();
							d1.setHours(cepts[i].close());
							d1.setMinutes(0);
							d1.setMilliseconds(0);

							if($filter("withinHours")(now, d1, d2))
								open = true;
								closing = cepts[i].close();
						}
					}
				}
				if(open == null)
				{	//We haven't set open yet, that means we aren't yet!

					var d1 = new Date();
					d1.setHours(loc.open());
					d1.setMinutes(0);
					d1.setMilliseconds(0);

					var d2 = new Date();
					d2.setHours(loc.close());
					d2.setMinutes(0);
					d2.setMilliseconds(0);

					if($filter("withinHours")(now, d1, d2))
					{
						open = true;
						closing = loc.close();
					}
					else
					{
						open = false;
					}
				}
				var ret = {open: open, closing: closing};
				console.log("Return OBJ", ret);
				return ret;
			}
		};
	});
}).call(this);
