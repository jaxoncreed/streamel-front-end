var React = require('react');
var ContentView = require('../contentView/ContentView');
var MainStore = require('../../stores/MainStore');
var connectToStores = require('fluxible-addons-react').connectToStores;
var NavLink = require('fluxible-router').NavLink;

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <div className="streamel-home-banner"></div>
                <div className="streamel-home-spacer"></div>
                <div className="streamel-home-content">
                    <h1 className="center-sizing padding">Recommended Videos</h1>
                    {this.props.recommended.map(function(result) { return (
                        <ContentView
                            state="menu"
                            content={result} />
                    )})}
                </div>
            </div>
        );
    }
});

module.exports = connectToStores(
    Home,
    [MainStore],
    function(context, props) {
        var store = context.getStore(MainStore);
        return {
            recommended: store.getRecommended()
        }
    }
);