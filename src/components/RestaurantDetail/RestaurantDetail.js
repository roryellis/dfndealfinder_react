import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import RestaurantSpecialCardColumns from '../RestaurantSpecialCardColumns/RestaurantSpecialCardColumns';

function RestaurantDetail() {
	let { id } = useParams();
	const [selectedRestaurant, setSelectedRestaurant] = useState({});
	const [diningOptionsString, setDiningOptionsString] = useState({});
	const [cuisineOptionsString, setCuisineOptionsString] = useState({});
	const [specialsList, setSpecialsList] = useState();

	const getRestaurant = () => {
		const url = `http://localhost:8000/restaurants/${id}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setSelectedRestaurant(response);
				getDiningOptionsString(response);
				getCuisineOptionsString(response);
				setSpecialsList(response.specials);
			})
			.catch(console.error);
	};

	useEffect(() => {
		getRestaurant();
		//eslint-disable-next-line
	}, []);

	const getDiningOptionsString = (restaurant) => {
		let string = ' ';
		for (let i = 0; i < restaurant.dining_options.length; i++) {
			string += `${restaurant.dining_options[i]}, `;
		}

		return setDiningOptionsString(string);
	};

	const getCuisineOptionsString = (restaurant) => {
		let string = ' ';
		for (let i = 0; i < restaurant.cuisine.length; i++) {
			string += `${restaurant.cuisine[i]}, `;
		}

		return setCuisineOptionsString(string);
	};

	if (selectedRestaurant.name === undefined) {
		return <Spinner animation='border' variant='danger' />;
	} else {
		return (
			<React.Fragment>
				<Jumbotron fluid>
					<h1>{selectedRestaurant.name}</h1>
					<p>
						{selectedRestaurant.address}
						<br />
						{selectedRestaurant.city}, {selectedRestaurant.state}{' '}
						{selectedRestaurant.zip}
					</p>
					<p>{`Dining options:${diningOptionsString}`}</p>
					<p>{`Cuisine:${cuisineOptionsString}`}</p>
					<a
						href={selectedRestaurant.website_url}
						target='_blank'
						rel='noopener noreferrer'>
						<Button variant='primary'>Visit Website</Button>
					</a>
				</Jumbotron>

				{specialsList && (
					<RestaurantSpecialCardColumns specialsList={specialsList} />
				)}
			</React.Fragment>
		);
	}
}
export default RestaurantDetail;
