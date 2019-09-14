import React from "react";
import { withFormik, Form, Field } from "formik"; 

const OnboardForm = props => {
  console.log(props);

  return (
    <div>
      <Form>
        <Field
          type="text"
          name="name"
          placeholder="Name"
        />
        <br></br>
        <Field
          type="text"
          name="email"
          placeholder="Email"
        />
        <br></br>
        <Field
          type="password"
          name="password"
          placeholder="Enter Passwrod"
        />
        <br></br>
        <Field
          type="radio"
          name="Terms of Service"
        />
        Terms of Service
        <br></br>
        <button type="submit">Submit Here!</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      name: values.name || "",
      email: values.email || "",
      password: values.password || "",
      tos: values.tos || false
    }
  },
  handleSubmit: (values) => {
    console.log(values)
  }
})(OnboardForm)
