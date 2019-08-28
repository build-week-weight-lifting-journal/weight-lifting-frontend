import React from "react";
import LoginForm from "./components/LoginForm.js";
import { Route } from "react-router-dom";
import "./App.scss";
import SignUpForm from  "./components/SignUpForm.js";
import Dashboard from './components/Dashboard.js';
import ErrorPage from './ErrorPages/ErrorPage.js';
import ErrorPage2 from './ErrorPages/ErrorPage2.js';
import NavBar from './components/NavBar';
import RepWeight from './components/RepSets';
import SignUpForm from "./components/SignUpForm.js";
import NavBar from "./components/NavBar";
// import NameWorkout from "./components/NameWorkout";
import WorkoutList from "./components/WorkoutList";
// import ExerciseList from "./components/ExerciseList.js";
import PrivateRoute from './utils/PrivateRoute';

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
      path ="/Dashboard"
      component={Dashboard}
      />
      <Route
      exact path="/SignUpForm"
      component={SignUpForm}
      />
      
      <Route
      exact path="/ErrorPage"
      component={ErrorPage}
      />
      <Route 
      exact path="/ErrorPage2"
      component={ErrorPage2}
      />
      <Route exact path="/RepWeight"
      component={RepWeight}
      />  
      </header>
    </div>
  );
}

export default App;
