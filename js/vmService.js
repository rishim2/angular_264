vmApp.factory("vmService", ['$http', function($http) {
    var factory = {};
    factory.fetchDenominationType = function() {
        return $http.get('coinDenomination.json');
    }
    return factory;
}]);