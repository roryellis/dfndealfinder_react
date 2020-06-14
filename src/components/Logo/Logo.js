import React from 'react';
import { Link } from 'react-router-dom'

function Logo(props) {
	return (
		<Link to='/'>
			<img
				src='https://dfndealfinder.s3.us-east-2.amazonaws.com/images/cropped-dallasfoodnerd-logo-1.jpg'
				className="logo" alt='DallasFoodNerdLogo'
			/>
		</Link>
	);
}

export default Logo;
