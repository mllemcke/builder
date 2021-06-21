
myApp = angular.module('bumbyApp', ["ngRoute"]);
myApp.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.colors = [
        {
            name: 'blue',
            patternId: 'blue'
        },
        {
            name: 'red',
            patternId: 'red'
        },
        {
            name: 'green',
            patternId: 'green'
        }
    ];
    var defaultColor = $scope.colors[0];
    $scope.selectedOptions = {
        'colorOption1': defaultColor,
        'colorOption2': defaultColor,
        'colorOption3': defaultColor,
        'colorOption4': defaultColor,
        'colorOption5': defaultColor,
        'extras': {
            'option1': {
                'show': false,
                'color': defaultColor
            },
            'option2': {
                'show': false,
                'color': defaultColor
            },
            'option3': {
                'show': false,
                'color': defaultColor
            },
            'option4': {
                'show': false,
                'color': defaultColor
            },
            'option5': {
                'show': false,
                'color': defaultColor
            }
        }
    };
}]);
myApp.config(function($routeProvider) {
    $routeProvider.when('/sweater', {
        template: '<sweater></sweater>'
    });
    $routeProvider.when('/pants', {
        template: '<pants></pants>'
    });
    $routeProvider.when('/', {
        template: '<item-list></item-list>'
    });
  });