
angular.module('confusionApp')
    .constant("baseURL", "http://120.24.19.35:3000/")
	.service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
		'use strict';

		this.getDishes = function () {
			return $resource(baseURL+"dishes/:id", null, {'update': {method: 'PUT'}});
		};

        this.getPromotions = function () {
            return $resource(baseURL+"promotions/:id", null, {'update': {method: 'PUT'}});
        };
    }])

    .service('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        'use strict';
        
        this.getLeaders = function () {
            return $resource(baseURL+"leadership/:id", null, {'update': {method: 'PUT'}});
        };

    }])
    .service('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        'use strict';
        
        this.getFeedback = function () {
            return $resource(baseURL+"feedback/");
        };

    }])

;