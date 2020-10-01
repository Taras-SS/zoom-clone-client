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
import { ISignIn } from "../../api/auth";
import { signIn } from "../../store/actions/auth";
import { connect } from "react-redux";
import { styles } from "../../components/SignInSignUp/css/Styles";
import "../../components/SignInSignUp/css/Main.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("PLease enter your email address")
    .email("Please enter a valid email address"),
  password: Yup.string()
    .required("Please enter your password")
    .min(6, "Minimal length - 6"),
});

const SignIn = ({ onSignIn, history }: any) => {
  const [classes] = useState(styles());
  const [isActiveEmail, setIsActiveEmail] = useState<boolean>(false);
  const [isActivePassword, setIsActivePassword] = useState<boolean>(false);
  useEffect(() => {}, []);

  const handleSubmit = async (credentials: ISignIn, formikActions: any) => {
    const response = await onSignIn(credentials);
    if (!response) history.push("/");
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
              Sign In
            </Typography>
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
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
      <Devider />
      <FacebookGoogleLogin type="Sign In" />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onSignIn: (credentials: ISignIn) => dispatch(signIn(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
