//
(function(){
	angular.module('iio').factory('iio', function(JEFRi){
		var iio = function(){
			var self = this;

			JEFRi.ready.then(function(){
				self.load();
			});
		};

		iio.prototype.locations = [];
		iio.prototype.exceptions = [];

		iio.prototype.load = function(){
			this.create("Location", {name : "New place"});
			console.log("iio load");
		};

		iio.prototype.lookup = function(type, id){
			return JEFRi.find({_type:type,id:id});
		};

		iio.prototype.create = function(type, spec){
			var spec = spec || {};
			if(type == "Location")
			{
				var l = JEFRi.build("Location", spec);
				this.locations.push(l);
				return l;
			}
			else if(type == "Exception")
			{
				var e = JEFRi.build("Exception", spec);
				this.exceptions.push(e);
				return e;
			}
		};

		iio.prototype.save = function(){

		};

		return new iio();
	});
}).call(this);
