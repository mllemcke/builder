function colorSelectorCtrl() {
    var ctrl = this;

    ctrl.colors = [
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

    ctrl.setColor = function(){
        console.log("setColor called", ctrl.selectedColor);
        ctrl.onUpdate({color: ctrl.selectedColor});
    }

    ctrl.selectedColor = ctrl.colors[0]; //default color
}

angular.module('bumbyApp')
    .component('colorSelector', {
        templateUrl: 'components/color-selector/colorselector.html',
        bindings: {
            onUpdate: '&'
        },
        controller: colorSelectorCtrl
    });