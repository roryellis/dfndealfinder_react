import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import RestaurantFilters from '../RestaurantFilters/RestaurantFilters';
import Spinner from 'react-bootstrap/Spinner';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';

function Restaurants(props) {
    const [restaurantsList, setRestaurantsList] = useState([]);

	const getRestaurants = () => {
		const url = `http://localhost:8000/restaurants`;
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
	}, []);

	if (restaurantsList[0] === undefined) {
		return <Spinner animation='border' variant='danger' />;
	} else {
        return (
            <section className='restaurants-Container'>
                <h1>This is my Restaurants Route</h1>
                <Switch>
                    <Route
                        path='/restaurants'
                        exact
                        render={() => {
                            return <RestaurantsList restaurantsList={restaurantsList} />;
                        }}
                    />
                    <Route
                        path='/restaurants/:id'
                        component={RestaurantDetail}
                    />
                </Switch>
            </section>
        );
    }
}

export default Restaurants;
