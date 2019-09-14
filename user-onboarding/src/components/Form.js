import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const OnboardForm = ({ errors }) => {
  // console.log(props);
  return (
    <div>
      <Form>
        {errors.name && <p className="error">{errors.name}</p>}
        <Field type="text" name="name" placeholder="Name" />
        <br></br>

        {errors.email && <p className="error">{errors.email}</p>}
        <Field type="text" name="email" placeholder="Email" />
        <br></br>

        {errors.password && <p className="error">{errors.password}</p>}
        
        <Field type="password" name="password" placeholder="Enter Password" />
        <br></br>

        {errors.TOS && <p className="error">{errors.TOS}</p>}
        <label>
          <Field type="checkbox" name="TOS" />
          <span>Terms of Service</span>
        </label>
        <br></br>
        <button type="submit">Sign Up Here!</button>
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
    name: yup.string().required(),
    email: yup
      .string()
      .required()
      .email(),
    password: yup.string().required(),
    TOS: yup.boolean().oneOf([true])
  }),
  handleSubmit: values => {
    console.log(values);
  }
})(OnboardForm);
