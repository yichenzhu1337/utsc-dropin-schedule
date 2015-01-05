(function () {
    "use strict";

    angular.module('app.core',
        [
            /*
             * Angular modules
             */
            'ngMaterial',
            /*
             * Our reusable cross app code modules
             */
            'utilities.api',
            'utilities.exception',
            'utilities.logger',
            'utilities.router',
            'utilities.datetime',
            'utilities.googleanalytics',
            /*
             * 3rd Party modules
             */
            'ui.bootstrap'
        ]);

})();
