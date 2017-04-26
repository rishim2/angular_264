var vmApp = angular.module("vmApp", ["ngRoute"]);

vmApp.config(function ($routeProvider) {
    $routeProvider
        .when("/limitedCoinTransactionPage", {
            templateUrl: "limitedCoinTransaction.html"
            , controller: "vmLimitedPageController"
        })
        .when("/unlimitedCoinTransactionPage", {
            templateUrl: "unlimitedCoinTransaction.html"
            , controller: "vmUnlimitedPageController"
        })
        .otherwise({
            redirectTo: '/limitedCoinTransactionPage'
        });
});

vmApp.directive("numberValidator", function () {
    return {
        require: 'ngModel'
        , link: function (scope, element, attr, ngModelCtrl) {
            function acceptedInput(text) {
                if (text) {
                    var transformedData = text.replace(/[^0-9]/g, '');
                    if (transformedData !== text) {
                        ngModelCtrl.$setViewValue(transformedData);
                        ngModelCtrl.$render();
                    }
                    return transformedData;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(acceptedInput);
        }
    };
});

vmApp.controller("vmLimitedPageController", ['$scope', 'vmService', function ($scope, vmService) {
    $scope.value = "";
    $scope.listArr = [];
    $scope.showMsg = false;

    $scope.fetchChange = function (data) {
        $scope.list = [];
        $scope.listArr = [];
        $scope.showMsg = false;
        if (data != undefined) {
            $scope.data = angular.copy($scope.value);
            vmService.fetchDenominationType().then(function (response) {
                $scope.list = response.data;
                for (var i = 0; i < $scope.list.length; i++) {
                    var flag = calcChange($scope.data, $scope.list[i], i);
                    if (flag) {
                        break;
                    }
                }
            });
        }
    };


    function calcChange(data, value, ctr) {
        if (data >= value.coinValue) {
            var res = Math.floor(data / value.coinValue);
            var rem = data % value.coinValue;

            if (res > value.noOfCoins) {
                res = value.noOfCoins;
            }

            value.noOfCoins = value.noOfCoins - res;

            $scope.listArr.push({
                "res": res
                , "value": value.coinValue
            });

            $scope.data = $scope.data - (res * value.coinValue);

            if (ctr == $scope.list.length - 1 && $scope.data != 0) {
                $scope.showMsg = true;
                $scope.list = [];
                $scope.listArr = [];
                return;
            }

            if (rem == 0 && $scope.data == 0) {
                return true;
            } else {
                return false;
            }
        }
    };

}]);