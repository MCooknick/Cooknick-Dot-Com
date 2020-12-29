import React, { useRef, useState } from 'react';

const PreviewWrapper = ({ vidSrc }) => {
	const [isLoading, setIsLoading] = useState(true);

	const videoPlayer = useRef(null)

	const playVideo = () => {
		videoPlayer.current.play();
	}

	const pauseVideo = () => {
		videoPlayer.current.pause();
	}

	return (
		<div className="previewWrapper">

			<div className={`hide-moble loader ${isLoading ? '' : 'hide'}`}>
				<p>Loading</p>
			</div>

			{vidSrc &&
				<div className={`hide-moble videoPreview ${isLoading ? 'isLoading' : ''}`}>
					<video
						ref={videoPlayer}
						className="hide-mobile"
						loop
						muted
						playsinline
						onLoadedData={() => setIsLoading(false)}
						onMouseEnter={() => playVideo()}
						onMouseLeave={() => pauseVideo()} >
						<source src={vidSrc} type="video/mp4" />
					</video>
				</div>}
		</div>
	)
}

export default PreviewWrapper