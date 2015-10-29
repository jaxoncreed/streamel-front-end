var React = require('react');

var VideoPlayer = React.createClass({
	render: function() {
		return (
			<div className="video-container">
				<video controls autoPlay className="video-player">
					<source src={this.props.video} type="video/mp4" />
				</video>
			</div>
		);
	},
});

module.exports = VideoPlayer;