import React, { Component } from 'react';

class PlusItView extends Component{
	constructor(props){
		super(props)
	}

	playVideo = () => {
		this.refs.plusitVid.play();
	}

	pauseVideo = () => {
		this.refs.plusitVid.pause();
	}

	render(){
		return(
	<div className="col view-plusit" onClick={this.props.onSelection}>
		<p className="hide-desk app-name">Plus It</p>
			<video ref="plusitVid" className="hide-mobile" loop muted playsinline onMouseEnter={() => this.playVideo()} onMouseLeave={() => this.pauseVideo()}>
				  <source src="./assets/plusit.mp4" type="video/mp4" />
			</video>
	</div>
	)
	}
}

export default PlusItView