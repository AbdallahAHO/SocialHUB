app.directive('dashboardTabs', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/dashboard/_partials/dashboardtabs.html'
  }});


app.directive('tbAllstreams', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/dashboard/_partials/Tabs/AllStreams.html'
  }});


app.directive('tbGplus', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/dashboard/_partials/Tabs/gplus-tab.html'
  }});


app.directive('tbInstagram', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/dashboard/_partials/Tabs/instagram-tab.html'
  }});


app.directive('tbTwitter', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/dashboard/_partials/Tabs/twitter-tab.html'
  }});