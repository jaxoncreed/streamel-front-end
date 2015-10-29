var React = require('react');
var VideoPlayer = require('../VideoPlayer');
var connectToStores = require('fluxible-addons-react').connectToStores;
var MainStore = require('../../stores/MainStore');

var Watch = React.createClass({
    render: function() {
        var content = (<div></div>);
        if (this.props.video) {
            content = (
                <div>
                    <VideoPlayer video={this.props.video.video}/>
                    <div className="center-sizing padding">
                        <h1>{this.props.video.meta.name}</h1>
                        <p>{this.props.video.meta.description}</p>
                    </div>
                </div>
            )
        }
        return content;
    }
});

module.exports = connectToStores(
	Watch,
	[MainStore],
	function(context, props) {
		return {
            video: context.getStore(MainStore).getVideo()
		}
	}
);
