app.controller('clientController', function ($scope, $timeout) {
    $scope.newAccount = new Accounts();
    $scope.newTransactions = new Transactions();
    $scope.clientList = [];
    
    $scope.time = new Date();
    var clock = function () {
        $scope.time = new Date();
        $timeout(clock, 6000);
    };
    $timeout(clock, 6000);

    $scope.newAccount.ListClients(function (res) {
        for (var i = 0; i < res.rows.length; i++) {
            $scope.clientList.push(res.rows.item(i));
        }
        $scope.$apply();
    });

    $scope.saveObj = function (form) {
        angular.forEach($scope.frmClient.$error.required, function (field) {
            field.$setDirty();
        });
        if (form.$valid && $scope.selectedClient != null) {
            $scope.newTransactions.AccountId = $scope.selectedClient.id;
            $scope.newTransactions.New(function (res) {
                $scope.modelMsg = ' تم حفظ بيانات سدادالعميل بنجاح ';
                $scope.newTransactions = new Transactions();
                $scope.selectedClient = {};
                $scope.$apply();
            });
        };
    };

});