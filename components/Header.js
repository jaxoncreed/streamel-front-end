var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var NavigateAction = require('fluxible-router').navigateAction;
var CircleButton = require('./oui/CircleButton');

var Header = React.createClass({
    render: function() {
        return (
            <header className="streamel-header no-link">
                <div className="streamel-header-item">
                    <NavLink href="/">
                        <img src="/public/images/logo.png" />
                    </NavLink>
                </div>
            </header>
        );
    }
});

module.exports = Header;