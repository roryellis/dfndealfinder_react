import React from 'react';
import SpecialFilters from '../SpecialFilters/SpecialFilters';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import SpecialCardColumns from '../SpecialCardColumns/SpecialCardColumns';

function SpecialList(props) {
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
				<Row>
					<Col>
						<SpecialCardColumns specialsList={props.specialsList} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default SpecialList;
