angular.module('bumbyApp')
    .component('sweaterSvg', {
        templateUrl: 'components/sweater/sweater-svg.html',
        bindings: {
            selectedOptions: '='
        },
        controller: function () {
            var ctrl = this;
            ctrl.$onChanges = function(currentValue) {
                ctrl.selectedOptions = currentValue;
            }
        }
    })
    .component('sweater', {
        templateUrl: 'components/sweater/sweater.html',
        bindings: {}
    });