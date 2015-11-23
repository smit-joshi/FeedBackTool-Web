/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackControllers.controller('commentsDetailController', ['$scope', '$location', '$window', '$http', 'getSession', 'commentsDetail', 'removeSession',
    function ($scope, $location, $window, $http, getSession, commentsDetail, removeSession) {
        $scope.userId;
        getSession.get(function (response) {
            $scope.userId = response.data.userId;
            var commentObj = $location.search();
            var commentId = commentObj.commentId;

            commentsDetail.get({commentId: commentId}, function (data) {
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