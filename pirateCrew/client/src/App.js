import React from 'react';
import Main from './views/Main';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import View from './views/View';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
        <Route exact path={"/people"}>
          < View/>
        </Route>
        <Route exact path={"/people/new"}  >
          <Main />
        </Route>
        <Route exact path={"/people/:id"}>
          <Details/>
        </Route>
      </Switch>
    </BrowserRouter>

    </div>
  );  
}
export default App;

