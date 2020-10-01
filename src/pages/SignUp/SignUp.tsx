import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Typography } from "@material-ui/core";
import * as Yup from "yup";
import {
  StandartInput,
  PasswordInput,
} from "../../components/SignInSignUp/Inputs";
import Devider from "../../components/SignInSignUp/Devider";
import FacebookGoogleLogin from "../../components/SignInSignUp/FacebookGoogleLogin";
import { ISignUp } from "../../api/auth";
import { signUp } from "../../store/actions/auth";
import { connect } from "react-redux";
import { styles } from "../../components/SignInSignUp/css/Styles";
import "../../components/SignInSignUp/css/Main.css";

const initialValues = {
  name: "",
  surName: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .required("PLease enter your email address")
    .email("Please enter a valid email address"),
  password: Yup.string()
    .required("Please enter your password")
    .min(6, "Minimal length - 6"),
});

const SignUp = ({ onSignUp, history }: any) => {
  const [classes] = useState(styles());
  const [isActiveName, setIsActiveName] = useState<boolean>(false);
  const [isActiveSurName, setIsActiveSurName] = useState<boolean>(false);
  const [isActiveEmail, setIsActiveEmail] = useState<boolean>(false);
  const [isActivePassword, setIsActivePassword] = useState<boolean>(false);
  useEffect(() => {}, []);

  const handleSubmit = async (credentials: ISignUp, formikActions: any) => {
    const response = await onSignUp(credentials);
    if (!response) history.push("/signin");
    if (response && response.err) formikActions.setErrors(response.err);
  };

  return (
    <div className={classes.formikWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <Form className={classes.formSignIn}>
            <Typography align="center" variant="h5" className={classes.title}>
              Sign Up
            </Typography>
            <div id="nameSurnameWrapper">
              <div>
                <label htmlFor="name" className={classes.label}>
                  Name
                </label>
                <Field
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  component={StandartInput}
                  className={
                    errors.name && touched.name
                      ? classes.errorInput
                      : isActiveName
                      ? classes.activeInput
                      : classes.disActiveInput
                  }
                  onFocus={() => setIsActiveName(true)}
                  onBlur={() => setIsActiveName(false)}
                />
                <ErrorMessage
                  component="div"
                  name="name"
                  className={classes.errorMsg}
                />
              </div>
              <div>
                <label htmlFor="surName" className={classes.label}>
                  Last name
                </label>
                <Field
                  name="surName"
                  id="surName"
                  placeholder="Last name"
                  onChange={handleChange}
                  component={StandartInput}
                  className={
                    errors.surName && touched.surName
                      ? classes.errorInput
                      : isActiveSurName
                      ? classes.activeInput
                      : classes.disActiveInput
                  }
                  onFocus={() => setIsActiveSurName(true)}
                  onBlur={() => setIsActiveSurName(false)}
                />
                <ErrorMessage
                  component="div"
                  name="surName"
                  className={classes.errorMsg}
                />
              </div>
            </div>
            <label className={classes.label}>Email Address</label>
            <Field
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              component={StandartInput}
              className={
                errors.email && touched.email
                  ? classes.errorInput
                  : isActiveEmail
                  ? classes.activeInput
                  : classes.disActiveInput
              }
              onFocus={() => setIsActiveEmail(true)}
              onBlur={() => setIsActiveEmail(false)}
            />
            <ErrorMessage
              component="div"
              name="email"
              className={classes.errorMsg}
            />
            <label className={classes.label}>Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              component={PasswordInput}
              className={
                errors.password && touched.password
                  ? classes.errorInput
                  : isActivePassword
                  ? classes.activeInput
                  : classes.disActiveInput
              }
              onFocus={() => setIsActivePassword(true)}
              onBlur={() => setIsActivePassword(false)}
            />
            <ErrorMessage
              component="div"
              name="password"
              className={classes.errorMsg}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.signInBtn}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Devider />
      <FacebookGoogleLogin type="Sign up" />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSignUp: (credential: ISignUp) => dispatch(signUp(credential)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
