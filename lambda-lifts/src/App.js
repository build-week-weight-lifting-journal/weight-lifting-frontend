import React from "react";
import LoginForm from "./components/LoginForm.js";
import { Route } from "react-router-dom";
import "./App.scss";
import SignUpForm from "./components/SignUpForm.js";
import Dashboard from "./components/Dashboard.js";
import ErrorPage from "./ErrorPages/ErrorPage.js";
import ErrorPage2 from "./ErrorPages/ErrorPage2.js";
import NameWorkout from "./components/NameWorkout";
import WorkoutList from "./components/WorkoutList.js";
import ExerciseList from "./components/ExerciseList.js";
import PrivateRoute from "./utils/PrivateRoute.js";
import NavBar from "./components/NavBar.js";
import RepSets from "./components/RepSets.js";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginForm} />
      <PrivateRoute path="/Dashboard" component={Dashboard} />
      <Route exact path="/SignUpForm" component={SignUpForm} />
      <Route exact path="/ErrorPage" component={ErrorPage} />
      <Route exact path="/ErrorPage2" component={ErrorPage2} />
      <Route exact path="/CreateWorkout" component={NameWorkout} />
      <PrivateRoute exact path="/ExerciseList" component={ExerciseList} />
      <PrivateRoute path="/WorkoutList" component={WorkoutList} />
      <PrivateRoute path="/RepSets" component={RepSets} />
      <PrivateRoute path="/NameWorkout" component={NameWorkout} />
      <PrivateRoute path="/Dashboard" component={NavBar} />
      <PrivateRoute path="/WorkoutList" component={NavBar} />
    </div>
  );
}

export default App;
