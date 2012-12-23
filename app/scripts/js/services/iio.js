//
(function(){
	angular.module('iio').factory('iio', function(JEFRi, herald){
		var iio = function(){
			var self = this;

			JEFRi.ready.then(function(){
				self.load();
			});
		};

		iio.prototype.locations = [];
		iio.prototype.exceptions = [];

		iio.prototype.load = function(){
			var l = this.create("Location", {name : "Wendy's", open:"6", close:"18"});
			var e = this.create("Exception", {day:"3", open:"8", close:"22"});
			e.location(l);
			var e = this.create("Exception", {day:"1", open:"10", close:"18"});
			e.location(l);
			var e = this.create("Exception", {day:"0", open:"12", close:"22"});
			e.location(l);
			var e = this.create("Exception", {day:"5", open:"5", close:"22"});
			e.location(l);
			console.log("iio load");
			herald.trigger("load");
		};

		iio.prototype.lookup = function(type, id){
			return JEFRi.find({"_type" : type, "location_id" : id});
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
