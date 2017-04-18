app.controller('loginController', function ($scope, $state) {

    $scope.submit = function () {
        var localPwd = localStorage.getItem('Password');
        if (localPwd == null || typeof localPwd == 'undefined') {
            if ($scope.password == '2@Tx!5dL') {
                $state.go('dashboard');
            }
            else {
                $scope.modelMsg = ' كلمة المرور خاطئة ';
            }
        }
        else {
            if ($scope.password == localPwd) {
                $state.go('dashboard');
            }
            else {
                $scope.modelMsg = ' كلمة المرور خاطئة ';
            }
        }
    };

    
});
