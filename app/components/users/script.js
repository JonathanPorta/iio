(function(){
	var controller, directive;
 
	controller = function($scope, JEFRi){
		$scope.users = [
			{'name':"User 1"},
			{'name':"User 2"},
			{'name':"User 3"},
			{'name':"User 4"}
		];

		$scope.add = function(){
			$scope.users.push({name:"User"});
		};
	};
	angular.module('iio').controller('Users', ['$scope', 'JEFRi', controller]);

	directive = function($) {
		return {
			restrict: 'E',
			replace: true,
			controller: "Users",
			template: $.template('.users')
		};
	};
	angular.module('iio').directive('users', ['jQuery', directive]);

}).call(this);
