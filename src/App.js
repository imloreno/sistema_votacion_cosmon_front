import React from 'react';
import Screens from './components/screens/Screens';
import './components/styles/app.css';
import { GlobalContext } from './components/context/GlobalContext';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
  <GlobalContext>
    <Router className="App">
      <Switch>

        <Route path='/' exact>
            <Screens target="home"/>
        </Route>

        <Route path='/eventos' exact>
            <Screens target="eventos" />
        </Route>

        <Route path='/candidatos' exact>
            <Screens target="candidatos" />
        </Route>

        <Route path='/usuario' exact>
          <Screens target="usuario" />
        </Route>

        <Route path='/login' exact>
          <Screens target="login" />
        </Route>

        <Route path='/*'>
          <Screens target="default" />
        </Route>

      </Switch>
    </Router>
  </GlobalContext>
  );
}

export default App;