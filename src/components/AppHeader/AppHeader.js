import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function AppHeader(props) {
	return (
		<section className='app-header'>
            <Logo />
			<h1>Deal Finder</h1>
			<Navigation />
		</section>
	);
}

export default AppHeader;
