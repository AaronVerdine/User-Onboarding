import React, { useState } from 'react';
import './App.css';

import OnboardForm from './components/Form';

function App() {

  const [userForm, setUserForm] = useState([
    {
      name: "Aaron Verdine",
      email: "a_verdine118@yahoo.com",
      password: "",
      TOS: false
    }
  ]);


  return (
    <div className="App">
    <h1> Team Onboarding Form</h1>
      <OnboardForm />

      {userForm.map((userForm, index) => (
        <div className="user-form" key={index}>
        <h2>{userForm.name}</h2>
        <h3>{userForm.email}</h3>
        <h4>{userForm.password}</h4>
        <h4>{userForm.TOS}</h4>

        </div>
      ))}
    </div>
  );
}

export default App;
