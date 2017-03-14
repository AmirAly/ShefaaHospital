var app = angular.module("app", ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state("login", {
        url: '/login',
        views: {
            '': { templateUrl: 'templates/login.html' }
        }
    })
    .state("dashboard", {
        url: '/dashboard',
        views: {
            '': { templateUrl: 'templates/dashboard.html' }
        }
    })
    .state("newclient", {
        url: '/newclient',
        views: {
            '': { templateUrl: 'templates/newclient.html' }
        }
    })
    .state("clientdata", {
        url: '/clientdata',
        views: {
            '': { templateUrl: 'templates/clientdata.html' }
        }
    })
    .state("createmployee", {
        url: '/createmployee',
        views: {
            '': { templateUrl: 'templates/createmployee.html' }
        }
    })
    .state("clientcost", {
        url: '/clientcost',
        views: {
            '': { templateUrl: 'templates/clientcost.html' }
        }
    })
    .state("createsalaries", {
        url: '/createsalaries',
        views: {
            '': { templateUrl: 'templates/createsalaries.html' }
        }
    })
    .state("client", {
        url: '/client',
        views: {
            '': { templateUrl: 'templates/client.html' }
        }
    })
    .state("clientpayment", {
        url: '/clientpayment',
        views: {
            '': { templateUrl: 'templates/clientpayment.html' }
        }
    })
    .state("finance", {
        url: '/finance',
        views: {
            '': { templateUrl: 'templates/finance.html' }
        }
    })
    .state("employeeadvancedpayments", {
        url: '/employeeadvancedpayments',
        views: {
            '': { templateUrl: 'templates/employeeadvancedpayments.html' }
        }
    })
    
    
    $urlRouterProvider.otherwise("/login");
});
