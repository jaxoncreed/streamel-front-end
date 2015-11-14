var React = require('react');

var VideoPlayer = React.createClass({
	render: function() {
		return (
			<div className="streamel-video-container">
                <div className="streamel-video-player">
    				<video controls autoPlay>
    					<source src={this.props.video.video} type="video/mp4" />
    				</video>
                </div>
                <div className="streamel-video-info">
                    <img className="streamel-video-info-image" src={this.props.video.poster} />
                    <div className="streamel-video-info-text">
                        <h1>{this.props.video.meta.name}</h1>
                        <p>{this.props.video.meta.description}</p>
                    </div>
                </div>
			</div>
		);
	},
});

module.exports = VideoPlayer;