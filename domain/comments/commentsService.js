/**
 * Created by SMIT on 23-11-2015.
 */
'use strict';

feedbackServices.factory('comments', ['$resource','commentConst',
    function($resource,commentConst){
        return $resource(commentConst + ':verb', {verb:'getallcomments', userId:'@userId'}, {
            query: { method: "GET"}
        });

    }]);


feedbackServices.factory('commentsDetail', ['$resource','commentConst',
    function($resource,commentConst){
        return $resource(commentConst + ':verb', {verb:'getcommentbyid', commentId:'@commentId'}, {
            query: { method: "GET"}
        });

    }]);

feedbackServices.factory('addComments', ['$resource','commentConst',
    function($resource,commentConst){
        return $resource(commentConst + ':verb', {verb:'addcomments', filePath:'@filePath', comments:'@comments', userId:'@userId'}, {
            query: { method: "POST"}
        });

    }]);

feedbackServices.factory('uploadFile', ['$resource','commentConst',
    function($resource,commentConst){
        return $resource(commentConst + ':verb', {verb:'uploadfile',file:'@file'}, {
            query: { method: "POST"}
        });

    }]);