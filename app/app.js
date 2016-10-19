var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']);



//Custom Theme Configuration, using Angular Material Themeing function
//More info: 
app.config(function ($mdThemingProvider) {

    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['80'],
        '80': 'ffffff'
    });

    $mdThemingProvider.definePalette('customBlue', customBlueMap);

    $mdThemingProvider.theme('default').primaryPalette('indigo').accentPalette('purple');

    $mdThemingProvider.theme('input', 'default').primaryPalette('grey')
});



//Icon asset Provider, Angular Material related
app.config(function ($mdIconProvider) {
    $mdIconProvider
    // linking to https://github.com/google/material-design-icons/tree/master/sprites/svg-sprite
        .iconSet('action', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24)
        .iconSet('alert', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-alert.svg', 24)
        .iconSet('av', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-av.svg', 24)
        .iconSet('trendingup', 'https://raw.githubusercontent.com/google/material-design-icons/master/action/svg/production/ic_trending_up_24px.svg', 24)
        .iconSet('communication', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-communication.svg', 24)
        .iconSet('content', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-content.svg', 24)
        .iconSet('device', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-device.svg', 24)
        .iconSet('editor', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-editor.svg', 24)
        .iconSet('file', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-file.svg', 24)
        .iconSet('hardware', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-hardware.svg', 24)
        .iconSet('image', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-image.svg', 24)
        .iconSet('maps', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-maps.svg', 24)
        .iconSet('navigation', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-navigation.svg', 24)
        .iconSet('notification', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-notification.svg', 24)
        .iconSet('social', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-social.svg', 24)
        .iconSet('toggle', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-toggle.svg', 24)

    // Illustrated user icons used in the docs https://material.angularjs.org/latest/#/demo/material.components.gridList
    .iconSet('avatars', 'https://raw.githubusercontent.com/angular/material/master/docs/app/icons/avatar-icons.svg', 24)
        .defaultIconSet('https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24);
});


//Page Routing
app.config(function($routeProvider  ) {
        $routeProvider

            // // route for the dashboard page
            // .when('/', {
            //     templateUrl : 'views/splash.html',
            //     controller  : 'mainController'
            // })


            // route for the dashboard page
            .when('/', {
                templateUrl : 'app/views/dashboard.html',
                controller  : 'ApiHandlerCtrl'
            })

            // route for the analytics page
            .when('/analytics', {
                templateUrl : 'app/views/analytics.html',
            })

            // route for the settings page
            .when('/settings', {
                templateUrl : 'app/views/settings.html',
                controller  : 'SettingsCtrl'
            });

    });











