/**
 * Created by Marco Romero on 1/8/2015.
 */
'use strict';
function Routes($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'views/landing.html',
            controller:'LandingController as landing'
        });
}

module.exports = Routes;
