var React = require('react');
var FilmResult = require('../srp/FilmResult');
var MainStore = require('../../stores/MainStore');
var connectToStores = require('fluxible-addons-react').connectToStores;
var NavLink = require('fluxible-router').NavLink;

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <div className="streamel-home-banner"></div>
                <a className="no-link" href="https://docs.google.com/forms/d/1gFqHz9cvUOQq2Hy503KbH8cXMZa4vnKJnpo9nwK-jKo/viewform?usp=send_form" target="_blank">
                    <div className="streamel-home-center-button">Submit your Content</div>
                </a>
                <h1 className="center-sizing padding">Recommended Videos</h1>
                <hr className= "center-sizing"/>
                {this.props.recommended.map(function(result) { return (
                    <NavLink href={"/watch?id=" + result.film.id} className="no-link">
                        <FilmResult title={result.name} 
                            description={result.description} 
                            poster={result.film.poster}
                            thumbnail={result.film.thumbnail} /> 
                    </NavLink>
                )})}
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