/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackControllers.controller('loginController', ['$scope', 'login', '$window', '$http',
    function ($scope, login, $window, $http) {
        $scope.myLogin = function(){

            login.save({username:$scope.username, password:$scope.password}, function(response){
                alert(response);
                $window.location.href = '/home';
            });
        };
    }]);