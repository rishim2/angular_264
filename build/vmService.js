vmApp.factory("vmService",["$http",function(n){var t={};return t.fetchDenominationType=function(){return n.get("coinDenomination.json")},t}]);