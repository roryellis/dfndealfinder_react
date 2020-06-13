import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Specials from './components/Specials/Specials';
import Restaurants from './components/Restaurants/Restaurants';
import AppHeader from './components/AppHeader/AppHeader';
import './App.css';

function App() {
	
	const [specialQueries, setSpecialQueries] = useState({});
	const [restaurantQueries, setRestaurantQueries] = useState({});

	function resetSpecialQueries() {
		setSpecialQueries({});
	}

	function resetRestaurantQueries() {
		setRestaurantQueries({});
	}

	return (
		<div className='App'>
			<AppHeader className='App-header' />
			<Switch>
				<Route exact path='/'>
					<Redirect to='/specials' />
				</Route>
				<Route
					path='/specials'
					render={() => {
						return (
							<Specials
								specialQueries={specialQueries}
								setSpecialQueries={setSpecialQueries}
								resetSpecialQueries={resetSpecialQueries}
							/>
						);
					}}
				/>
				<Route
					path='/restaurants'
					render={() => {
						return (
							<Restaurants
								restaurantQueries={restaurantQueries}
								setRestaurantQueries={setRestaurantQueries}
								resetRestaurantQueries={resetRestaurantQueries}
							/>
						);
					}}
				/>
			</Switch>
		</div>
	);
}

export default App;
