/**
 * Created by SMIT on 21-11-2015.
 */
'use strict';

feedbackServices.factory('login', ['$resource','userConst',
    function($resource,userConst){
        //alert("1");
        return $resource(userConst + ':verb', {verb:'auth', password:'@password',username:'@username'}, {
            query: { method: "POST"}
        });

    }]);