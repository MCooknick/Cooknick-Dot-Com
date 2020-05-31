import React from 'react';

const Home = ({onSelection, activeview}) => {
	
	let active = (activeview === 'HOME')? '':'hidden hide-mobile';

	let classes = `col ${active}`

	return(
	<div className={classes}>
		<div>
			<div onClick={onSelection}>
				<div className="1-title">
					<h1>Mike Cooknick</h1>
					<h2>Front End Developer</h2>
				</div>
				<div className="1-contact">
					<p>
						<a href="https://twitter.com/mikecooknick">Twitter</a> 
						<span> | </span> 
						<a href="mailto:business@cooknick.com">business@cooknick.com</a>
					</p>
				</div>
			</div>
		</div>
	</div>
	)
}


export default Home