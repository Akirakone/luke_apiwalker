//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Link } from "react-router-dom";
import Findone from './components/Findone';
import Person from './Views/Person';
import Planet from './Views/Planet';



function App() {
  return (
    <div className="App">
      <h1>Welcome to the StarWars Search Engine!</h1>
      <BrowserRouter>
        <Findone />
        <Switch>
          <Route exact path="/people/:id">
            <Person/>
          </Route>
          <Route exact path="/planets/:id">
            <Planet/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
