import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';

function SpecialCardColumns(props) {
    const specialCards = props.specialsList.map((special) => {
			return (
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
			);
		});

	return <CardColumns>{specialCards}</CardColumns>;
}

export default SpecialCardColumns;