import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import InputStandart from './components/atoms/InputStandart';
import Form1 from './components/molecules/RegisterForms/User/Form1';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Painel from './screens/PainelUser';
import './styles/stylePrincipal.css';

const App = () => {
  return (
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
            <Route exact path= "/Painel" >
              <Painel />
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
