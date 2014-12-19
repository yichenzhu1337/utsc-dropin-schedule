(function () {
    "use strict";

    angular
        .module('utilities.api')
        .factory('apiService', apiFactory);

    /**
     * Dependency Injections
     * @type {string[]}
     */
    apiFactory.$inject = ['$http', 'API_CONFIG'];

    /**
     * Wrapper around $http that acts as the data provider
     * @param $http - http client
     * @param API_CONFIG - API constants
     * @returns {{get: get, post: post}} - get and post services
     */
    function apiFactory($http, API_CONFIG)
    {
        return {
            get: get,
            post: post
        };

        /**
         * Takes any input and calls a HTTP POST on the given route
         * @param route - Route for posting
         * @param input - Payload
         */
        function post(route, input) {
            if (!input) {
                input = {};
            }

            $http.post(API_CONFIG.BASE_ROUTE + '/' + route, input);
        }

        /**
         * Calls a HTTP GET on the given route
         * @param route - Route to get
         * @returns {ng.IPromise<TResult>|*} - Promise of results
         */
        function get(route) {
            return $http.get(API_CONFIG.BASE_ROUTE + '/' + route).then(
                function (payload) {
                    return payload.data;
                });
        }
    }

})();