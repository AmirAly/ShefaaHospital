app.controller('createSalariesController', function ($scope, $timeout) {
    $scope.newAccount = new Accounts();
    $scope.newTransactions = new Transactions();
    $scope.employeeList = [];
    $scope.expense = [];

    $scope.time = new Date();
    var clock = function () {
        $scope.time = new Date();
        $timeout(clock, 6000);
    };
    $timeout(clock, 6000);

    $scope.newAccount.ListEmployee(function (res) {
        for (var i = 0; i < res.rows.length; i++) {
            $scope.employeeList.push(res.rows.item(i));
        }
        $scope.$apply();
    });

    $scope.removeRow = function (index) {
        $scope.expense.splice(index, 1);
    };

    $scope.addRow = function (form) {
        angular.forEach($scope.frmEmployee.$error.required, function (field) {
            field.$setDirty();
        });
        if (form.$valid && $scope.selectedEmployee != null) {
            var trans = {};
            trans.BasicInfo_Name = $scope.selectedEmployee.BasicInfo_Name;
            trans.Date = $scope.employee.Date;
            trans.Amount = $scope.employee.Amount;
            trans.Statement = $scope.employee.Statement;
            trans.AccountId = $scope.selectedEmployee.id;
            $scope.expense.push(trans);
            $scope.employee = {};
            $scope.selectedEmployee = {};
        };
    };

    $scope.saveObj = function () {
        
        for (j = 0 ; j < $scope.expense.length; j++) {
            $scope.newTransactions.BasicInfo_Name = $scope.expense[j].BasicInfo_Name;
            $scope.newTransactions.Date = $scope.expense[j].Date;
            $scope.newTransactions.Amount = $scope.expense[j].Amount;
            $scope.newTransactions.Statement = $scope.expense[j].Statement;
            $scope.newTransactions.New(function (res) {
            });
        };
        $scope.modelMsg = 'تم إضافة الرواتب إلى حسابات الموظفين بنجاح';
    };

});