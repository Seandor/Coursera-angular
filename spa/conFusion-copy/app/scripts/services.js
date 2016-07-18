
angular.module('confusionApp')
    .constant("baseURL", "http://localhost:3000/")
	.service('menuFactory', ['$http', 'baseURL', function($http, baseURL) {
		'use strict';

		this.getDishes = function () {
			return $http.get(baseURL+"dishes");
		};

		this.getDish = function (index) {
			return $http.get(baseURL+"dishes/"+index);
		};

        this.getPromotion = function (index) {
            return $http.get(baseURL+"promotions/"+index);
        };
    }])

    .service('corporateFactory', ['$http', 'baseURL', function($http, baseURL) {
        'use strict';
        
        this.getLeaders = function () {
            return $http.get(baseURL+"leadership");
        };

        this.getLeader = function (index) {
            return $http.get(baseURL+"leadership/"+index);
        };
    }])

;