/**
 * Created by SMIT on 21-11-2015.
 */

moreKartApp.directive('feedbackHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'domainLibrary/header.php',
        scope:{
        },
        controller: ['$scope', '$window', 'getSession', 'removeSession',
            function ($scope, $window, getSession, removeSession) {
                $scope.userId = "";
                getSession.get(function (response) {
                    if (response.SESSION != "NOSESSION") {
                        $scope.userId = response.data.userId;
                        if ($scope.userId != null) {

                        } else {

                        }
                    }
                    else {
                    }

                });

                $scope.logout = function () {
                    removeSession.save(function () {
                        $scope.userId = "";
                        $window.location.href = "#/login";
                    });
                };
            }
        ]
    }
});