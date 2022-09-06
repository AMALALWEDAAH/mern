import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Form from "./components/Form";
import RegAndLog from "./components/RegAndLog";
import MyContext from './context/context';
import React, { useState } from 'react';
function App() {
  const [name, setName] = useState("");
  return (
      <>
          <BrowserRouter>
                  <MyContext.Provider value={{ name, setName }}>
              <Switch>
                  <Route exact path="/">
                      <RegAndLog />
                  </Route>
                  <Route exact path="/dashboard">
                      <Main />
                  </Route>
                  <Route exact path="/create">
                      <Form />
                  </Route>
                  <Route exact path="/:id">
                      <Detail />
                  </Route>
                  {/* <Route path="/:id/edit">
                      
                  </Route> */}
              </Switch>
                  </MyContext.Provider>
          </BrowserRouter>
      </>
  );
}

export default App;

