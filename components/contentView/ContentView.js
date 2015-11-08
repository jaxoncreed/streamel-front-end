var React = require('react');

var states = {
    menu: require('./SummaryMenu'),
    video: require('./Video')
}

var ContentView = React.createClass({
    propTypes: {
        content: React.PropTypes.object,
        state: React.PropTypes.string.isRequired
    },
    render: function() {
        var StateComponent = states[this.props.state];

        return (
            <div className="streamel-contentview-container" key="cv">
                <StateComponent content={this.props.content} 
                    title={this.props.content.name} 
                    description={this.props.content.description} 
                    poster={this.props.content.film.poster}
                    thumbnail={this.props.content.film.thumbnail}
                    id={this.props.content.film.id} />
            </div>
        );
    }
});

module.exports = ContentView;