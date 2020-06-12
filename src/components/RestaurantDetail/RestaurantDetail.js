import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
		return (
			<div className='restaurant-detail-error'>
				Sorry, no Restaurant information available
			</div>
		);
	} else {
        console.log(selectedRestaurant);
		return <h1>This is my Restaurant detail.</h1>;
	}
}
export default RestaurantDetail;
