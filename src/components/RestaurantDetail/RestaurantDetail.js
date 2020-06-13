import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';

function RestaurantDetail() {
	let { id } = useParams();
	const [selectedRestaurant, setSelectedRestaurant] = useState({});

	const getRestaurant = () => {
		const url = `http://localhost:8000/restaurants/${id}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setSelectedRestaurant(response);
			})
			.catch(console.error);
	};

	useEffect(() => {
		getRestaurant();
		//eslint-disable-next-line
	}, []);
	if (selectedRestaurant.name === undefined) {
		return <Spinner animation='border' variant='danger' />;
	} else {
		return (
			<Container>
				<Row className='justify-content-md-center'>
					<Col className='justify-content-md-center'>
						<Image src={selectedRestaurant.restaurant_image} rounded />
					</Col>
				</Row>
				<Row className='justify-content-md-center'>
					<Col className='justify-content-md-center'>
						<Jumbotron fluid>
							<Container>
								<h1>{selectedRestaurant.name}</h1>
								<p>
									This is a modified jumbotron that occupies the entire
									horizontal space of its parent.
								</p>
							</Container>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		);
	}
}
export default RestaurantDetail;
