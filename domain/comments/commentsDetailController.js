/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackControllers.controller('commentsDetailController', ['$scope', '$location', '$window', '$http', 'getSession', 'commentsDetail',
    function ($scope, $location, $window, $http, getSession, commentsDetail) {
        $scope.userId;
        $.loader({
            className: "blue-with-image-2",
            content: ''
        });
        getSession.get(function (response) {
            $scope.userId = response.data.userId;
            var commentObj = $location.search();
            var commentId = commentObj.commentId;

            commentsDetail.get({commentId: commentId}, function (data) {
                    $.loader('close');
                    $scope.commentsData = data.data;
                },
                function () {
                    alert("error");
                });
        });
    }]);