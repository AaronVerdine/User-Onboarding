import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";

const OnboardForm = ({ errors, touched, status }) => {
  // console.log(status);
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (status) {
      setUsers([...users, status])

    }
  }, [status])

  return (
    <div>
      <Form>
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field type="text" name="name" placeholder="Name" />
        <br></br>

        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="text" name="email" placeholder="Email" />
        <br></br>

        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <Field type="password" name="password" placeholder="Enter Password" />
        <br></br>

        {touched.TOS && errors.TOS && <p className="error">{errors.TOS}</p>}
        <label>
          <Field type="checkbox" name="TOS" />
          <span>Terms of Service</span>
        </label>
        <br></br>
        <button type="submit">Sign Up Here!</button>

      
        {users.map(user => (
          <>
          <div>name: {user.name}</div>
          <div>Email: {user.email}</div>
          </>
        ))}
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      name: values.name || "",
      email: values.email || "",
      password: values.password || "",
      TOS: values.TOS || false
    };
  },
  validationSchema: yup.object().shape({
    name: yup.string().required("Please tell us your name"),
    email: yup
      .string()
      .required("Please provide a valid email address")
      .email(),
    password: yup.string().required("Please enter the correct password"),
    TOS: yup
      .boolean()
      .oneOf([true], "Please accept the Terms of Service to continue   ")
  }),
  handleSubmit: (values, { setStatus }) => {
    axios.post("https://reqres.in/api/users", values)
      .then((res) => {
        setStatus(res.data)
      })
      .catch((err )=> {
        console.log('Error:', err);
      });
  }
})(OnboardForm);
