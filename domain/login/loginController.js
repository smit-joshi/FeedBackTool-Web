/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackControllers.controller('loginController', ['$scope', '$window', '$http', 'login', 'addSession',
    function ($scope, $window, $http, login, addSession) {
        $scope.myLogin = function () {

            login.get({username: $scope.username, password: $scope.password}, function (response) {
                if (response.message = "GA_TRANSACTION_OK") {
                    addSession.save(response, function () {
                        $window.location.href = "#/home";
                        $.toaster({priority: "success", title: "Success", message: "Login Successful"});
                    }
                );
                }
                else
                    $.toaster({priority: "danger", title: "Message", message: "Please enter correct username or password"});

            },function(){
                $.toaster({priority: "danger", title: "Message", message: "Please enter username or password"});
            });
        };
    }]);