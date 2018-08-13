import React, { Component } from 'react';

class AccutypeView extends Component{
	constructor(props){
		super(props)
	}

	playVideo = () => {
		this.refs.accutypeVid.play();
	}

	pauseVideo = () => {
		this.refs.accutypeVid.pause();
	}

	render(){
		return(
		<div className="col view-accutype" onClick={this.props.onSelection}>
			<p className="hide-desk app-name">Accutype</p>
				<video className="hide-mobile" ref="accutypeVid" loop muted playsInline onMouseEnter={() => this.playVideo()} onMouseLeave={() => this.pauseVideo()}>
					  <source src="./assets/accutype.mp4" type="video/mp4" />
				</video>
		</div>
		)
	}
}

export default AccutypeView