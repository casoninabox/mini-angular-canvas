angular.module( 'app' )
.factory('TestRepo', ['LocalStorage', function(LocalStorage) {
	return {
		testNumber: 0
	};
}])
;