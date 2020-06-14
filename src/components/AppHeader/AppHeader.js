import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Container, Row, Col } from 'react-bootstrap';

function AppHeader(props) {
	return (
		<Container className='app-header'>
			<Row>
				<Col >
					<Logo />
				</Col>
				</Row>
				<Row>
				<Col className="align-text-bottom">
					<h1>Deal Finder</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<Navigation />
				</Col>
			</Row>
		</Container>
	);
}

export default AppHeader;
