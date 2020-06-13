import React from 'react';
import { Link } from 'react-router-dom';
import SpecialFilters from '../SpecialFilters/SpecialFilters';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

function SpecialList(props) {

	const specialCards = props.specialsList.map((special) => {
		return (
			<Col xs={1} sm={"auto"} key={special.id} className='justify-content-center'>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src={special.promo_image} />
					<Card.Body>
						<Card.Title>{special.restaurant.name}</Card.Title>
						<Card.Subtitle className='mb-2'>{special.name}</Card.Subtitle>
						<Card.Subtitle className='mb-2 text-muted'>
							{special.special_day}
						</Card.Subtitle>
						<Card.Text>{special.description}</Card.Text>
						<Button
							variant='primary'
							as={Link}
							to={`/restaurants/${special.restaurant.id}`}>
							Restaurant Details
						</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	});

	if (props.specialsList[0] === undefined) {
		return <Spinner animation='border' variant='danger' />;
	} else {
		return (
			<Container>
				<Row>
					<Col>
						<SpecialFilters
							specialQueries={props.specialQueries}
							setSpecialQueries={props.setSpecialQueries}
							specialsList={props.specialsList}
							resetSpecialQueries={props.resetSpecialQueries}
						/>
					</Col>
				</Row>
				<Row>{specialCards}</Row>
			</Container>
		);
	}
}

export default SpecialList;
