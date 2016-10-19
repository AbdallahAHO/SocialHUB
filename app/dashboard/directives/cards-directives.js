app.directive('cdTwitter', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/dashboard/_partials/SocialCards/TwitterCard.html'
  }});

app.directive('cdGplus', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/dashboard/_partials/SocialCards/GooglePlusCard.html'
  }});

app.directive('cdInstagram', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/dashboard/_partials/SocialCards/InstagramCard.html'
  }});