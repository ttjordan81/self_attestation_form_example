var app = angular.module('SelfAttestationForm.controllers.Main', []);

app.controller('MainController', function ($scope, $http) {



    $scope.name = null;
    $scope.email = null;
    $scope.q1 = null;
    $scope.q2 = null;
    $scope.lblMsg = null;
    $scope.hideOutMessage = true;

    $scope.postdata = function (name, email) {
        var data = {
            name: name,
            email: email
        };

        //Call the services
        $http.post('https://workbooks.timjordan.me/api/sendform', JSON.stringify(data)).then(function (response) {
            if (response.data) {
                $scope.msg = "An email has been sent to the follow email address [test@example.com]. Please show this to the front personel at the front door!";
                $scope.hideform = true;
                $scope.hideOutMessage = false;
            }

        }, function (response) {
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
        });
    };

    $scope.resetForm = function () {
        $scope.hideform = false;
        $scope.hideOutMessage = true;
        this.name = '';
        this.email = '';
        this.q1 = null;
        this.q2 = null;


    }

});