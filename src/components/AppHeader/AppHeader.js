import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Container from 'react-bootstrap/Container';

function AppHeader(props) {
	return (
		<Container className='app-header'>
            <Logo />
			<h1>Deal Finder</h1>
			<Navigation />
		</Container>
	);
}

export default AppHeader;
