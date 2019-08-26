import React from "react";
import LoginForm from './components/LoginForm'
import "./App.css";
import SignUpForm from  "./components/SignUpForm";

function App() {

  return (
  <div className="App">
    <header>
      <h1>APP</h1>
      <SignUpForm/>
      <LoginForm/>

    </header>
  </div>
  );
}

export default App;