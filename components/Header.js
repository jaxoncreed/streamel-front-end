var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var NavigateAction = require('fluxible-router').navigateAction;
var CircleButton = require('./oui/CircleButton');

var Header = React.createClass({
    render: function() {
        return (
            <header className="streamel-header">
                <span className="streamel-header-logo">
                    <NavLink href="/">
                        <img src="/public/images/logo.png" className="above-600" />
                        <img src="/public/images/logosmall.png" className="below-600" />
                    </NavLink>
                </span>
                <NavLink href="/about" 
                        className="no-link streamel-header-item">
                    About
                </NavLink>
                <a href="https://docs.google.com/forms/d/1gFqHz9cvUOQq2Hy503KbH8cXMZa4vnKJnpo9nwK-jKo/viewform"
                        target="_blank" 
                        className="no-link streamel-header-item">
                    Submit Your Content
                </a>
            </header>
        );
    }
});

module.exports = Header;