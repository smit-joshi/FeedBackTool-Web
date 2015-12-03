/**
 * Created by SMIT on 23-11-2015.
 */
'use strict';

feedbackControllers.controller('homeController', ['$scope', 'Upload', '$timeout', '$window', '$http', 'getSession', 'addComments', 'uploadFile', 'comments',
    function ($scope, Upload, $timeout, $window, $http, getSession, addComments, uploadFile, comments) {
        $scope.userId = "";

        getSession.get(function (response) {
            $scope.userId = response.data.userId;
            comments.get({userId: $scope.userId}, function (data) {
                    $scope.dataComments = data.data;
                });
        });

        $scope.uploadFiles = function(file, errFiles){
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: 'http://feedbacktool-env.elasticbeanstalk.com/comments/uploadfile?file=',
                    data: {file: file}
                }).then(function (response) {
                    //alert('Success ' + response.config.data.file.name + ' uploaded. Response: ' + JSON.stringify(response.data));
                    var filePath = response.data.data.filepath;
                    if(response.message = "GA_TRANSACTION_OK"){
                        addComments.save({
                            filePath: filePath,
                            comments: $scope.commentsData,
                            userId: $scope.userId
                        }, function (data) {
                            if (data.message = "GA_TRANSACTION_OK") {
                                $("#commentsData").val("");
                                $.toaster({priority: "success", title: "Success", message: "File Uploaded"});
                                comments.get({userId: $scope.userId}, function (anotherData) {
                                    $scope.dataComments = anotherData.data;
                                });
                            }
                            else
                                $.toaster({priority: "danger", title: "Message", message: "File not uploaded"});
                        });
                    }
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));

                });
            }
        }

       /* $scope.upload = function(){
            var file = $("#image").val();
            alert(file);
            uploadFile.save({file:file},function(response){
                if (response.message = "GA_TRANSACTION_OK") {
                    $("#commentsData").val("");
                    $("#image").val("");
                    $.toaster({priority: "success", title: "Success", message: "File Uploaded"});
                    addComments.save({
                        filePath: filePath,
                        comments: $scope.commentsData,
                        userId: $scope.userId
                    }, function (response) {
                        if (response.message = "GA_TRANSACTION_OK") {
                            $("#commentsData").val("");
                            $("#image").val("");
                            $.toaster({priority: "success", title: "Success", message: "File Uploaded"});
                            comments.get({userId: $scope.userId}, function (data) {
                                $scope.dataComments = data.data;
                            });
                        }
                        else
                            $.toaster({priority: "danger", title: "Message", message: "File not uploaded"});
                    });
                }
                else
                    $.toaster({priority: "danger", title: "Message", message: "File not uploaded"});
            });
        }*/

        /*$('body').on('click', '#submitClick', function (e) {
            e.preventDefault();
            var formData = new FormData($(this).parents('form')[0]);
            $.ajax({
                url: 'http://LOCAL-PC:8083/FeedbackTool/comments/uploadfile',
                type: 'POST',
                xhr: function () {
                    var myXhr = $.ajaxSettings.xhr();
                    return myXhr;
                },
                success: function (data) {
                    var filePath = data.data.filepath;

                    addComments.save({
                        filePath: filePath,
                        comments: $scope.commentsData,
                        userId: $scope.userId
                    }, function (response) {
                        if (response.message = "GA_TRANSACTION_OK") {
                            $("#commentsData").val("");
                            $("#image").val("");
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
        });*/

    }]);