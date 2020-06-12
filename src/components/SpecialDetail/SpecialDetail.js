import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function SpecialDetail() {
    let { id } = useParams();
    const [selectedSpecial, setSelectedSpecial] = useState({});
	
    const getSpecial = () => {
			const url = `http://localhost:8000/specials/${id}`;
			fetch(url)
				.then((response) => response.json())
				.then((response) => {
					setSelectedSpecial(response);
				})
				.catch(console.error);
        };

        useEffect(() => {
			getSpecial();
			//eslint-disable-next-line
        }, [])
    if (selectedSpecial.title === undefined) {
        return (
            <div className='special-detail-error'>Sorry, no special information available</div>
        )
    } else {
        return (
            <h1>This is my special detail.</h1>
        )
    }
}
export default SpecialDetail;