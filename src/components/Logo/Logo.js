import React from 'react';
import { Link } from 'react-router-dom'

function Logo(props) {
	return (
			<Link to="/"><img src="http://www.dallasfoodnerd.com/wp-content/uploads/2017/04/cropped-dallasfoodnerd-logo-1.jpg" alt="DallasFoodNerdLogo" /></Link>
	);
}

export default Logo;
