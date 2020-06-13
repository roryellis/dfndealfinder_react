import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantFilters from '../RestaurantFilters/RestaurantFilters';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

function RestaurantList(props) {
	const restaurantCards = props.restaurantsList.map((restaurant) => {
		return (
			<Col
				xs={1}
				sm={'auto'}
				key={restaurant.id}
				className='justify-content-center'>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src={restaurant.restaurant_image} />
					<Card.Body>
						<Card.Title>{restaurant.name}</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
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
					<Col>
						<RestaurantFilters
							restaurantQueries={props.restaurantQueries}
							setRestaurantQueries={props.setRestaurantQueries}
							restaurantsList={props.restaurantsList}
							resetRestaurantQueries={props.resetRestaurantQueries}
						/>
					</Col>
				</Row>
				<Row>{restaurantCards}</Row>
			</Container>
		);
	}
}

export default RestaurantList;
