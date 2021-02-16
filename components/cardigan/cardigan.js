angular.module('bumbyApp')
    .component('cardiganSvg', {
        templateUrl: 'components/cardigan/cardigan-svg.html',
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
    .component('cardigan', {
        templateUrl: 'components/cardigan/cardigan.html',
        bindings: {}
    });