app.controller('creatEmployeeController', function ($scope, $state, $timeout) {
    $scope.newAccount = new Accounts();
    $scope.newAccount.Type = "Employee";
    $scope.newAccount.Title = "Employee";
    $scope.newAccount.SerialNumber = "0";

    $scope.time = new Date();
    var clock = function () {
        $scope.time = new Date();
        $timeout(clock, 6000);
    };
    $timeout(clock, 6000);

    $scope.saveObj = function (form) {
        angular.forEach($scope.frmEmployee.$error.required, function (field) {
            field.$setDirty();
        });
        if (form.$valid) {
            $scope.newAccount.OpenAccount(function (res) {
                $scope.modelMsg = 'تم انشاء بيانات الموظف بنجاح';
                $scope.$apply();
            });
        };
        console.log($scope.newAccount);
        $scope.newAccount = new Accounts();
    };
        
    });