import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

function RestaurantSpecialCardColumns(props) {
	const specialCards = props.specialsList.map((special) => {
		return (
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
		);
	});

	return <CardColumns>{specialCards}</CardColumns>;
}

export default RestaurantSpecialCardColumns;
