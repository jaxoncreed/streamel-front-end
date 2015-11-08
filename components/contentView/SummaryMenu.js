var React = require('react');

var ContentView = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        poster: React.PropTypes.string.isRequired,
        thumbnail: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
    },
    render: function() {
        var content;

        return (
            <div className="streamel-cv-menu">
                <div className="streamel-cv-menu-content">
                    <div className="streamel-cv-menu-background" style={{backgroundImage: 'url(' + this.props.thumbnail + ')'}}></div>
                    <div className="streamel-cv-menu-background-overlay"></div>
                    <div className="streamel-cv-menu-poster" style={{backgroundImage: 'url(' + this.props.poster + ')'}}></div>
                    <div className="streamel-cv-menu-text">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ContentView;




/*<div className="streamel-search-item-content">
                    <div className="streamel-search-item-poster" style={{backgroundImage: "url(" + this.props.poster + ")"}}></div>
                    <div className="streamel-search-item-text">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className="streamel-search-item-thumbnail" style={{backgroundImage: "url(" + this.props.thumbnail + ")"}}>
                    <div className="streamel-search-item-thumbnail-overlay"></div>
                </div>*/