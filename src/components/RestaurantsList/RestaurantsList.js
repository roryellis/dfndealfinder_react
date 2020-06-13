import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantFilters from '../RestaurantFilters/RestaurantFilters';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import CardColumns from 'react-bootstrap/CardColumns';

function RestaurantList(props) {
	const restaurantCards = props.restaurantsList.map((restaurant) => {
		return (
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
		);
	});

	if (props.restaurantsList[0] === undefined) {
		return <Spinner animation='border' variant='danger' />;
	} else {
		return (
			<Container>
				<RestaurantFilters
					restaurantQueries={props.restaurantQueries}
					setRestaurantQueries={props.setRestaurantQueries}
					restaurantsList={props.restaurantsList}
					resetRestaurantQueries={props.resetRestaurantQueries}
				/>

				<CardColumns>{restaurantCards}</CardColumns>
			</Container>
		);
	}
}

export default RestaurantList;
