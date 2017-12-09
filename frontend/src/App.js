import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
       <div className="App">
        <Switch>  
          <Route exact path="/" component={Home}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
