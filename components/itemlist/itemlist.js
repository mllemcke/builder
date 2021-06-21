angular.module('bumbyApp')
    .component('itemList', {
        templateUrl: 'components/itemlist/itemlist.html',
        bindings: {},
        controller: function () {
            var ctrl = this;
            ctrl.items = [
                {
                    title: "Pants",
                    link: "/pants",
                    image: "resources/pants.jpg"
                },
                {
                    title: "Sweater",
                    link: "/sweater",
                    image: "resources/Zipper-Henley-adult.jpg"
                }
            ];
        }
    })