import React from 'react';
import Home from "./containers/home"
import CalanderPage from "./containers/calanderPage"
import Admin from "./components/Admin/admin"
import {Link,Switch,Route} from 'react-router-dom'


import './App.css';
import Authentication from './components/authentication/SignUp';
function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Calander">
            <CalanderPage/>
          </Route>
          <Route path="/Admin">
            <Admin/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
