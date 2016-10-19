app.controller('ApiHandlerCtrl', ApiHandlerCtrl)


// Sentiment analysis API
// Logic: Set of Loops through items of the arrays (results.instagram, results.gplus & results.twitter) 
// Passing (Post.ContentStr) to the API and get a sentiment analysis ratio
// According to this response, set of if-conditions will update the value of (sentiment) attribute


function ApiHandlerCtrl($scope, $http, $timeout) {



    // Empty array to take API Results
    $scope.results = [];



    // Empty sub array
    $scope.results.instagram = [];
    $scope.results.gplus = [];
    $scope.results.twitter = [];



    $scope.tempkeywords = [{tag: 'itworxeducation', toDelete: false}, {tag: 'microsoftegypt', toDelete: false}];

    $scope.keywords = [];

    

    if( JSON.parse(localStorage.getItem('keywords')) == null )
    {
        localStorage.setItem('keywords', JSON.stringify($scope.tempkeywords));
    }
        

    $scope.LocalStorageKeywords = JSON.parse(localStorage.getItem('keywords'));


    //get the length of the array of objects
    LocalStorageKeywordsArraySize = Object.keys($scope.LocalStorageKeywords).length;

    for (var i = 0; i <= LocalStorageKeywordsArraySize - 1; i++) {
        $scope.keywords.push($scope.LocalStorageKeywords[i].tag);
    };




    //isSearching flag is here to handle the spinning loading animation
    //Set to "true" while excuting the HTTP GET request
    //On Success promise, it will be "false" to hide the animation using ng-show/hide
    $scope.isSearching = true;





    //Loop to populate content array from http.get JSON responses
    for (var i = 0; i < $scope.keywords.length; i++) 
    {
        //Twitter API calling
        $http({
            method: 'GET',
            //URL should be passed encoded to OAuth.io API
            url: 'https://oauth.io/request/twitter/%2F1.1%2Fsearch%2Ftweets.json',

            params: {
                //Query String with a hashtag unicode
                q: $scope.keywords[i]
            },

            headers: {
                //To authenticate to OAuth.io server, add custom header "oauthio"
                //with parameters:
                //k="OAuth.io API key"
                //oauth_token="Twitter API oauth token" 
                //oauth_token_secret="Twitter API oauth token secret"
                'oauthio': 'k=NTd21HVbZ6V5VuFDp2wAazv6XUM&oauth_token=60025517-gZelxtQEh6FqcnG8N9NdE9J2AZ7HpIKIjQ4ilUel0&oauth_token_secret=r1ywsrQSwPNOvStAbniODWCWTpjjScaTv045KwM57g088'
            }
        }).success(function(data) {

            //Loop to populate a child array "twitter" in the parent "result" array
            //Loop will push a new object and according to a custom schema for more abstraction
            for (var i = 0; i < data.statuses.length; i++) {
                $scope.results.twitter.push({
                    Actor: {
                        //Append this to Twitter URL to go to Actor profile page
                        Username: data.statuses[i].user.screen_name,
                        DisplayName: data.statuses[i].user.name,
                        AvatarPicURL: data.statuses[i].user.profile_image_url
                    },

                    Post: {
                        ContentStr: data.statuses[i].text, //Caption with the image
                        Link: "https://twitter.com/statuses/" + data.statuses[i].id_str
                    },

                    //I needed to do this expression on Instagrm time string,
                    //it turns out to be a glitch    
                    Created: data.statuses[i].created_at,

                    // this field will be updated according to the sentiment analysis API response
                    // if it's 1 then "Post.ContentStr" has a positive sentiment rating
                    // if it's 0 then "Post.ContentStr" has a neutral sentiment rating
                    // if it's -1 then "Post.ContentStr" has a negtive sentiment rating
                    Sentiment: "test"
                });
            }

            //Debuging
            // console.info("Twitter JSON Array Retrieved Successfully");

            //Searching Animation is hide to show rendered info
            $scope.isSearching = false;
        }).error(function(error) {
            console.error(error);
            console.warn("ERROR: TwitterTwitter JSON Array didn't retrieve");
        });

        //Instagram API calling
        $http({
            method: 'GET',
            //Instagram don't handle QueryStrings, Splitted the URL to insert the keyword
            url: 'https://oauth.io/request/instagram/v1/tags/' + $scope.keywords[i] + '/media/recent',
            headers: {
                'oauthio': 'k=NTd21HVbZ6V5VuFDp2wAazv6XUM&oauth_token=dbb3f8c0866745b9ac05d6793e0096a8&oauth_token_secret=fcd08b8f83e64a89878b1b4f4a2c717f'
            }
        }).success(function(data) {

            //Loop to populate a child array "instagram" in the parent "result" array
            //Loop will push a new object and according to a custom schema for more abstraction
            for (var i = 0; i < data.data.length; i++) {
                $scope.results.instagram.push({
                    Actor: {
                        //Append this to Instagram URL to go to Actor profile page
                        Username: data.data[i].user.username,
                        DisplayName: data.data[i].user.full_name,
                        AvatarPicURL: data.data[i].user.profile_picture
                    },


                    Post: {
                        ContentStr: data.data[i].caption.text, //Caption with the image
                        Link: data.data[i].link, //Link to the post
                        PicURL: data.data[i].images.standard_resolution.url
                    },

                    //I needed to do this expression on Instagrm time string,
                    //it turns out to be a glitch    
                    Created: data.data[i].created_time * 1000,

                    // this field will be updated according to the sentiment analysis API response
                    // if it's 1 then "Post.ContentStr" has a positive sentiment rating
                    // if it's 0 then "Post.ContentStr" has a neutral sentiment rating
                    // if it's -1 then "Post.ContentStr" has a negtive sentiment rating
                    Sentiment: "neutral"
                });
            }

            $scope.isSearching = false;
        }).error(function(error) {
            console.error(error);
            console.warn("ERROR: Instagram JSON Array didn't retrieve");
        });

        //Google Plus API calling
        $http({
            method: 'GET',
            url: 'https://www.googleapis.com/plus/v1/activities',
            params: {
                //Keyword that you want to search for
                query: $scope.keywords[i],
                //Create Developer Account using an Instagram account to get an API Client key 
                key: 'AIzaSyDj6ZuLi_XXxjR5mBom8fiRjaJ3ngPZOg8',
                field: 'items(actor(displayName%2Curl)%2Cobject%2Fcontent%2Cpublished%2Ctitle%2Curl)'
            }
        }).success(function(data) {

            //Loop to populate a child array "instagram" in the parent "result" array
            //Loop will push a new object and according to a custom schema for more abstraction
            for (var i = 0; i < data.items.length; i++) {
                $scope.results.gplus.push({
                    "Actor": {
                        //Append this to Instagram URL to go to Actor profile page
                        "DisplayName": data.items[i].actor.displayName,
                        "ActorProfileURL": data.items[i].actor.url,
                        "AvatarPicURL": data.items[i].actor.image.url
                    },


                    "Post": {
                        "Title": data.items[i].title,
                        "ContentStr": data.items[i].object.content.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, ''), //Caption with the image
                        "Link": data.items[i].object.url, //Link to the post
                    },

                    //I needed to do this expression on Instagrm time string,
                    //it turns out to be a glitch    
                    "Created": data.items[i].published,

                    // this field will be updated according to the sentiment analysis API response
                    // if it's 1 then "Post.ContentStr" has a positive sentiment rating
                    // if it's 0 then "Post.ContentStr" has a neutral sentiment rating
                    // if it's -1 then "Post.ContentStr" has a negtive sentiment rating
                    "Sentiment": "neutral"
                });
            }


            //Searching Animation is hide to show rendered info
            $scope.isSearching = false;
        }).error(function(error) {
            console.error(error);
            console.warn("ERROR: Google Plus JSON Array didn't retrieve");
        });
    }

    
}