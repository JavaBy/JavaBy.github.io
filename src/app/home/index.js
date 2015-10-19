const home = angular.module('Community.home', [
    require('components/page').name
]);

home.directive('home', require('./home_directive'));

export default home;
