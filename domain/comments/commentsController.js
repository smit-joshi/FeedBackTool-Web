/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackControllers.controller('commentsController', ['$scope', '$window', '$http', 'getSession', 'comments', 'removeSession',
    function ($scope, $window, $http, getSession, comments, removeSession) {
        $scope.userId;
        getSession.get(function (response) {
            $scope.userId = response.data.userId;
            comments.get({userId: $scope.userId}, function (data) {
                    $scope.commentsData = data.data;
                },
                function () {
                    alert("error");
                });
        });
        $scope.logout = function(){
            removeSession.save(function(){
                $scope.userId = "";
                $window.location.href = "#/login";
            });
        };

    }]);