const route = (entry, resolve) => ({
    url: `/${entry}`,
    template: `<${entry}></${entry}>`,
    resolve: {
        async: ['$q', function ($q) {
            const defer = $q.defer();

            resolve(defer.resolve);
            return defer.promise;
        }]
    }
});


export default app => {
    const $inject = ['$urlRouterProvider', '$stateProvider'];

    // We have to use hardcoded value for 'require' so it can be statically built
    const RouterConfig = function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .when('', '/')
            .when('/', '/home')
            .otherwise('/home');

        $stateProvider
            .state('home', route('home', callback =>
                require.ensure([], () =>
                    callback(app.register(require('./home').name)))
            ))

            .state('about', route('about', callback =>
                require.ensure([], () =>
                    callback(app.register(require('./about').name)))
            ));
    };

    RouterConfig.$inject = $inject;

    return RouterConfig;
};
