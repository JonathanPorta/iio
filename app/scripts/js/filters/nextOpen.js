//(function(){
//	angular.module('iio').filter('nextOpen', function() {
//		//Given a date and location, find the next time that location will be open.
//		return function(d, loc) {
//			//If we are passed only a Location obj, then we will assume we are using the current time.
//			var loc = loc || d;
//			if(!(d instanceof Date))
//				d = new Date();

//				var cepts = loc.exceptions();
//				var now = new Date();
//				var open = null;
//				var days = {0:[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[]};


////				Exceptions for today?
////					Do they say we are open?
////						Yes - OPEN!
////						No? Then check reg hours.
////							Do they say we are open?
////								Yes - OPEN!
////								Nope, then we ain't!

//				if(cepts.length > 0)
//				{
//					for(var i=0; i<cepts.length; i++)
//					{	//Build array of exceptions by day.
//						days[cepts[i].day()].push(cepts[i]);
//					}
//					for(var i=0; 0<7; i++)
//					{	//Sort each day in case there are multiple exceptions.
//						days[i].sort(function(a,b){
//							return parseInt(b.open() - a.open());
//						});
//					}
//					var next = null;
//					var i=now.getDay();
//					while(next == null){
//						var cepts = days[i];
//						//Need to find first exception, or first day without an exception.
//						if(cepts.length > 0)
//						{	//We have exceptions!
//							for(var i=0; i<cepts.length; i++)
//							{	//Build array of exceptions by day.
//								days[cepts[i].day()].push(cepts[i]);
//							}
//						}
//					}
//					
//						if(cepts[i].day() == now.getDay())
//						{
//							var d1 = new Date();
//							d1.setHours(cepts[i].open());
//							d1.setMinutes(0);
//							d1.setMilliseconds(0);

//							var d2 = new Date();
//							d1.setHours(cepts[i].close());
//							d1.setMinutes(0);
//							d1.setMilliseconds(0);

//							if($filter("withinHour")(now, d1, d2))
//								open = true;
//						}
//					}
//				}
//				if(open == null)
//				{	//We haven't set open yet, that means we aren't yet!

//					var d1 = new Date();
//					d1.setHours(loc.open());
//					d1.setMinutes(0);
//					d1.setMilliseconds(0);

//					var d2 = new Date();
//					d1.setHours(loc.close());
//					d1.setMinutes(0);
//					d1.setMilliseconds(0);

//					if($filter("withinHour")(now, d1, d2))
//					{
//						open = true;
//					}
//					else
//					{
//						open = false;
//					}
//				}

//		};
//	});
//}).call(this);
