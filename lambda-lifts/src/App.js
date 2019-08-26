import React from "react";
import LoginForm from './components/LoginForm.js'
import {Route} from 'react-router-dom';
import "./App.css";
import SignUpForm from  "./components/SignUpForm.js";
import Dashboard from './components/Dashboard.js';

function App() {

  return (
  <div className="App">
    <header>
      <h1>APP</h1>
      <Route 
      exact path="/"
      component={LoginForm}
      />
      <Route
      exact path="/SignUpForm"
      component={SignUpForm}
      />
      <Route
      path="/Dashboard"
      component={Dashboard}
      />

    </header>
  </div>
  );
}

export default App;