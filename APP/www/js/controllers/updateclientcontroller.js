app.controller('updatecClientController', function ($scope, $state, $timeout) {
    $scope.AccountToUpdate = new Accounts();

    $scope.time = new Date();
    var clock = function () {
        $scope.time = new Date();
        $timeout(clock, 6000);
    };
    $timeout(clock, 6000);

    new Accounts().GetById(function (_res) {
        $scope.AccountToUpdate.id = $state.params.id;
        $scope.AccountToUpdate.BasicInfo_Name = _res.rows[0].BasicInfo_Name;
        $scope.AccountToUpdate.BasicInfo_Address = _res.rows[0].BasicInfo_Address;
        $scope.AccountToUpdate.BasicInfo_Phone = _res.rows[0].BasicInfo_Phone;
        $scope.AccountToUpdate.BasicInfo_CreationDate = _res.rows[0].BasicInfo_CreationDate;
        $scope.$apply();
    }, $state.params.id);

    $scope.saveObj = function (form) {
        //angular.forEach($scope.frmClient.$error.required, function (field) {
        //    field.$setDirty();
        //});
        ////if (form.$valid) {
            console.log('enter');
            $scope.AccountToUpdate.UpdateAccount(function (res) {
                $scope.modelMsg = 'تم تحديث بيانات العميل بنجاح';
                $scope.$apply();
            });
            console.log($scope.AccountToUpdate);
        };
    //};
});