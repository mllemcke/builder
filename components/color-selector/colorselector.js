function colorSelectorCtrl() {
    var ctrl = this;

    ctrl.colors = [
        { name: "Army", patternId: {'fill': '#2F4C4E'} },
        { name: "Azul", patternId: {'fill': '#6AA7BD'} },
        { name: "Ballet", patternId: {'fill': '#f4e7e3'} },
        { name: "Ballet", patternId: {'fill': '#f0e3dd'} },
        { name: "Butterfly", patternId: {'fill': '#79517F'} },
        { name: "Camel", patternId: {'fill': '#AD9C7D'} },
        { name: "Canyon", patternId: {'fill': '#757071'} },
        { name: "Charcoal", patternId: {'fill': '#4D5056'} },
        { name: "Charlie", patternId: {'fill': '#A1CC4B'} },
        { name: "Crocus", patternId: {'fill': '#DFB9D5'} },
        { name: "Dark Charcoal", patternId: {'fill': '#2B323A'} },
        { name: "Dark Denim", patternId: {'fill': '#273243'} },
        { name: "Deep Hydrangea", patternId: {'fill': '#54597D'} },
        { name: "Depth", patternId: {'fill': '#1F5F77'} },
        { name: "EAC", patternId: {'fill': '#93E0D2'} },
        { name: "Evergreen", patternId: {'fill': '#1C3F4C'} },
        { name: "Fedora", patternId: {'fill': '#3C3E46'} },
        { name: "Fresh Lawn", patternId: {'fill': '#195156'} },
        { name: "Frosted Jade", patternId: {'fill': '#86A58C'} },
        { name: "Hey", patternId: {'fill': '#AB893B'} },
        { name: "Hops", patternId: {'fill': '#007258'} },
        { name: "Hot Dragonfruit", patternId: {'fill': '#C2508C'} },
        { name: "Juiced", patternId: {'fill': '#DF8A4A'} },
        { name: "London Fog", patternId: {'fill': '#EFF0EF'} },
        { name: "Lovebird", patternId: {'fill': '#44DD9C'} },
        { name: "Magnolia", patternId: {'fill': '#DAC4D2'} },
        { name: "Mallard", patternId: {'fill': '#1D6572'} },
        { name: "Marine", patternId: {'fill': '#00536A'} },
        { name: "Melange Biscotti ", patternId: {'fill': '#5E554C'} },
        { name: "Melange Charcoal ", patternId: {'fill': '#404246'} },
        { name: "Melange cyan ", patternId: {'fill': '#67A49B'} },
        { name: "Melange divana ", patternId: {'fill': '#84977D'} },
        { name: "Melange Fern ", patternId: {'fill': '#3F4E32'} },
        { name: "Melange flori ", patternId: {'fill': '#726267'} },
        { name: "Melange Golden ", patternId: {'fill': '#797130'} },
        { name: "Melange Grape ", patternId: {'fill': '#635561'} },
        { name: "Melange Miel", patternId: {'fill': '#885321'} },
        { name: "Melange Midnight ", patternId: {'fill': '#2F353F'} },
        { name: "Melange Napa ", patternId: {'fill': '#5C2A3D'} },
        { name: "Melange noel ", patternId: {'fill': '#005259'} },
        { name: "Melange Pansy", patternId: {'fill': '#0E0631'} },
        { name: "Melange Rose ", patternId: {'fill': '#7E6367'} },
        { name: "Melange Saffron ", patternId: {'fill': '#886134'} },
        { name: "Melange Sepia ", patternId: {'fill': '#6E595B'} },
        { name: "Mist", patternId: {'fill': '#CECCC7'} },
        { name: "Opal", patternId: {'fill': '#A7C0CD'} },
        { name: "Peachicot", patternId: {'fill': '#FFBA94'} },
        { name: "Peppa", patternId: {'fill': '#F2B6C4'} },
        { name: "Raspberry", patternId: {'fill': '#65324F'} },
        { name: "Red Hot", patternId: {'fill': '#AE1028'} },
        { name: "Sapphire", patternId: {'fill': '#00254B'} },
        { name: "Shimmer", patternId: {'fill': '#7F489E'} },
        { name: "Sugar Maple", patternId: {'fill': '#921727'} },
        { name: "Sunflower", patternId: {'fill': '#DBBA2F'} },
        { name: "Swedish Berries", patternId: {'fill': '#DE5775'} },
        { name: "Tink", patternId: {'fill': '#ECBABE'} },
        { name: "Vintange Super", patternId: {'fill': '#478BD5'} },
        { name: "Vivid Shifter", patternId: {'fill': '#5A16A8'} },
    ];

    ctrl.setColor = function(){
        ctrl.onUpdate({color: ctrl.selectedColor});
    }

    ctrl.$onInit = function () {
        ctrl.selectedColor = ctrl.colors[0]; //default color
        ctrl.setColor();
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
