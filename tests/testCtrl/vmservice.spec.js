/*describe("service", function () {
    var app;
    var httpBackend;
    beforeEach(function () {
        module("vmApp");
        inject(function ($httpBackend, _vmService_) {
            vmService = vmService;
            httpBackend = $httpBackend;
        });
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("serviceData", function () {
        var data = [{
            "coinValue": 100
            , "noOfCoins": 1
        }, {

            "coinValue": 50
            , "noOfCoins": 10
        }, {

            "coinValue": 25
            , "noOfCoins": 5
        }, {

            "coinValue": 10
            , "noOfCoins": 6
        }, {
            "coinValue": 5
            , "noOfCoins": 7
        }, {
            "coinValue": 2
            , "noOfCoins": 8
        }, {
            "coinValue": 1
            , "noOfCoins": 9
        }];

        httpBackend.expectGET("coinDenomination,json").respond(data);


        var returnedPromise = vmService.get(1);


        httpBackend.flush();

        expect(result).toEqual(returnData);
    });
});*/