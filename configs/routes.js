module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        handler: require('../components/home/Home'),
        action: require('../actions/search/getRecommendedContentAction')
    },
    upload: {
        path: '/upload',
        method: 'get',
        page: 'upload',
        title: 'Upload',
        handler: require('../components/upload/Upload')
    },
    watch: {
        path: '/watch',
        method: 'get',
        page: 'watch',
        title: 'Watch',
        handler: require('../components/watch/Watch'),
        action: require('../actions/watch/getSeries')
    },
    search: {
        path: '/search',
        method: 'get',
        page: 'search',
        title: 'Search',
        handler: require('../components/srp/Srp'),
        action: require('../actions/search/searchFromUrlAction')
    }
};
