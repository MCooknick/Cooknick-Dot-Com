import React from 'react';

const ThickitInfo = ({onSelection, activeview}) => {
	let active = (activeview === 'THICKIT')? 'active':'hidden hide-mobile';

	let classes = `col info ${active}`;

	return (
	<div  className={classes}>
		<div className="info-container">
			<div className="hide-desk mob-video" >
				<video loop autoPlay muted playsInline>
					<source src="./assets/thickit_white.mp4" type="video/mp4"/>
				</video>
			</div>

			<div className="info-inner info-title-container">
				<div>
					<p className="app-title">Thicket</p>
				</div>
			
				<div className="x-mark-container">
					<span onClick={onSelection}>
						<img alt="close" src="./assets/x-mark-black.png" className="x-mark" width="20"/>
					</span>
				</div>
			</div>

			<hr />

			<div className="info-inner">
				<p className="tech-details hide-mobile">Techincal Details</p>
				<ul>
					<li>jQuery</li>
					<li>MySQL</li>
					<li>Cordova (Phone Gap)</li>
					<li>Server-side PHP</li>
					<li>Native Camera and Push Notification</li>
					<li>Users Profiles and Generated Content</li>
				</ul>
			</div>
		</div>
	</div>
	)
}

export default ThickitInfo