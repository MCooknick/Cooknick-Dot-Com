import React, { useRef } from 'react';

const PreviewWrapper = ({ vidSrc, imgSrc, isPhoneApp }) => {
	const videoPlayer = useRef(null)

	const playVideo = () => {
		videoPlayer.current.play();
	}

	const pauseVideo = () => {
		videoPlayer.current.pause();
	}

	return (
		<div className="previewWrapper">

			<div className={`${vidSrc ? 'hide-desk ' : ''} imagePreview`} style={{ backgroundImage: `url(${imgSrc})` }} />

			{vidSrc &&
				<div className={`hide-moble videoPreview ${isPhoneApp ? 'isPhoneApp' : ''}`}>
					<video
						ref={videoPlayer}
						className="hide-mobile"
						loop
						muted
						playsinline
						poster={imgSrc}
						onMouseEnter={() => playVideo()}
						onMouseLeave={() => pauseVideo()} >
						<source src={vidSrc} type="video/mp4" />
					</video>
				</div>}
		</div>
	)
}

export default PreviewWrapper