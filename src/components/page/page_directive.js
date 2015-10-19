const $inject = [];
const page = function () {
    return {
        transclude: true,
        template: require('./page.html')
    };
};

page.$inject = $inject;

export default page;
