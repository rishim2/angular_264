vmApp.controller("vmUnlimitedPageController", ['$scope', 'vmService', function ($scope, vmService) {
    $scope.valueEntered = "";
    $scope.arr = [];

    $scope.fetchExactChange = function (data) {
        $scope.denominationList = [];
        $scope.arr = [];
        if (data != undefined) {
            $scope.enteredValue = angular.copy($scope.valueEntered);
            vmService.fetchDenominationType().then(function (response) {
                $scope.denominationList = response.data;
                for (var i = 0; i < $scope.denominationList.length; i++) {
                    var flag = calcExactChange($scope.enteredValue, $scope.denominationList[i].coinValue);
                    if (flag) {
                        break;
                    }
                }
            });
        }
    };

    function calcExactChange(data, value) {
        if (data >= value) {
            var res = Math.floor(data / value);
            var rem = data % value;
            $scope.arr.push({
                "res": res
                , "value": value
            });
            $scope.enteredValue = $scope.enteredValue - (value * res);
            if (rem == 0) {
                return true;
            } else {
                return false;
            }
        }
    };
}]);