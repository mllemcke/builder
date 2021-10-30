angular.module('bumbyApp')
    .component('item', {
        templateUrl: 'components/item/item.html',
        bindings: {},
        controller: ['$routeParams',
            function ItemController($routeParams) {
                var ctrl = this;
                ctrl.itemId = $routeParams.itemId;
                ctrl.svgUrl = "components/"+ctrl.itemId+"/"+ctrl.itemId+"-svg.html";
            }
        ]
    })