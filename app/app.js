var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html'
        })
        .when('/personlist', {
            templateUrl: 'view/directory.html',
            controller: 'myCtrl'

        }).otherwise({
            redirectTo: '/home'
        });
}]);

app.controller('myCtrl', ['$scope','$http' , function ($scope) {

    $scope.removePerson = function (person) {
        var removePerson = $scope.persons.indexOf(person)
        $scope.persons.splice(removePerson, 1)
    }

    $scope.addPerson = function () {
        $scope.persons.push({
            name: $scope.newperson.name,
            color: $scope.newperson.color,
            rate: parseInt($scope.newperson.rate),
            available: true
        });

        $scope.newperson.name = "";
        $scope.newperson.color = "";
        $scope.newperson.rate = "";
    };

    $scope.persons = [
        {
            name: "Rohan",
            color: "grey",
            rate: "10000",
            available: true
        },
        {
            name: "Shailesh",
            color: "green",
            rate: "10000",
            available: true
        },
        {
            name: "Ravi",
            color: "blue",
            rate: "10000",
            available: false
        },
        {
            name: "Milan",
            color: "yellow",
            rate: "10000",
            available: true
        }


    ]
}])