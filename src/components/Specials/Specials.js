import React, { useState, useEffect } from 'react';
import { Spinner, Button, Container, Row } from 'react-bootstrap';


import SpecialsList from '../SpecialsList/SpecialsList';

function Specials(props) {
	const [specialsList, setSpecialsList] = useState();

	function getSpecials() {
		let queryString = Object.keys(props.specialQueries)
			.map((key) => key + '=' + props.specialQueries[key])
			.join('&');

		const url = `https://dfndealfinderdjango.herokuapp.com/specials?${queryString}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setSpecialsList(response);
			})
			.catch(console.error);
	}

	useEffect(() => {
		getSpecials();
		//eslint-disable-next-line
	}, [props.specialQueries]);

	if (specialsList === undefined) {
		return <Spinner animation='border' variant='danger' />;
	} else if (specialsList[0] === undefined) {
		return (
			<Container>
				<h2>Sorry, No specials match your criteria</h2>
				<Button variant='outline-danger' onClick={props.resetSpecialQueries}>
					Reset Filters
				</Button>
			</Container>
		);
	} else {
		return (
			<Container>
					<SpecialsList
						specialQueries={props.specialQueries}
						setSpecialQueries={props.setSpecialQueries}
						specialsList={specialsList}
						resetSpecialQueries={props.resetSpecialQueries}
					/>
			</Container>
		);
	}
}

export default Specials;
