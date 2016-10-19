
//Search Textbox
app.controller('DemoCtrl', DemoCtrl);
function DemoCtrl() {
   var self = this;
   self.tags = [];
};





//Top bar
app.controller('TopBar', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    // Sidenav toggle
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    // Toolbar search toggle
    $scope.toggleSearch = function (element) {
        $scope.showSearch = !$scope.showSearch;
    };

}]);





















