import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import NavB from './components/NavB'
import Publications from './components/Publications'
import Login from './components/Login';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div>
      <NavB/>
      <Switch>
      <Route path='/login' component={Login} />
      <Route path="/*" component={Publications}/>
      {/* <Redirect from="/*" to ="/home"/>     */}
      </Switch> 
    </div>
  </BrowserRouter>
  
  );
}

export default App;
