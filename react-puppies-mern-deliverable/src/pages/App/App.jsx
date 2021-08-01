import { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import NewPuppyPage from '../NewPuppyPage/NewPuppyPage'
import PuppyPage from '../PuppyPage/PuppyPage'
import './App.css';

export default function App() {
  const [user, setUser] = useState({})
  return (
    <main className="App">
     {user ? (
				<>
          <NavBar />
					<Switch>
						<Route path='/puppies/new'>
							<NewPuppyPage  />
						</Route>
						<Route path='/puppies'>
							<PuppyPage />
						</Route>
						<Redirect to='/puppies' />
					</Switch>
				</>
			) : (
				<AuthPage />
			)}
    </main>
  );
}

