module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/home/Home'),
        action: require('../actions/search/getRecommendedContentAction')
    },
    watch: {
        path: '/watch',
        method: 'get',
        page: 'watch',
        title: 'Watch',
        handler: require('../components/watch/Watch'),
        action: require('../actions/watch/getSeries')
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About Streamel',
        handler: require('../components/about/About')
    }
};
