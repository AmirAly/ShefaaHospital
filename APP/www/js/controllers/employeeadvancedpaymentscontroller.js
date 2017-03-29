app.controller('employeeAdvancedPaymentsController', function ($scope, $timeout) {
    $scope.newAccount = new Accounts();
    $scope.newTransactions = new Transactions();
    $scope.emp = [];

    $scope.time = new Date();
    var clock = function () {
        $scope.time = new Date();
        $timeout(clock, 6000);
    };
    $timeout(clock, 6000);

    $scope.newAccount.ListEmployee(function (res) {
        for (var i = 0; i < res.rows.length; i++) {
            $scope.emp.push(res.rows.item(i));
        }
        console.log($scope.emp);
        $scope.$apply();
    });

    $scope.saveObj = function (form) {
        angular.forEach($scope.frmEmployee.$error.required, function (field) {
            field.$setDirty();
        });
        if (form.$valid && $scope.selectedEmployee != null) {
            console.log("entered");
            $scope.newTransactions.AccountId = $scope.selectedEmployee.id;
            $scope.newTransactions.Amount = ($scope.newTransactions.Amount * -1);
            console.log($scope.newTransactions);
            $scope.newTransactions.New(function (res) {
                $scope.modelMsg = ' تم خصم السلفة من الحساب الحالى للموظف بنجاح';
                console.log($scope.newTransactions.Amount);
                $scope.$apply();
            });
        };
        $scope.newTransactions = new Transactions();
        $scope.selectedEmployee = {};
    };
});
