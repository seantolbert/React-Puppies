import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, NavLink, useHistory } from 'react-router-dom';
import * as puppyAPI from '../../utilities/puppies-api';
import PuppyListPage from '../PuppyListPage/PuppyListPage';
import AddPuppyPage from '../AddPuppyPage/AddPuppyPage';
import PuppyDetailPage from '../PuppyDetailPage/PuppyDetailPage';

function App(props) {
	const [puppies, setPuppies] = useState([]);
	const history = useHistory();

	useEffect(() => {
		async function getPuppies() {
			// retrieve the puppies data
			const puppies = await puppyAPI.getAll();
			// set it to state
			setPuppies(puppies);
		}
		getPuppies();
	}, []);

	useEffect(() => {
		// This is listenting for each time puppies state is changed,
		// then will run our function below to reroute
		history.push('/');
	}, [puppies, history]);

	async function handleAddPuppy(newPuppyData) {
		const newPuppy = await puppyAPI.create(newPuppyData);
		setPuppies([...puppies, newPuppy]);
	}

	return (
		<div className='App'>
			<header className='App-header'>
				React Puppies CRUD
				<nav>
					<NavLink exact to='/'>
						PUPPIES LIST
					</NavLink>
					&nbsp;&nbsp;&nbsp;
					<NavLink exact to='/add'>
						ADD PUPPY
					</NavLink>
				</nav>
			</header>
			<main>
				<Route exact path='/'>
					<PuppyListPage puppies={puppies} />
				</Route>
				<Route exact path='/add'>
					<AddPuppyPage handleAddPuppy={handleAddPuppy} />
				</Route>
				<Route exact path='/details'>
					<PuppyDetailPage />
				</Route>
			</main>
		</div>
	);
}

export default App;
