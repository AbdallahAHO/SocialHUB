app.controller('SettingsCtrl', SettingsCtrl)


function SettingsCtrl($scope) {




    // Fetch Current Saved State from the local storage
    $scope.saved = localStorage.getItem('keywords');

    //if the Localstorage array isn't empty, Append an example array
    $scope.keywords = [{tag: 'itworxeducation', toDelete: false}, {tag: 'microsoftegypt', toDelete: false}];

    //update localstorage with current array
    localStorage.setItem('keywords', JSON.stringify($scope.keywords));



    //function when adding 
    $scope.addKeyword = function() {
        
        //push new keyword
        $scope.keywords.push({
			tag: $scope.KeywordFieldText,
			toDelete: false
		});  


        $scope.KeywordFieldText = ''; //clear the input after adding
        localStorage.setItem('keywords', JSON.stringify($scope.keywords));

    };



    $scope.deleteKeywords = function() {

        var oldKeywords = $scope.keywords;

        $scope.keywords = [];

        angular.forEach(oldKeywords, function(x) {
            if (!x.toDelete)
                $scope.keywords.push(x);
        });

        localStorage.setItem('keywords', JSON.stringify($scope.keywords));

    };

}
