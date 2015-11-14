var React = require('react');
var NavLink = require('fluxible-router').NavLink;

var ContentView = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        poster: React.PropTypes.string.isRequired,
        thumbnail: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired
    },
    render: function() {
        var content;

        return (
            <div className="streamel-cv-menu">
                <div className="streamel-cv-menu-content">
                    <div className="streamel-cv-menu-background">
                        <img src={this.props.thumbnail} className="streamel-cv-menu-background-image" />
                    </div>
                    <NavLink href={"/watch?id=" + this.props.id} className="no-link">
                        <div className="streamel-cv-menu-background-overlay"></div>
                    </NavLink>
                    <div className="streamel-cv-menu-poster" style={{backgroundImage: 'url(' + this.props.poster + ')'}}></div>
                    <div className="streamel-cv-menu-text">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ContentView;
