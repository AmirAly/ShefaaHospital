﻿app.controller('clientPaymentController', function ($scope, $timeout) {
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
            var trans = new Transactions();
            trans.BasicInfo_Name = $scope.selectedClient.BasicInfo_Name;
            trans.Date = $scope.client.Date;
            trans.Amount = ($scope.client.Amount * -1);
            trans.Statement = $scope.client.Statement;
            $scope.expense.push(trans);
            console.log($scope.expense);
        };
    };

    $scope.saveObj = function () {
        console.log("entered");
        for (j = 0 ; j < $scope.expense.length; j++) {

            $scope.expense[j].New(function (res) {
                console.log(res);
            });
        };
        $scope.modelMsg = ' تم إضافة حسابات العميل و حفظها بنجاح';
    };

});