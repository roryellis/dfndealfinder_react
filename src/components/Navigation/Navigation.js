import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
			<React.Fragment>
				<Nav justify variant='tabs' defaultActiveKey='link-1'>
					<Nav.Item>
						<Nav.Link as={Link} to='/specials' eventKey='link-1'>
							Specials
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link as={Link} to='/restaurants' eventKey='link-2'>
							Restaurants
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</React.Fragment>
		);
}

export default Navigation;