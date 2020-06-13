import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import RestaurantsList from '../RestaurantsList/RestaurantsList';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';

function Restaurants(props) {
    const [restaurantsList, setRestaurantsList] = useState([]);

	function getRestaurants() {
        let queryString = Object.keys(props.restaurantQueries)
						.map((key) => key + '=' + props.restaurantQueries[key])
						.join('&');

		const url = `https://dfndealfinderdjango.herokuapp.com//restaurants?${queryString}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
                setRestaurantsList(response);
			})
			.catch(console.error);
	};

	useEffect(() => {
		getRestaurants();
		//eslint-disable-next-line
	}, [props.restaurantQueries]);

	if (restaurantsList === undefined) {
		return <Spinner animation='border' variant='danger' />;
	} else if (restaurantsList[0] === undefined) {
		return (
			<Container>
				<h2>Sorry, No restaurants match your criteria</h2>
				<Button variant='outline-danger' onClick={props.resetRestaurantQueries}>
					Reset Filters
				</Button>
			</Container>
		);
	} else {
		return (
			<Container className='restaurants-Container'>
				<Switch>
					<Route
						path='/restaurants'
						exact
						render={() => {
							return (
								<RestaurantsList
									restaurantQueries={props.restaurantQueries}
									setRestaurantQueries={props.setRestaurantQueries}
									restaurantsList={restaurantsList}
									resetRestaurantQueries={props.resetRestaurantQueries}
								/>
							);
						}}
					/>
					<Route path='/restaurants/:id' component={RestaurantDetail} />
				</Switch>
			</Container>
		);
	}
}

export default Restaurants;
