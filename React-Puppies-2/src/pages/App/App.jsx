import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import * as puppyAPI from "../../utilities/puppies-api";
import PuppyListPage from "../PuppyListPage/PuppyListPage";
import AddPuppyPage from "../AddPuppyPage/AddPuppyPage";
import PuppyDetailPage from "../PuppyDetailPage/PuppyDetailPage";
import EditPuppyPage from '../EditPuppyPage/EditPuppyPage'

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
    history.push("/");
  }, [puppies, history]);

  async function handleAddPuppy(newPuppyData) {
    const newPuppy = await puppyAPI.create(newPuppyData);
    setPuppies([...puppies, newPuppy]);
  }

//   code the update puppy handler function to invoke the fetch call and update state
  async function handleUpdatePuppy(updatedPuppyData) {
	//   invoke the fetch call from api-services
    const updatedPuppy = await puppyAPI.update(updatedPuppyData);
    const newPuppiesArray = puppies.map((p) => 
		p._id === updatedPuppy._id ? updatedPuppy : p
    ); 
	// set the new state using the result from the fetch call
    setPuppies(newPuppiesArray);
  }

  async function handleDeletePuppy(id) {
	  await puppyAPI.deletePup(id);
	  setPuppies(puppies.filter(p => p._id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
        React Puppies CRUD
        <nav>
          <NavLink exact to="/">
            PUPPIES LIST
          </NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink exact to="/add">
            ADD PUPPY
          </NavLink>
        </nav>
      </header>
      <main>
        <Route exact path="/">
          <PuppyListPage puppies={puppies} handleDeletePuppy={handleDeletePuppy}/>
        </Route>
        <Route exact path="/add">
          <AddPuppyPage handleAddPuppy={handleAddPuppy} />
        </Route>
        <Route exact path="/details">
          <PuppyDetailPage />
        </Route>
		<Route path='/edit'>
			<EditPuppyPage handleUpdatePuppy={handleUpdatePuppy}/>
		</Route>
      </main>
    </div>
  );
}

export default App;
