angular.module('confusionApp')
    .controller('MenuController', ['$scope', 'menuFactory', function ($scope, menuFactory) {

        'use strict';
    
        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;

        $scope.showMenu = false;
        $scope.message = "Loading...";

        menuFactory.getDishes().query(
            function (response) {
                $scope.dishes = response;
                $scope.showMenu = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            });

        $scope.select = function (setTab) {
            $scope.tab = setTab;
    
            if (setTab === 2) {
                $scope.filtText = "appetizer";
            } else if (setTab === 3) {
                $scope.filtText = "mains";
            } else if (setTab === 4) {
                $scope.filtText = "dessert";
            } else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        };
    }])

    .controller('ContactController', ['$scope', function ($scope) {
        'use strict';

        $scope.feedback = { mychannel: "",
                            firstName: "",
                            lastName: "",
                            agree: false,
                            email: ""
                           };
        var channels = [{value: "Tel", label: "Tel."},
                        {value: "Email", label: "Email"}];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
    }])

    .controller('FeedbackController', ['$scope', 'feedbackFactory', function ($scope, feedbackFactory) {
        'use strict';

        $scope.sendFeedback = function () {
            console.log($scope.feedback);

            if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect selection');
            } else {
                $scope.invalidChannelSelection = false;

                // ajax request here
                feedbackFactory.getFeedback().save($scope.feedback);    

                // clear out the form
                $scope.feedback = { mychannel: "",
                                    firstName: "",
                                    lastName: "",
                                    agree: false,
                                    email: ""
                                   };
                $scope.feedback.mychannel = "";
                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }
        };

    }])

    .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
        'use strict';

        $scope.dish = {};

        $scope.showDish = false;
        $scope.message = "Loading...";

        $scope.dish = menuFactory.getDishes().get({id: parseInt($stateParams.id, 10)})
        .$promise.then(
            function (response) {
                $scope.dish = response;
                $scope.showDish = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            });
    }])

    .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {
        'use strict'; 

        $scope.dishComment = { rating: 5, comment: "", author: "", date: ""};
                   
        $scope.submitComment = function () {
            console.log($scope.dishComment);                       
            $scope.dishComment.date = new Date().toISOString();                       
            $scope.dish.comments.push($scope.dishComment);
            // save to the server
            menuFactory.getDishes().update({id: $scope.dish.id}, $scope.dish);

            $scope.commentForm.$setPristine();            
            $scope.dishComment = { rating: 5, comment: "", author: "", date: ""};
        };
    }])

    .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {
        'use strict';
        $scope.showFeaturedDish = false;
        $scope.dishMessage = "Loading...";

        $scope.featuredDish = menuFactory.getDishes().get({id: 0})
        .$promise.then(
            function (response) {
                $scope.featuredDish = response;
                $scope.showFeaturedDish = true;
            },
            function (response) {
                $scope.dishMessage = "Error: " + response.status + " " + response.statusText;
            });

        $scope.showPromotion = false;
        $scope.promotionMessage = "Loading...";

        $scope.promotion = menuFactory.getPromotions().get({id: 0})
        .$promise.then(
            function (response) {
                $scope.promotion = response;
                $scope.showPromotion = true;
            },
            function (response) {
                $scope.promotionMessage = "Error: " + response.status + " " + response.statusText;
            });

        $scope.showChef = false;
        $scope.chefMessage = "Loading...";

        $scope.executiveChef = corporateFactory.getLeaders().get({id: 0})
        .$promise.then(
            function (response) {
                $scope.executiveChef = response;
                $scope.showChef = true;
            },
            function (response) {
                $scope.chefMessage = "Error: " + response.status + " " + response.statusText;
            });

    }])
    
    .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {
        'use strict';
        $scope.showLeaders = false;
        $scope.leaderMessage = "Loading";

        $scope.leaders = corporateFactory.getLeaders().query()
        .$promise.then(
            function (response) {
                $scope.leaders = response;
                $scope.showLeaders = true;
            },
            function (response) {
                $scope.leaderMessage = "Error: " + response.status + " " + response.statusText;
            });
    }])
;