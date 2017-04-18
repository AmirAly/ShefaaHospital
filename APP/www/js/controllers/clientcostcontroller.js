app.controller('clientCostController', function ($scope, $state, $timeout) {
    $scope.newAccount = new Accounts();
    
    $scope.time = new Date();
    var clock = function () {
        $scope.time = new Date();
        $timeout(clock, 6000);
    };
    $timeout(clock, 6000);

    $scope.costs = [];
    $scope.newAccount.ListClients(function (res) {
        for (i = 0; i < res.rows.length; i++) {
            $scope.costs.push(res.rows.item(i));
            $scope.$apply();
        };
    });

    $scope.removeRow = function (index) {
        $scope.costs.splice(index, 1);
    };

    $scope.editObj = function (_id) {
        $scope.newAccount.id = _id;
        window.location = 'http://localhost:5294/index.html#/updateclient/'+_id;
    };
});