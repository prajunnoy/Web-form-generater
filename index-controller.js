angular.module('MyApp', []);

angular.module('MyApp').controller('IndexController', ['$scope', function ($scope) {
    // FIELD ARRAY
    $scope.fields = [];
    // ADD FIELD
    $scope.addfield = function (type) {
        console.log(type);
        $scope.fields.push({
            type: type,
            label: "",
            dropdown_list: []
        });
    };
    // REMOVE FIELD
    $scope.removefield = function (index) {
        //var lastItem = $scope.fields.length - 1;
        $scope.fields.splice(index, 1);
    };

    // DROPDOWN 
    // add combobox label
    $scope.addLabel = function (index, detail_label) {
        console.log(detail_label);
        $scope.fields[index].label = detail_label;
    };

    // add combobox list in dropdown
    $scope.addDropdown = function (index, detail) {
        console.log(detail);
        $scope.fields[index].dropdown_list.push({
            item: detail
        });
    };
    // remove combobox list in dropdown
    $scope.removeDropdown = function (index, detail_drop) {
        // var last_droplist = $scope.fields.dropdown_list.length - 1;
        console.log(detail_drop);
        $scope.fields[index].dropdown_list.splice(detail_drop, 1);
    };
}]);
