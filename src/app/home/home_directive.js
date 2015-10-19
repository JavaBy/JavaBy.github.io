const $inject = [];
const home = function () {
    return {
        template: require('./home.html')
    };
};

home.$inject = $inject;

export default home;
