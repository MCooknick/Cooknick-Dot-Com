import React, { Component } from 'react';

class ThickitView extends Component{
	constructor(props){
		super(props)
	}

	playVideo = () => {
		this.refs.thickitVid.play();
	}

	pauseVideo = () => {
		this.refs.thickitVid.pause();
	}

	render(){
		return(
	<div className="col view-thickit" onClick={this.props.onSelection}>
		<p className="hide-desk app-name">Thickit</p>
			<video ref="thickitVid" className="hide-mobile" loop muted playsInline onMouseEnter={() => this.playVideo()} onMouseLeave={() => this.pauseVideo()}>
				  <source src="./assets/thickit.mp4" type="video/mp4" />
			</video>
	</div>
	)
	}
}

export default ThickitView