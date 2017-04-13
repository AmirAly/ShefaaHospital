var app = angular.module("app", ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state("login", {
        url: '/login',
        views: {
            '': {
                templateUrl: 'templates/login.html',
                controller: 'loginController'
            }
        }
    })
    .state("dashboard", {
        url: '/dashboard',
        views: {
            '': {
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboardController'
            }
        }
    })
    .state("createclient", {
        url: '/createclient',
        views: {
            '': {
                templateUrl: 'templates/createclient.html',
                controller: 'createClientController'
            }
        }
    })
    .state("clientdata", {
        url: '/clientdata',
        views: {
            '': {
                templateUrl: 'templates/clientdata.html',
                controller: 'clientDataController'
            }
        }
    })
    .state("createmployee", {
        url: '/createmployee',
        views: {
            '': {
                templateUrl: 'templates/createmployee.html',
                controller: 'creatEmployeeController'
            }
        }
    })
    .state("clientcost", {
        url: '/clientcost',
        views: {
            '': {
                templateUrl: 'templates/clientcost.html',
                controller: 'clientCostController'
            }
        }
    })
    .state("createsalaries", {
        url: '/createsalaries',
        views: {
            '': {
                templateUrl: 'templates/createsalaries.html',
                controller: 'createSalariesController'
            }
        }
    })
    .state("client", {
        url: '/client',
        views: {
            '': {
                templateUrl: 'templates/client.html',
                controller: 'clientController'
            }
        }
    })
    .state("clientpayment", {
        url: '/clientpayment',
        views: {
            '': {
                templateUrl: 'templates/clientpayment.html',
                controller: 'clientPaymentController'
            }
        }
    })
    .state("generalexpenses", {
        url: '/generalexpenses',
        views: {
            '': {
                templateUrl: 'templates/generalexpenses.html',
                controller: 'generalExpensesController'
            }
        }
    })
    .state("finance", {
        url: '/finance',
        views: {
            '': {
                templateUrl: 'templates/finance.html',
                controller: 'financeController'
            }
        }
    })
    .state("employeeadvancedpayments", {
        url: '/employeeadvancedpayments',
        views: {
            '': {
                templateUrl: 'templates/employeeadvancedpayments.html',
                controller: 'employeeAdvancedPaymentsController'
            }
        }
    })
    .state("updateclient", {
        url: '/updateclient/:id',
        views: {
            '': {
                templateUrl: 'templates/updateclient.html',
                controller: 'updatecClientController'
            }
        }
    })

    $urlRouterProvider.otherwise("/login");
});
