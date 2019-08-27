import React from "react";
import LoginForm from './components/LoginForm.js'
import {Route} from 'react-router-dom';
import "./App.scss";
import SignUpForm from  "./components/SignUpForm.js";
import Dashboard from './components/Dashboard.js';
import ErrorPage from './ErrorPages/ErrorPage.js';
import ErrorPage2 from './ErrorPages/ErrorPage2.js';
import NavBar from './components/NavBar';
// import ExerciseList from "./components/ExerciseList.js";
// import WorkoutList from './components/WorkoutList.js'

function App() {

  return (
  <div className="App">
    <header>
      {/* <h1>APP</h1> */}
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
      <Route
      exact path="/ErrorPage"
      component={ErrorPage}
      />
      <Route 
      exact path="/ErrorPage2"
      component={ErrorPage2}
      />
      {/* <Route 
      exact path="/ExerciseList"
      component={ExerciseList}
      /> */}
      {/* <Route 
      exact path="/MyWorkouts"
      component={WorkoutList}/> */}
    </header>

    <NavBar />
  </div>
  );
}

export default App;