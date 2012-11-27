//(function(){

//	angular.module('iio', [], function($provide) {
//		$provide.factory('tempStore', function() {


////				var prototype = TempStore.prototype, constructor = TempStore;

//////				function TempStore(){
//////					this._data = ctx;
//////				};

////				prototype.get = function(type){
////					return this._data[type];
////				};

////				prototype.add = function(type, obj){
////					this._data[type].push(obj);
////				};

////			};

////			tempStore = new TempStore();

////console.log(TempStore);

////			return TempStore;
//		});
//	});



//angular.module('iio', [], function($provide) {
//	$provide.factory('tss', function() {
//		var shinyNewServiceInstance;
//		//factory function body that constructs shinyNewServiceInstance
//		return shinyNewServiceInstance;
//	});
//});

(function(){
	angular.module('iio').factory('TempStore', function(){
		var TempStore = function(){
			var self = this;
			self._data={
				"Ballot"   : [],
				"Event"    : [],
				"Location" : [],
				"Question" : [],
				"User"     : []
			};
			self.get = function(type){
				return self._data[type];
			};

			self.add = function(type, obj){
				self._data[type].push(obj);
				return obj;
			};
		};

		return new TempStore();
	});
}).call(this);



//}).call(this);
