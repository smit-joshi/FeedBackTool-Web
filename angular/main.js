var feedbackApp = angular.module('myApp', ['ngRoute', 'myControllers', 'myServices']);

feedbackApp.constant('userConst','http://LOCAL-PC:8083/FeedbackTool/user/');
feedbackApp.constant('commentConst','http://LOCAL-PC:8083/FeedbackTool/comments/');

feedbackApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'domain/login/login.php',
                controller: 'loginController'
            }).
            when('/history', {
                templateUrl: 'domain/comments/history.php',
                controller: 'historyController'
            }).
            when('/home', {
                templateUrl: 'domain/comments/home.php',
                controller: 'homeController'
            }).
            otherwise({
                redirectTo: '/login'
              });
    }]);

var feedbackControllers = angular.module('myControllers', []);

var feedbackServices = angular.module('myServices', ['ngResource']);
