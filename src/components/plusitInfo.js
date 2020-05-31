import React from 'react';

const PlusItInfo = ({onSelection, activeview}) => {
	let active = (activeview === 'PLUSIT')? 'active':'hidden hide-mobile';

	let classes = `col info ${active}`;

	return (
	<div className={classes}>
		<div className="info-container">
			<div className="hide-desk mob-video" >
				<video autoPlay loop muted playsInline >
				  <source src="./assets/plusit_white.mp4" type="video/mp4"/>
				</video>
			</div>

			<div className="info-inner info-title-container">
				
				<div>
					<p className="app-title">Plus It</p>
				</div>
				<div className="x-mark-container" >
					<span onClick={onSelection} >
						<img alt="close" src="./assets/x-mark-black.png" className="x-mark" width="20" />
					</span>
				</div>
			</div>

			<hr />

			<div className="info-inner">
				<p className="tech-details hide-mobile">Techincal Details</p>
				<ul>
					<li>React Native</li>
					<li>Server-Side PHP</li>
					<li>MySQL</li>
				</ul>
			</div>
		</div>
	</div>
	)
}

export default PlusItInfo