import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Component/Details/Details';
import NotFound from './Component/NotFound/NotFound';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/teams/:idLeague'>
            <Details />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
