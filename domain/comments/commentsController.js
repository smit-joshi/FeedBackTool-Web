/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackControllers.controller('commentsController', ['$scope', '$window', '$http', 'getSession', 'comments',
    function ($scope, $window, $http, getSession, comments) {
        $scope.userId;
        $.loader({
            className: "blue-with-image-2",
            content: ''
        });
        getSession.get(function (response) {
            $scope.userId = response.data.userId;
            comments.get({userId: $scope.userId}, function (data) {
                    $.loader('close');
                    $scope.dataComments = data.data;
                },
                function () {
                    alert("error");
                });
        });
    }]);