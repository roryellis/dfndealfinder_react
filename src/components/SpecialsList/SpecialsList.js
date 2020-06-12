import React from 'react';
import { Link } from 'react-router-dom';
import SpecialFilters from '../SpecialFilters/SpecialFilters';

function SpecialList(props) {
	
		return <SpecialFilters specialsList={props.specialsList}/>

}

export default SpecialList;
