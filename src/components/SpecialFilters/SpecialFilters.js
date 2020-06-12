import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SpecialFilters(props) {

    function handleCategorySelect(e) {
        console.log(e)
    }
    return (
			<Container>
				<Row>
					<Col>
						<Dropdown>
							<Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
								Category
							</Dropdown.Toggle>

							<Dropdown.Menu>

                                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
								<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
								<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
								<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Col>
					<Col>
						<Dropdown>
							<Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
								Daily Special
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
								<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
								<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Col>
				</Row>
			</Container>
		);    
}

export default SpecialFilters;