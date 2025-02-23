angular.module('bumbyApp')
    .factory('itemData', function () {
        return [
            {
                title: "Pants",
                link: "/items/pants",
                image: "resources/pants.jpg",
                options: [
                    { label: "Waistband" },
                    { label: "Legs" },
                    { label: "Cuffs" }
                ],
                extras: []
            },
            {
                title: "Sweater",
                link: "/items/sweater",
                image: "resources/Zipper-Henley-adult.jpg",
                options: [
                    { label: "Main Body" },
                    { label: "Collar" },
                    { label: "Sleeves" }
                ],
                extras: [
                    { label: "Add Sleeve Cuffs" },
                    { label: "Add Center Pocket" }
                ]
            }
        ];
    })