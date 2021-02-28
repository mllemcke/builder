angular.module('bumbyApp')
    .component('pantsSvg', {
        templateUrl: 'components/pants/pants-svg.html',
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
    .component('pants', {
        templateUrl: 'components/pants/pants.html',
        bindings: {}
    });