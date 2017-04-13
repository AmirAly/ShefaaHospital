app.controller('clientPaymentController', function ($scope, $timeout) {
    $scope.newAccount = new Accounts();
    $scope.newTransactions = new Transactions();

    $scope.time = new Date();
    var clock = function () {
        $scope.time = new Date();
        $timeout(clock, 6000);
    };
    $timeout(clock, 6000);

    $scope.clientList = [];
    $scope.expense = [];

    $scope.newAccount.ListClients(function (res) {
        for (var i = 0; i < res.rows.length; i++) {
            $scope.clientList.push(res.rows.item(i));
        }
        console.log($scope.clientList);
        $scope.$apply();
    });

    $scope.removeRow = function (index) {
        $scope.expense.splice(index, 1);
    };

    $scope.addRow = function (form) {
        angular.forEach($scope.frmClient.$error.required, function (field) {
            field.$setDirty();
        });
        if (form.$valid && $scope.selectedClient != null) {
            var trans = {};
            trans.BasicInfo_Name = $scope.selectedClient.BasicInfo_Name;
            trans.Date = $scope.client.Date;
            trans.Amount = ($scope.client.Amount * -1);
            trans.Statement = $scope.client.Statement;
            $scope.expense.push(trans);
            console.log($scope.expense);
            $scope.client = {};
            $scope.selectedClient = {};
        };
    };

    $scope.saveObj = function () {
        console.log("entered");
        for (j = 0 ; j < $scope.expense.length; j++) {
            console.log($scope.newTransactions);
            console.log($scope.expense[j]);
            $scope.newTransactions.BasicInfo_Name = $scope.expense[j].BasicInfo_Name;
            $scope.newTransactions.Date = $scope.expense[j].Date;
            $scope.newTransactions.Amount = $scope.expense[j].Amount;
            $scope.newTransactions.Statement = $scope.expense[j].Statement;
            $scope.newTransactions.New(function (res) {
                console.log(res);
                console.log("entered");
            });
        };
        $scope.modelMsg = ' تم إضافة حسابات العميل و حفظها بنجاح';
    };

});