app.controller('dashboardController', function ($scope, $timeout) {
    $scope.time = new Date();
    var clock = function () {
        $scope.time = new Date();
        $timeout(clock, 6000);
    };
    $timeout(clock, 6000);
});