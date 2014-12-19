(function () {
    "use strict";

    /**
     * UI-Router Configuration
     */
    angular
        .module('app.routes')
        .config(routeConfig);

    /**
     * Dependency Injection
     * @type {string[]}
     */
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    /**
     * UI-Router state configuration
     * @param $stateProvider
     * @param $urlRouterProvider
     */
    function routeConfig($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise("/activities");

        $stateProvider
            .state('activities', {
                url: "/activities",
                templateUrl: "app/places/activities/activities.tmpl.html",
                controller: "ActivityCtrl",
                controllerAs: "vm",
                resolve: {
                    dataService: activitiesDataService
                }
            });

        activitiesDataService.$inject = ['activitiesDataService'];
        function activitiesDataService(activitiesDataService) {
            return activitiesDataService.load();
        }
    }
})();