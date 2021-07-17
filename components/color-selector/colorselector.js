function colorSelectorCtrl($scope, $http) {
    var ctrl = this;

    $http.get("/builder/colors.json")
        .then((res) => {
            ctrl.colors = res.data;
            ctrl.setColor(ctrl.colors[0]); //default color
        },(err) => { 
            console.error("Failed to load colors", err)
        });

    ctrl.setColor = function(color){
        ctrl.selectedColor = color;
        ctrl.onUpdate({color: ctrl.selectedColor});
    }
}

angular.module('bumbyApp')
    .component('colorSelector', {
        templateUrl: 'components/color-selector/colorselector.html',
        bindings: {
            onUpdate: '&'
        },
        controller: colorSelectorCtrl
    });
