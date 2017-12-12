import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';


class App extends Component {
  render() {
    return (
       <div className="App">
       <NavBar />
        <Switch>  
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path='/me' component={UserDashboard}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
