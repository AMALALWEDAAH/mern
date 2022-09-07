import './App.css';
import { Router } from '@reach/router';
import People from './components/People';
import Planet from './components/Planet';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Main />
      <Router>
          <People path="/people/:id" />
      </Router>
      <Router>
          <Planet path='/planet/:id' />
      </Router>
    </div>
  );
}

export default App;