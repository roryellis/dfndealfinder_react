import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantFilters from '../RestaurantFilters/RestaurantFilters';
import { Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';

function RestaurantList(props) {
	const restaurantCards = props.restaurantsList.map((restaurant) => {
		return (
			<Col sm={12} md={6} lg={4}>
				<Card lg={2} key={restaurant.id}>
					<Card.Img variant='top' src={restaurant.restaurant_image} />
					<Card.Body>
						<Card.Title>{restaurant.name}</Card.Title>
						<Card.Subtitle className='text-muted'>
							{restaurant.city}
						</Card.Subtitle>
						<Card.Text>{restaurant.description}</Card.Text>
						<Button
							variant='primary'
							as={Link}
							to={`/restaurants/${restaurant.id}`}>
							Restaurant Details
						</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	});

	if (props.restaurantsList[0] === undefined) {
		return <Spinner animation='border' variant='danger' />;
	} else {
		return (
			<Container>
				<Row>
					<RestaurantFilters
						restaurantQueries={props.restaurantQueries}
						setRestaurantQueries={props.setRestaurantQueries}
						restaurantsList={props.restaurantsList}
						resetRestaurantQueries={props.resetRestaurantQueries}
					/>
				</Row>
				<Row>
					{restaurantCards}
				</Row>
			</Container>
		);
	}
}

export default RestaurantList;
