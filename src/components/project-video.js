import React, { useRef } from 'react';

const ProjectVideo = ({src}) => {
	const videoPlayer = useRef(null)

	const playVideo = () => {
		videoPlayer.current.play();
	}

	const pauseVideo = () => {
		videoPlayer.current.pause();
	}

	return (
		<div className="videoPreview">
			<p className="hide-desk app-name">Plus It</p>
            <video 
                ref={videoPlayer} 
                className="hide-mobile" 
                loop 
                muted 
                playsinline 
                onMouseEnter={() => playVideo()} 
                onMouseLeave={() => pauseVideo()} >
				<source src={src} type="video/mp4" />
			</video>
		</div>
	)
}

export default ProjectVideo