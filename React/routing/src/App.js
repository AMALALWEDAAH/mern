import './App.css';
import {BrowserRouter,Switch,Route,Link}from "react-router-dom"
import Home from './components/Home';
import Word from './components/Word';
import Color from './components/Color';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/:word/:tColor/:bColor">
          <Color/>
        </Route>
        <Route path="/:word">
          <Word/>
        </Route>
      </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
