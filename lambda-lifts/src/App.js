import React from "react";
import LoginForm from "./components/LoginForm.js";
import { Route } from "react-router-dom";
import "./App.scss";
import SignUpForm from  "./components/SignUpForm.js";
import Dashboard from './components/Dashboard.js';
import ErrorPage from './ErrorPages/ErrorPage.js';
import ErrorPage2 from './ErrorPages/ErrorPage2.js';
import RepWeight from './components/RepSets';
// import NameWorkout from "./components/NameWorkout";
import WorkoutList from "./components/WorkoutList";
import ExerciseList from "./components/ExerciseList.js";
import PrivateRoute from './utils/PrivateRoute';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header>
        {/* <h1>APP</h1> */}
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute path="/Dashboard" component={Dashboard} />
        <Route exact path="/SignUpForm" component={SignUpForm} />

        <Route exact path="/ErrorPage" component={ErrorPage} />
        <Route exact path="/ErrorPage2" component={ErrorPage2} />
        <PrivateRoute 
      exact path="/ExerciseList"
      component={ExerciseList}
      />
      <PrivateRoute  
      path="/Workoutlist"
      component={WorkoutList}
      />
      </header>

      <PrivateRoute 
      path="/"
      component={NavBar} 
      />
    </div>
  );
}

export default App;
