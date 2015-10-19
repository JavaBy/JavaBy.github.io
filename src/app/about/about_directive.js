const $inject = [];
const about = function () {
    return {
        template: require('./about.html')
    };
};

about.$inject = $inject;

export default about;
