/**
 * Created by SMIT on 23-11-2015.
 */
'use strict';

feedbackControllers.controller('homeController', ['$scope', '$window', '$http', 'getSession', 'fileUploadsAndComments', 'comments',
    function ($scope, $window, $http, getSession, fileUploadsAndComments, comments) {
        $scope.userId = "";

        getSession.get(function (response) {
            $scope.userId = response.data.userId;
            comments.get({userId: $scope.userId}, function (data) {
                    $scope.dataComments = data.data;
                });
        });

        $('body').on('click', '#submitClick', function (e) {
            e.preventDefault();
            var formData = new FormData($(this).parents('form')[0]);
            $.ajax({
                url: 'phpLibrary/uploadImages.php',
                type: 'POST',
                xhr: function () {
                    var myXhr = $.ajaxSettings.xhr();
                    return myXhr;
                },
                success: function (data) {
                    var obj = JSON.parse(data);
                    var filePath = obj.path;

                    fileUploadsAndComments.save({
                        filePath: filePath,
                        comments: $scope.commentsData,
                        userId: $scope.userId
                    }, function () {
                        if (response.message = "GA_TRANSACTION_OK") {
                            $.toaster({priority: "success", title: "Success", message: "File Uploaded"});
                            comments.get({userId: $scope.userId}, function (data) {
                                $scope.dataComments = data.data;
                            });
                        }
                        else
                            $.toaster({priority: "danger", title: "Message", message: "File not uploaded"});
                    });

                },
                error: function (data) {
                    $.toaster({priority: "danger", title: "Message", message: "Something went wrong"});
                },
                data: formData,
                cache: false,
                contentType: false,
                processData: false
            });
            return false;
        });

    }]);