import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  const specialQueriesInitial = {
    category : null,
    daily_special : null,
    special_day : null,
    limited_time : null,
    start_date : null,
    end_date : null
  }
  const restaurantQueriesInitial = {
    cuisine : null,
    dining_options : null,
    city : null,
  }

  const [specialQueries, setSpecialQueries] = useState(specialQueriesInitial);
  const [restaurantQueries, setRestaurantQueries] = useState(restaurantQueriesInitial);
  
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
								specialQueriesInitial={specialQueriesInitial}
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
								restaurantQueriesInitial={restaurantQueriesInitial}
							/>
						);
					}}
				/>
			</Switch>
		</div>
	);
}

export default App;
