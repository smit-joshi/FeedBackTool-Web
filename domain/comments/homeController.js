/**
 * Created by SMIT on 23-11-2015.
 */
'use strict';

feedbackControllers.controller('homeController', ['$scope', 'Upload', '$timeout', '$window', '$http', 'getSession', 'addComments', 'uploadFile', 'comments',
    function ($scope, Upload, $timeout, $window, $http, getSession, addComments, uploadFile, comments) {
        $scope.userIDs = "";
        var filePath;
        var commentDate;
        var commentDetail;
        var commentId;
        $scope.sampleProduct = [];

        $.loader({
            className: "blue-with-image-2",
            content: ''
        });

        getSession.get(function (response) {
            $scope.userIDs = response.data.userId;
            comments.get({userId: $scope.userIDs}, function (data) {
                $scope.dataComments = data.data;
                $scope.commentData = [];
                if (data.message == "GA_TRANSACTION_OK") {
                    $.loader('close');
                    angular.forEach($scope.dataComments, function (value, key) {
                        $scope.commentData.push(value);
                        commentId = $scope.commentData[key].commentId;
                        commentDate = $scope.commentData[key].commentDate;
                        commentDetail = $scope.commentData[key].commentsDetail;

                        $scope.sampleProduct.push({
                            "commentDate": "<a href='#/commentsDetail?commentId=" + commentId + "'>" + commentDate + " </a>",
                            "commentDetail": commentDetail
                        });
                    });
                    $scope.sampleProductCategories = $scope.sampleProduct;
                }
                else {
                    $.loader('close');
                }
            });
        });

        $scope.myCallback = function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {

            $('td:eq(0)', nRow).bind('click', function () {
                alert();
                $scope.$apply(function () {

                    $scope.someClickHandler(aData);
                });
            });
            return nRow;
        };

        $scope.someClickHandler = function (info) {
            $scope.message = 'clicked: ' + info.commentDate;
        };

        $scope.columnDefs = [
            {"mDataProp": "commentDate", "aTargets": [0]},
            {"mDataProp": "commentDetail", "aTargets": [1]}
        ];

        $scope.overrideOptions = {
            "bStateSave": true,
            "iCookieDuration": 2419200, /* 1 month */
            "bJQueryUI": true,
            "bPaginate": true,
            "bLengthChange": false,
            "bFilter": true,
            "bInfo": true,
            "bDestroy": true
        };

        $scope.uploadFiles = function (file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: 'http://feedbacktool-env.elasticbeanstalk.com/comments/uploadfile?file=',
                    data: {file: file}
                }).then(function (response) {
                    //alert('Success ' + response.config.data.file.name + ' uploaded. Response: ' + JSON.stringify(response.data));
                    filePath = response.data.data.filepath;
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

        $scope.submitData = function (response) {
            $.loader({
                className: "blue-with-image-2",
                content: ''
            });
            addComments.save({
                filePath: filePath,
                comments: $scope.commentsData,
                userId: $scope.userId
            }, function (data) {
                if (data.message = "GA_TRANSACTION_OK") {
                    $("#commentsData").val("");
                    $("#submitClick").val("");
                    $.toaster({priority: "success", title: "Success", message: "File Uploaded"});
                    comments.get({userId: $scope.userId}, function (anotherData) {
                        $.loader('close');
                        $scope.dataComments = anotherData.data;
                    });
                }
                else
                    $.loader('close');
                    $.toaster({priority: "danger", title: "Message", message: "File not uploaded"});
            });
        }

    }]);