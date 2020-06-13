import React from 'react';
import SpecialFilters from '../SpecialFilters/SpecialFilters';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import SpecialCardColumns from '../SpecialCardColumns/SpecialCardColumns'

function SpecialList(props) {
	
	if (props.specialsList[0] === undefined) {
		return <Spinner animation='border' variant='danger' />;
	} else {
		return (
			<Container>
				<SpecialFilters
					specialQueries={props.specialQueries}
					setSpecialQueries={props.setSpecialQueries}
					specialsList={props.specialsList}
					resetSpecialQueries={props.resetSpecialQueries}
				/>
				<SpecialCardColumns specialsList={props.specialsList} />
			</Container>
		);
	}
}

export default SpecialList;
