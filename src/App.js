import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Logo from "./components/ui/Logo/Logo"
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Orders from './containers/Orders/Orders'

import './App.css';




class App extends Component  {

  render () {

    let routes = (
      <Switch>
          <Route path="/orders" component = {Orders} />
          <Route path="/"  exact component = {BurgerBuilder} />
          <Redirect to="/" />
      </Switch>
    );

    return (
      <div className="App">
        <Navbar bg="light" expand="sm">
          <Logo />
          <Navbar.Brand href="#home">Burger Builder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Orders">Orders</Nav.Link>
              
            </Nav>           
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Bijoy Thomas</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <main>
          {routes}
        </main>
      </div>
    );
  }

}

export default withRouter(App);
