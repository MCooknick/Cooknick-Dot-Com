import React from 'react';

const AccutypeInfo = ({onSelection, activeview}) => {
	let active = (activeview === 'ACCUTYPE')? 'active':'hidden hide-mobile';

	let classes = `col info  ${active}`;

	return (
	<div className={classes}>
		<div className="info-container">
			<div className="hide-desk mob-video" >
				<video  loop autoPlay muted playsInline>
				  <source src="./assets/accutype_white.mp4" type="video/mp4" />
				</video>
			</div>

			<div className="info-inner info-title-container">
				
				<div>
					<p className="app-title">Accutype</p>
				</div>
				<div className="x-mark-container">
					<span onClick={onSelection} >
						<img src="./assets/x-mark-black.png" className="x-mark" width="20"/>
					</span>
				</div>
			</div>

			<hr />

			<div className="info-inner">
				<p className="tech-details hide-mobile">Techincal Details</p>
				<ul>
					<li>React Native</li>
					<li>Node JS Server</li>
					<li>MySQL</li>
					<li>Facebook API Intergration</li>
				</ul>
			</div>
		</div>
	</div>
	)
}

export default AccutypeInfo