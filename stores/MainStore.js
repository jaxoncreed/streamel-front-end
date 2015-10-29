var createStore = require('fluxible/addons/createStore');

var MainStore = createStore({
    storeName: 'MainStore',
    handlers: {
        'SEARCH_RESULTS_RECEIVED': "handleSearchResultsReceived",
        'SEARCH_TERM_UPDATED': "handleSearchTermUpdated",
        'RECOMMENDED_CONTENT_RECEIVED': "handleRecommendedContentReceived",
        'VIDEO_CHANGED': "handleVideoChanged"
    },
    initialize: function(dispatcher) {
        this.o = {};
        this.o.searchTerm = "";
        this.o.searchResults = [];
        this.o.recommended = [];
        this.o.video = null;
    },

    /* Handlers */
    handleSearchResultsReceived: function(payload) {
        this.o.term = payload.term;
        this.o.results = payload.results;
        this.emitChange();
    },
    handleSearchTermUpdated: function(payload) {
        this.term = payload.term;
        this.emitChange();
    },
    handleRecommendedContentReceived: function(payload) {
        this.o.recommended = payload;
        this.emitChange();
    },
    handleVideoChanged: function(payload) {
        this.o.video = payload;
        this.emitChange();
    },

    /* Getters */
    getSearchTerm: function() {
        return this.o.searchTerm;
    },
    getSearchResults: function() {
        return this.o.searchResults;
    },
    getRecommended: function() {
        return this.o.recommended;
    },
    getVideo: function() {
        return this.o.video;
    },

    /* Hydration */
    dehydrate: function() {
        return this.o;
    },
    rehydrate: function(state) {
        this.o = state;
    }
});

module.exports = MainStore;