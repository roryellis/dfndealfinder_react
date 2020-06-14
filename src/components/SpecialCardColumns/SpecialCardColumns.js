import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, Container, Row, Col } from 'react-bootstrap';


function SpecialCardColumns(props) {
	const specialCards = props.specialsList.map((special) => {
		return (
			<Col sm={12} md={6} lg={4} xl={3}>
				<Card key={special.id}>
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

	return (
		<Container>
			<Row>
				{specialCards}
			</Row>
		</Container>
	);
}

export default SpecialCardColumns;
