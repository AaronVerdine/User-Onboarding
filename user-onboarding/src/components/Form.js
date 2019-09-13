import React, { useState } from "react";

const OnboardForm = props => {
  console.log(props);

  const formFields = {
    name: "",
    email: "",
    password: "",
    TOS: false
  };

  const [newUser, setNewUser] = useState(formFields);

  const handleChange = event => {
        setNewUser({...newUser, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setUserForm([...props.userForm, newUser])

    resetForm(event);
  };

  const resetForm = event => {
    event.preventDefault();

    setNewUser(formFields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={newUser.name}
        />
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={newUser.email}
        />
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="Enter Passwrod"
          onChange={handleChange}
          value={newUser.password}
        />
        <br></br>
        <input
          type="radio"
          name="Terms of Service"
          onChange={handleChange}
          value={newUser.TOS}
        /> Terms of Service
        <br></br>

        <button type="submit">
          Submit Here!
        </button>
      </form>
    </div>
  );
};

export default OnboardForm;
