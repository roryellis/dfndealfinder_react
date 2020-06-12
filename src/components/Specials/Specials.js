import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import SpecialsList from '../SpecialsList/SpecialsList';
import SpecialDetail from '../SpecialDetail/SpecialDetail';

function Specials(props) {
    const [specialsList, setSpecialsList] = useState([]);

    const getSpecials = () => {
        const url = `http://localhost:8000/specials`;
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setSpecialsList(response);
            })
            .catch(console.error);
    };

    useEffect(() => {
        getSpecials();
        //eslint-disable-next-line
    }, []);

    if (specialsList[0] === undefined) {
        return <Spinner animation='border' variant='danger' />;
    } else {
        console.log(specialsList);
        return (
            <section className='Specials-Container'>
                <Switch>
                    <Route
                        path='/specials' exact
                        render={() => {
                            return (
                                <SpecialsList specialQueries={props.specialQueries}
                                    setSpecialQueries={props.setSpecialQueries}
                                    specialQueriesInitial={props.specialQueriesInitial}
                                    specialsList={props.specialsList} />
                            );
                        }}
                    />
                    <Route
                        path='/specials/:id' 
                        component={SpecialDetail}
                    />
                </Switch>
            </section>
        );
    }
}

export default Specials;