angular.module('bumbyApp')
    .component('cardiganSvg', {
        templateUrl: 'components/cardigan/cardigan-svg.html',
        bindings: {
            selectedOptions: '<'
        }
    })
    .component('cardigan', {
        templateUrl: 'components/cardigan/cardigan.html',
        bindings: {}
    });