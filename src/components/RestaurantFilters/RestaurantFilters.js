import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function RestaurantFilters(props) {
	const [cuisineOptions, setCuisineOptions] = useState([]);
	const [diningOptions, setDiningOptions] = useState([]);
	const [cityOptions, setCityOptions] = useState([]);

	function handleCuisineSelect(e) {
		props.setRestaurantQueries({ ...props.restaurantQueries, cuisine: e });
	}

	function getCuisineOptions(list) {
		const uniqueCuisine = [];

		for (let i = 0; i < list.length; i++) {
			for (let j = 0; j < list[i].cuisine.length; j++) {
				if (uniqueCuisine.includes(list[i].cuisine[j]) === false) {
					uniqueCuisine.push(list[i].cuisine[j]);
				}
			}
		}

		return uniqueCuisine;
	}

	function handleDiningSelect(e) {
		props.setRestaurantQueries({
			...props.restaurantQueries,
			dining_options: e,
		});
	}

	function getDiningOptions(list) {
		const uniqueDiningOptions = [];

		for (let i = 0; i < list.length; i++) {
			for (let j = 0; j < list[i].cuisine.length; j++) {
				if (uniqueDiningOptions.includes(list[i].dining_options[j]) === false) {
					uniqueDiningOptions.push(list[i].dining_options[j]);
				}
			}
		}
		return uniqueDiningOptions;
	}

	function handleCitySelect(e) {
		props.setRestaurantQueries({
			...props.restaurantQueries,
			city: e,
		});
	}

	function getCityOptions(list) {
		const uniqueCityOptions = [];

		for (let i = 0; i < list.length; i++) {
			if (list[i].city != null) {
				if (uniqueCityOptions.includes(list[i].city) === false) {
					uniqueCityOptions.push(list[i].city);
				}
			}
		}
		return uniqueCityOptions;
	}

	useEffect(() => {
		setCuisineOptions(getCuisineOptions(props.restaurantsList));
		setDiningOptions(getDiningOptions(props.restaurantsList));
		setCityOptions(getCityOptions(props.restaurantsList));
		// eslint-disable-next-line
	}, []);

	const cuisineDropdowns = cuisineOptions.map((option) => {
		return (
			<Dropdown.Item eventKey={option} key={option}>
				{option}
			</Dropdown.Item>
		);
	});

	const diningOptionsDropdowns = diningOptions.map((option) => {
		return (
			<Dropdown.Item eventKey={option} key={option}>
				{option}
			</Dropdown.Item>
		);
    });
    
    const cityOptionsDropdowns = cityOptions.map((option) => {
			return (
				<Dropdown.Item eventKey={option} key={option}>
					{option}
				</Dropdown.Item>
			);
		});

	return (
		<Container>
			<Row>
				<Col>
					<Dropdown onSelect={handleCuisineSelect}>
						<Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
							Cuisine
						</Dropdown.Toggle>

						<Dropdown.Menu>{cuisineDropdowns}</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col>
					<Dropdown onSelect={handleDiningSelect}>
						<Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
							Dining Options
						</Dropdown.Toggle>

						<Dropdown.Menu>{diningOptionsDropdowns}</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col>
					<Dropdown onSelect={handleCitySelect}>
						<Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
							City
						</Dropdown.Toggle>

						<Dropdown.Menu>{cityOptionsDropdowns}</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col>
					<Button
						variant='outline-danger'
						onClick={props.resetRestaurantQueries}>
						Reset Filters
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default RestaurantFilters;
