import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import * as Yup from "yup";
import { useState } from "react";
import ProfessionalDashboard from "../professionalDashBoard/App";
import axios from "axios";

const Signup = () => {
  const paperStyle = { padding: 20, width: 400, margin: "0 auto" };
  const headerStyle = { margin: 0, width: 300 };
  const avatarStyle = { backgroundColor: "blue" };
  const marginTop = { marginTop: 5 };

  const [data, setData] = useState("");
  const [response, setResponse] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    occupation: "",
    location: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, "It's too short").required("Required"),
    profession: Yup.string().min(3, "It's too short").required("Required"),
    location: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    phoneNumber: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 11 digits")
      .max(11, "Must be exactly 11 digits"),
    password: Yup.string()
      .min(6, "Password minimum length should be 6")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
  });

  const onSubmit = async (value, props) => {

    const { values } = value

    console.log(values);

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);

    const response = await axios
      .post("http://localhost:8080/loginprofessional", {
        values,
      })
      .then((response) => response.data);

    setResponse(true);
    setData(response);
  };

  const loginPage = () => {
    return (
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create your account
            </Typography>
            <Divider />
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Name"
                  type="text"
                  variant="standard"
                  placeholder="Enter your first name"
                  helperText={<ErrorMessage name="firstName" />}
                  gutterBottom
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="occupation"
                  label="Occupation"
                  type="text"
                  variant="standard"
                  placeholder="Enter your Occupation"
                  helperText={<ErrorMessage name="occupation" />}
                  gutterBottom
                />

                <Field
                  as={TextField}
                  fullWidth
                  name="location"
                  label="Location"
                  type="text"
                  variant="standard"
                  placeholder="Enter your location"
                  helperText={<ErrorMessage name="location" />}
                  gutterBottom
                />

                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  variant="standard"
                  placeholder="Enter your Email"
                  helperText={<ErrorMessage name="email" />}
                  gutterBottom
                />

                <Field
                  as={TextField}
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  variant="standard"
                  placeholder="Enter Your Phone Number"
                  helperText={<ErrorMessage name="phoneNumber" />}
                  gutterBottom
                />

                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  variant="standard"
                  placeholder="Enter your Password"
                  helperText={<ErrorMessage name="password" />}
                  gutterBottom
                />

                <Field
                  as={TextField}
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  variant="standard"
                  placeholder="Confirm your password"
                  helperText={<ErrorMessage name="confirmPassword" />}
                  gutterBottom
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={marginTop}
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Loading" : "Sign Up"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    );
  };

  return <div>
    {response ? <ProfessionalDashboard/> : loginPage()}
    </div>;
};

export default Signup;
