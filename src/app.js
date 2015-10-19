require('angular-material/angular-material.layouts.css');
require('angular-material/angular-material.css');

require('angular-animate');
require('angular-aria');
require('angular-material/angular-material');

require('angular-ui-router');

const CommunityApp = angular.module('Community', [
    'ui.router',
    'ngMaterial'
]);

CommunityApp.config(require('./app/app_router_config')(CommunityApp));

CommunityApp.run(['$injector', $injector => CommunityApp.register = $injector.loadModule.bind($injector)]);

export default CommunityApp;
