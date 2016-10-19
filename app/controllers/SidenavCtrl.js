//Side navigation (toggle and menu items)
app.controller('SideNav', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {


    // Sidenav toggle
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };


    // Menu items
    $scope.menu = [
        {
            link: '#/',
            title: 'Dashboard',
            icon: 'action:ic_dashboard_24px' 
            // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
    }
  ];
    $scope.admin = [
        {
            link: '#/settings',
            title: 'Settings',
            icon: 'action:ic_settings_24px'
    }
  ];


}]);


//Directive points to Sidenav template
//Find it at /app/_partials/sidenav.html
app.directive('sideNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/_partials/sidenav.html'
  }
});


