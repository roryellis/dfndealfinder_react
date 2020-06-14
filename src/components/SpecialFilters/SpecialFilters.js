import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function SpecialFilters(props) {
	const [categories, setCategories] = useState([]);
	const [dailyOptions, setDailyOptions] = useState([]);

	function handleCategorySelect(e) {
		props.setSpecialQueries({ ...props.specialQueries, category: e });
	}

	function getCategories(list) {
		const uniqueCategories = [];

		for (let i = 0; i < list.length; i++) {
			for (let j = 0; j < list[i].category.length; j++) {
				if (uniqueCategories.includes(list[i].category[j]) === false) {
					uniqueCategories.push(list[i].category[j]);
				}
			}
		}

		return uniqueCategories;
	}

	function handleDailySelect(e) {
		props.setSpecialQueries({ ...props.specialQueries, special_day: e });
	}

	function getDailyOptions(list) {
		const uniqueDailyOptions = [];

		for (let i = 0; i < list.length; i++) {
			if (list[i].special_day != null) {
				if (uniqueDailyOptions.includes(list[i].special_day) === false) {
					uniqueDailyOptions.push(list[i].special_day);
				}
			}
		}
		return uniqueDailyOptions;
	}

	useEffect(() => {
		setCategories(getCategories(props.specialsList));
		setDailyOptions(getDailyOptions(props.specialsList));
		// eslint-disable-next-line
	}, []);

	const categoryDropdowns = categories.map((category) => {
		return (
			<Dropdown.Item eventKey={category} key={category}>
				{category}
			</Dropdown.Item>
		);
	});

	const dailyOptionsDropdowns = dailyOptions.map((option) => {
		return (
			<Dropdown.Item eventKey={option} key={option}>
				{option}
			</Dropdown.Item>
		);
	});

	return (
		<Container>
			<Row>
				<Col md={4} xs={6}>
					<Dropdown onSelect={handleCategorySelect}>
						<Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
							Category
						</Dropdown.Toggle>

						<Dropdown.Menu>{categoryDropdowns}</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col md={4} xs={6}>
					<Dropdown onSelect={handleDailySelect}>
						<Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
							Daily Special
						</Dropdown.Toggle>

						<Dropdown.Menu>{dailyOptionsDropdowns}</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col md={4} xs={12}>
					<Button variant='outline-danger' onClick={props.resetSpecialQueries}>
						Reset Filters
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default SpecialFilters;
