var vmApp=angular.module("vmApp",["ngRoute"]);vmApp.config(function(n){n.when("/limitedCoinTransactionPage",{templateUrl:"limitedCoinTransaction.html",controller:"vmLimitedPageController"}).when("/unlimitedCoinTransactionPage",{templateUrl:"unlimitedCoinTransaction.html",controller:"vmUnlimitedPageController"}).otherwise({redirectTo:"/limitedCoinTransactionPage"})}),vmApp.directive("numberValidator",function(){return{require:"ngModel",link:function(n,e,i,t){function o(n){if(n){var e=n.replace(/[^0-9]/g,"");return e!==n&&(t.$setViewValue(e),t.$render()),e}}t.$parsers.push(o)}}}),vmApp.controller("vmLimitedPageController",["$scope","vmService",function(n,e){function i(e,i,t){if(e>=i.coinValue){var o=Math.floor(e/i.coinValue),a=e%i.coinValue;return o>i.noOfCoins&&(o=i.noOfCoins),i.noOfCoins=i.noOfCoins-o,n.listArr.push({res:o,value:i.coinValue}),n.data=n.data-o*i.coinValue,t==n.list.length-1&&0!=n.data?(n.showMsg=!0,n.list=[],void(n.listArr=[])):0==a&&0==n.data}}n.value="",n.listArr=[],n.showMsg=!1,n.fetchChange=function(t){n.list=[],n.listArr=[],n.showMsg=!1,void 0!=t&&(n.data=angular.copy(n.value),e.fetchDenominationType().then(function(e){n.list=e.data;for(var t=0;t<n.list.length;t++){if(i(n.data,n.list[t],t))break}}))}}]);