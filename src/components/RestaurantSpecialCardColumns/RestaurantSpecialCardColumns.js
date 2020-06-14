import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function RestaurantSpecialCardColumns(props) {
	const specialCards = props.specialsList.map((special) => {
		return (
			<Col sm={12} md={6} lg={4}>
				<Card key={special.id}>
					<Card.Img variant='top' src={special.promo_image} />
					<Card.Body>
						<Card.Title>{special.name}</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
							{special.special_day}
						</Card.Subtitle>
						<Card.Text>{special.description}</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	});

	return (
		<Container>
			<Row>{specialCards};</Row>
		</Container>
	);
}

export default RestaurantSpecialCardColumns;
