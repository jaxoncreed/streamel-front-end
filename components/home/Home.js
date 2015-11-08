var React = require('react');
var ContentView = require('../contentView/ContentView');
var MainStore = require('../../stores/MainStore');
var connectToStores = require('fluxible-addons-react').connectToStores;
var NavLink = require('fluxible-router').NavLink;

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="center-sizing padding">Recommended Videos</h1>
                {this.props.recommended.map(function(result) { return (
                    <ContentView
                        state="menu"
                        content={result} />
                )})}
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
                <ContentView state="menu" content={this.props.recommended[0]} />
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