'use strict';
var app = angular.module("webApp",['ngRoute','myControllers','myService','myFilter']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/Web', {
            templateUrl: 'app/app_modules/views/Analytics.html'
        }).
        when('/Mobility', {
            templateUrl: 'app/app_modules/views/Mobility.html'
        }).
        when('/OpenSource', {
            templateUrl: 'app/app_modules/views/OpenSource.html'
        }).
        when('/Analytics', {
            templateUrl: 'app/app_modules/views/Analytics.html'
        }).
        when('/CRM', {
            templateUrl: 'app/app_modules/views/CRM.html'
        }).
        otherwise({
            redirectTo: '/Web'
        });
}]);